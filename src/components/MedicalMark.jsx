export default function MedicalMark({ className = '', title = 'Medical care' }) {
  const decorative = !title;

  return (
    <img
      src="/caduceus-mark.png"
      alt={decorative ? '' : title}
      aria-hidden={decorative ? true : undefined}
      className={`w-auto object-contain ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}
