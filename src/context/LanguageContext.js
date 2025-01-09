"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showLanguagePopup, setShowLanguagePopup] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      setShowLanguagePopup(false);
    }
  }, []);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('language', language);
    setShowLanguagePopup(false);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        selectedLanguage, 
        changeLanguage, 
        content: translations[selectedLanguage],
        showLanguagePopup,
        setShowLanguagePopup
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
