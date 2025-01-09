"use client";

import useLanguageStore from '../store/languageStore';
import { useState } from 'react';
import ContactFormPopup from './ContactFormPopup';

const PriceTable = () => {
  const { content } = useLanguageStore();
  const t = content.pricing;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: t.plans.basic.name,
      features: t.plans.basic.features,
      price: '500₾',
      isMiddle: false,
    },
    {
      name: t.plans.standard.name,
      features: t.plans.standard.features,
      price: '1000₾',
      isMiddle: true,
    },
    {
      name: t.plans.premium.name,
      features: t.plans.premium.features,
      price: '2000₾',
      isMiddle: false,
    }
  ];

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
    setIsPopupOpen(true);
  };

  return (
    <div className="w-full max-w-[1200px] p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">
            {t.title}
          </h2>
          <p className="text-[#61f5db] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                backdrop-blur-lg rounded-2xl p-8 border shadow-xl relative overflow-hidden
                ${plan.isMiddle 
                  ? 'bg-gradient-to-br from-[#64ffda]/10 to-[#48bfe3]/10 border-[#64ffda] md:-translate-y-4 z-10' 
                  : 'bg-white/5 border-white/10'
                }
              `}
            >              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-4xl font-bold ${plan.isMiddle ? 'text-[#64ffda]' : 'text-[#61f5db]'}`}>
                    {plan.price}
                  </span>
                  <span className="text-white/60">/თვეში</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-white/80 flex items-start gap-3">
                    <span className={`flex-shrink-0 ${plan.isMiddle ? 'text-[#64ffda]' : 'text-[#61f5db]'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => handlePlanClick(plan.name)}
                className={`
                  w-full px-8 py-3 rounded-full font-bold
                  ${plan.isMiddle 
                    ? 'bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 shadow-lg shadow-[#64ffda]/20' 
                    : 'bg-white/10 text-white border border-white/20'
                  }
                `}
              >
                {t.order}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Popup */}
      {isPopupOpen && (
        <ContactFormPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  );
};

export default PriceTable;
