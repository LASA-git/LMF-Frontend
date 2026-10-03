import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function LangToggle({ lang, otherLabel, otherPath, className = '' }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = lang === 'en' ? 'EN' : 'ES';

  useEffect(() => {
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const options = [
    { code: 'EN', label: 'English', to: lang === 'en' ? pathname : otherPath, active: lang === 'en' },
    { code: 'ES', label: 'Español', to: lang === 'es' ? pathname : otherPath, active: lang === 'es' },
  ];

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={otherLabel}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 rounded-full border border-lasa-200 bg-white px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-lasa-700 hover:bg-lasa-50"
      >
        {current}
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[8.5rem] overflow-hidden rounded-2xl border border-lasa-200 bg-white py-1 shadow-[0_12px_28px_-18px_rgba(21,58,98,0.55)]"
        >
          {options.map((option) => (
            <li key={option.code}>
              <Link
                to={option.to}
                role="option"
                aria-selected={option.active}
                className={`block px-4 py-2.5 text-sm font-semibold ${
                  option.active ? 'bg-lasa-700 text-white' : 'text-lasa-700 hover:bg-lasa-50'
                }`}
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
