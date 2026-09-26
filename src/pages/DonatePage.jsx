import { getContent } from '../content';
import SiteLayout from '../components/SiteLayout';

export default function DonatePage({ lang }) {
  const content = getContent(lang);
  const page = content.donate;

  return (
    <SiteLayout content={content} title={page.title} lede={page.body}>
      <section className="mx-auto w-full max-w-[90rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="narrative-panel max-w-xl rounded-3xl p-6 sm:p-8">
          <button
            type="button"
            className="inline-flex rounded-full bg-lasa-700 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
          >
            {page.button}
          </button>
          <p className="mt-4 text-sm text-lasa-500">{page.comingSoon}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
