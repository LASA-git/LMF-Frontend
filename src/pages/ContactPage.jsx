import { getContent } from '../content';
import ContactBlock from '../components/ContactBlock';
import SiteLayout from '../components/SiteLayout';

export default function ContactPage({ lang }) {
  const content = getContent(lang);

  return (
    <SiteLayout content={content} title={content.contact.title}>
      <section className="mx-auto w-full max-w-[90rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <ContactBlock content={content} />
      </section>
    </SiteLayout>
  );
}
