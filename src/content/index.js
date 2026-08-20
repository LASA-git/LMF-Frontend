import { en } from './en';
import { es } from './es';

export const contentByLang = { en, es };

export function getContent(lang) {
  return contentByLang[lang] || en;
}
