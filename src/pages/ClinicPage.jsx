import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import { getContent } from '../content';
import { revealDelay } from '../constants/motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-28 sm:scroll-mt-32 ${className}`}>
      {children}
    </section>
  );
}

export default function ClinicPage({ lang }) {
  const content = getContent(lang);
  const { clinic, operate, services, location, contact, privacyTeaser } = content;

  return (
    <div className="min-h-screen">
      <Header content={content} showSections />

      <main className="pt-20 sm:pt-24">
        <Section id="clinic" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_14%_18%,rgba(134,160,125,0.28),transparent_44%),radial-gradient(circle_at_86%_10%,rgba(79,122,106,0.22),transparent_48%)]" />

          <div className="relative border-b border-lasa-200 bg-gradient-to-b from-lasa-100/95 to-lasa-50/90">
            <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
              <ScrollReveal>
                <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                  {clinic.heroKicker}
                </p>
                <h1 className="reading-title mt-3 font-display text-4xl text-lasa-700 sm:text-6xl">
                  {clinic.heroTitle}
                </h1>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-lasa-500">
                  {clinic.scrollHint}
                </p>
                <p className="reading-subtitle mt-8 max-w-3xl text-xl text-lasa-600 sm:text-2xl">
                  {clinic.motto}
                </p>
                <p className="reading-copy mt-6 text-base text-lasa-600 sm:text-lg">
                  {clinic.intro}
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-6xl space-y-5 px-4 py-12 sm:px-6 sm:py-16">
            {clinic.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={paragraph.slice(0, 24)} delay={revealDelay(index)}>
                <div className="narrative-panel rounded-3xl p-6 sm:p-8">
                  <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{paragraph}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="operate" className="border-t border-lasa-200 bg-white/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {operate.title}
              </p>
              <h2 className="reading-title mt-3 font-display text-3xl text-lasa-700 sm:text-5xl">
                {operate.title}
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-5">
              {operate.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 24)} delay={revealDelay(index)}>
                  <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="services" className="border-t border-lasa-200">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {services.title}
              </p>
              <h2 className="reading-title mt-3 font-display text-3xl text-lasa-700 sm:text-5xl">
                {services.title}
              </h2>
              <p className="reading-copy mt-6 text-[15px] text-lasa-600 sm:text-base">
                {services.intro}
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <ScrollReveal delay={revealDelay(1)}>
                <article className="narrative-card h-full rounded-3xl border border-lasa-200 bg-white p-6 shadow-[0_20px_40px_-32px_rgba(30,58,52,0.55)] sm:p-8">
                  <h3 className="reading-subtitle text-xl font-semibold text-lasa-700">
                    {services.treatTitle}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-lasa-600">
                    {services.treat.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={revealDelay(2)}>
                <article className="narrative-card h-full rounded-3xl border border-lasa-200 bg-white p-6 shadow-[0_20px_40px_-32px_rgba(30,58,52,0.55)] sm:p-8">
                  <h3 className="reading-subtitle text-xl font-semibold text-lasa-700">
                    {services.cannotTitle}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-lasa-600">
                    {services.cannot.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </div>

            <div className="mt-8 space-y-4">
              {services.eligibility.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 24)} delay={revealDelay(index + 3)}>
                  <div className="narrative-panel rounded-3xl p-6 sm:p-8">
                    <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{paragraph}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="location" className="border-t border-lasa-200 bg-white/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {location.title}
              </p>
              <h2 className="reading-title mt-3 font-display text-3xl text-lasa-700 sm:text-5xl">
                {location.title}
              </h2>
              <p className="mt-4 text-lg font-semibold uppercase tracking-wide text-lasa-600">
                {location.clinicName}
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <ScrollReveal delay={revealDelay(1)} className="narrative-panel rounded-3xl p-6 sm:p-8">
                <div className="space-y-5 text-sm sm:text-base">
                  <div>
                    <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
                      {location.drivingTitle}
                    </p>
                    <p className="mt-2 text-lasa-700">
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </p>
                  </div>
                  <div>
                    <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
                      {location.mailingTitle}
                    </p>
                    <p className="mt-2 text-lasa-700">
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-lasa-700">
                      {location.phoneLabel}:{' '}
                      <a href={CONTACT.phoneHref} className="font-medium text-lasa-600 hover:text-lasa-700">
                        {CONTACT.phoneLabel}
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={revealDelay(2)} className="overflow-hidden rounded-3xl border border-lasa-200 bg-white shadow-[0_20px_40px_-32px_rgba(30,58,52,0.55)]">
                <iframe
                  title={location.clinicName}
                  src={CONTACT.mapsEmbedUrl}
                  className="h-72 w-full sm:h-full min-h-[18rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={revealDelay(3)} className="mt-8">
              <h3 className="reading-subtitle text-2xl font-display text-lasa-700">
                {location.directionsTitle}
              </h3>
              <p className="reading-copy mt-4 text-[15px] text-lasa-600 sm:text-base">
                {location.directionsIntro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={CONTACT.mapsOpenUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-lasa-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-lasa-700"
                >
                  {location.openMaps}
                </a>
                <a
                  href={CONTACT.mapsAppleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-lasa-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
                >
                  {location.openAppleMaps}
                </a>
              </div>
              <p className="mt-6 text-sm text-lasa-600">
                <span className="font-semibold text-lasa-700">{location.parkingTitle}: </span>
                {location.parking}
              </p>
            </ScrollReveal>
          </div>
        </Section>

        <Section id="contact" className="border-t border-lasa-200">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {contact.title}
              </p>
              <h2 className="reading-title mt-3 font-display text-3xl text-lasa-700 sm:text-5xl">
                {contact.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={revealDelay(1)} className="mt-8 rounded-3xl border border-lasa-300 bg-gradient-to-r from-lasa-700 to-lasa-600 p-6 text-white shadow-lg sm:p-8">
              <p className="reading-copy text-[15px] text-lasa-50 sm:text-base">
                {contact.emergency}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={revealDelay(2)} className="mt-6">
              <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{contact.body}</p>
              <p className="mt-6 text-sm sm:text-base">
                <span className="font-semibold text-lasa-700">{content.splash.phoneLabel}: </span>
                <a href={CONTACT.phoneHref} className="text-lasa-600 hover:text-lasa-700">
                  {CONTACT.phoneLabel}
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={revealDelay(3)} className="mt-8 narrative-panel rounded-3xl p-6 sm:p-8">
              <p className="reading-kicker text-[11px] font-semibold uppercase text-lasa-500">
                {contact.emailTitle}
              </p>
              <ul className="mt-4 space-y-2 text-[15px] text-lasa-600">
                {contact.emails.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-lasa-700">{item.label}: </span>
                    <a href={`mailto:${item.value}`} className="hover:text-lasa-700">
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Section>

        <Section id="privacy-teaser" className="border-t border-lasa-200 bg-white/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {privacyTeaser.title}
              </p>
              <h2 className="reading-title mt-3 font-display text-3xl text-lasa-700 sm:text-5xl">
                {privacyTeaser.title}
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              {privacyTeaser.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 24)} delay={revealDelay(index)}>
                  <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={revealDelay(3)} className="mt-8">
              <Link
                to={content.paths.privacy}
                className="inline-flex items-center rounded-full bg-lasa-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-lasa-700"
              >
                {privacyTeaser.cta}
              </Link>
            </ScrollReveal>
          </div>
        </Section>
      </main>

      <Footer content={content} />
    </div>
  );
}
