import { Link } from 'react-router-dom';
import { getContent } from '../content';
import { revealDelay } from '../constants/motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function PrivacyPage({ lang }) {
  const content = getContent(lang);
  const page = content.privacyPage;

  return (
    <div className="min-h-screen">
      <Header content={content} />
      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden border-b border-lasa-200 bg-gradient-to-b from-lasa-100/95 to-lasa-50/90">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(79,122,106,0.22),transparent_48%)]" />
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

        <section className="mx-auto max-w-4xl space-y-5 px-4 py-14 sm:px-6 sm:py-20">
          {page.paragraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph.slice(0, 28)} delay={revealDelay(index)}>
              <div className="narrative-panel rounded-3xl p-6 sm:p-8">
                <p className="reading-copy text-[15px] text-lasa-600 sm:text-base">{paragraph}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={revealDelay(page.paragraphs.length)}>
            <Link
              to={content.paths.home}
              className="inline-flex items-center rounded-full bg-lasa-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-lasa-700"
            >
              {page.back}
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer content={content} />
    </div>
  );
}
