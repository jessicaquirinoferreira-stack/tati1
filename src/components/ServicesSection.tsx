import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { User, Heart, Users, Sparkles, MessageCircle, ArrowRight, Check, X, Star } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onExploreServices?: () => void;
  onExploreDiagnostic?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onExploreServices,
  onExploreDiagnostic,
}) => {
  const t = CONTENT[lang].services;
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'user':
        return <User className="w-6 h-6 text-[#C9A227]" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-[#C9A227]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#C9A227]" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  const getBadgeTag = (id: string) => {
    if (lang === 'pt') {
      switch (id) {
        case 'sexual':
          return 'Especialidade Clínica';
        case 'casal':
          return 'Mais Procurado';
        case 'individual':
          return 'Transformador';
        case 'familiar':
          return 'Harmonia no Lar';
        default:
          return 'Cuidado Integral';
      }
    } else {
      switch (id) {
        case 'sexual':
          return 'Clinical Specialty';
        case 'casal':
          return 'Most Requested';
        case 'individual':
          return 'Deep Growth';
        case 'familiar':
          return 'Family Harmony';
        default:
          return 'Holistic Care';
      }
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#F4EFEA] text-[#161B20] border-t border-[#EDE6DC] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ECDDA3]/60 text-[#8C631A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>{t.tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111417] leading-tight">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#525E6A] mt-3 font-light leading-relaxed">
            {t.subtitle}
          </p>

          {/* Warm Consultório Highlight Banner: Poltrona & Fundo de Estante */}
          <div className="mt-8 bg-[#111417] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-[#C9A227]/30 shadow-2xl text-left">
            <div className="absolute inset-0 bg-gradient-to-r from-[#111417] via-[#111417]/95 to-[#1a140e]/90 z-0" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#DFC56E] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>{lang === 'pt' ? 'Acolhimento & Cuidado Personalizado' : 'Warmth & Personalized Care'}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  {lang === 'pt' ? 'O Acolhimento do Nosso Consultório' : 'The Warmth of Our Practice Space'}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                  {lang === 'pt'
                    ? 'A poltrona, o fundo de estante e a iluminação suave: cada detalhe foi planejado para acolher sua história com privacidade, conforto e serenidade — respeitando o tempo de cada modalidade terapêutica.'
                    : 'The armchair, library background, and gentle lighting: every detail is prepared to welcome your story with privacy, comfort, and serenity, honoring the natural rhythm of your healing.'}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-[#C9A227]/40 shadow-xl relative aspect-[4/3] group">
                  <img
                    src={ASSETS.space}
                    alt={lang === 'pt' ? 'Consultório Dra. Tatiane Vilela - Poltrona e Estante' : 'Dr. Tatiane Vilela Clinic - Armchair & Bookshelf'}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-[#DFC56E] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                    <span>{lang === 'pt' ? 'Nosso espaço de acolhimento' : 'Our practice sanctuary'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Cards Grid - Lightweight, Fast-Loading, without repetitive heavy images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service) => {
            const badgeText = getBadgeTag(service.id);

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-[#EDE6DC] hover:border-[#C9A227] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative top corner sheen */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C9A227]/10 to-transparent pointer-events-none rounded-tr-3xl" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FBF8EB] border border-[#ECDDA3] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C9A227] group-hover:text-white transition-all shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C631A] bg-[#FBF8EB] px-2.5 py-1 rounded-full border border-[#ECDDA3]">
                      {badgeText}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-serif font-bold text-[#111417] group-hover:text-[#8C631A] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#8C631A] mt-1 italic">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475467] mt-3 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>

                  {/* Key points preview */}
                  <ul className="mt-4 space-y-1.5 text-xs text-[#525E6A] border-t border-[#F2ECE4] pt-3">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-5 border-t border-[#F2ECE4] mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (onExploreServices) {
                        onExploreServices();
                      } else {
                        setActiveModalService(service);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#111417] hover:text-[#8C631A] hover:bg-[#FBF8EB] rounded-xl transition-colors cursor-pointer border border-[#EDE6DC] hover:border-[#ECDDA3]"
                  >
                    <span>{lang === 'pt' ? 'Ver detalhes da modalidade' : 'View modality details'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Bottom Action Bar - Direct navigation to full Services tab and WhatsApp */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE6DC] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-serif font-bold text-[#111417]">
              {lang === 'pt'
                ? 'Quer conhecer todas as fotos e orientações detalhadas de cada terapia?'
                : 'Want to view full photos and in-depth details for each therapy?'}
            </h4>
            <p className="text-xs sm:text-sm text-[#525E6A]">
              {lang === 'pt'
                ? 'Acesse a aba de Serviços para ver os detalhes completos ou utilize nosso Guia Interativo.'
                : 'Visit our Services tab for full descriptions or try our Interactive Guide.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            {onExploreServices && (
              <button
                type="button"
                onClick={onExploreServices}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111417] hover:bg-[#20262c] text-[#DFC56E] border border-[#C9A227]/40 shadow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Aba de Serviços Completa' : 'Full Services Tab'}</span>
              </button>
            )}

            {onExploreDiagnostic && (
              <button
                type="button"
                onClick={onExploreDiagnostic}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#FBF8EB] hover:bg-[#F4EFEA] text-[#8C631A] border border-[#ECDDA3] transition-all cursor-pointer"
              >
                <span>{lang === 'pt' ? 'Guia Cuidado Ideal' : 'Ideal Care Guide'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={buildWhatsAppLink(lang === 'pt' ? 'Olá Dra. Tatiane, gostaria de tirar dúvidas sobre os atendimentos.' : 'Hello Dr. Tatiane, I have questions about your therapy sessions.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EDE6DC] relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FBF8EB] border border-[#ECDDA3] flex items-center justify-center">
                {getServiceIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#111417]">
                  {activeModalService.title}
                </h3>
                <p className="text-xs font-medium text-[#8C631A] italic">
                  {activeModalService.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#475467] leading-relaxed">
              {activeModalService.fullDesc.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-6 pt-5 border-t border-[#F2ECE4]">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-3">
                {lang === 'pt' ? 'Principais Benefícios' : 'Key Benefits'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#303841]">
                {activeModalService.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#FBF8EB]/60 p-2.5 rounded-lg">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For whom */}
            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#111417] mb-2">
                {lang === 'pt' ? 'Indicado para' : 'Recommended for'}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#525E6A]">
                {activeModalService.forWhom.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-5 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#734F1B] italic">
                {lang === 'pt'
                  ? 'Atendimento acolhedor presencial e 100% online.'
                  : 'Warm in-person and 100% online therapy.'}
              </span>
              <a
                href={buildWhatsAppLink(activeModalService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'pt' ? 'Agendar esta consulta no WhatsApp' : 'Book this session on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
