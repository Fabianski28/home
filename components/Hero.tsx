import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center -mt-[80px]">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
       style={{ backgroundImage: "url('/images/heroimage.jpg')" }}
>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-white">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
          {t.heroSubtitle}
        </p>
     <a
  href="#contact"
  style={{ backgroundColor: '#c57b57' }}
  className="text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a35d42')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c57b57')}
>
  {t.heroButton}
</a>

      </div>
    </section>
  );
};

export default Hero;
