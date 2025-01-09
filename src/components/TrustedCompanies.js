"use client";

import { useEffect, useState } from 'react';
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

const TrustedCompanies = () => {
  const { content } = useLanguageStore();
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === companies.length - itemsPerView ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [companies.length]);

  const visibleCompanies = [...companies, ...companies.slice(0, itemsPerView)];

  return (
    <div className="w-full max-w-[1200px] mt-16 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
        <h2 className="text-white text-2xl md:text-3xl text-center font-bold mb-12">
          {content.partnersTitle}
        </h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(companies.length + itemsPerView) * (100 / itemsPerView)}%`
            }}
          >
            {visibleCompanies.map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-1/5 px-4"
              >
                <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
