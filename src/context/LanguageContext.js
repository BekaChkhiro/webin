import { createContext, useContext, useState, useEffect } from 'react';

export const content = {
  en: {
    siteTitle: "Website Development",
    mainTitle: "Create Your Ideal Website",
    feature1Title: "Modern Design",
    feature1Text: "Contemporary and attractive design that will make your brand stand out",
    feature2Title: "Mobile Adaptation",
    feature2Text: "Perfectly optimized for all devices",
    feature3Title: "High Performance",
    feature3Text: "Fast, secure, and optimized website",
    ctaButton: "Contact Us",
    downloadButton: "Download Presentation",
    presentationFile: "infinity-english.pdf",
    chooseLanguage: "Choose Language",
    georgian: "Georgian",
    english: "English",
    partnersTitle: "Our Partners",
    partners: [
      { name: "Armani", logo: "/partners/armani.png" },
      { name: "Big Choice", logo: "/partners/big-choice.png" },
      { name: "Borjomi", logo: "/partners/borjomi.png" },
      { name: "Burger Bar", logo: "/partners/burger-bar.webp" },
      { name: "Consulting Port", logo: "/partners/consulting-port.png" },
      { name: "Diplomat", logo: "/partners/diplomat.png" },
      { name: "Elisheva", logo: "/partners/elisheva.png" },
      { name: "Elit Food", logo: "/partners/elit-food.webp" },
      { name: "Geo Mart", logo: "/partners/geo-mart.png" },
      { name: "Green", logo: "/partners/green.png" },
      { name: "GTA", logo: "/partners/gta.png" },
      { name: "Innoteam", logo: "/partners/innoteam.png" },
      { name: "Keburia", logo: "/partners/keburia.png" },
      { name: "Khiliani", logo: "/partners/khiliani.webp" },
      { name: "Pikia", logo: "/partners/pikia.png" },
      { name: "R Group", logo: "/partners/r-group.png" },
      { name: "Saministro", logo: "/partners/saministro.webp" },
      { name: "Sky", logo: "/partners/sky.png" },
      { name: "Synevo", logo: "/partners/synevo.webp" },
      { name: "Teka", logo: "/partners/teka.webp" },
      { name: "Win Win", logo: "/partners/win-win.png" }
    ]
  },
  ka: {
    siteTitle: "საიტის დამზადება",
    mainTitle: "შექმენით თქვენი იდეალური ვებსაიტი",
    feature1Title: "მოდერნული დიზაინი",
    feature1Text: "თანამედროვე და მიმზიდველი დიზაინი, რომელიც თქვენს ბრენდს გამოარჩევს",
    feature2Title: "მობილური ადაპტაცია",
    feature2Text: "იდეალურად მორგებული ყველა მოწყობილობაზე",
    feature3Title: "მაღალი წარმადობა",
    feature3Text: "სწრაფი, უსაფრთხო და ოპტიმიზირებული ვებსაიტი",
    ctaButton: "დაგვიკავშირდით",
    downloadButton: "პრეზენტაციის გადმოწერა",
    presentationFile: "INFINITY SOLUTIONS.pdf",
    chooseLanguage: "აირჩიეთ ენა",
    georgian: "ქართული",
    english: "ინგლისური",
    partnersTitle: "ჩვენი პარტნიორები",
    partners: [
      { name: "არმანი", logo: "/partners/armani.png" },
      { name: "ბიგ ჩოისი", logo: "/partners/big-choice.png" },
      { name: "ბორჯომი", logo: "/partners/borjomi.png" },
      { name: "ბურგერ ბარი", logo: "/partners/burger-bar.webp" },
      { name: "კონსალტინგ პორტი", logo: "/partners/consulting-port.png" },
      { name: "დიპლომატი", logo: "/partners/diplomat.png" },
      { name: "ელიშევა", logo: "/partners/elisheva.png" },
      { name: "ელიტ ფუდი", logo: "/partners/elit-food.webp" },
      { name: "გეო მარტი", logo: "/partners/geo-mart.png" },
      { name: "გრინი", logo: "/partners/green.png" },
      { name: "ჯითიეი", logo: "/partners/gta.png" },
      { name: "ინოთიმი", logo: "/partners/innoteam.png" },
      { name: "ქებურია", logo: "/partners/keburia.png" },
      { name: "ხილიანი", logo: "/partners/khiliani.webp" },
      { name: "პიკია", logo: "/partners/pikia.png" },
      { name: "არ გრუპი", logo: "/partners/r-group.png" },
      { name: "სამინისტრო", logo: "/partners/saministro.webp" },
      { name: "სქაი", logo: "/partners/sky.png" },
      { name: "სინევო", logo: "/partners/synevo.webp" },
      { name: "თეკა", logo: "/partners/teka.webp" },
      { name: "ვინ ვინი", logo: "/partners/win-win.png" }
    ]
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (!savedLanguage) {
      setShowLanguagePopup(true);
    } else {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang) => {
    localStorage.setItem("selectedLanguage", lang);
    setSelectedLanguage(lang);
    setShowLanguagePopup(false);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        selectedLanguage, 
        setLanguage, 
        showLanguagePopup, 
        setShowLanguagePopup,
        content: content[selectedLanguage]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
