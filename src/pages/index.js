import { LanguageProvider } from '../context/LanguageContext';
import LanguagePopup from '../components/LanguagePopup';
import FloatingShapes from '../components/FloatingShapes';
import PriceTable from "@/components/PriceTable";
import TrustedCompanies from '../components/TrustedCompanies';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <>
      <LanguagePopup />
      <FloatingShapes />

      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#1a1c20] to-[#2a2d35]">
        <Hero />
        <PriceTable />
        <TrustedCompanies />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
