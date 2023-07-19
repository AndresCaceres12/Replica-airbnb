// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['en', 'es'],
    backend: {
        loadPath: "/public/{{lng}}/DataPrincipal.json", // Ajusta la ruta para que coincida con la estructura de tus archivos JSON de traducción.
      }
  });

export default i18n;
