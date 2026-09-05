export default function LogoWordmark({ className = '', compact = false }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <div className={compact ? 'w-full max-w-full' : 'mx-auto w-fit max-w-full'}>
        <img
          src="/love-all-serve-all.jpeg"
          alt="Love All Serve All"
          className={`block w-auto max-w-full object-contain object-left ${
            compact ? 'h-6 sm:h-8 lg:h-10' : 'mx-auto h-8 sm:h-9'
          }`}
        />
        <p
          className={`font-sans font-medium text-lasa-600 ${
            compact
              ? 'mt-1 text-[11px] leading-tight sm:text-sm lg:text-base'
              : 'mt-2 text-center text-sm leading-tight sm:text-base'
          }`}
        >
          Lasa Medical Foundation Inc.
        </p>
      </div>
    </div>
  );
}
