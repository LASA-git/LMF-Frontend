import { Link } from 'react-router-dom';
import { getContent } from '../content';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Paragraphs({ paragraphs }) {
  return paragraphs.map((paragraph) => (
    <p
      key={paragraph.slice(0, 48)}
      className="reading-copy whitespace-pre-line text-base text-lasa-600 sm:text-lg"
    >
      {paragraph}
    </p>
  ));
}

function SectionBlock({ section }) {
  return (
    <article className="narrative-panel rounded-3xl p-6 sm:p-8">
      <h2 className="font-display text-2xl text-lasa-700 sm:text-3xl">{section.title}</h2>
      {section.paragraphs?.length ? (
        <div className="reading-stack mt-4">
          <Paragraphs paragraphs={section.paragraphs} />
        </div>
      ) : null}
      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-lasa-600 sm:text-lg">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="mt-6 border-t border-lasa-100 pt-5">
          <h3 className="text-lg font-semibold text-lasa-700 sm:text-xl">{sub.title}</h3>
          <div className="reading-stack mt-3">
            <Paragraphs paragraphs={sub.paragraphs} />
          </div>
        </div>
      ))}
    </article>
  );
}

export default function PrivacyPage({ lang }) {
  const content = getContent(lang);
  const page = content.privacyPage;

  return (
    <div className="min-h-screen max-w-[100%] overflow-x-clip">
      <Header content={content} />
      <main className="pt-24 sm:pt-28 lg:pt-32 xl:pt-36">
        <section className="relative overflow-hidden border-b border-lasa-200 bg-gradient-to-b from-lasa-100/95 to-lasa-50/90">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(79,122,106,0.22),transparent_48%)]" />
          <div className="relative mx-auto max-w-[72rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <h1 className="reading-title font-display text-4xl text-lasa-700 sm:text-6xl">
              {page.heading}
            </h1>
            <p className="mt-6 max-w-4xl text-sm font-semibold uppercase leading-relaxed tracking-wide text-lasa-600 sm:text-base">
              {page.banner}
            </p>
            <p className="mt-4 max-w-4xl text-base font-semibold text-lasa-700 sm:text-lg">
              {page.importance}
            </p>
            <p className="reading-copy mt-4 text-base text-lasa-600 sm:text-lg">{page.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[72rem] space-y-5 px-5 py-14 sm:px-8 lg:px-12 sm:py-20">
          {page.sections.map((section) => (
            <SectionBlock key={section.title} section={section} />
          ))}

          <Link
            to={content.paths.home}
            className="inline-flex items-center rounded-full bg-lasa-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-lasa-700"
          >
            {page.back}
          </Link>
        </section>
      </main>
      <Footer content={content} />
    </div>
  );
}
