export function scheduleEventPath(lang, id) {
  return lang === 'es' ? `/es/horario/${id}` : `/en/schedule/${id}`;
}

export function scheduleLookupPath(lang) {
  return lang === 'es' ? '/es/horario/consulta' : '/en/schedule/lookup';
}

export function getAlternateLangPath(pathname, targetLang) {
  const normalized = pathname.replace(/\/$/, '') || '/';

  const enEvent = normalized.match(/^\/en\/schedule\/([^/]+)$/);
  if (enEvent && enEvent[1] !== 'lookup') {
    return targetLang === 'es' ? `/es/horario/${enEvent[1]}` : normalized;
  }
  const esEvent = normalized.match(/^\/es\/horario\/([^/]+)$/);
  if (esEvent && esEvent[1] !== 'consulta') {
    return targetLang === 'en' ? `/en/schedule/${esEvent[1]}` : normalized;
  }

  const pairs = [
    ['/en/schedule/lookup', '/es/horario/consulta'],
    ['/en/clinic', '/es/clinica'],
    ['/en/team', '/es/equipo'],
    ['/en/partners', '/es/aliados'],
    ['/en/contact', '/es/contacto'],
    ['/en/donate', '/es/donar'],
    ['/en', '/es'],
    ['/en/schedule', '/es/horario'],
    ['/en/privacy', '/es/privacidad'],
  ];

  for (const [enPath, esPath] of pairs) {
    if (normalized === enPath || normalized === esPath) {
      return targetLang === 'es' ? esPath : enPath;
    }
  }

  return targetLang === 'es' ? '/es' : '/en';
}
