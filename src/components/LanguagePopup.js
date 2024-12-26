import { useLanguage } from '../context/LanguageContext';

export default function LanguagePopup() {
  const { showLanguagePopup, setLanguage, content } = useLanguage();

  if (!showLanguagePopup) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-all">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center transform transition-all border border-white/10 shadow-2xl">
        <h2 className="text-white text-2xl mb-6">{content.chooseLanguage}</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setLanguage("ka")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 font-bold hover:scale-105 transition-transform"
          >
            {content.georgian}
          </button>
          <button
            onClick={() => setLanguage("en")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 font-bold hover:scale-105 transition-transform"
          >
            {content.english}
          </button>
        </div>
      </div>
    </div>
  );
}
