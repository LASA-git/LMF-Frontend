import { getContent } from '../content';
import { PARTNERS } from '../constants/partners';
import PartnerCard from '../components/PartnerCard';
import SiteLayout from '../components/SiteLayout';

export default function PartnersPage({ lang }) {
  const content = getContent(lang);
  const page = content.partners;

  return (
    <SiteLayout content={content} title={page.title} lede={page.lede}>
      <section className="mx-auto w-full max-w-[90rem] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
