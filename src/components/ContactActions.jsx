import { useState } from 'react';
import { CONTACT } from '../constants/contact';

function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 5.5c0-1 .8-1.8 1.8-1.8h2.2c.7 0 1.3.4 1.6 1.1l1 2.2c.3.6.1 1.4-.4 1.8l-1.2.9a12.5 12.5 0 0 0 5.8 5.8l.9-1.2c.4-.5 1.2-.7 1.8-.4l2.2 1c.7.3 1.1.9 1.1 1.6v2.2c0 1-.8 1.8-1.8 1.8C9.7 21 3 14.3 3.5 5.5Z"
      />
    </svg>
  );
}

function EmailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

const pillClass =
  'inline-flex items-center justify-center gap-2 rounded-full bg-lasa-700 px-5 py-3 text-sm font-semibold text-white hover:bg-lasa-600';

const compactPillClass =
  'inline-flex items-center justify-center gap-2 rounded-full bg-lasa-700 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-lasa-600';

export default function ContactActions({
  emailHref = CONTACT.emailHref,
  emailLabel = CONTACT.emailLabel,
  phoneButton = 'Phone',
  emailButton = 'Email',
  compact = false,
  className,
}) {
  const [hint, setHint] = useState('');

  if (compact) {
    return (
      <div className={className ?? 'mt-6'}>
        <div className="flex flex-row flex-wrap gap-2">
          <a
            href={CONTACT.phoneHref}
            aria-label={CONTACT.phoneLabel}
            className={compactPillClass}
            onMouseEnter={() => setHint(CONTACT.phoneLabel)}
            onMouseLeave={() => setHint('')}
            onFocus={() => setHint(CONTACT.phoneLabel)}
            onBlur={() => setHint('')}
          >
            <PhoneIcon />
            <span>{phoneButton}</span>
          </a>
          <a
            href={emailHref}
            aria-label={emailLabel}
            className={compactPillClass}
            onMouseEnter={() => setHint(emailLabel)}
            onMouseLeave={() => setHint('')}
            onFocus={() => setHint(emailLabel)}
            onBlur={() => setHint('')}
          >
            <EmailIcon />
            <span>{emailButton}</span>
          </a>
        </div>
        <p className="mt-3 min-h-6 text-sm font-semibold text-[#153A62]">{hint}</p>
      </div>
    );
  }

  return (
    <div className={className ?? 'mt-6 flex flex-col gap-3'}>
      <a href={CONTACT.phoneHref} className={pillClass}>
        <PhoneIcon />
        <span>{CONTACT.phoneLabel}</span>
      </a>
      <a href={emailHref} className={`${pillClass} break-all`}>
        <EmailIcon />
        <span>{emailLabel}</span>
      </a>
    </div>
  );
}
