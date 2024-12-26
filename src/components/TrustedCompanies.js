"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const TrustedCompanies = () => {
  const companies = [
    { name: 'Armani', logo: '/partners/armani.png' },
    { name: 'Big Choice', logo: '/partners/big-choice.png' },
    { name: 'Borjomi', logo: '/partners/borjomi.png' },
    { name: 'Burger Bar', logo: '/partners/burger-bar.webp' },
    { name: 'Consulting Port', logo: '/partners/consulting-port.png' },
    { name: 'Diplomat', logo: '/partners/diplomat.png' },
    { name: 'Elisheva', logo: '/partners/elisheva.png' },
    { name: 'Elit Food', logo: '/partners/elit-food.webp' },
    { name: 'Geo Mart', logo: '/partners/geo-mart.png' },
    { name: 'Green', logo: '/partners/green.png' },
    { name: 'GTA', logo: '/partners/gta.png' },
    { name: 'Innoteam', logo: '/partners/innoteam.png' },
    { name: 'Keburia', logo: '/partners/keburia.png' },
    { name: 'Khiliani', logo: '/partners/khiliani.webp' },
    { name: 'Pikia', logo: '/partners/pikia.png' },
    { name: 'R Group', logo: '/partners/r-group.png' },
    { name: 'Saministro', logo: '/partners/saministro.webp' },
    { name: 'Sky', logo: '/partners/sky.png' },
    { name: 'Synevo', logo: '/partners/synevo.webp' },
    { name: 'Teka', logo: '/partners/teka.webp' },
    { name: 'Win Win', logo: '/partners/win-win.png' }
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
          ჩვენი პარტნიორები
        </h2>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {visibleCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="px-4">
                  <div className="w-32 h-32 mx-auto relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
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
