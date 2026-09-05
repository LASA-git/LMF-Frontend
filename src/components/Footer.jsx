import { Link } from 'react-router-dom';
import { CONTACT } from '../constants/contact';
import LogoWordmark from './LogoWordmark';

export default function Footer({ content }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-lasa-200 bg-white pb-8 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-[96rem] gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:gap-16 lg:px-12 xl:px-16">
        <div>
          <Link to={content.paths.home} className="inline-flex items-center gap-3">
            <img src="/finallogo.png" alt="Lasa Medical Foundation Inc." className="h-16 w-auto sm:h-20" />
            <LogoWordmark compact className="text-left" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-lasa-500">
            {content.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-lasa-600">{content.shortName}</h3>
          <ul className="flex flex-col gap-2 text-sm font-medium text-lasa-500">
            <li>
              <Link to={content.paths.home} className="hover:text-lasa-700">
                {content.clinic.heroTitle}
              </Link>
            </li>
            <li>
              <Link to={content.paths.schedule} className="hover:text-lasa-700">
                {content.schedulePage.title}
              </Link>
            </li>
            <li>
              <Link to={content.paths.privacy} className="hover:text-lasa-700">
                {content.privacyPage.title}
              </Link>
            </li>
            <li>
              <Link to={content.otherLangPath} className="hover:text-lasa-700">
                {content.otherLangLabel}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-lasa-600">
            {content.contact.title}
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-medium text-lasa-500">
            <li>
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-lasa-700">
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="hover:text-lasa-700">
                {CONTACT.emailLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[96rem] border-t border-lasa-200/60 px-5 pt-6 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-xs font-medium text-lasa-500/80">
          © {year} {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
