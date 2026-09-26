import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../api/client';
import { resendOtp, startBooking, submitIntake, verifyOtp } from '../api/bookings';
import { scheduleLookupPath } from '../utils/langPaths';

const fieldClass =
  'mt-2 w-full rounded-xl border border-lasa-200 bg-white px-4 py-3 text-lasa-700 outline-none ring-lasa-600/20 focus:ring-4';

export default function BookingFlow({ event, page, lang }) {
  const [step, setStep] = useState(event.spotsRemaining > 0 ? 'email' : 'full');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [booking, setBooking] = useState(null);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function onStart(formEvent) {
    formEvent.preventDefault();
    setBusy(true);
    setError('');
    try {
      const data = await startBooking(event.id, email.trim());
      setBooking(data);
      setStep('otp');
    } catch (err) {
      setError(
        err instanceof ApiError && err.code === 'EVENT_FULL'
          ? page.full
          : err instanceof ApiError && err.code === 'ALREADY_BOOKED'
            ? page.alreadyBooked
            : err.message,
      );
    } finally {
      setBusy(false);
    }
  }

  async function onVerify(formEvent) {
    formEvent.preventDefault();
    setBusy(true);
    setError('');
    try {
      await verifyOtp(booking.bookingId, code.trim());
      setStep('intake');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function onResend() {
    setBusy(true);
    setError('');
    try {
      await resendOtp(booking.bookingId, email.trim());
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function onIntake(formEvent) {
    formEvent.preventDefault();
    setBusy(true);
    setError('');
    try {
      const data = await submitIntake(booking.bookingId, {
        name: name.trim(),
        phone: phone.trim(),
        consent: true,
      });
      setResult(data);
      setStep('done');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  const holdNote =
    booking?.holdExpiresAt &&
    page.holdNote.replace(
      '{time}',
      new Intl.DateTimeFormat(lang === 'es' ? 'es-US' : 'en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }).format(new Date(booking.holdExpiresAt)),
    );

  return (
    <div className="narrative-panel mt-8 rounded-3xl p-6 sm:p-8">
      <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.bookTitle}</h2>
      {holdNote && step !== 'done' ? <p className="mt-2 text-sm text-lasa-500">{holdNote}</p> : null}
      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      {step === 'full' ? <p className="mt-4 text-lasa-600">{page.full}</p> : null}

      {step === 'email' ? (
        <form className="mt-6 space-y-5" onSubmit={onStart}>
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.emailLabel}</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClass}
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600 disabled:opacity-60"
          >
            {busy ? page.sending : page.sendCode}
          </button>
        </form>
      ) : null}

      {step === 'otp' ? (
        <form className="mt-6 space-y-5" onSubmit={onVerify}>
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.otpLabel}</span>
            <input
              inputMode="numeric"
              pattern="\d{6}"
              required
              maxLength={6}
              value={code}
              onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
              className={fieldClass}
            />
          </label>
          <p className="text-sm text-lasa-600">{page.otpHelp}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={busy || code.length !== 6}
              className="rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600 disabled:opacity-60"
            >
              {busy ? page.verifying : page.verify}
            </button>
            <button
              type="button"
              onClick={onResend}
              disabled={busy}
              className="rounded-full border border-lasa-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-lasa-700 hover:bg-lasa-50 disabled:opacity-60"
            >
              {page.resend}
            </button>
          </div>
        </form>
      ) : null}

      {step === 'intake' ? (
        <form className="mt-6 space-y-5" onSubmit={onIntake}>
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.nameLabel}</span>
            <input
              required
              minLength={2}
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.phoneLabel}</span>
            <input
              required
              minLength={7}
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={fieldClass}
            />
          </label>
          <label className="flex items-start gap-3 text-sm text-lasa-600">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-1"
            />
            <span>{page.consentLabel}</span>
          </label>
          <button
            type="submit"
            disabled={busy || !consent}
            className="rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600 disabled:opacity-60"
          >
            {busy ? page.confirming : page.confirmSpot}
          </button>
        </form>
      ) : null}

      {step === 'done' && result ? (
        <div className="mt-6">
          <p className="text-lg font-semibold text-lasa-700">{page.successTitle}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-lasa-500">
            {page.confirmationLabel}
          </p>
          <p className="mt-1 font-mono text-2xl text-lasa-700">{result.confirmationCode}</p>
          <p className="mt-4 text-lasa-600">{result.emailSent ? page.emailSent : page.emailFailed}</p>
          <Link
            to={scheduleLookupPath(lang)}
            className="mt-6 inline-flex rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
          >
            {page.lookupCta}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
