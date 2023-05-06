import { ui, defaultLang, languages } from "./ui";

export function useTranslations(lang?: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[keyof typeof languages]) {
    return ui[lang || defaultLang][key];
  };
}
