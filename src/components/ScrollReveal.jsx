export default function ScrollReveal({
  as: Tag = 'div',
  children,
  className = '',
  style,
  // Keep unused motion props so existing call sites stay valid.
  direction: _direction,
  distance: _distance,
  delay: _delay,
  duration: _duration,
  threshold: _threshold,
  rootMargin: _rootMargin,
  blur: _blur,
  scaleFrom: _scaleFrom,
  easing: _easing,
  once: _once,
  ...rest
}) {
  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
