import { CONTACT } from '../constants/contact';

export default function ContactBlock({ content }) {
  const { contact } = content;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-lasa-300 bg-gradient-to-r from-lasa-700 to-lasa-600 p-6 text-white shadow-lg sm:p-8">
        <p className="reading-copy text-base text-lasa-50 sm:text-lg">{contact.emergency}</p>
      </div>
      <p className="reading-copy text-base text-lasa-600 sm:text-lg">{contact.body}</p>
      <div className="space-y-2 text-base sm:text-lg">
        <p>
          <span className="font-semibold text-lasa-700">{content.splash.phoneLabel}: </span>
          {CONTACT.phoneHref ? (
            <a href={CONTACT.phoneHref} className="text-lasa-600 hover:text-lasa-700">
              {CONTACT.phoneLabel}
            </a>
          ) : (
            <span className="text-lasa-600">{CONTACT.phoneLabel}</span>
          )}
        </p>
        <p>
          <span className="font-semibold text-lasa-700">{contact.emailLabel}: </span>
          <a href={CONTACT.emailHref} className="text-lasa-600 hover:text-lasa-700">
            {CONTACT.emailLabel}
          </a>
        </p>
        <p className="text-lasa-600">{contact.inquiryLine}</p>
      </div>
    </div>
  );
}
