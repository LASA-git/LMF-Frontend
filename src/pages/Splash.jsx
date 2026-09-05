import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import { getContent } from '../content';
import LogoWordmark from '../components/LogoWordmark';
import MedicalMark from '../components/MedicalMark';

function InfoBox({ title, children }) {
  return (
    <div className="rounded-2xl border border-lasa-200 bg-white px-5 py-5 text-center shadow-[0_12px_28px_-22px_rgba(30,58,52,0.45)] sm:px-8 sm:py-6">
      {title ? (
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-lasa-700">{title}</p>
      ) : null}
      <div className={title ? 'mt-3' : ''}>{children}</div>
    </div>
  );
}

export default function Splash() {
  const en = getContent('en');
  const es = getContent('es');
  const splash = en.splash;

  return (
    <div className="min-h-screen max-w-[100%] overflow-x-clip bg-[linear-gradient(180deg,#EEF2EA_0%,#F7F8F4_38%,#F7F8F4_100%)]">
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto flex w-full max-w-[24rem] flex-col items-center rounded-2xl border border-lasa-200 bg-white p-6 shadow-[0_24px_48px_-20px_rgba(30,58,52,0.35)] sm:max-w-[28rem] sm:p-8">
          <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
            <img
              src="/finallogo.png"
              alt=""
              aria-hidden="true"
              className="h-24 w-auto sm:h-32"
            />
            <span className="h-24 w-px self-center bg-lasa-200 sm:h-32" aria-hidden="true" />
            <MedicalMark className="h-24 sm:h-32" title="" />
          </div>
          <LogoWordmark className="mt-5 w-full text-center" />
        </div>

        <h1 className="mt-10 text-center font-display text-4xl text-lasa-700 sm:text-5xl">
          {splash.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-lasa-600 sm:text-xl">
          {splash.mission}
        </p>

        <div className="mt-10 space-y-4">
          <InfoBox title={splash.hoursTitle}>
            <div className="space-y-1.5 text-base text-lasa-700 sm:text-lg">
              {splash.hours.map((row) => (
                <p key={row.label}>
                  <span className="font-bold">{row.label}:</span> {row.value}
                </p>
              ))}
            </div>

            <p className="mt-5 text-base text-lasa-700 sm:text-lg">
              <span className="font-bold">{splash.scheduleLabel}:</span>{' '}
              <Link
                to="/en/schedule"
                className="italic text-lasa-600 underline underline-offset-2 hover:text-lasa-500"
              >
                {splash.scheduleLink}
              </Link>
              <span className="mx-1.5 text-lasa-300">|</span>
              <Link
                to="/es/horario"
                className="italic text-lasa-600 underline underline-offset-2 hover:text-lasa-500"
              >
                {splash.scheduleAltLink}
              </Link>
            </p>

            <p className="mt-3 text-base text-lasa-700 sm:text-lg">
              <span className="font-bold">{splash.phoneLabel}:</span>{' '}
              <a href={CONTACT.phoneHref} className="hover:text-lasa-500">
                {CONTACT.phoneLabel}
              </a>
              {CONTACT.faxLabel ? (
                <>
                  <span className="mx-1.5 text-lasa-300">|</span>
                  <span className="font-bold">{splash.faxLabel}:</span> {CONTACT.faxLabel}
                </>
              ) : null}
            </p>
          </InfoBox>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoBox title={splash.drivingTitle}>
              <p className="text-base leading-relaxed text-lasa-700 sm:text-lg">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </p>
            </InfoBox>

            <InfoBox title={splash.mailingTitle}>
              <p className="text-base leading-relaxed text-lasa-700 sm:text-lg">
                {CONTACT.mailingLine1 || CONTACT.addressLine1}
                <br />
                {CONTACT.mailingLine2 || CONTACT.addressLine2}
              </p>
            </InfoBox>
          </div>

          <InfoBox title={splash.emailTitle}>
            <ul className="space-y-1.5 text-base text-lasa-700 sm:text-lg">
              {splash.emails.map((item) => (
                <li key={item.label}>
                  <span className="font-bold">{item.label}:</span>{' '}
                  <a
                    href={`mailto:${item.value}`}
                    className="underline underline-offset-2 hover:text-lasa-500"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </InfoBox>
        </div>

        <nav className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            to="/en"
            className="inline-flex items-center justify-center rounded-xl border-2 border-lasa-700 bg-white px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-lasa-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-lasa-700 hover:text-white"
          >
            {en.splash.enterEnglish}
          </Link>
          <Link
            to="/es"
            className="inline-flex items-center justify-center rounded-xl border-2 border-lasa-700 bg-white px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-lasa-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-lasa-700 hover:text-white"
          >
            {es.splash.enterSpanish}
          </Link>
        </nav>
      </main>
    </div>
  );
}
