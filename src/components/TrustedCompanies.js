import { useEffect, useState, useCallback, memo } from 'react';
import useLanguageStore from '../store/languageStore';

// Import partner images
import ArmaniLogo from '../assets/images/partners/armani.png';
import BigChoiceLogo from '../assets/images/partners/big-choice.png';
import BorjomiLogo from '../assets/images/partners/borjomi.png';
import BurgerBarLogo from '../assets/images/partners/burger-bar.webp';
import ConsultingPortLogo from '../assets/images/partners/consulting-port.png';
import DiplomatLogo from '../assets/images/partners/diplomat.png';
import ElishevaLogo from '../assets/images/partners/elisheva.png';
import ElitFoodLogo from '../assets/images/partners/elit-food.webp';
import GeoMartLogo from '../assets/images/partners/geo-mart.png';
import GreenLogo from '../assets/images/partners/green.png';
import GTALogo from '../assets/images/partners/gta.png';
import InnoteamLogo from '../assets/images/partners/innoteam.png';
import KeburiaLogo from '../assets/images/partners/keburia.png';
import KhilianiLogo from '../assets/images/partners/khiliani.webp';
import PikiaLogo from '../assets/images/partners/pikia.png';
import RGroupLogo from '../assets/images/partners/r-group.png';
import SaministroLogo from '../assets/images/partners/saministro.webp';
import SkyLogo from '../assets/images/partners/sky.png';
import SynevoLogo from '../assets/images/partners/synevo.webp';
import TekaLogo from '../assets/images/partners/teka.webp';
import WinWinLogo from '../assets/images/partners/win-win.png';

const TrustedCompanies = memo(() => {
  const { content } = useLanguageStore();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const companies = [
    { name: 'Armani', logo: ArmaniLogo },
    { name: 'Big Choice', logo: BigChoiceLogo },
    { name: 'Borjomi', logo: BorjomiLogo },
    { name: 'Burger Bar', logo: BurgerBarLogo },
    { name: 'Consulting Port', logo: ConsultingPortLogo },
    { name: 'Diplomat', logo: DiplomatLogo },
    { name: 'Elisheva', logo: ElishevaLogo },
    { name: 'Elit Food', logo: ElitFoodLogo },
    { name: 'Geo Mart', logo: GeoMartLogo },
    { name: 'Green', logo: GreenLogo },
    { name: 'GTA', logo: GTALogo },
    { name: 'Innoteam', logo: InnoteamLogo },
    { name: 'Keburia', logo: KeburiaLogo },
    { name: 'Khiliani', logo: KhilianiLogo },
    { name: 'Pikia', logo: PikiaLogo },
    { name: 'R Group', logo: RGroupLogo },
    { name: 'Saministro', logo: SaministroLogo },
    { name: 'Sky', logo: SkyLogo },
    { name: 'Synevo', logo: SynevoLogo },
    { name: 'Teka', logo: TekaLogo },
    { name: 'Win Win', logo: WinWinLogo }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const handlePrevPage = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleNextPage = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePageClick = useCallback((pageIndex) => {
    setIsAutoPlaying(false);
    setCurrentPage(pageIndex);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextPage();
    } else if (isRightSwipe) {
      handlePrevPage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [totalPages, isAutoPlaying]);

  return (
    <div className="w-full max-w-[1200px] mt-16 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col items-center">
        <h4 className="text-white text-2xl md:text-3xl font-bold mb-8 text-center">
          {content.trustedTitle}
        </h4>
        
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all z-10"
            aria-label="Previous page"
          >
            ←
          </button>
          <button
            onClick={handleNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all z-10"
            aria-label="Next page"
          >
            →
          </button>

          {/* Carousel Content */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 flex gap-4"
                >
                  {companies
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((company, index) => (
                      <div
                        key={company.name}
                        className="flex-1 group flex flex-col items-center gap-2"
                      >
                        <div className="rounded-xl h-32 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={company.name}
                            title={company.name}
                            width="200"
                            height="133"
                            loading={index > 4 ? "lazy" : "eager"}
                            className="max-h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <span className="text-white/80 group-hover:text-white text-sm text-center transition-colors">
                          {company.name}
                        </span>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index
                    ? 'bg-white w-6'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

TrustedCompanies.displayName = 'TrustedCompanies';

export default TrustedCompanies;
