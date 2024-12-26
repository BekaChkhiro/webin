import { useLanguage } from '../context/LanguageContext';

export default function PriceTable() {
  const { content } = useLanguage();

  const plans = [
    {
      name: 'Starter',
      price: '50₾',
      features: [
        '1 GB SSD',
        '10 GB ტრაფიკი',
        '1 დომეინი',
        'SSL სერტიფიკატი',
        'ელ-ფოსტა'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '100₾',
      features: [
        '5 GB SSD',
        '50 GB ტრაფიკი',
        '3 დომეინი',
        'SSL სერტიფიკატი',
        'ელ-ფოსტა',
        'დომეინის რეგისტრაცია'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '200₾',
      features: [
        '10 GB SSD',
        'ულიმიტო ტრაფიკი',
        '5 დომეინი',
        'SSL სერტიფიკატი',
        'ელ-ფოსტა',
        'დომეინის რეგისტრაცია',
        'ყოველდღიური ბექაფი'
      ],
      popular: false
    }
  ];

  return (
    <div className="w-full max-w-[1200px] p-4 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          ჰოსტინგის პაკეტები
        </h2>
        <p className="text-gray-300">
          აირჩიეთ თქვენზე მორგებული პაკეტი
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
              plan.popular
                ? 'border-[#64ffda] shadow-[#64ffda]/20 shadow-lg'
                : 'border-white/10'
            } transition-all duration-300 hover:transform hover:scale-105`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  პოპულარული
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-[#64ffda]">
                {plan.price}
                <span className="text-sm text-gray-400">/თვეში</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center text-gray-300"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-[#64ffda]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#64ffda] text-black hover:bg-[#64ffda]/90'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              შეკვეთა
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
