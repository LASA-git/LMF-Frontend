export function formatEventWhen(startsAt, endsAt, lang) {
  const locale = lang === 'es' ? 'es-US' : 'en-US';
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  const date = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(start);
  const time = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' });
  return `${date} · ${time.format(start)} – ${time.format(end)}`;
}

export function spotsLabel(copy, event) {
  if (!event || event.spotsRemaining <= 0) return copy.full;
  return copy.spots.replace('{n}', String(event.spotsRemaining)).replace('{total}', String(event.capacity));
}
