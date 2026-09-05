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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const sectionLinks = content.nav.filter((item) => !item.to);
  const pageLinks = content.nav.filter((item) => item.to);

  const sectionHref = (id) =>
    onClinicHome ? `#${id}` : `${content.paths.home}#${id}`;

  const desktopLinkClass =
    'shrink-0 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-lasa-600 transition hover:bg-lasa-50 hover:text-lasa-700 xl:px-3.5 xl:text-sm';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white shadow-[0_4px_24px_rgba(30,58,52,0.1)]'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[96rem] items-center gap-3 px-4 sm:h-24 sm:gap-4 sm:px-6 lg:h-28 lg:px-12 xl:h-32 xl:px-16">
        <Link
          to={content.paths.home}
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/finallogo.png"
            alt="Lasa Medical Foundation Inc."
            className="h-12 w-auto shrink-0 sm:h-14 lg:h-16 xl:h-20"
          />
          <LogoWordmark
            compact
            className="min-w-0 text-left [&_p]:truncate sm:[&_p]:overflow-visible"
          />
        </Link>

        <nav className="ml-auto hidden items-center justify-end gap-1 lg:flex">
          {sectionLinks.map((item) => (
            <Link key={item.id} to={sectionHref(item.id)} className={desktopLinkClass}>
              {item.label}
            </Link>
          ))}
          {pageLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `${desktopLinkClass} ${isActive ? 'bg-lasa-100 text-lasa-700' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LangToggle
            lang={content.lang}
            otherLabel={content.otherLangLabel}
            otherPath={otherPath}
            className="ml-2 shrink-0"
          />
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lasa-200 bg-white text-lasa-700 lg:hidden"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-lasa-200 bg-white lg:hidden">
          <div className="mx-auto flex max-h-[calc(100dvh-5rem)] max-w-[96rem] flex-col overflow-y-auto px-4 py-5 sm:px-6">
            <div className="rounded-2xl border border-lasa-200 bg-lasa-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lasa-500">
                Language / Idioma
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {content.lang === 'en' ? (
                  <span className="rounded-xl bg-lasa-700 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
                    English
                  </span>
                ) : (
                  <Link
                    to={otherPath}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-lasa-200 bg-white px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-lasa-700"
                  >
                    English
                  </Link>
                )}
                {content.lang === 'es' ? (
                  <span className="rounded-xl bg-lasa-700 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
                    Español
                  </span>
                ) : (
                  <Link
                    to={otherPath}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-lasa-200 bg-white px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-lasa-700"
                  >
                    Español
                  </Link>
                )}
              </div>
            </div>

            <nav className="mt-5 flex flex-col gap-1">
              {sectionLinks.map((item) => (
                <Link
                  key={item.id}
                  to={sectionHref(item.id)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base font-semibold text-lasa-700 hover:bg-lasa-50"
                >
                  {item.label}
                </Link>
              ))}
              {pageLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-lasa-50 ${
                      isActive ? 'bg-lasa-100 text-lasa-700' : 'text-lasa-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
