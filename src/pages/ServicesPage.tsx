import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { InteractiveAssessment } from '../components/InteractiveAssessment';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { MessageCircle, CheckCircle2, ArrowRight, User, Heart, Users, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export type ServicesTabId = 'areas' | 'cuidado-ideal' | 'por-que-escolher';

interface ServicesPageProps {
  lang: Language;
  onBackToHome: () => void;
  initialTab?: ServicesTabId;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang, onBackToHome, initialTab = 'areas' }) => {
  const t = CONTENT[lang].services;
  const [activeTab, setActiveTab] = useState<ServicesTabId>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'user':
        return <User className="w-8 h-8 text-[#C9A227]" />;
      case 'heart':
        return <Heart className="w-8 h-8 text-[#C9A227]" />;
      case 'users':
        return <Users className="w-8 h-8 text-[#C9A227]" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-8 h-8 text-[#C9A227]" />;
    }
  };

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <span className="text-xs text-[#525E6A]">CRP 06/98605-SP</span>
        </div>

        {/* Page Banner - Dark Luxury Consultório Theme */}
        <div className="bg-[#111417] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30 shadow-2xl">
          {/* Subtle background ambient overlay with consultório warm ambiance */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111417] via-[#111417]/95 to-[#1a140e]/90 z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#DFC56E] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{lang === 'pt' ? 'Acolhimento & Cuidado Personalizado' : 'Warmth & Personalized Care'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {lang === 'pt' ? 'Psicoterapia' : 'Psychotherapy'}
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#DFC56E]/90 italic font-light pt-1 max-w-2xl mx-auto">
              {lang === 'pt'
                ? 'Cada processo terapêutico é único: o ritmo, o acolhimento e o tempo são adaptados de acordo com a individualidade e a modalidade de cada atendimento.'
                : 'Every therapeutic journey is unique: pace, warmth, and time are honored according to individual and modality needs.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Escuta acolhedora e sem julgamentos' : 'Empathetic, non-judgmental listening'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>{lang === 'pt' ? 'Presencial em SBC & 100% Online' : 'In-person in SBC & 100% Online'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('areas')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'areas'
                ? 'bg-[#111417] text-[#DFC56E] border-2 border-[#C9A227] shadow-lg scale-105'
                : 'bg-white text-[#525E6A] hover:bg-[#FBF8EB] border border-[#EDE6DC]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span>{lang === 'pt' ? 'Áreas de Atuação & Serviços' : 'Clinical Specialties & Services'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cuidado-ideal')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'cuidado-ideal'
                ? 'bg-[#111417] text-[#DFC56E] border-2 border-[#C9A227] shadow-lg scale-105'
                : 'bg-white text-[#525E6A] hover:bg-[#FBF8EB] border border-[#EDE6DC]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#C9A227]" />
            <span>{lang === 'pt' ? 'Descubra o Cuidado Ideal' : 'Find Your Ideal Care'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('por-que-escolher')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'por-que-escolher'
                ? 'bg-[#111417] text-[#DFC56E] border-2 border-[#C9A227] shadow-lg scale-105'
                : 'bg-white text-[#525E6A] hover:bg-[#FBF8EB] border border-[#EDE6DC]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>{lang === 'pt' ? 'Por Que Escolher Este Acompanhamento' : 'Why Choose This Practice'}</span>
          </button>
        </div>

        {/* Tab 1: Detailed Sections for each service with photo and Chat Zap */}
        {activeTab === 'areas' && (
          <div className="space-y-16">
          {t.items.map((service, index) => {
            const isEven = index % 2 === 0;
            const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

            return (
              <div
                key={service.id}
                id={`servico-${service.id}`}
                className={`bg-white rounded-3xl p-8 sm:p-10 border border-[#EDE6DC] shadow-sm hover:border-[#C9A227]/50 transition-all ${
                  isEven ? 'bg-white' : 'bg-[#FCFBF8]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#FBF8EB] border border-[#ECDDA3]">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
                          {service.title}
                        </h2>
                        <p className="text-sm font-medium text-[#8C631A] italic">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-[#475467] leading-relaxed">
                      {service.fullDesc.map((par, i) => (
                        <p key={i}>{par}</p>
                      ))}
                    </div>

                    {/* Benefits Grid */}
                    <div className="pt-3">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-3">
                        {lang === 'pt' ? 'O que trabalhamos nesta modalidade:' : 'What we focus on in this modality:'}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((b, bi) => (
                          <div
                            key={bi}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FBF8EB]/70 text-xs sm:text-sm text-[#303841]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* For whom */}
                    <div className="pt-2">
                      <h3 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-2">
                        {lang === 'pt' ? 'Para quem é indicado:' : 'Who is this for:'}
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#525E6A]">
                        {service.forWhom.map((fw, fwi) => (
                          <li key={fwi} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                            <span>{fw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Card Action Box */}
                  <div className="lg:col-span-4 bg-[#F4EFEA] rounded-2xl p-6 border border-[#ECDDA3] space-y-4">
                    {/* Service Card Poster Image */}
                    {service.imageUrl && (
                      <div className="rounded-xl overflow-hidden border border-[#ECDDA3] shadow-sm bg-white p-2.5 flex items-center justify-center">
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-auto max-h-[260px] object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <h3 className="text-lg font-serif font-bold text-[#111417]">
                      {lang === 'pt' ? 'Como agendar esta sessão' : 'How to book this session'}
                    </h3>
                    <p className="text-xs text-[#525E6A] leading-relaxed">
                      {lang === 'pt'
                        ? 'Você pode iniciar seu processo terapêutico de forma simples e rápida conversando diretamente conosco via WhatsApp.'
                        : 'You can begin your therapeutic process simply and quickly by chatting directly with us on WhatsApp.'}
                    </p>

                    <div className="p-3 rounded-xl bg-white border border-[#EDE6DC] text-xs text-[#60421C] space-y-1">
                      <p className="font-semibold">{lang === 'pt' ? 'Locais de Atendimento:' : 'Care Locations:'}</p>
                      <p>{lang === 'pt' ? 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior' : 'São Bernardo do Campo, 100% online across Brazil and abroad'}</p>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{lang === 'pt' ? 'Agendar no WhatsApp' : 'Book on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}

        {/* Tab 2: Descubra o Cuidado Ideal (Interactive Assessment) */}
        {activeTab === 'cuidado-ideal' && (
          <div className="rounded-3xl overflow-hidden border border-[#EDE6DC] shadow-sm">
            <InteractiveAssessment lang={lang} />
          </div>
        )}

        {/* Tab 3: Por Que Escolher Este Acompanhamento (Why Choose Section) */}
        {activeTab === 'por-que-escolher' && (
          <div className="rounded-3xl overflow-hidden border border-[#EDE6DC] shadow-sm">
            <WhyChooseSection lang={lang} />
          </div>
        )}
      </div>
    </div>
  );
};
