import { Link } from 'react-router-dom';
import { getContent } from '../content';
import { NAFC } from '../constants/partners';
import PartnerCard from '../components/PartnerCard';
import SiteLayout from '../components/SiteLayout';

export default function AboutPage({ lang }) {
  const content = getContent(lang);
  const page = content.about;
  const membership = content.partners;
  const [intro, ...rest] = page.paragraphs;

  return (
    <SiteLayout content={content}>
      <section className="flex items-start pb-8 pt-6 sm:pb-10 sm:pt-8 lg:pb-12 lg:pt-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="text-center lg:text-left">
              <h1 className="font-display leading-tight text-lasa-700">
                <span className="block text-3xl font-normal text-lasa-600 sm:text-4xl lg:text-5xl">
                  {page.welcomeKicker}
                </span>
                <span className="mt-1 block text-3xl sm:text-4xl lg:text-5xl">{page.welcomeName}</span>
              </h1>
              <p className="reading-copy mx-auto mt-5 text-justify text-sm leading-relaxed text-lasa-600/90 sm:text-base lg:mx-0 lg:text-lg">
                {intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  to={content.paths.schedule}
                  className="inline-flex items-center gap-2 rounded-full bg-lasa-600 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-lasa-700"
                >
                  {page.primaryCta}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to={content.paths.donate}
                  className="inline-flex items-center gap-2 rounded-full border border-lasa-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-lasa-600 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-lasa-100"
                >
                  {page.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-3xl border border-lasa-200 bg-white/90 px-8 py-8 shadow-xl sm:max-w-md lg:mx-0 lg:max-w-md lg:justify-self-end lg:px-10 lg:py-10">
              <img
                src="/lasa-logo.jpg"
                alt="LASA Medical Foundation — Selfless Service, Compassionate Care"
                className="h-auto w-56 object-contain sm:w-64 lg:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[90rem] space-y-5 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        {rest.map((paragraph) => (
          <div key={paragraph.slice(0, 32)} className="narrative-panel rounded-3xl p-6 sm:p-8">
            <p className="reading-copy text-base text-lasa-600 sm:text-lg">{paragraph}</p>
          </div>
        ))}

        <div className="pt-4">
          <h2 className="reading-subtitle text-2xl font-semibold text-lasa-700">{membership.memberTitle}</h2>
          <p className="reading-copy mt-3 text-lasa-600">{membership.memberIntro}</p>
          <div className="mt-5 max-w-xl">
            <PartnerCard partner={NAFC} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
