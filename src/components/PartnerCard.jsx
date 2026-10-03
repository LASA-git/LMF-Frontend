export default function PartnerCard({ partner }) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noreferrer"
      className="narrative-card flex h-full flex-col overflow-hidden rounded-3xl border border-lasa-200 bg-white p-6 no-underline transition hover:border-lasa-300 sm:p-8"
    >
      <div
        className={`flex h-28 items-center justify-center rounded-2xl px-6 ${
          partner.logoOnDark ? 'bg-lasa-700' : 'bg-lasa-50'
        }`}
      >
        <img src={partner.logo} alt="" className="max-h-16 w-auto max-w-full object-contain" />
      </div>
      <p className="mt-5 text-xl font-semibold text-lasa-700">{partner.name}</p>
    </a>
  );
}
