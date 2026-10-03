export default function LogoWordmark({ className = '', compact = false, centered = false }) {
  const aligned = !compact || centered;
  const nameSize = compact
    ? 'text-[0.58rem] sm:text-[clamp(0.72rem,2.2vw,1.05rem)]'
    : 'text-[clamp(0.95rem,3vw,1.25rem)]';
  const mottoSize = compact
    ? 'text-[0.36rem] sm:text-[clamp(0.45rem,1.5vw,0.68rem)]'
    : 'text-[clamp(0.58rem,2vw,0.8rem)]';

  return (
    <div className={className}>
      <div
        className={
          aligned
            ? 'mx-auto flex w-full max-w-full flex-col items-center text-center'
            : 'flex w-full max-w-full flex-col items-start text-left'
        }
      >
        <p
          className={`whitespace-nowrap font-logo font-bold uppercase leading-[1.15] tracking-[0.04em] text-lasa-700 ${nameSize}`}
        >
          LASA Medical Foundation
        </p>
        <p
          className={`mt-1 whitespace-nowrap font-logo font-medium uppercase leading-tight tracking-[0.06em] text-lasa-gold ${mottoSize}`}
        >
          Selfless Service • Compassionate Care
        </p>
      </div>
    </div>
  );
}
