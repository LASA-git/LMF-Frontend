const PATH_PAIRS = [
  ['/en', '/es'],
  ['/en/schedule', '/es/horario'],
  ['/en/privacy', '/es/privacidad'],
];

export function getAlternateLangPath(pathname, targetLang) {
  const normalized = pathname.replace(/\/$/, '') || '/';

  for (const [enPath, esPath] of PATH_PAIRS) {
    if (normalized === enPath || normalized === esPath) {
      return targetLang === 'es' ? esPath : enPath;
    }
  }

  return targetLang === 'es' ? '/es' : '/en';
}
