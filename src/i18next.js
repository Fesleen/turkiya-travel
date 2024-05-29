import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import eng from "./locales/eng/translation.json";
import ru from "./locales/ru/translation.json";
import uz from "./locales/uz/translation.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      ru: {
        translation: ru,
      },
      eng: {
        translation: eng,
      },
      uz: {
        translation: uz,
      }
    },
    lng: window.localStorage.getItem('i18nextLng') || 'ru',
    fallbackLng: 'ru',
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage']
    }
  });

export default i18next;
