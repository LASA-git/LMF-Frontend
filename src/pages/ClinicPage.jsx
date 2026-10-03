import { Link } from 'react-router-dom';
import { getContent } from '../content';
import ContactBlock from '../components/ContactBlock';
import LocationBlock from '../components/LocationBlock';
import SiteLayout from '../components/SiteLayout';

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-lasa-200 px-5 py-14 sm:scroll-mt-36 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-[90rem]">
        <h2 className="reading-title font-sans text-3xl text-lasa-700 sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function ClinicPage({ lang }) {
  const content = getContent(lang);
  const { clinic, services, hours, donate } = content;

  return (
    <SiteLayout content={content} title={clinic.heroTitle} lede={clinic.intro}>
      <div className="border-b border-lasa-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-[90rem] flex-wrap gap-2 px-5 py-4 sm:px-8 lg:px-12">
          {clinic.subnav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-lasa-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-lasa-700 hover:bg-lasa-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <section className="mx-auto w-full max-w-[90rem] space-y-5 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {clinic.paragraphs.map((paragraph) => (
          <div key={paragraph.slice(0, 32)} className="narrative-panel rounded-3xl p-6 sm:p-8">
            <p className="reading-copy text-base text-lasa-600 sm:text-lg">{paragraph}</p>
          </div>
        ))}
      </section>

      <Section id="services" title={services.title}>
        <p className="reading-copy text-lg text-lasa-600 sm:text-xl">{services.intro}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="narrative-card h-full rounded-3xl border border-lasa-200 bg-white p-6 sm:p-8">
            {services.treatTitle ? (
              <h3 className="reading-subtitle text-2xl font-semibold text-lasa-700">{services.treatTitle}</h3>
            ) : null}
            <ul className={`list-disc space-y-2 pl-5 text-base text-lasa-600 ${services.treatTitle ? 'mt-4' : ''}`}>
              {services.treat.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="narrative-card h-full rounded-3xl border border-lasa-200 bg-white p-6 sm:p-8">
            <h3 className="reading-subtitle text-2xl font-semibold text-lasa-700">{services.cannotTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-lasa-600">
              {services.cannot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        {services.note ? <p className="reading-copy mt-8 text-lg text-lasa-600">{services.note}</p> : null}
      </Section>

      <Section id="hours" title={hours.title}>
        <p className="reading-copy text-lg text-lasa-600">{hours.intro}</p>
        <div className="narrative-panel mt-6 max-w-xl rounded-3xl p-6">
          {hours.rows.map((row) => (
            <p key={row.label} className="text-base text-lasa-700 sm:text-lg">
              <span className="font-semibold">{row.label}:</span> {row.value}
            </p>
          ))}
        </div>
      </Section>

      <Section id="location" title={content.location.title}>
        <LocationBlock content={content} />
      </Section>

      <Section id="contact" title={content.contact.title}>
        <ContactBlock content={content} />
      </Section>

      <Section id="privacy" title={content.privacyTeaser.title}>
        <div className="space-y-5">
          {content.privacyTeaser.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="reading-copy text-lg text-lasa-600">
              {paragraph}
            </p>
          ))}
        </div>
        <Link
          to={content.paths.privacy}
          className="mt-6 inline-flex rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
        >
          {content.privacyTeaser.cta}
        </Link>
      </Section>

      <Section
        id="schedule"
        title={clinic.subnav.find((item) => item.id === 'schedule')?.label ?? content.schedulePage.title}
      >
        <p className="reading-copy text-lg text-lasa-600">{hours.scheduleIntro}</p>
        <Link
          to={content.paths.schedule}
          className="mt-6 inline-flex rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
        >
          {hours.scheduleCta}
        </Link>
      </Section>

      <Section id="donate" title={donate.title}>
        <p className="reading-copy text-lg text-lasa-600">{donate.lede}</p>
        <Link
          to={content.paths.donate}
          className="mt-6 inline-flex rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
        >
          {donate.button}
        </Link>
      </Section>
    </SiteLayout>
  );
}
