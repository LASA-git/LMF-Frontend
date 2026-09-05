import { Link } from 'react-router-dom';

export default function LangToggle({ lang, otherLabel, otherPath, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-lasa-200 bg-white/90 p-1 text-xs font-semibold uppercase tracking-widest ${className}`}
    >
      {lang === 'en' ? (
        <span className="rounded-full bg-lasa-600 px-3 py-1.5 text-white">EN</span>
      ) : (
        <Link
          to={otherPath}
          className="rounded-full px-3 py-1.5 text-lasa-500 transition hover:bg-lasa-50 hover:text-lasa-700"
          aria-label={otherLabel}
        >
          EN
        </Link>
      )}
      {lang === 'es' ? (
        <span className="rounded-full bg-lasa-600 px-3 py-1.5 text-white">ES</span>
      ) : (
        <Link
          to={otherPath}
          className="rounded-full px-3 py-1.5 text-lasa-500 transition hover:bg-lasa-50 hover:text-lasa-700"
          aria-label={otherLabel}
        >
          ES
        </Link>
      )}
    </div>
  );
}
