import React from 'react';
import { Language } from '../types';
import { CONTENT, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Globe, ShieldCheck, CheckCircle2, Shield, Video, Sparkles } from 'lucide-react';

interface UsaPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const UsaPage: React.FC<UsaPageProps> = ({ lang, onBackToHome }) => {
  const t = CONTENT[lang].usaSection;
  const whatsappUrl = buildWhatsAppLink(t.whatsappMessage);

  const globalRegions = [
    {
      flag: '🇧🇷',
      title: lang === 'pt' ? 'Todo o Brasil' : 'All of Brazil',
      desc: lang === 'pt' ? 'Atendimento presencial em São Bernardo do Campo (SP) e 100% online para os 26 estados + Distrito Federal.' : 'In-person care in São Bernardo do Campo (SP) and 100% online across all 26 Brazilian states + DF.',
    },
    {
      flag: '🇺🇸',
      title: lang === 'pt' ? 'Estados Unidos' : 'United States',
      desc: lang === 'pt' ? 'Atendimento online em português para quem reside nos EUA (Flórida, Massachusetts, Califórnia, NY, Texas e todos os estados).' : 'Online therapy in Portuguese for residents across all US states (FL, MA, CA, NY, TX, etc.).',
    },
    {
      flag: '🇪🇺',
      title: lang === 'pt' ? 'Europa & Reino Unido' : 'Europe & United Kingdom',
      desc: lang === 'pt' ? 'Atendimento online em português para quem vive em Portugal, Inglaterra, Irlanda, Espanha, Alemanha, Suíça e outros países.' : 'Online care in Portuguese for individuals living in Portugal, UK, Ireland, Spain, Germany, Switzerland and beyond.',
    },
    {
      flag: '🌏',
      title: lang === 'pt' ? 'Canadá, Japão & Oceania' : 'Canada, Japan & Oceania',
      desc: lang === 'pt' ? 'Atendimento acolhedor para qualquer pessoa no Canadá, Japão, Austrália ou outros países que fale português.' : 'Warm psychological care for Portuguese speakers in Canada, Japan, Australia and any other country.',
    },
  ];

