import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Award, BookOpen, Heart, Shield, CheckCircle2, MapPin } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].about;
  const whatsappUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma primeira conversa.'
      : 'Hello Dr. Tatiane, I would like to schedule an introductory conversation.'
  );

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <span className="text-xs text-[#525E6A] font-mono">{CLINIC_INFO.crp}</span>
        </div>

        {/* Hero Banner with Dra. Tatiane's Portrait */}
        <div className="bg-[#111417] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DFC56E] font-semibold">
                {lang === 'pt' ? 'Trajetória & Filosofia Clínica' : 'Clinical Journey & Philosophy'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {CLINIC_INFO.name}
              </h1>
              <p className="text-base sm:text-lg text-[#C9A227] font-medium">
                {lang === 'pt' ? CLINIC_INFO.titlePt : CLINIC_INFO.titleEn} · {CLINIC_INFO.crp}
              </p>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl font-light leading-relaxed">
                &ldquo;{lang === 'pt' ? CLINIC_INFO.sloganPt : CLINIC_INFO.sloganEn}&rdquo;
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'pt' ? 'Falar com a Dra. Tatiane no WhatsApp' : 'Chat with Dr. Tatiane on WhatsApp'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <img
                src={ASSETS.about}
                alt="Dra. Tatiane Vilela"
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl object-cover object-top border-4 border-[#C9A227] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Deep Narrative & Office Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
              {lang === 'pt'
                ? 'Conheça o meu espaço, um ambiente tranquilo, um refúgio planejado, cada detalhe pra promover serenidade e acolhimento.'
                : t.title}
            </h2>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EDE6DC] bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0C0E]">
                <img
                  src={ASSETS.clinic}
                  alt="Conheça o meu espaço - Consultório Dra. Tatiane Vilela"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#111417]/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#DFC56E] border border-[#C9A227]/40">
                  {lang === 'pt' ? 'Conheça o meu espaço' : 'My Practice Space'}
                </div>
              </div>
              <div className="p-5 bg-white text-xs text-[#525E6A] space-y-2">
                <p className="font-serif font-bold text-[#111417] text-sm">
                  {lang === 'pt' ? 'Conheça o meu espaço' : 'Discover My Space'}
                </p>
                <p className="text-[#303841] leading-relaxed italic">
                  {lang === 'pt'
                    ? '“Conheça o meu espaço, um ambiente tranquilo, um refúgio planejado, cada detalhe pra promover serenidade e acolhimento.”'
                    : '“Discover my space, a peaceful environment, a thoughtfully designed sanctuary with every detail crafted to foster serenity and warmth.”'}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4EFEA] border border-[#ECDDA3] text-xs text-[#60421C] space-y-2">
              <p className="font-bold uppercase tracking-wider text-[#8C631A]">
                {lang === 'pt' ? 'Locais de Atendimento' : 'Care Locations'}
              </p>
              <p className="flex items-start gap-2 text-sm text-[#111417] font-medium">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>
                  {lang === 'pt'
                    ? 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior'
                    : 'São Bernardo do Campo, 100% online across Brazil and abroad'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
