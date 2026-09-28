import { CONTACT } from '../constants/contact';
import { getContent } from '../content';
import SiteLayout from '../components/SiteLayout';

function Card({ title, children }) {
  return (
    <article className="narrative-panel flex h-full flex-col rounded-3xl p-6 sm:p-8">
      <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{title}</h2>
      <div className="mt-4 flex flex-1 flex-col">{children}</div>
    </article>
  );
}

function ActionButton({ href, children }) {
  const className =
    'mt-6 inline-flex items-center justify-center rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

function ContactLines({ phoneLabel, emailLabel }) {
  return (
    <div className="mt-6 space-y-2 text-base text-lasa-700">
      <p>
        <span className="font-semibold">{phoneLabel}: </span>
        {CONTACT.phoneHref ? (
          <a href={CONTACT.phoneHref} className="hover:text-lasa-600">
            {CONTACT.phoneLabel}
          </a>
        ) : (
          CONTACT.phoneLabel
        )}
      </p>
      <p>
        <span className="font-semibold">{emailLabel}: </span>
        <a href={CONTACT.emailHref} className="hover:text-lasa-600">
          {CONTACT.emailLabel}
        </a>
      </p>
    </div>
  );
}

export default function DonatePage({ lang }) {
  const content = getContent(lang);
  const page = content.donate;

  return (
    <SiteLayout content={content} title={page.title} lede={page.lede}>
      <section className="mx-auto grid w-full max-w-[90rem] gap-6 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-12">
        <Card title={page.donation.title}>
          <p className="reading-copy text-lasa-600">{page.donation.body}</p>
          <ActionButton href={CONTACT.paypalDonateUrl || undefined}>{page.donation.button}</ActionButton>
          {!CONTACT.paypalDonateUrl ? <p className="mt-3 text-sm text-lasa-500">{page.donation.note}</p> : null}
        </Card>

        <Card title={page.volunteer.title}>
          <p className="reading-copy text-lasa-600">{page.volunteer.body}</p>
          <ActionButton href={CONTACT.volunteerFormUrl || undefined}>{page.volunteer.button}</ActionButton>
          {!CONTACT.volunteerFormUrl ? <p className="mt-3 text-sm text-lasa-500">{page.volunteer.note}</p> : null}
        </Card>

        <Card title={page.supplies.title}>
          <p className="reading-copy text-lasa-600">{page.supplies.body}</p>
          <ContactLines phoneLabel={content.splash.phoneLabel} emailLabel={content.contact.emailLabel} />
        </Card>

        <Card title={page.partner.title}>
          <p className="reading-copy text-lasa-600">{page.partner.body}</p>
          <ContactLines phoneLabel={content.splash.phoneLabel} emailLabel={content.contact.emailLabel} />
        </Card>
      </section>
    </SiteLayout>
  );
}
