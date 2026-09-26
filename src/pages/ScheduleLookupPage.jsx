import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lookupBooking } from '../api/bookings';
import { ApiError } from '../api/client';
import { getContent } from '../content';
import { formatEventWhen } from '../utils/formatEvent';
import ScheduleFrame from './ScheduleFrame';

const fieldClass =
  'mt-2 w-full rounded-xl border border-lasa-200 bg-white px-4 py-3 text-lasa-700 outline-none ring-lasa-600/20 focus:ring-4';

export default function ScheduleLookupPage({ lang }) {
  const content = getContent(lang);
  const page = content.schedulePage;
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setBusy(true);
    setError('');
    setBooking(null);
    try {
      const data = await lookupBooking(confirmationCode.trim(), email.trim());
      setBooking(data);
    } catch (err) {
      setError(err instanceof ApiError && err.status === 404 ? page.lookupMissing : err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ScheduleFrame content={content} title={page.lookupTitle}>
      <p className="reading-copy max-w-3xl text-lg text-lasa-600">{page.lookupIntro}</p>
      <form className="narrative-panel mt-8 max-w-xl space-y-5 rounded-3xl p-6 sm:p-8" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.emailLabel}</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">{page.codeLookupLabel}</span>
          <input
            required
            minLength={8}
            value={confirmationCode}
            onChange={(event) => setConfirmationCode(event.target.value.toUpperCase())}
            className={fieldClass}
          />
        </label>
        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600 disabled:opacity-60"
        >
          {busy ? page.looking : page.findBooking}
        </button>
      </form>

      {booking ? (
        <div className="narrative-panel mt-8 max-w-xl rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-lasa-500">{page.confirmationLabel}</p>
          <p className="mt-1 font-mono text-xl text-lasa-700">{booking.confirmationCode}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-lasa-500">{page.statusLabel}</p>
          <p className="mt-1 text-lasa-700">{booking.status}</p>
          {booking.name ? (
            <>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-lasa-500">{page.patientLabel}</p>
              <p className="mt-1 text-lasa-700">{booking.name}</p>
            </>
          ) : null}
          {booking.event ? (
            <>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-lasa-500">{page.eventLabel}</p>
              <p className="mt-1 text-lasa-700">{booking.event.title}</p>
              <p className="mt-1 text-lasa-600">
                {formatEventWhen(booking.event.startsAt, booking.event.endsAt, lang)}
              </p>
            </>
          ) : null}
        </div>
      ) : null}

      <Link
        to={content.paths.schedule}
        className="mt-10 inline-flex items-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
      >
        {page.backToList}
      </Link>
    </ScheduleFrame>
  );
}
