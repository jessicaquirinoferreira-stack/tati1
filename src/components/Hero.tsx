import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, ArrowRight, MapPin, Laptop, ShieldCheck } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreServices }) => {
  const whatsappHeroUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, vi o seu site e gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I saw your website and would like to schedule a consultation.'
  );

  // 6 services exactly as displayed in the bottom strip of the mockup
  const stripServices = [
    {
      id: 'individual',
      title: lang === 'pt' ? 'Psicoterapia Individual' : 'Individual Therapy',
      desc:
        lang === 'pt'
          ? 'Autoconhecimento, equilíbrio emocional e uma vida mais plena.'
          : 'Self-knowledge, emotional balance, and a fuller life.',
      icon: (
        // Armchair / Poltrona
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
          <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
          <path d="M6 18v2" />
          <path d="M18 18v2" />
        </svg>
      ),
    },
    {
      id: 'casal',
      title: lang === 'pt' ? 'Psicoterapia de Casal' : 'Couple Therapy',
      desc:
        lang === 'pt'
          ? 'Diálogo, respeito e reconexão.'
          : 'Dialogue, mutual respect, and reconnection.',
      icon: (
        // Couple / Two Figures
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="7" r="3" />
          <circle cx="16" cy="7" r="3" />
          <path d="M4 20v-2a4 4 0 0 1 4-4h2" />
          <path d="M14 14h2a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      id: 'familiar',
      title: lang === 'pt' ? 'Psicoterapia Familiar' : 'Family Therapy',
      desc:
        lang === 'pt'
          ? 'Fortalecimento dos vínculos e relações mais saudáveis.'
          : 'Strengthening emotional bonds and healthier relationships.',
      icon: (
        // Family
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6.5" cy="7" r="2.5" />
          <circle cx="17.5" cy="7" r="2.5" />
          <circle cx="12" cy="11.5" r="2" />
          <path d="M2.5 20v-1.5a3 3 0 0 1 3-3h2" />
          <path d="M16.5 15.5h2a3 3 0 0 1 3 3V20" />
          <path d="M9.5 20v-1a2.5 2.5 0 0 1 5 0v1" />
        </svg>
      ),
    },
    {
      id: 'sexual',
      title: lang === 'pt' ? 'Psicoterapia Sexual' : 'Sexual Therapy',
      desc:
        lang === 'pt'
          ? 'Orientação e tratamento para uma sexualidade saudável.'
          : 'Guidance and specialized treatment for healthy sexuality.',
      icon: (
        // Venus & Mars Sexology Interlocking
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="13" r="3.5" />
          <path d="M9 16.5v4.5m-2-2h4" />
          <circle cx="15" cy="10" r="3.5" />
          <path d="M17.5 7.5L21 4m0 0h-3.5m3.5 0v3.5" />
        </svg>
      ),
    },
    {
      id: 'diversidade',
      title: lang === 'pt' ? 'Diversidade Sexual' : 'Sexual Diversity',
      desc:
        lang === 'pt'
          ? 'Acolhimento, respeito e liberdade para ser quem você é.'
          : 'Safe space, respect, and freedom to embrace who you are.',
      icon: (
        // Rainbow Arches / Welcoming Arc
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19a8 8 0 0 1 16 0" />
          <path d="M7 19a5 5 0 0 1 10 0" />
          <path d="M10 19a2 2 0 0 1 4 0" />
        </svg>
      ),
    },
    {
      id: 'empoderamento',
      title: lang === 'pt' ? 'Empoderamento Feminino' : 'Female Empowerment',
      desc:
        lang === 'pt'
          ? 'Mais autoestima, autonomia e qualidade de vida.'
          : 'Greater self-esteem, autonomy, and quality of life.',
      icon: (
        // Lotus Bloom
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#DFC56E] fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4c-2 4-2 8 0 13c2-5 2-9 0-13z" />
          <path d="M7 8c1 4 3 7 5 9c-3-2-6-4-5-9z" />
          <path d="M17 8c-1 4-3 7-5 9c3-2 6-4 5-9z" />
          <path d="M4 14c3 2 5 2 8 3c-4 0-7-1-8-3z" />
          <path d="M20 14c-3 2-5 2-8 3c4 0 7-1 8-3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {/* 1. MASTER HERO SECTION (Background Photo with Armchair, Bookshelf, Dra. Tatiane Vilela) */}
      <section className="relative overflow-hidden bg-[#0C0806] text-[#FBF9F5] min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center">
        {/* Full-width background photo of clinic: Dra. Tatiane seated in armchair on the right */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroBackground}
            alt="Dra. Tatiane Vilela em seu consultório"
            className="w-full h-full object-cover sm:object-contain object-[82%_center] sm:object-center bg-[#0C0806]"
            loading="eager"
          />

          {/* Left-to-right dark vignette to seamlessly blend and provide optimal contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806] via-[#0C0806]/95 sm:via-[#0C0806]/90 md:via-[#0C0806]/80 lg:via-[#0C0806]/70 to-transparent" />

          {/* Subtle top and bottom shadows */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C0806]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C0806]/90 via-[#0C0806]/40 to-transparent pointer-events-none" />
        </div>

        {/* Decorative Golden Ribbon Swoop on bottom right (matching mockup) */}
        <div className="absolute right-0 bottom-0 w-80 sm:w-[480px] h-32 sm:h-44 pointer-events-none z-10 opacity-90 overflow-hidden">
          <svg viewBox="0 0 500 200" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,200 C180,180 320,110 500,20 L500,50 C340,135 200,190 0,200 Z"
              fill="url(#goldHeroRibbon1)"
            />
            <path
              d="M60,200 C220,185 350,125 500,45 L500,60 C360,140 230,192 60,200 Z"
              fill="url(#goldHeroRibbon2)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="goldHeroRibbon1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C631A" />
                <stop offset="35%" stopColor="#DFC56E" />
                <stop offset="65%" stopColor="#FFF1B8" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
              <linearGradient id="goldHeroRibbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DFC56E" />
                <stop offset="50%" stopColor="#FFF1B8" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Foreground Content Container (Aligned to left half, exactly as in mockup) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl text-left space-y-5 sm:space-y-6">
            {/* 1. Category Tagline */}
            <p className="text-xs sm:text-[13px] tracking-[0.24em] uppercase font-semibold text-[#DFC56E] leading-none">
              SAÚDE EMOCIONAL <span className="mx-2 text-[#C9A227]/70">|</span> RELACIONAMENTOS{' '}
              <span className="mx-2 text-[#C9A227]/70">|</span> SEXUALIDADE
            </p>

            {/* 2. Main Headline in classic serif */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-[#FFF9F2] leading-[1.12] tracking-tight">
              Mais conexão
              <br />
              com a sua história
              <br />
              para uma vida
              <br />
              mais plena.
            </h1>

            {/* 3. Subheadline */}
            <p className="text-sm sm:text-base text-[#E5DDD2] font-light leading-relaxed max-w-lg">
              Um espaço acolhedor, seguro e confidencial para cuidar da sua saúde emocional, dos seus
              relacionamentos e da sua sexualidade.
            </p>

            {/* 4. Action Buttons (Side by Side) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary WhatsApp Button with golden bronze gradient & gold border */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#FFF9F0] bg-[#432E16] hover:bg-[#4E371C] border border-[#C9A227] shadow-xl hover:shadow-[#C9A227]/20 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-[#DFC56E] shrink-0" />
                <span>Agendar consulta no WhatsApp</span>
                <span className="text-[#DFC56E] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Secondary Services Button (black translucent with gold border) */}
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-black/60 hover:bg-black/85 border border-[#C9A227]/75 hover:border-[#DFC56E] transition-all cursor-pointer group"
              >
                <span>Conhecer os serviços</span>
                <span className="text-[#DFC56E] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* 5. Bottom 3 Features Row */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15 text-xs text-[#EAE2D5]">
              {/* Presencial em SBC */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <p className="font-semibold text-white">Atendimento presencial em</p>
                  <p className="text-white/70 text-[11px] mt-0.5">São Bernardo do Campo - SP</p>
                </div>
              </div>

              {/* Online Brasil e Exterior */}
              <div className="flex items-start gap-2.5">
                <Laptop className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <p className="font-semibold text-white">Atendimento online</p>
                  <p className="text-white/70 text-[11px] mt-0.5">para o Brasil e exterior</p>
                </div>
              </div>

              {/* Seguro e sigiloso */}
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <p className="font-semibold text-white">Ambiente seguro</p>
                  <p className="text-white/70 text-[11px] mt-0.5">e sigiloso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6-CARD SERVICES STRIP (Light Cream / Parchment Bar exactly as in mockup) */}
      <section className="bg-[#FAF7F2] border-t-2 border-[#C9A227]/40 border-b border-[#EDE6DC] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-3 lg:divide-x lg:divide-[#E5DDD2]">
            {stripServices.map((srv, idx) => (
              <div
                key={srv.id}
                onClick={onExploreServices}
                className={`flex flex-col items-center text-center px-2 cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${
                  idx > 0 ? 'lg:pl-4' : ''
                }`}
              >
                {/* Circular dark bronze badge with golden icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#4A3219] to-[#2B1B0C] border-2 border-[#C9A227] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 group-hover:border-[#DFC56E] group-hover:shadow-[#C9A227]/30 transition-all duration-300 shrink-0">
                  {srv.icon}
                </div>

                {/* Title in serif font */}
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1E1914] group-hover:text-[#8C631A] transition-colors leading-snug">
                  {srv.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-[#6B5A4B] leading-relaxed mt-1 font-light">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
