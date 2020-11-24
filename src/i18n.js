import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "Translations/en/common.json";
import commonEs from "Translations/es/common.json";
import commonFr from "Translations/fr/common.json";
import apiEn from "Translations/en/api.json";
import apiEs from "Translations/es/api.json";
import apiFr from "Translations/fr/api.json";

i18n.use(initReactI18next).init({
  // nsSeparator: false,
  // keySeparator: false,
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    // make this more digestible
    en: {
      common: commonEn,
      api: apiEn,
    },
    es: {
      common: commonEs,
      api: apiEs,
    },
    fr: {
      common: commonFr,
      api: apiFr,
    },
  },
});

export default i18n;
