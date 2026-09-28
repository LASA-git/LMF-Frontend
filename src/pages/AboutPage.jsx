import { Link } from 'react-router-dom';
import { getContent } from '../content';
import SiteLayout from '../components/SiteLayout';

export default function AboutPage({ lang }) {
  const content = getContent(lang);
  const page = content.about;

  return (
    <SiteLayout content={content} title={page.title}>
      <section className="mx-auto w-full max-w-[90rem] space-y-5 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {page.paragraphs.map((paragraph) => (
          <div key={paragraph.slice(0, 32)} className="narrative-panel rounded-3xl p-6 sm:p-8">
            <p className="reading-copy text-base text-lasa-600 sm:text-lg">{paragraph}</p>
          </div>
        ))}
        <Link
          to={content.paths.team}
          className="inline-flex items-center rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
        >
          {page.teamCta}
        </Link>
      </section>
    </SiteLayout>
  );
}
