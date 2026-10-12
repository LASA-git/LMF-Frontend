import { getContent } from '../content';
import SiteLayout from '../components/SiteLayout';

export default function PrivacyPage({ lang }) {
  const content = getContent(lang);
  const page = content.privacyPage;

  return (
    <SiteLayout content={content} title={page.title}>
      <section className="mx-auto max-w-[72rem] px-5 py-14 sm:px-8 lg:px-12 sm:py-20">
        <div className="narrative-panel rounded-3xl p-8 text-center sm:p-12">
          <p className="reading-subtitle font-sans text-3xl text-lasa-700 sm:text-4xl">{page.comingSoon}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
