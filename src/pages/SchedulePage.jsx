import { Link } from 'react-router-dom';
import { getContent } from '../content';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function SchedulePage({ lang }) {
  const content = getContent(lang);
  const page = content.schedulePage;

  return (
    <div className="min-h-screen">
      <Header content={content} />
      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden border-b border-lasa-200 bg-gradient-to-b from-lasa-100/95 to-lasa-50/90">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(134,160,125,0.24),transparent_46%)]" />
          <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
            <ScrollReveal>
              <p className="reading-kicker text-xs font-semibold uppercase text-lasa-500">
                {page.title}
              </p>
              <h1 className="reading-title mt-3 font-display text-4xl text-lasa-700 sm:text-6xl">
                {page.title}
              </h1>
            </ScrollReveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <ScrollReveal>
            <div className="narrative-panel rounded-3xl p-8 text-center sm:p-12">
              <p className="reading-subtitle text-2xl font-display text-lasa-700">
                {page.placeholder}
              </p>
              <p className="reading-copy mx-auto mt-4 text-lasa-600">{page.note}</p>
              <Link
                to={content.paths.home}
                className="mt-8 inline-flex items-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
              >
                {page.back}
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer content={content} />
    </div>
  );
}
