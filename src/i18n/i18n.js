// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducciones aquí
import translationEN from "./translations/translationsEN.json";
import translationES from "./translations/translationES.json";

const userLanguage = navigator.language || navigator.userLanguage;


const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: userLanguage.substring(0.2),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