  return (
    <div className="py-12 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🇧🇷</span>
            <span className="text-xl">🌎</span>
          </div>
        </div>

        {/* Hero Banner with Dra. Tatiane Vilela portrait photo */}
        <div className="bg-[#111417] text-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden border border-[#C9A227]/30 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 text-[#DFC56E] border border-[#C9A227]/40 text-xs font-medium">
              <span>🇧🇷</span>
              <span>{t.highlightBadge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
              {t.p1}
            </p>
          </div>

          {/* Dra. Tatiane Vilela Real Portrait Showcase */}
          <div className="max-w-md mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C9A227]/40 shadow-2xl bg-[#0A0C0E] mb-8">
            <div className="relative p-2 sm:p-3 bg-gradient-to-b from-[#181E24] to-[#0A0C0E] flex items-center justify-center">
              <img
                src={ASSETS.usa}
                alt="Dra. Tatiane Vilela - Psicoterapia Online em Português"
                className="w-full max-h-[580px] object-contain rounded-xl shadow-lg block mx-auto bg-black/40"
                loading="eager"
              />
            </div>
            <div className="p-3.5 sm:p-4 bg-[#161B20] flex flex-wrap items-center justify-between gap-3 text-xs text-white/80 border-t border-[#C9A227]/30">
              <span className="flex items-center gap-2 text-[#DFC56E] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                {lang === 'pt' ? 'Atendimento Online em Português' : 'Online Care Conducted in Portuguese'}
              </span>
              <span className="text-white/60 text-[11px]">
                {lang === 'pt' ? 'CRP 06/98605-SP · Sigilo Absoluto' : 'Licensed CRP 06/98605-SP · Full Confidentiality'}
              </span>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.cta}</span>
            </a>
          </div>
        </div>

        {/* Therapy in Portuguese for Worldwide Patients */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111417]">
              {lang === 'pt'
                ? 'Psicoterapia para qualquer lugar do mundo (atendimento em português)'
                : 'Psychotherapy worldwide (conducted in Portuguese)'}
            </h2>
            <p>
              {lang === 'pt'
                ? 'A Dra. Tatiane Vilela realiza psicoterapia para qualquer pessoa que estiver em qualquer lugar do mundo — seja em qualquer estado do Brasil ou vivendo no exterior —, desde que a pessoa fale português, pois todas as consultas e atendimentos terapêuticos são conduzidos exclusivamente em língua portuguesa.'
                : 'Dr. Tatiane Vilela provides psychotherapy to anyone anywhere in the world — whether in any Brazilian state or living abroad —, provided that the client speaks Portuguese, as all therapeutic consultations and sessions are conducted exclusively in Portuguese.'}
            </p>
            <p>
              {lang === 'pt'
                ? 'Com essa abordagem cuidadosa e ética, você tem a tranquilidade de expressar suas emoções, dores, conflitos relacionais e desafios diários com naturalidade, clareza e empatia, recebendo um acompanhamento qualificado e sem ruídos de comunicação.'
                : 'With this dedicated ethical care, you enjoy the peace of mind of expressing your emotions, struggles, relationship dynamics, and daily challenges naturally, clearly, and with authentic empathy.'}
            </p>

            {/* Global regions coverage card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111417] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span>{lang === 'pt' ? 'Atendimento em português sem fronteiras geográficas:' : 'Border-free care in Portuguese across global regions:'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#525E6A]">
                {globalRegions.map((reg, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EDE6DC] space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#111417]">
                      <span className="text-base">{reg.flag}</span>
                      <span>{reg.title}</span>
                    </div>
                    <p className="text-[11px] text-[#525E6A] font-light leading-snug">
                      {reg.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Online Features, Confidentiality & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* How Online Care Works Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <Video className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Como Funciona o Atendimento Online' : 'How Online Therapy Works'}
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#525E6A]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111417]">{lang === 'pt' ? 'Atendimento 100% em Português:' : 'Conducted in Portuguese:'}</strong>{' '}
                    {lang === 'pt'
                      ? 'Para pacientes no Brasil ou em qualquer país que falem língua portuguesa.'
                      : 'For patients in Brazil or abroad who speak Portuguese.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111417]">{lang === 'pt' ? 'Videochamada Segura:' : 'Secure Video Platform:'}</strong>{' '}
                    {lang === 'pt'
                      ? 'Consultas realizadas em plataforma criptografada e homologada para telepsicologia.'
                      : 'Consultations held on secure, encrypted telehealth platforms.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111417]">{lang === 'pt' ? 'Conforto e Praticidade:' : 'Comfort & Convenience:'}</strong>{' '}
                    {lang === 'pt'
                      ? 'Você é atendido no conforto e na privacidade da sua casa, sem deslocamentos.'
                      : 'You receive care in the comfort and privacy of your own home.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111417]">{lang === 'pt' ? 'Agendamento Direto:' : 'Direct Scheduling:'}</strong>{' '}
                    {lang === 'pt'
                      ? 'Contato fácil e direto pelo WhatsApp para combinar o melhor horário.'
                      : 'Convenient scheduling directly via WhatsApp.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Telehealth security & confidentiality card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE6DC] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#8C631A]">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                <h3 className="font-serif font-bold text-lg text-[#111417]">
                  {lang === 'pt' ? 'Privacidade & Sigilo Absoluto' : 'Absolute Confidentiality'}
                </h3>
              </div>
              <p className="text-xs text-[#525E6A] leading-relaxed">
                {lang === 'pt'
                  ? 'As sessões são realizadas por videochamada em ambiente estritamente confidencial, com privacidade assegurada e total conformidade com o Código de Ética Profissional do Conselho Federal de Psicologia (CFP).'
                  : 'Sessions take place via secure telehealth platforms, in strict adherence to professional psychology licensing ethics and total confidentiality.'}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{lang === 'pt' ? 'Plataforma certificada para telepsicologia' : 'Certified platform for telepsychology'}</span>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-[#111417] text-white text-center space-y-3 border border-[#C9A227]/30 shadow-xl">
              <p className="text-sm font-serif font-bold text-white">
                {lang === 'pt' ? 'Mora no Brasil ou no exterior e quer dar o primeiro passo?' : 'Living in Brazil or abroad and ready for the first step?'}
              </p>
              <p className="text-xs text-white/70">
                {lang === 'pt'
                  ? 'Envie uma mensagem no WhatsApp para tirar dúvidas e agendar sua consulta.'
                  : 'Send a message on WhatsApp to ask questions and schedule your session.'}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'pt' ? 'Conversar no WhatsApp agora' : 'Chat on WhatsApp now'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
