import React, { useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Menu, X, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'sobre', label: t.about },
    { id: 'servicos', label: t.services },
    { id: 'eua', label: t.usa },
    { id: 'contato', label: t.contact },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const headerWhatsappLink = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I would like to schedule a consultation.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF7F2] ${
          isScrolled
            ? 'shadow-md shadow-stone-900/10 py-2 sm:py-2.5'
            : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Lockup: Golden Monogram Emblem + Classic Luxury Typography */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 sm:gap-4 text-left group cursor-pointer focus:outline-none"
            >
              {/* Golden 3D Emblem with Psi Monogram */}
              <div className="relative shrink-0">
                <img
                  src={ASSETS.emblem}
                  alt="Emblema Dra. Tatiane Vilela"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(201,162,39,0.35)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Exact Typography Lockup as in mockup */}
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl sm:text-2xl md:text-[25px] font-bold tracking-tight text-[#1C1814] leading-tight">
                  Dra. Tatiane Vilela
                </span>

                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#8C631A] leading-snug mt-0.5">
                  <span>{lang === 'pt' ? 'PSICÓLOGA' : 'PSYCHOLOGIST'}</span>
                  <span className="text-[#C9A227]">|</span>
                  <span>{lang === 'pt' ? 'SEXÓLOGA' : 'SEXOLOGIST'}</span>
                </div>

                <span className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-[#6B5023] font-medium leading-tight">
                  {lang === 'pt'
                    ? 'ESPECIALISTA EM SEXUALIDADE HUMANA'
                    : 'SPECIALIST IN HUMAN SEXUALITY'}
                </span>

                {/* Thin golden divider with CRP */}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                  <span className="h-[1px] w-6 sm:w-10 bg-[#C9A227]/70" />
                  <span className="text-[9px] sm:text-[10px] tracking-wider text-[#8C631A] font-semibold font-mono">
                    {CLINIC_INFO.crp}
                  </span>
                  <span className="h-[1px] w-6 sm:w-10 bg-[#C9A227]/70" />
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                
                // Active button (e.g. Início) styled as the dark brown pill button from the mockup
                if (isActive) {
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#3F2B16] text-[#FFF9F0] shadow-sm hover:bg-[#34220F] transition-all cursor-pointer"
                    >
                      {link.label}
                    </button>
                  );
                }

                // Inactive links styled as clean, dark, elegant links
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="px-3.5 py-2 text-sm font-medium text-[#292524] hover:text-[#8C631A] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Language Switcher + WhatsApp CTA */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-[#EDE6DC] rounded-full p-1 border border-[#DFD5C6]">
                <button
                  type="button"
                  onClick={() => onLanguageChange('pt')}
                  aria-label="Português"
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === 'pt'
                      ? 'bg-[#3F2B16] text-[#DFC56E] shadow-xs'
                      : 'text-[#6B5A4B] hover:text-[#1C1814]'
                  }`}
                >
                  <span>🇧🇷</span>
                  <span>PT</span>
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  aria-label="English"
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === 'en'
                      ? 'bg-[#3F2B16] text-[#DFC56E] shadow-xs'
                      : 'text-[#6B5A4B] hover:text-[#1C1814]'
                  }`}
                >
                  <span>🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#3F2B16] hover:bg-[#EDE6DC] focus:outline-none"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#EDE6DC] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
                      isActive
                        ? 'bg-[#3F2B16] text-[#DFC56E]'
                        : 'text-[#292524] hover:bg-[#EDE6DC]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#EDE6DC]">
              <a
                href={headerWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#25D366] text-white shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.ctaHeader}</span>
              </a>
            </div>
          </div>
        )}

        {/* Elegant Curved Golden Wave Ribbon along Header Bottom */}
        <div className="absolute left-0 right-0 -bottom-2 sm:-bottom-2.5 pointer-events-none z-10 overflow-hidden h-3 sm:h-4">
          <svg
            viewBox="0 0 1440 24"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C380,18 760,24 1140,8 C1280,3 1380,14 1440,20 L1440,24 L0,24 Z"
              fill="url(#headerGoldRibbon)"
            />
            <defs>
              <linearGradient id="headerGoldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C631A" />
                <stop offset="30%" stopColor="#DFC56E" />
                <stop offset="60%" stopColor="#FFF1B8" />
                <stop offset="85%" stopColor="#C9A227" />
                <stop offset="100%" stopColor="#8C631A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>
      {/* Spacer to offset fixed header */}
      <div className="h-24 sm:h-28" />
    </>
  );
};
