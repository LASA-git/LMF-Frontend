export default function LogoWordmark({ className = '', compact = false }) {
  // Original LASA wordmark green sampled from brand artwork
  const lasaDark = '#18483C';

  return (
    <div className={`min-w-0 ${className}`}>
      <div
        className={
          compact
            ? 'inline-flex max-w-full flex-col items-stretch'
            : 'mx-auto inline-flex max-w-full flex-col items-stretch text-center'
        }
      >
        <p
          className={`whitespace-nowrap font-sans font-bold ${
            compact
              ? 'text-base leading-tight sm:text-lg lg:text-xl xl:text-2xl'
              : 'text-lg leading-tight sm:text-xl'
          }`}
          style={{ color: lasaDark }}
        >
          Lasa Medical Foundation Inc.
        </p>
        <div
          className={`w-full ${compact ? 'mt-1.5 h-px' : 'mt-1.5 h-px'}`}
          style={{ backgroundColor: lasaDark }}
          aria-hidden="true"
        />
        <p
          className={`text-center font-sans font-bold uppercase tracking-[0.06em] ${
            compact
              ? 'mt-1.5 text-xs leading-tight sm:text-sm lg:text-base'
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
