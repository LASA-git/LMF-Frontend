import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import ContactActions from './ContactActions';
import LogoWordmark from './LogoWordmark';

export default function Footer({ content }) {
  const year = new Date().getFullYear();
  const links = content.nav.filter((item) => !item.emphasize);

  return (
    <footer className="mt-16 border-t border-lasa-200 bg-white pb-10 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-[96rem] grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-4 lg:items-start lg:gap-x-12 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center text-center">
          <Link to={content.paths.home} className="flex flex-col items-center gap-4">
            <img
              src="/lasa-crest.png"
              alt="LASA Medical Foundation Inc."
              className="h-20 w-auto sm:h-24"
            />
            <LogoWordmark compact wrap className="text-center" />
          </Link>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-lasa-700">{content.footer.linksTitle}</h3>
          <ul className="flex flex-col gap-3.5 text-base font-medium text-lasa-500">
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

        <div>
          <h3 className="mb-5 text-lg font-bold text-lasa-700">{content.contact.title}</h3>
          <ul className="flex flex-col gap-3.5 text-base font-medium text-lasa-500">
            <li>
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </li>
            <li>
              <ContactActions className="flex flex-col gap-3" />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-lasa-700">{content.donate.title}</h3>
          <p className="mb-5 text-base leading-relaxed text-lasa-500">{content.footer.donateIntro}</p>
          <Link
            to={content.paths.donate}
            className="inline-flex items-center justify-center rounded-full bg-lasa-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-lasa-600"
          >
            {content.donate.button}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[96rem] border-t border-lasa-200/60 px-6 pt-6 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-xs font-medium leading-relaxed text-lasa-500/80">
          Copyright © {year} {content.footer.legal}
        </p>
      </div>
    </footer>
  );
}
