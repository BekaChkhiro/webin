import { create } from 'zustand';
import { translations } from '../translations/translations';

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
};

const useLanguageStore = create((set) => ({
  selectedLanguage: getInitialLanguage(),
  content: translations[getInitialLanguage()],
  initialized: false,
  initialize: () => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') || 'en';
      set({
        selectedLanguage: savedLanguage,
        content: translations[savedLanguage],
        initialized: true
      });
    }
  },
  changeLanguage: (language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
    set({
      selectedLanguage: language,
      content: translations[language]
    });
  }
}));

export default useLanguageStore;
