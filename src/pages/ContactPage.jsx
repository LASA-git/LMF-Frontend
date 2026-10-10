import { getContent } from '../content';
import ContactBlock from '../components/ContactBlock';
import SiteLayout from '../components/SiteLayout';

export default function ContactPage({ lang }) {
  const content = getContent(lang);
  const page = content.contact;

  return (
    <SiteLayout content={content} title={page.title}>
      <section className="mx-auto w-full max-w-[90rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="narrative-panel overflow-visible rounded-3xl p-6 sm:p-8">
          <ContactBlock content={content} />
        </div>
      </section>
    </SiteLayout>
  );
}
