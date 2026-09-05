export default function LogoWordmark({ className = '', compact = false }) {
  return (
    <div className={`min-w-0 ${className}`}>
      <div className={compact ? 'inline-block max-w-full' : 'mx-auto w-fit max-w-full'}>
        <img
          src="/love-all-serve-all.jpeg"
          alt="Love All Serve All"
          className={`block w-auto max-w-full object-contain ${
            compact ? 'h-8 sm:h-10' : 'h-8 sm:h-9'
          }`}
        />
        <p
          className={`text-center font-sans font-medium text-lasa-600 ${
            compact ? 'mt-1.5 text-sm leading-tight sm:text-base' : 'mt-2 text-sm leading-tight sm:text-base'
          }`}
        >
          Lasa Medical Foundation Inc.
        </p>
      </div>
    </div>
  );
}
