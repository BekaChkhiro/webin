import { useEffect } from 'react';
import useLanguageStore from '../store/languageStore';
import LanguagePopup from '../components/LanguagePopup';
import LanguageSwitcher from '../components/LanguageSwitcher';
import FloatingShapes from '../components/FloatingShapes';
import PriceTable from '../components/PriceTable';
import TrustedCompanies from '../components/TrustedCompanies';
import Hero from '../components/Hero';
import Logo from '../assets/images/logo/infinitylogofinal1.webp';

function HomePage() {
  const { initialize } = useLanguageStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      <LanguagePopup />
      <LanguageSwitcher />
      <FloatingShapes />

      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#1a1c20] to-[#2a2d35]">
        <img src={Logo} alt="Logo" title="/" className="w-1/5 max-w-[1200px] mb-8" />
        <Hero />
        <PriceTable />
        <TrustedCompanies />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <HomePage />
  );
}
