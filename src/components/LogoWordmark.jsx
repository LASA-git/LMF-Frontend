import { useEffect, useRef } from 'react';

export default function LogoWordmark({ className = '', compact = false, centered = false }) {
  const aligned = !compact || centered;
  const boxRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!compact) return undefined;

    const box = boxRef.current;
    const inner = innerRef.current;
    if (!box || !inner) return undefined;

    const fit = () => {
      inner.style.transform = 'none';
      const available = box.clientWidth;
      const needed = inner.scrollWidth;
      const scale = needed > 0 ? Math.min(1, available / needed) : 1;
      inner.style.transform = scale < 1 ? `scale(${scale})` : 'none';
    };

    const observer = new ResizeObserver(fit);
    observer.observe(box);
    fit();
    return () => observer.disconnect();
  }, [compact]);

  return (
    <div ref={boxRef} className={compact ? `logo-lockup ${className}`.trim() : className}>
      <div
        ref={innerRef}
        className={
          aligned
            ? 'logo-lockup-inner mx-auto flex w-max max-w-none origin-center flex-col items-center text-center'
            : 'logo-lockup-inner flex w-max max-w-none origin-left flex-col items-start text-left'
        }
      >
        <p
          className={
            compact
              ? 'logo-lockup-name whitespace-nowrap font-logo font-bold uppercase leading-[1.15] text-lasa-700'
              : 'whitespace-nowrap font-logo font-bold uppercase leading-[1.15] tracking-[0.04em] text-lasa-700 text-[clamp(0.95rem,3vw,1.25rem)]'
          }
        >
          LASA Medical Foundation
        </p>
        <p
          className={
            compact
              ? 'logo-lockup-motto mt-0.5 whitespace-nowrap font-logo font-medium uppercase leading-tight text-lasa-gold'
              : 'mt-1 whitespace-nowrap font-logo font-medium uppercase leading-tight tracking-[0.06em] text-lasa-gold text-[clamp(0.58rem,2vw,0.8rem)]'
          }
        >
          Selfless Service • Compassionate Care
        </p>
      </div>
    </div>
  );
}
