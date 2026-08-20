import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import { getContent } from '../content';
import ScrollReveal from '../components/ScrollReveal';
import { revealDelay } from '../constants/motion';

export default function Splash() {
  const en = getContent('en');
  const es = getContent('es');
  const splash = en.splash;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(134,160,125,0.28),transparent_42%),radial-gradient(circle_at_88%_8%,rgba(79,122,106,0.22),transparent_46%),linear-gradient(180deg,rgba(238,242,234,0.95),rgba(247,248,244,0.4)_42%,rgba(247,248,244,1))]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20">
        <ScrollReveal className="text-center">
          <div className="mx-auto flex flex-col items-center">
            <img
              src="/finallogo.png"
              alt="LASA Foundation"
              className="h-28 w-auto sm:h-36"
            />
            <img
              src="/write.jpeg"
              alt="Love All, Serve All"
              className="mt-4 h-10 w-auto object-contain sm:h-12"
            />
          </div>

          <h1 className="reading-title mt-8 font-display text-4xl text-lasa-700 sm:text-5xl">
            {splash.title}
          </h1>
          <p className="reading-copy mx-auto mt-5 text-base text-lasa-600 sm:text-lg">
            {splash.mission}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={revealDelay(1)} className="mt-10 rounded-3xl narrative-panel p-6 sm:p-8">
          <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
            {splash.hoursTitle}
          </p>
          <dl className="mt-4 space-y-3 text-sm sm:text-base">
            {splash.hours.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <dt className="font-semibold text-lasa-700">{row.label}</dt>
                <dd className="text-lasa-600">{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-lasa-600">
            <span className="font-semibold text-lasa-700">{splash.scheduleLabel}: </span>
            <Link to="/en/schedule" className="underline decoration-lasa-300 underline-offset-4 hover:text-lasa-700">
              {splash.scheduleLink}
            </Link>
            <span className="mx-2 text-lasa-300">|</span>
            <Link to="/es/horario" className="underline decoration-lasa-300 underline-offset-4 hover:text-lasa-700">
              {splash.scheduleAltLink}
            </Link>
          </p>

          <p className="mt-4 text-sm text-lasa-600 sm:text-base">
            <span className="font-semibold text-lasa-700">{splash.phoneLabel}: </span>
            <a href={CONTACT.phoneHref} className="hover:text-lasa-700">
              {CONTACT.phoneLabel}
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={revealDelay(2)} className="mt-6 space-y-6 text-sm sm:text-base">
          <div>
            <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
              {splash.drivingTitle}
            </p>
            <p className="mt-2 text-lasa-700">
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </p>
          </div>

          <div>
            <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
              {splash.mailingTitle}
            </p>
            <p className="mt-2 text-lasa-700">
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </p>
          </div>

          <div>
            <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
              {splash.emailTitle}
            </p>
            <ul className="mt-2 space-y-1.5 text-lasa-600">
              {splash.emails.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-lasa-700">{item.label}: </span>
                  <a href={`mailto:${item.value}`} className="hover:text-lasa-700">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={revealDelay(3)} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/en"
            className="inline-flex w-full items-center justify-center rounded-full bg-lasa-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-lasa-700 sm:w-auto"
          >
            {en.splash.enterEnglish}
          </Link>
          <Link
            to="/es"
            className="inline-flex w-full items-center justify-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-lasa-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-lasa-100 sm:w-auto"
          >
            {es.splash.enterSpanish}
          </Link>
        </ScrollReveal>
      </main>
    </div>
  );
}
