"use client";

import LanguageSwitcher from './LanguageSwitcher';
import Feature from './Feature';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { content } = useLanguage();

  return (
    <div className="w-full max-w-[1200px] p-4 animate-container-float perspective-1000">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden transform-gpu hover:scale-[1.02] transition-transform">
        {/* Site Link */}
        <a href="https://infinity.ge/%e1%83%95%e1%83%94%e1%83%91-%e1%83%a1%e1%83%90%e1%83%98%e1%83%a2%e1%83%98%e1%83%a1-%e1%83%93%e1%83%90%e1%83%9b%e1%83%96%e1%83%90%e1%83%93%e1%83%94%e1%83%91%e1%83%90/" 
           className="inline-block mb-4 group">
          <h1 className="text-[#61f5db] text-base group-hover:text-[#48bfe3] transition-all relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#48bfe3] after:transition-all group-hover:after:w-full">
            {content.siteTitle}
          </h1>
        </a>

        {/* Main Title */}
        <h3 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">
          {content.mainTitle}
        </h3>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <Feature
              key={i}
              title={content[`feature${i}Title`]}
              text={content[`feature${i}Text`]}
            />
          ))}
        </div>

        {/* Buttons Container */}
        <div className="flex flex-wrap gap-4 mt-8 items-center">
          <a href="tel:+995568694879" 
             className="md:hidden bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 px-8 py-3 rounded-full font-bold hover:scale-110 transition-transform">
            {content.ctaButton}
          </a>
          <a href={content.presentationFile} 
             download 
             className="bg-gradient-to-r from-[#48bfe3] to-[#64ffda] text-gray-900 px-8 py-3 rounded-full font-bold hover:scale-110 transition-transform">
            {content.downloadButton}
          </a>
          
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Hero;
