import { create } from 'zustand';
import { translations } from '../translations/translations';

const useLanguageStore = create((set) => ({
  selectedLanguage: 'ka',
  content: translations['ka'],
  initialized: false,
  initialize: () => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') || 'ka';
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
