import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 17l-4 4 4-4 2.293-2.293a1 1 0 011.414 0L17 14m-5-9l4-4m0 0l4 4m-4-4v4" />
    </svg>
);

const BenefitCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const Benefits: React.FC = () => {
  const { t } = useLanguage();
  
  const benefitsData = [
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: t.benefit1Title,
      description: t.benefit1Desc
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: t.benefit2Title,
      description: t.benefit2Desc
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: t.benefit3Title,
      description: t.benefit3Desc
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.benefitsTitle}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t.benefitsSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
