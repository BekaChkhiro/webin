"use client";

import useLanguageStore from '../store/languageStore';

export default function LanguageSwitcher() {
  const { selectedLanguage, changeLanguage } = useLanguageStore();

  return (
    <div className="fixed bottom-4 left-4 flex gap-2 z-50">
      <button
        onClick={() => changeLanguage("ka")}
        className={`h-10 px-4 rounded-lg backdrop-blur-lg transition-all ${
          selectedLanguage === "ka"
            ? "bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
      >
        GE
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`h-10 px-4 rounded-lg backdrop-blur-lg transition-all ${
          selectedLanguage === "en"
            ? "bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
      >
        EN
      </button>
    </div>
  );
}
