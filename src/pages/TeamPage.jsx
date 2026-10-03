import { Link } from 'react-router-dom';
import { getContent } from '../content';
import { NAFC, PARTNERS } from '../constants/partners';
import SiteLayout from '../components/SiteLayout';

function PersonCard({ role, name, bio }) {
  return (
    <article className="narrative-card rounded-3xl border border-lasa-200 bg-white p-6 sm:p-8">
      {role ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-lasa-500">{role}</p>
      ) : null}
      <p className={`text-xl font-semibold text-lasa-700 ${role ? 'mt-2' : ''}`}>{name}</p>
      {bio ? <p className="reading-copy mt-3 text-base text-lasa-600">{bio}</p> : null}
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
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.boardTitle}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {page.board.map((person) => (
              <PersonCard key={person.name} name={person.name} bio={person.bio} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.operationsTitle}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {page.leadership.map((person) => (
              <PersonCard key={person.role} role={person.role} name={person.name} bio={person.bio} />
            ))}
          </div>
        </div>

        <div className="narrative-panel rounded-3xl p-6 sm:p-8">
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{page.thanksTitle}</h2>
          <p className="reading-copy mt-4 text-lasa-600">{page.thanksIntro}</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {PARTNERS.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-lasa-200 bg-white px-4 py-2 text-sm font-semibold text-lasa-700 hover:bg-lasa-50"
                >
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lasa-600">
            {page.memberOf}{' '}
            <a href={NAFC.href} target="_blank" rel="noreferrer" className="font-semibold text-lasa-700 underline">
              {NAFC.name}
            </a>.
          </p>
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
