import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { selectedLanguage, setLanguage } = useLanguage();

  return (
    <div className="ml-auto flex gap-2">
      <button
        onClick={() => setLanguage("ka")}
        className={`h-10 px-4 rounded-lg backdrop-blur-lg transition-all ${
          selectedLanguage === "ka"
            ? "bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
      >
        GE
      </button>
      <button
        onClick={() => setLanguage("en")}
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
