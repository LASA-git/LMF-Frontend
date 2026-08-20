import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LangToggle from './LangToggle';
import { getAlternateLangPath } from '../utils/langPaths';

export default function Header({ content, showSections = false }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherPath = getAlternateLangPath(pathname, content.otherLang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const sectionLinks = showSections
    ? content.nav.filter((item) => !item.to)
    : [];
  const pageLinks = content.nav.filter((item) => item.to);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/[0.97] shadow-[0_4px_24px_rgba(30,58,52,0.1)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-10">
        <Link to={content.paths.home} className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src="/finallogo.png"
            alt="LASA Foundation"
            className="h-12 w-auto flex-shrink-0 sm:h-16"
          />
          <div className="min-w-0">
            <img
              src="/write.jpeg"
              alt="Love All, Serve All"
              className="h-7 w-auto max-w-[38vw] object-contain sm:h-9 sm:max-w-none"
            />
            <p className="mt-0.5 truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-lasa-500 sm:text-xs">
              {content.shortName}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {sectionLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider text-lasa-600 transition hover:bg-lasa-50 hover:text-lasa-700"
            >
              {item.label}
            </a>
          ))}
          {pageLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition hover:bg-lasa-50 hover:text-lasa-700 ${
                  isActive ? 'bg-lasa-100 text-lasa-700' : 'text-lasa-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LangToggle
            lang={content.lang}
            otherLabel={content.otherLangLabel}
            otherPath={otherPath}
            className="ml-2"
          />
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LangToggle
            lang={content.lang}
            otherLabel={content.otherLangLabel}
            otherPath={otherPath}
          />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lasa-200 text-lasa-700"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-lasa-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-lasa-700 hover:bg-lasa-50"
              >
                {item.label}
              </a>
            ))}
            {pageLinks.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-lasa-700 hover:bg-lasa-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
