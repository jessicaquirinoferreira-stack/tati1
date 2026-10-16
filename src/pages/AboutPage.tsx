import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO, buildWhatsAppLink } from '../data/translations';
import { ASSETS } from '../assets';
import { MessageCircle, Heart, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onBackToHome }) => {
  const whatsappUrl = buildWhatsAppLink(
    lang === 'pt'
      ? 'Olá Dra. Tatiane, gostaria de agendar uma consulta.'
      : 'Hello Dr. Tatiane, I would like to schedule a consultation.'
  );

  return (
    <div className="py-10 sm:py-14 bg-[#FBF9F5] text-[#161B20] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#EDE6DC] pb-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-[#8C631A] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            ← {lang === 'pt' ? 'Voltar para o início' : 'Back to home'}
          </button>
          <span className="text-xs text-[#7A6B5D] font-mono tracking-wider font-semibold">
            {CLINIC_INFO.crp}
          </span>
        </div>

        {/* =========================================================================
            SEÇÃO 1: MINHA TRAJETÓRIA PROFISSIONAL
            (Foto de Tatiane Vilela sem quadro preto, com texto integral fornecido)
           ========================================================================= */}
        <section className="space-y-8">
          {/* Header Title */}
          <div className="border-l-4 border-[#C9A227] pl-4 sm:pl-5">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8C631A] font-bold">
              {lang === 'pt' ? 'Trajetória & Atuação' : 'Journey & Practice'}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#161B20] tracking-tight mt-1">
              {lang === 'pt' ? 'MINHA TRAJETÓRIA PROFISSIONAL' : 'MY PROFESSIONAL JOURNEY'}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto de Tatiane Vilela aberta, natural e sem quadrado */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <img
                src={ASSETS.about}
                alt="Dra. Tatiane Vilela - Psicóloga e Sexóloga"
                className="w-full max-w-md h-auto object-contain rounded-2xl drop-shadow-xl block"
              />
              <div className="mt-3 text-center lg:text-left">
                <p className="font-serif font-bold text-lg text-[#161B20]">
                  Dra. Tatiane Vilela
                </p>
                <p className="text-xs sm:text-sm text-[#8C631A] font-semibold tracking-wide mt-0.5">
                  Psicóloga & Sexóloga · {CLINIC_INFO.crp}
                </p>
              </div>
            </div>

            {/* Texto integral da Trajetória Profissional */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#303841] leading-relaxed font-normal">
              <p>
                Sou Tatiane Vilela, psicóloga e sexóloga, graduada em Psicologia pela Universidade Metodista de São Paulo e especialista em Sexualidade Humana pela Faculdade de Medicina da Fundação do ABC, com formação de pós-graduação pelo Novos Paradigmas em Saúde Sexual.
              </p>
              <p>
                Minha atuação é pautada por uma compreensão integral do ser humano, considerando suas emoções, pensamentos, comportamentos, relacionamentos e experiências de vida. Acredito que cada história é única e merece ser acolhida com respeito, escuta qualificada e sem julgamentos.
              </p>
              <p>
                Ofereço psicoterapia individual, de casal e familiar, além de atendimento especializado em questões relacionadas à sexualidade humana. Meu trabalho contempla os desafios emocionais, os conflitos nos relacionamentos, as dificuldades de comunicação, as questões relacionadas à intimidade e ao desejo, bem como os diferentes momentos e transições da vida.
              </p>
              <p>
                Na psicoterapia, cada pessoa ou casal encontra a oportunidade de compreender melhor suas experiências, reconhecer padrões, elaborar sentimentos e desenvolver novas possibilidades para lidar com suas dificuldades.
              </p>
              <p className="font-medium text-[#161B20] bg-white p-4 rounded-2xl border border-[#EDE6DC] shadow-xs">
                Meu compromisso é oferecer um acompanhamento profissional ético, cuidadoso e individualizado, respeitando a singularidade de cada história e as necessidades de cada processo terapêutico.
              </p>
            </div>
          </div>
        </section>

        {/* Separador Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent my-6" />

        {/* =========================================================================
            SEÇÃO 2: O ESPAÇO E ACOLHIMENTO
            (Foto do Consultório + texto integral fornecido)
           ========================================================================= */}
        <section className="space-y-8">
          {/* Header Title */}
          <div className="border-l-4 border-[#8C631A] pl-4 sm:pl-5">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8C631A] font-bold">
              {lang === 'pt' ? 'Ambiente Clínico' : 'Clinical Space'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#161B20] tracking-tight mt-1">
              {lang === 'pt' ? 'O ESPAÇO E ACOLHIMENTO' : 'THE SPACE & WARMTH'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto integral do Espaço e Acolhimento */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#303841] leading-relaxed font-normal order-2 lg:order-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161B20]">
                Um espaço preparado para acolher você
              </h3>
              <p>
                Meu consultório foi pensado para oferecer um ambiente tranquilo, confortável e acolhedor, onde você possa se sentir à vontade para falar sobre suas emoções, compartilhar suas experiências e olhar para si com mais atenção.
              </p>
              <p>
                Cada detalhe do espaço foi escolhido para transmitir aconchego e serenidade, proporcionando um ambiente reservado para a escuta, a reflexão e o cuidado com a saúde emocional.
              </p>
              <p>
                Acredito que iniciar a psicoterapia é um passo importante, e encontrar um espaço em que você se sinta respeitado e acolhido pode tornar essa experiência mais confortável. Você não precisa chegar com todas as respostas ou saber exatamente por onde começar. O processo terapêutico é construído ao longo dos encontros, com tempo, escuta e acompanhamento profissional.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#EDE6DC] text-sm text-[#161B20] space-y-1.5 shadow-xs">
                <div className="flex items-start gap-2 text-[#8C631A] font-semibold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 shrink-0 text-[#C9A227] mt-0.5" />
                  <span>Atendimento Presencial e Online</span>
                </div>
                <p className="text-[#303841] text-xs sm:text-sm">
                  Realizo atendimentos presenciais em São Bernardo do Campo, São Paulo, e psicoterapia on-line para pessoas que vivem no Brasil e no exterior, conforme as normas profissionais aplicáveis.
                </p>
              </div>
              <p className="font-serif italic font-medium text-[#161B20] text-base pt-2">
                &ldquo;Um espaço para acolher sua história, compreender suas emoções e construir novos caminhos.&rdquo;
              </p>
            </div>

            {/* Foto do Consultório aberta, natural e sem quadrado */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-1 lg:order-2">
              <img
                src={ASSETS.clinic}
                alt="Consultório acolhedor - Dra. Tatiane Vilela"
                className="w-full max-w-lg h-auto object-contain rounded-2xl drop-shadow-xl block"
              />
              <div className="mt-3 text-center lg:text-right">
                <p className="font-serif font-bold text-base sm:text-lg text-[#161B20]">
                  Consultório de Psicologia & Sexologia
                </p>
                <p className="text-xs sm:text-sm text-[#7A6B5D] mt-0.5">
                  Ambiente planejado para serenidade, sigilo e conforto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA no Rodapé da Página */}
        <div className="text-center pt-4 pb-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>{lang === 'pt' ? 'Agendar consulta no WhatsApp' : 'Schedule on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
