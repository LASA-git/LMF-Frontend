export default function LogoWordmark({ className = '', compact = false }) {
  // Original LASA wordmark green sampled from brand artwork
  const lasaDark = '#18483C';

  return (
    <div className={className}>
      <div
        className={
          compact
            ? 'inline-flex max-w-full flex-col items-stretch'
            : 'mx-auto inline-flex max-w-full flex-col items-stretch text-center'
        }
      >
        <p
          className={`font-sans font-bold ${
            compact
              ? 'text-[0.8125rem] leading-[1.15] sm:whitespace-nowrap sm:text-base lg:text-lg xl:text-xl'
              : 'whitespace-nowrap text-lg leading-tight sm:text-xl'
          }`}
          style={{ color: lasaDark }}
        >
          Lasa Medical Foundation Inc.
        </p>
        <div
          className={`w-full ${compact ? 'mt-1 h-px' : 'mt-1.5 h-px'}`}
          style={{ backgroundColor: lasaDark }}
          aria-hidden="true"
        />
        <p
          className={`text-center font-sans font-bold uppercase tracking-[0.06em] ${
            compact
              ? 'mt-1 text-[0.65rem] leading-tight sm:text-xs lg:text-sm'
              : 'mt-2 text-sm leading-tight sm:text-base'
          }`}
          style={{ color: lasaDark }}
        >
          Love All Serve All
        </p>
      </div>
    </div>
  );
}
