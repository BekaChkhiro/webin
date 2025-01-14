import { useEffect, lazy, Suspense } from 'react';
import useLanguageStore from '../store/languageStore';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Hero from '../components/Hero';
import Logo from '../assets/images/logo/infinitylogofinal1.webp';

// Lazy load non-critical components
const LanguagePopup = lazy(() => import('../components/LanguagePopup'));
const FloatingShapes = lazy(() => import('../components/FloatingShapes'));
const PriceTable = lazy(() => import('../components/PriceTable'));
const TrustedCompanies = lazy(() => import('../components/TrustedCompanies'));

function HomePage() {
  const { initialize } = useLanguageStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      <Suspense fallback={null}>
        <LanguagePopup />
      </Suspense>
      <LanguageSwitcher />
      <Suspense fallback={null}>
        <FloatingShapes />
      </Suspense>

      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#1a1c20] to-[#2a2d35]">
        <img 
          src={Logo} 
          alt="Logo" 
          title="/" 
          className="w-1/5 max-w-[1200px] mb-8"
          width="240"
          height="80"
          fetchPriority="high"
        />
        <Hero />
        <Suspense fallback={null}>
          <PriceTable />
        </Suspense>
        <Suspense fallback={null}>
          <TrustedCompanies />
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
