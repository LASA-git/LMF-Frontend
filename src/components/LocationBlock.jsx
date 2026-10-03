import { CONTACT } from '../constants/contact';
import ContactActions from './ContactActions';

export default function LocationBlock({ content }) {
  const { location } = content;

  return (
    <div>
      <p className="text-xl font-semibold uppercase tracking-wide text-lasa-600">{location.clinicName}</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="narrative-panel rounded-3xl p-6 sm:p-8">
          <div className="space-y-5 text-base sm:text-lg">
            <div>
              <p className="reading-kicker text-sm font-semibold uppercase text-lasa-500">{location.drivingTitle}</p>
              <p className="mt-2 text-lasa-700">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </p>
            </div>
            <div>
              <p className="reading-kicker text-sm font-semibold uppercase text-lasa-500">{location.mailingTitle}</p>
              <p className="mt-2 text-lasa-700">
                {CONTACT.mailingLine1 || CONTACT.addressLine1}
                <br />
                {CONTACT.mailingLine2 || CONTACT.addressLine2}
              </p>
            </div>
            <ContactActions className="flex flex-col gap-3" />
          </div>
        </div>
        <div className="min-w-0 overflow-hidden rounded-3xl border border-lasa-200 bg-white shadow-[0_20px_40px_-32px_rgba(0,36,108,0.4)]">
          <iframe
            title={location.clinicName}
            src={CONTACT.mapsEmbedUrl}
            className="h-72 w-full max-w-full min-h-[18rem] sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <h3 className="reading-subtitle mt-8 text-3xl font-sans text-lasa-700">{location.directionsTitle}</h3>
      <p className="reading-copy mt-4 text-base text-lasa-600 sm:text-lg">{location.directionsIntro}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={CONTACT.mapsOpenUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-lasa-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-lasa-700"
        >
          {location.openMaps}
        </a>
        <a
          href={CONTACT.mapsAppleUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-lasa-200 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
        >
          {location.openAppleMaps}
        </a>
      </div>
      <p className="mt-6 text-base text-lasa-600">
        <span className="font-semibold text-lasa-700">{location.parkingTitle}: </span>
        {location.parking}
      </p>
    </div>
  );
}
