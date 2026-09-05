import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LangToggle from './LangToggle';
import LogoWordmark from './LogoWordmark';
import { getAlternateLangPath } from '../utils/langPaths';

export default function Header({ content }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const otherPath = getAlternateLangPath(pathname, content.otherLang);
  const onClinicHome = pathname === content.paths.home;

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

  const sectionLinks = content.nav.filter((item) => !item.to);
  const pageLinks = content.nav.filter((item) => item.to);

  const sectionHref = (id) =>
    onClinicHome ? `#${id}` : `${content.paths.home}#${id}`;

  const linkClass =
    'shrink-0 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-lasa-600 transition hover:bg-lasa-50 hover:text-lasa-700 xl:px-3.5 xl:text-sm';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-[100%] overflow-x-clip transition-all duration-300 ${
        scrolled
          ? 'bg-white/[0.97] shadow-[0_4px_24px_rgba(30,58,52,0.1)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-28 w-full max-w-[96rem] items-center gap-4 overflow-x-clip px-5 sm:h-32 sm:gap-5 sm:px-8 lg:px-12 xl:px-16">
        <Link to={content.paths.home} className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-4">
          <img
            src="/finallogo.png"
            alt="Lasa Medical Foundation Inc."
            className="h-16 w-auto shrink-0 sm:h-20"
          />
          <LogoWordmark compact className="min-w-0 max-w-[18rem] text-left sm:max-w-[22rem]" />
        </Link>

        <nav className="ml-auto hidden min-w-0 max-w-full items-center justify-end gap-1 overflow-x-auto overscroll-x-contain lg:flex">
          {sectionLinks.map((item) => (
            <Link key={item.id} to={sectionHref(item.id)} className={linkClass}>
              {item.label}
            </Link>
          ))}
          {pageLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'bg-lasa-100 text-lasa-700' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LangToggle
            lang={content.lang}
            otherLabel={content.otherLangLabel}
            otherPath={otherPath}
            className="ml-1 shrink-0"
          />
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-lasa-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[96rem] flex-col gap-1 px-4 py-4 sm:px-6">
            {sectionLinks.map((item) => (
              <Link
                key={item.id}
                to={sectionHref(item.id)}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-lasa-700 hover:bg-lasa-50"
              >
                {item.label}
              </Link>
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
