import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-lg font-bold">Var Alex Nettoyage</p>
        <p className="mt-2 text-gray-400">{t.footerSlogan}</p>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Var Alex Nettoyage {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
