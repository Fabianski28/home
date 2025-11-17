import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLanguage();

  const languages = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
  ] as const;

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`text-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 ${
            locale === lang.code
              ? 'transform scale-125 opacity-100 cursor-default'
              : 'opacity-60 hover:opacity-100 hover:scale-110'
          }`}
          title={`Changer la langue en ${lang.name}`}
          aria-label={`Set language to ${lang.name}`}
          aria-pressed={locale === lang.code}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#0A2C47] shadow-md' : 'bg-transparent'
  }`}
>
  <div className="container mx-auto px-8 py-2 flex justify-between items-center">
    {/* Logo */}
    <a href="#hero" className="flex items-center">
      <img src="/images/LogoHome.png" alt="Maison Nette" className="h-16 w-auto" />
    </a>

    {/* Nav desktop */}
    <nav className="hidden md:flex items-center space-x-6">
      <a href="#avantages" className="text-white hover:text-[#B87333] transition-colors">
        {t.navBenefits}
      </a>
      <a href="#avant-apres" className="text-white hover:text-[#B87333] transition-colors">
        {t.navBeforeAfter}
      </a>

      <a
        href="#contact"
        className="bg-[#B87333] text-white px-4 py-2 rounded-full hover:bg-[#d18445] transition-all duration-300 shadow"
      >
        {t.navContact}
      </a>

      {/* Language Switcher desktop */}
      <div className="ml-4">
        <LanguageSwitcher />
      </div>
    </nav>

    {/* Mobile */}
    <div className="flex md:hidden items-center space-x-2">
      <LanguageSwitcher />

      <a
        href="#contact"
        className="bg-[#B87333] text-white px-4 py-2 rounded-full hover:bg-[#d18445] transition-all duration-300 shadow"
      >
        {t.navContactMobile}
      </a>
    </div>
  </div>
</header>

  );
};

export default Header;
