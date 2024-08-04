import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      employees: "Employees",
      add: "Add Employee",
    },
  },
  pl: {
    translation: {
      employees: "Pracownicy",
      add: "Dodaj pracownika",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "en ",
  fallbackLng: "en",
});
export default i18next;
