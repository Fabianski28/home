import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="qui-sommes-nous" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src="images/image2.jpg" 
              alt="Équipe de nettoyage professionnelle Maison Nette" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t.aboutUsTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.aboutUsContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
