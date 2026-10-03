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

  function navClass(isActive, mobile = false) {
    if (mobile) {
      return `rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-lasa-50 ${
        isActive ? 'bg-lasa-100 text-lasa-700' : 'text-lasa-700'
      }`;
    }

    return `relative whitespace-nowrap px-2.5 py-2 text-[14px] font-semibold tracking-wider transition-all duration-200 2xl:px-4 2xl:text-[16px] ${
      isActive
        ? 'font-bold text-lasa-700 after:absolute after:bottom-[-4px] after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-lasa-700'
        : 'text-lasa-500 hover:text-lasa-700'
    }`;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled || mobileOpen ? 'shadow-[0_4px_24px_rgba(21,58,98,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[5.5rem] w-full max-w-[90rem] items-center px-4 sm:h-28 sm:px-6 lg:px-8">
        <Link
          to={content.paths.home}
          className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/lasa-crest.png"
            alt="LASA Medical Foundation Inc."
            className="h-16 w-auto shrink-0 sm:h-[5.25rem] lg:h-24"
          />
          <LogoWordmark compact className="min-w-0" />
        </Link>

        <nav className="ml-10 hidden shrink-0 items-center gap-0.5 xl:ml-14 xl:flex 2xl:ml-16">
          {content.nav.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === content.paths.home}
              className={({ isActive }) => navClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <LangToggle
          lang={content.lang}
          otherLabel={content.otherLangLabel}
          otherPath={otherPath}
          className="ml-auto shrink-0"
        />

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-lasa-500 hover:bg-lasa-100 xl:hidden"
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
        <div className="border-t border-lasa-200 bg-white xl:hidden">
          <div className="mx-auto flex max-h-[calc(100dvh-5.5rem)] max-w-[90rem] flex-col overflow-y-auto px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-1">
              {content.nav.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  end={item.to === content.paths.home}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => navClass(isActive, true)}
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
