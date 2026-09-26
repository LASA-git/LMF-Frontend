import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import LogoWordmark from './LogoWordmark';

export default function Footer({ content }) {
  const year = new Date().getFullYear();
  const links = content.nav.filter((item) => !item.emphasize);

  return (
    <footer className="mt-16 border-t border-lasa-200 bg-white pb-8 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-[96rem] grid-cols-1 gap-12 px-5 sm:grid-cols-2 sm:gap-10 sm:px-8 lg:grid-cols-4 lg:items-start lg:gap-x-12 lg:px-12 xl:px-16">
        <div className="min-w-0 text-center">
          <Link to={content.paths.home} className="mx-auto flex max-w-[16rem] flex-col items-center gap-3">
            <img
              src="/lasa-crest.png"
              alt="LASA Medical Foundation Inc."
              className="h-16 w-auto shrink-0 sm:h-20"
            />
            <LogoWordmark compact wrap className="w-full text-center" />
          </Link>
          <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-lasa-500">
            {content.splash.mission}
          </p>
        </div>

        <div className="min-w-0 text-center sm:text-left">
          <h3 className="mb-4 text-lg font-bold text-lasa-600">{content.footer.linksTitle}</h3>
          <ul className="flex flex-col gap-2 text-sm font-medium text-lasa-500">
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to} className="hover:text-lasa-700">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to={content.paths.team} className="hover:text-lasa-700">
                {content.about.teamCta}
              </Link>
            </li>
            <li>
              <Link to={content.paths.privacy} className="hover:text-lasa-700">
                {content.privacyPage.title}
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-0 text-center sm:text-left">
          <h3 className="mb-4 text-lg font-bold text-lasa-600">{content.contact.title}</h3>
          <ul className="flex flex-col gap-3 text-sm font-medium text-lasa-500">
            <li>
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </li>
            <li>
              <span>{CONTACT.phoneLabel}</span>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="hover:text-lasa-700">
                {CONTACT.emailLabel}
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-0 text-center sm:text-left">
          <h3 className="mb-4 text-lg font-bold text-lasa-600">{content.donate.title}</h3>
          <p className="mb-5 text-sm leading-relaxed text-lasa-500">{content.footer.donateIntro}</p>
          <Link
            to={content.paths.donate}
            className="inline-flex items-center justify-center rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
          >
            {content.donate.button}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[96rem] border-t border-lasa-200/60 px-5 pt-6 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-xs font-medium leading-relaxed text-lasa-500/80 sm:text-left">
          Copyright © {year} {content.footer.legal}
        </p>
      </div>
    </footer>
  );
}
