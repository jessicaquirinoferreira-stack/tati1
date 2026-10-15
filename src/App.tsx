/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { CLINIC_INFO, CONTENT } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { UsaSection } from './components/UsaSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingInstagram } from './components/FloatingInstagram';
import { VirtualAssistant } from './components/VirtualAssistant';
import { SplashIntro } from './components/SplashIntro';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { UsaPage } from './pages/UsaPage';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showSplash, setShowSplash] = useState(false);

  // Sync document title and meta description dynamically with language
  useEffect(() => {
    if (lang === 'pt') {
      document.title = 'Dra. Tatiane Vilela | Psicóloga & Sexóloga (CRP 06/98605-SP)';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Consultório de Psicologia e Sexologia com Dra. Tatiane Vilela (CRP 06/98605-SP). Atendimento em São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior.'
        );
      }
    } else {
      document.title = 'Dr. Tatiane Vilela | Psychologist & Sexologist (CRP 06/98605-SP)';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Psychology and Sexology Practice with Dr. Tatiane Vilela (CRP 06/98605-SP). In-person in São Bernardo do Campo, 100% online across Brazil and abroad.'
        );
      }
    }
  }, [lang]);

  // Handle Hash routing for quick bookmarking or navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'sobre', 'servicos', 'cuidado-ideal', 'eua', 'contato'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    handleNavigate('servicos');
  };

  const handleExploreDiagnostic = () => {
    handleNavigate('cuidado-ideal');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#161B20] flex flex-col font-sans selection:bg-[#C9A227]/25 selection:text-[#111417]">
      {/* Fixed Sticky Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section with Photo 4912 */}
            <Hero lang={lang} onExploreServices={handleExploreServices} />

            {/* Infinite Trust Marquee Ribbon */}
            <TrustMarquee lang={lang} />

            {/* 2. About / Quem sou eu */}
            <AboutSection lang={lang} />

            {/* 3. Services / Serviços Overview (Enxuto, rápido para carregar, sem imagens repetidas ou poluição) */}
            <ServicesSection
              lang={lang}
              onExploreServices={handleExploreServices}
              onExploreDiagnostic={handleExploreDiagnostic}
            />

            {/* 4. Online para qualquer pessoa no Brasil e Exterior que fale Português */}
            <UsaSection lang={lang} />

            {/* 5. FAQ */}
            <FaqSection lang={lang} />

            {/* 6. CTA Section */}
            <CtaSection lang={lang} />

            {/* 7. Contact / Contato com Logo Oficial Medallion */}
            <ContactSection lang={lang} />
          </>
        )}

        {currentPage === 'servicos' && (
          <ServicesPage
            lang={lang}
            initialTab="areas"
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'cuidado-ideal' && (
          <ServicesPage
            lang={lang}
            initialTab="cuidado-ideal"
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'sobre' && (
          <AboutPage lang={lang} onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'eua' && (
          <UsaPage lang={lang} onBackToHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'contato' && (
          <div className="pt-6">
            <ContactSection lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onNavigate={handleNavigate}
      />

      {/* FLOATING ACTION BUTTONS */}
      {/* LEFT SIDE: Interactive Virtual Assistant (Q&A + WhatsApp / Instagram referrals) */}
      <VirtualAssistant lang={lang} />

      {/* RIGHT SIDE: Official Instagram Floating Button */}
      <FloatingInstagram lang={lang} />

      {/* RIGHT SIDE: Official WhatsApp Floating Button */}
      <FloatingWhatsApp lang={lang} />

      {/* 5-SECOND LIGHT-THEMED INTRO WITH EMBOSSED GOLDEN LOGO & ASSET PRELOADER */}
      {showSplash && (
        <SplashIntro onComplete={() => setShowSplash(false)} lang={lang} />
      )}
    </div>
  );
}
