import { Link } from 'react-router-dom';
import { getContent } from '../content';
import ScheduleFrame from './ScheduleFrame';

export default function SchedulePage({ lang }) {
  const content = getContent(lang);
  const page = content.schedulePage;

  return (
    <ScheduleFrame content={content} title={page.title}>
      <div className="narrative-panel rounded-3xl p-8 text-center sm:p-12">
        <p className="reading-subtitle font-sans text-3xl text-lasa-700 sm:text-4xl">{page.comingSoon}</p>
      </div>
      <Link
        to={content.paths.clinic}
        className="mt-10 inline-flex items-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
      >
        {page.back}
      </Link>
    </ScheduleFrame>
  );
}
