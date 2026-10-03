import { Link } from 'react-router-dom';
import { getContent } from '../content';
import { CONTACT } from '../constants/contact';
import ContactActions from '../components/ContactActions';
import SiteLayout from '../components/SiteLayout';

function PersonCard({ role, name, bio, children }) {
  return (
    <article className="narrative-card overflow-visible rounded-3xl border border-lasa-200 bg-white p-6 sm:p-8">
      {role ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-lasa-500">{role}</p>
      ) : null}
      <p className={`text-xl font-semibold text-lasa-700 ${role ? 'mt-2' : ''}`}>{name}</p>
      {bio ? <p className="reading-copy mt-3 text-base text-lasa-600">{bio}</p> : null}
      {children}
    </article>
  );
}

export default function TeamPage({ lang }) {
  const content = getContent(lang);
  const page = content.team;

  return (
    <SiteLayout content={content} title={page.title} lede={page.lede}>
      <section className="mx-auto w-full max-w-[90rem] space-y-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div>
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.operationsTitle}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {page.leadership.map((person) => (
              <PersonCard key={person.role} role={person.role} name={person.name} bio={person.bio}>
                {person.name.includes('Rallapalli') ? (
                  <ContactActions
                    compact
                    showPhone={false}
                    phoneButton={content.splash.phoneLabel}
                    emailButton={content.contact.emailLabel}
                    emailHref={CONTACT.medicalDirectorEmailHref}
                    emailLabel={CONTACT.medicalDirectorEmailLabel}
                  />
                ) : null}
                {person.name.includes('Sarathy') ? (
                  <ContactActions
                    compact
                    phoneButton={content.splash.phoneLabel}
                    emailButton={content.contact.emailLabel}
                    emailHref={CONTACT.clinicAdminEmailHref}
                    emailLabel={CONTACT.clinicAdminEmailLabel}
                  />
                ) : null}
              </PersonCard>
            ))}
          </div>
        </div>

        <div>
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.boardTitle}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {page.board.map((person) => (
              <PersonCard key={person.name} name={person.name} bio={person.bio} />
            ))}
          </div>
        </div>

        <Link
          to={content.paths.home}
          className="inline-flex items-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-lasa-600 hover:bg-lasa-50"
        >
          {page.back}
        </Link>
      </section>
    </SiteLayout>
  );
}
