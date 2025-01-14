import { memo } from 'react';

const Feature = memo(({ title, text }) => {
  return (
    <div 
      className="text-white p-6 rounded-xl bg-white/5 transform-gpu hover:scale-105 hover:bg-white/10 transition-all cursor-pointer group"
      style={{ willChange: 'transform' }}
    >
      <h3 className="text-[#64ffda] text-xl mb-4">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed">{text}</p>
    </div>
  );
});

Feature.displayName = 'Feature';

export default Feature;
