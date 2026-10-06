import { CONTACT } from '../constants/contact';
import { PARTNERS } from '../constants/partners';
import { getContent } from '../content';
import ContactActions from '../components/ContactActions';
import ContactBlock from '../components/ContactBlock';
import PartnerCard from '../components/PartnerCard';
import SiteLayout from '../components/SiteLayout';

function Card({ title, children }) {
  return (
    <article className="narrative-panel flex h-full flex-col overflow-visible rounded-3xl p-6 sm:p-8">
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

export default function DonatePage({ lang }) {
  const content = getContent(lang);
  const page = content.donate;

  return (
    <SiteLayout content={content} title={page.title} lede={page.lede}>
      <section className="mx-auto grid w-full max-w-[90rem] gap-6 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-12">
        <Card title={page.volunteer.title}>
          <p className="reading-copy text-lasa-600">{page.volunteer.body}</p>
          <ActionButton href={CONTACT.volunteerFormUrl || undefined}>{page.volunteer.button}</ActionButton>
          {!CONTACT.volunteerFormUrl ? <p className="mt-3 text-sm text-lasa-500">{page.volunteer.note}</p> : null}
        </Card>

        <Card title={page.partner.title}>
          <p className="reading-copy text-lasa-600">{page.partner.body}</p>
          <ContactActions
            compact
            phoneButton={content.splash.phoneLabel}
            emailButton={content.contact.emailLabel}
            emailHref={CONTACT.clinicAdminEmailHref}
            emailLabel={CONTACT.clinicAdminEmailLabel}
          />
        </Card>

        <Card title={page.supplies.title}>
          <p className="reading-copy text-lasa-600">{page.supplies.body}</p>
          <ContactActions
            compact
            phoneButton={content.splash.phoneLabel}
            emailButton={content.contact.emailLabel}
            emailHref={CONTACT.clinicAdminEmailHref}
            emailLabel={CONTACT.clinicAdminEmailLabel}
          />
        </Card>

        <Card title={page.donation.title}>
          <p className="reading-copy text-lasa-600">{page.donation.body}</p>
          <ActionButton href={CONTACT.paypalDonateUrl || undefined}>{page.donation.button}</ActionButton>
          <p className="mt-3 text-sm leading-relaxed text-lasa-500">{page.donation.disclaimer}</p>
          {!CONTACT.paypalDonateUrl ? <p className="mt-2 text-sm text-lasa-500">{page.donation.note}</p> : null}
        </Card>

        <section className="lg:col-span-2">
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{content.partners.title}</h2>
          <p className="reading-copy mt-3 text-lasa-600">{content.partners.lede}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PARTNERS.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

        <article
          id="contact"
          className="narrative-panel scroll-mt-32 overflow-visible rounded-3xl p-6 sm:p-8 lg:col-span-2"
        >
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{content.contact.title}</h2>
          <div className="mt-4">
            <ContactBlock content={content} />
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}
