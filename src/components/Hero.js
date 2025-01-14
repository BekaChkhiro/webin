"use client";

import { memo } from 'react';
import Feature from './Feature';
import useLanguageStore from '../store/languageStore';

const Hero = memo(() => {
  const { content } = useLanguageStore();

  return (
    <div className="w-full max-w-[1200px] p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
        {/* Site Link */}
        <a href="https://infinity.ge/%e1%83%95%e1%83%94%e1%83%91-%e1%83%a1%e1%83%90%e1%83%98%e1%83%a2%e1%83%98%e1%83%a1-%e1%83%93%e1%83%90%e1%83%9b%e1%83%96%e1%83%90%e1%83%93%e1%83%94%e1%83%91%e1%83%90/" 
           title={content.siteTitle}
           className="inline-block mb-4 group">
          <h1 className="text-[#61f5db] text-base">
            {content.siteTitle}
          </h1>
        </a>

        {/* Main Title */}
        <h3 
          className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight"
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '0 500px'
          }}
        >
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
             title={content.ctaButton}
             className="md:hidden bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 px-8 py-3 rounded-full font-bold"
             rel="noopener"
          >
            {content.ctaButton}
          </a>
          <a href={content.presentationFile} 
             title={content.presentationFile}
             download 
             className="bg-gradient-to-r from-[#48bfe3] to-[#64ffda] text-gray-900 px-8 py-3 rounded-full font-bold"
             rel="noopener"
          >
            {content.downloadButton}
          </a>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
