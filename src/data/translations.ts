import { ServiceItem, TestimonialItem, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'Dra. Tatiane Vilela',
  titlePt: 'Psicóloga & Sexóloga',
  titleEn: 'Psychologist & Sexologist',
  crp: 'CRP 06/98605-SP',
  sloganPt: 'Saúde emocional para uma vida mais plena.',
  sloganEn: 'Emotional health for a fuller life.',
  phoneDisplay: '+55 11 97644-0090',
  phoneRaw: '5511976440090',
  whatsappBaseUrl: 'https://wa.me/5511976440090',
  email: 'Dra.tatianevilela@uol.com.br',
  instagram: '@dra.tatianevilelapsi',
  instagramUrl: 'https://instagram.com/dra.tatianevilelapsi',
  city: 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior',
  onlineNotePt: 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior.',
  onlineNoteEn: 'São Bernardo do Campo, 100% online across Brazil and abroad.',
};

export function buildWhatsAppLink(message: string): string {
  return `${CLINIC_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const CONTENT = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Quem sou eu',
      services: 'Serviços',
      cuidadoIdeal: 'Cuidado Ideal',
      usa: 'Brasil & Exterior',
      contact: 'Contato',
      ctaHeader: 'Agendar no WhatsApp',
    },
    hero: {
      badge: 'Atendimento Presencial em SP & 100% Online no Brasil e Exterior',
      headline: 'Mais conexão com a sua história para uma vida mais plena.',
      subheadline:
        'Um espaço acolhedor, seguro e confidencial para cuidar da sua saúde mental, dos seus relacionamentos e da sua intimidade sexual.',
      ctaPrimary: 'Agendar consulta no WhatsApp',
      ctaSecondary: 'Conhecer os serviços',
      highlightBadge: 'CRP 06/98605-SP',
      onlineBadge: '100% Online Brasil & Exterior',
      stats: [
        { label: 'Anos de experiência clínica', value: '+14' },
        { label: 'Atendimento global', value: 'Brasil & Exterior' },
        { label: 'Privacidade & Sigilo', value: '100% Ético' },
      ],
    },
    about: {
      tagline: 'Quem sou eu',
      title: 'Conheça o meu espaço, um ambiente tranquilo, um refúgio planejado, cada detalhe pra promover serenidade e acolhimento.',
      spaceQuote: 'Conheça o meu espaço, um ambiente tranquilo, um refúgio planejado, cada detalhe pra promover serenidade e acolhimento.',
      locations: 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior',
      p1: 'Acredito que cuidar da saúde emocional é abrir caminhos para uma vida com mais equilíbrio, autoconhecimento e qualidade nas relações. Minha trajetória profissional é dedicada a acolher pessoas em suas diferentes fases da vida, respeitando suas histórias, individualidades e necessidades.',
      p2: 'Sou psicóloga, graduada em Psicologia pela Universidade Metodista de São Paulo, e especialista em Sexologia pela Faculdade de Medicina da Fundação do ABC, onde concluí a pós-graduação Novos Paradigmas em Saúde Sexual, com carga horária de 360 horas.',
      p3: 'Minha formação une o olhar sobre a saúde emocional à compreensão da sexualidade humana, permitindo um trabalho que considera o indivíduo de forma integral, incluindo seus sentimentos, pensamentos, comportamentos, relacionamentos e experiências de vida.',
      p4: 'Ofereço psicoterapia presencial em São Bernardo do Campo e atendimento 100% online em todo o território do Brasil e exterior, com acolhimento, ética e profissionalismo.',
      valuesTitle: 'Pilares do meu atendimento:',
      values: [
        {
          title: 'Escuta Ativa & Humanizada',
          desc: 'Atenção plena às suas dores, histórias e expectativas, sem rótulos.',
        },
        {
          title: 'Respeito Irrestrito',
          desc: 'Valorização da sua individualidade, orientação e ritmo pessoal.',
        },
        {
          title: 'Acolhimento Afetuoso',
          desc: 'Um porto seguro para expressar angústias e vulnerabilidades.',
        },
        {
          title: 'Livre de Julgamentos',
          desc: 'Espaço aberto para falar sobre sexualidade e sentimentos com total liberdade.',
        },
      ],
      ctaAbout: 'Conversar com a Dra. Tatiane',
    },
    services: {
      tagline: 'Serviços Especializados',
      title: 'Área de Atuação e Cuidado Terapêutico',
      subtitle:
        'Abordagens pensadas para atender as diferentes fases e necessidades da sua jornada emocional e afetiva.',
      cardCta: 'Quero saber mais',
      whatsappBtn: 'Falar no WhatsApp',
      items: [
        {
          id: 'diversidade-sexual',
          title: 'Diversidade Sexual',
          subtitle: 'Todo amor merece respeito.',
          shortDesc:
            'Um espaço seguro para você falar sobre sua identidade, seus sentimentos, suas relações e suas descobertas. Aqui você encontra escuta acolhedora, ética e sem julgamentos. Ser quem você é também é saúde.',
          fullDesc: [
            'Um espaço seguro para você falar sobre sua identidade, seus sentimentos, suas relações e suas descobertas.',
            'Aqui você encontra escuta acolhedora, ética e sem julgamentos. Ser quem você é também é saúde.',
          ],
          benefits: [
            'Escuta acolhedora, ética e sem julgamentos',
            'Espaço seguro para identidade e descobertas',
            'Ser quem você é também é saúde',
          ],
          forWhom: [
            'Pessoas que buscam acolhimento em sua identidade e expressão',
            'Quem deseja apoio psicológico livre de preconceitos',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de saber mais sobre Diversidade Sexual.',
          iconName: 'heart',
          imageUrl: 'https://i.imgur.com/GUU68n1.jpeg',
        },
        {
          id: 'relacao-pais-filhos',
          title: 'Relação Pais e Filhos',
          subtitle: 'Diálogo hoje, laços mais fortes amanhã.',
          shortDesc:
            'A terapia pode ajudar a melhorar a comunicação, compreender diferentes perspectivas e construir relações mais saudáveis e afetuosas entre pais e filhos, em todas as fases da vida. Famílias que se escutam crescem juntas.',
          fullDesc: [
            'A terapia pode ajudar a melhorar a comunicação, compreender diferentes perspectivas e construir relações mais saudáveis e afetuosas entre pais e filhos, em todas as fases da vida.',
            'Famílias que se escutam crescem juntas.',
          ],
          benefits: [
            'Melhoria na comunicação e diálogo familiar',
            'Compreensão de diferentes perspectivas',
            'Famílias que se escutam crescem juntas',
          ],
          forWhom: [
            'Pais e filhos em busca de melhor convivência',
            'Famílias enfrentando conflitos ou distanciamento',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar uma consulta sobre Relação Pais e Filhos.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/Us9EwMN.jpeg',
        },
        {
          id: 'empoderamento-feminino',
          title: 'Empoderamento Feminino',
          subtitle: 'Quando você se escuta, se reconhece e se escolhe, a vida flui com mais leveza e propósito.',
          shortDesc:
            'Você pode ser tudo o que quiser, inclusive você mesma. Terapia também é um ato de força.',
          fullDesc: [
            'Quando você se escuta, se reconhece e se escolhe, a vida flui com mais leveza e propósito.',
            'Você pode ser tudo o que quiser, inclusive você mesma. Terapia também é um ato de força.',
          ],
          benefits: [
            'Reconhecimento da própria força e autonomia',
            'Escolhas alinhadas ao seu propósito',
            'Terapia também é um ato de força',
          ],
          forWhom: [
            'Mulheres em busca de autoconhecimento e empoderamento',
            'Quem deseja viver com mais leveza, limite e propósito',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de saber mais sobre Empoderamento Feminino.',
          iconName: 'sparkles',
          imageUrl: 'https://i.imgur.com/dwTdy5c.jpeg',
        },
        {
          id: 'sexualidade-humana',
          title: 'Sexualidade Humana',
          subtitle: 'Conhecimento, respeito e liberdade para viver quem você é.',
          shortDesc:
            'Falar sobre sexualidade também é cuidar da saúde emocional. Conhecimento, respeito e liberdade para viver quem você é.',
          fullDesc: [
            'Falar sobre sexualidade também é cuidar da saúde emocional.',
            'Conhecimento, respeito e liberdade para viver quem você é.',
          ],
          benefits: [
            'Cuidado integrado com a saúde emocional e íntima',
            'Liberdade para viver quem você é',
            'Conhecimento e respeito sem tabus',
          ],
          forWhom: [
            'Pessoas e casais buscando esclarecimento e bem-estar íntimo',
            'Quem deseja superar tabus na sexualidade',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar uma consulta sobre Sexualidade Humana.',
          iconName: 'heart',
          imageUrl: 'https://i.imgur.com/0l4w8YJ.jpeg',
        },
        {
          id: 'psicoterapia-casal',
          title: 'Psicoterapia de Casal',
          subtitle: 'Mais diálogo. Mais compreensão. Mais conexão.',
          shortDesc:
            'Um espaço seguro para vocês olharem juntos para o que importa. Fortalecendo vínculos mais saudáveis que também são possíveis.',
          fullDesc: [
            'Um espaço seguro para vocês olharem juntos para o que importa.',
            'Fortalecendo vínculos mais saudáveis que também são possíveis.',
          ],
          benefits: [
            'Mais diálogo, compreensão e conexão',
            'Espaço seguro para olhar para o que importa',
            'Fortalecendo vínculos mais saudáveis',
          ],
          forWhom: [
            'Casais em busca de reconexão e diálogo produtivo',
            'Parceiros que desejam fortalecer o relacionamento',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de saber mais sobre Psicoterapia de Casal.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/fZDoFAa.png',
        },
        {
          id: 'psicoterapia-familiar',
          title: 'Psicoterapia Familiar',
          subtitle: 'Fortalecendo vínculos para relações mais saudáveis.',
          shortDesc:
            'A terapia familiar ajuda a melhorar a comunicação, resolver conflitos e construir um ambiente mais leve e acolhedor para todos. Famílias mais conectadas, vidas mais equilibradas.',
          fullDesc: [
            'A terapia familiar ajuda a melhorar a comunicação, resolver conflitos e construir um ambiente mais leve e acolhedor para todos.',
            'Famílias mais conectadas, vidas mais equilibradas.',
          ],
          benefits: [
            'Melhoria da comunicação em família',
            'Resolução de conflitos de forma acolhedora',
            'Famílias mais conectadas, vidas mais equilibradas',
          ],
          forWhom: [
            'Famílias que buscam harmonia e união',
            'Ambiente mais leve e acolhedor para todos',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar Psicoterapia Familiar.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/HEq0loe.png',
        },
        {
          id: 'psicoterapia-individual',
          title: 'Psicoterapia Individual',
          subtitle: 'Você importa. E sua história também.',
          shortDesc:
            'Um espaço seguro para você se escutar, compreender o que sente e cuidar de si. Você importa. E sua história também.',
          fullDesc: [
            'Um espaço seguro para você se escutar, compreender o que sente e cuidar de si.',
            'Você importa. E sua história também.',
          ],
          benefits: [
            'Espaço seguro para se escutar e compreender',
            'Cuidado atencioso com o que você sente',
            'Você importa. E sua história também.',
          ],
          forWhom: [
            'Qualquer pessoa buscando autoconhecimento e cuidado emocional',
            'Quem deseja apoio profissional ético e humanizado',
          ],
          whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar Psicoterapia Individual.',
          iconName: 'user',
          imageUrl: 'https://i.imgur.com/aNEie4U.png',
        },
      ] as ServiceItem[],
    },
    whyChoose: {
      tagline: 'Diferenciais',
      title: 'Por que escolher este acompanhamento?',
      subtitle:
        'Cuidado ético, suporte de alto nível e a comodidade do atendimento onde você estiver.',
      reasons: [
        {
          title: 'Formação & Credenciamento Ativo',
          desc: 'Registro oficial CRP 06/98605-SP com especialização sólida em psicologia clínica e sexologia humana.',
        },
        {
          title: 'Sigilo Absoluto & Segurança',
          desc: 'Sessões conduzidas segundo as mais rigorosas diretrizes do Código de Ética Profissional dos Psicólogos.',
        },
        {
          title: 'Atendimento sem Fronteiras',
          desc: 'Tecnologia em plataformas criptografadas com estabilidade para quem mora no Brasil ou em qualquer país no exterior.',
        },
        {
          title: 'Olhar Integral para a Sexualidade',
          desc: 'Poucos terapeutas unem a profundidade analítica da psicologia à especialidade científica da sexologia.',
        },
        {
          title: 'Flexibilidade de Horários',
          desc: 'Janelas de atendimento planejadas com flexibilidade e conforto para o seu dia a dia.',
        },
        {
          title: 'Acolhimento Empático Genuíno',
          desc: 'Você nunca será julgado. Aqui, suas dores e sentimentos são recebidos com respeito e carinho.',
        },
      ],
    },
    usaSection: {
      tagline: 'Atendimento Sem Fronteiras Geográficas',
      title: 'Terapia Online para Brasil e Exterior',
      highlightBadge: 'Atendimento Psicológico em Português para Qualquer Lugar do Mundo',
      p1: 'Realizo psicoterapia para qualquer pessoa que estiver em qualquer lugar do mundo — seja em qualquer estado do Brasil ou vivendo no exterior —, desde que a pessoa fale português, pois todo o meu atendimento clínico é realizado exclusivamente em língua portuguesa.',
      p2: 'Um espaço de escuta acolhedor, seguro, ético e confidencial. Você não precisa enfrentar suas dores ou desafios emocionais sozinho: onde quer que você esteja, se você fala português, encontrará aqui um cuidado profissional dedicado e transformador.',
      benefits: [
        {
          title: 'Atendimento Exclusivo em Português',
          desc: 'Todas as consultas e sessões terapêuticas são conduzidas inteiramente em língua portuguesa, permitindo que você expresse sentimentos, dores e vivências com total naturalidade.',
        },
        {
          title: 'Acolhimento Sem Barreiras',
          desc: 'Compreensão humana e empática da sua realidade, seja no Brasil ou vivenciando os desafios emocionais e cotidianos de morar no exterior.',
        },
        {
          title: 'Praticidade & Conforto Online',
          desc: 'Sessões realizadas 100% online por videochamada com total comodidade, permitindo que você cuide de si no conforto do seu próprio ambiente.',
        },
        {
          title: 'Privacidade & Sigilo Absoluto',
          desc: 'Consultas em ambiente online confidencial e protegido, em rigorosa conformidade com o Código de Ética Profissional do Conselho Federal de Psicologia (CFP).',
        },
      ],
      note: 'Atendimento para qualquer pessoa no Brasil ou no exterior, desde que fale português.',
      cta: 'Agendar Consulta Online via WhatsApp',
      whatsappMessage: 'Olá Dra. Tatiane, gostaria de agendar uma sessão de terapia online (atendimento em português).',
    },
    testimonials: {
      tagline: 'Depoimentos',
      title: 'O que dizem os pacientes',
      subtitle: 'Histórias reais de superação, autoconhecimento e transformação afetiva.',
      items: [
        {
          id: '1',
          author: 'Mariana S.',
          location: 'São Paulo, SP',
          serviceType: 'Terapia Individual',
          text: 'A Dra. Tatiane tem uma escuta tão generosa e precisa que desde a primeira sessão me senti verdadeiramente acolhida. Consegui entender e superar crises de ansiedade que me travavam há anos. Recomendo de olhos fechados.',
          stars: 5,
        },
        {
          id: '2',
          author: 'Carlos & Patrícia R.',
          location: 'São Bernardo do Campo, SP',
          serviceType: 'Terapia de Casal',
          text: 'Estávamos à beira de um divórcio após 12 anos juntos. O processo com a Dra. Tatiane nos ensinou a nos comunicar de verdade, sem ataques. Redescobrimos a cumplicidade e o carinho que tínhamos esquecido.',
          stars: 5,
        },
        {
          id: '3',
          author: 'Beatriz M.',
          location: 'Boston, Massachusetts (EUA)',
          serviceType: 'Terapia Online EUA',
          text: 'Morando há 4 anos nos EUA, sentia um vazio imenso e muita dificuldade de lidar com a distância da família. Fazer terapia em português com a Tatiane foi a melhor decisão que tomei. Uma profissional extraordinária!',
          stars: 5,
        },
        {
          id: '4',
          author: 'Lucas F.',
          location: 'Atendimento Online',
          serviceType: 'Terapia Sexual',
          text: 'Eu tinha muita vergonha de falar sobre minhas inseguranças sexuais. A naturalidade e o profissionalismo com que a Dra. Tatiane tratou o tema tiraram um peso gigantesco das minhas costas. Minha qualidade de vida mudou por completo.',
          stars: 5,
        },
      ] as TestimonialItem[],
    },
    faq: {
      tagline: 'Tire suas Dúvidas',
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber sobre o início do seu processo terapêutico.',
      items: [
        {
          question: 'Como funciona o atendimento online?',
          answer:
            'As sessões são realizadas por videochamada através de plataformas seguras e criptografadas (Google Meet ou Zoom). Você só precisa de uma conexão estável à internet e um local privado e confortável onde possa falar com total privacidade.',
        },
        {
          question: 'Qual a duração e frequência das sessões?',
          answer:
            'A duração e a frequência dos encontros são adaptadas de acordo com a modalidade terapêutica e a necessidade de cada paciente, casal ou família. O acompanhamento semanal é o formato mais comum para garantir acolhimento consistente e evolução contínua.',
        },
        {
          question: 'Como funciona a terapia online para o Brasil e Exterior?',
          answer:
            'O atendimento é realizado 100% online por videochamada em plataformas seguras e criptografadas para qualquer pessoa no Brasil ou no exterior, desde que fale português, com escuta atenta, humanizada e no conforto do seu lar.',
        },
        {
          question: 'O sigilo das consultas é garantido?',
          answer:
            'Sim, com total rigor. O sigilo profissional é um dever ético inegociável previsto no Código de Ética do Psicólogo e no CFP. Tudo o que for falado em sessão permanece estritamente confidencial.',
        },
        {
          question: 'Como agendar minha primeira sessão?',
          answer:
            'Basta clicar nos botões de WhatsApp do site ou preencher o formulário de contato. Responderei pessoalmente ou através de minha equipe para combinarmos o melhor dia e horário para o seu atendimento.',
        },
      ] as FaqItem[],
    },
    ctaSection: {
      title: 'Pronta(o) para cuidar de você e da sua história?',
      subtitle:
        'Dar o primeiro passo para a terapia é um ato de coragem e amor próprio. Estou aqui para caminhar ao seu lado nessa jornada.',
      whatsappBtn: 'Agendar consulta no WhatsApp',
      phoneText: 'Ou ligue / envie mensagem para:',
      note: 'Atendimento humanizado, ético e sigiloso.',
      whatsappMessage: 'Olá Dra. Tatiane, tomei a decisão de iniciar minha terapia e gostaria de agendar uma consulta.',
    },
    contact: {
      tagline: 'Vamos Conversar',
      title: 'Fale Conosco',
      subtitle:
        'Envie uma mensagem direta pelo WhatsApp ou preencha o formulário abaixo. Retornaremos com todo carinho no menor tempo possível.',
      formName: 'Seu Nome Completo',
      formEmail: 'Seu E-mail',
      formPhone: 'Seu WhatsApp / Telefone com DDD',
      formService: 'Serviço de Interesse',
      formServicePlaceholder: 'Selecione uma opção',
      formLocation: 'Onde você mora atualmente?',
      formLocationOptions: [
        'São Bernardo do Campo ou ABC Paulista (Presencial)',
        'Outro estado ou cidade no Brasil (Online)',
        'Estados Unidos / América do Norte (Online)',
        'Europa ou Reino Unido (Online)',
        'Outro país no Exterior (Online)',
      ],
      formMessage: 'Como posso te ajudar? (Opcional)',
      formSubmit: 'Enviar pelo WhatsApp',
      formSubmitEmail: 'Enviar por E-mail',
      directContactTitle: 'Informações de Contato Direto',
      addressLabel: 'Locais de Atendimento',
      addressValue: 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior',
      whatsappLabel: 'WhatsApp Oficial',
      emailLabel: 'E-mail Profissional',
      instagramLabel: 'Instagram',
      hoursLabel: 'Horários de Atendimento',
      hoursValue: 'Segunda a Sexta, das 08h às 21h | Sábados, das 08h às 14h (Horário de Brasília e compatível com EUA e Exterior)',
    },
    footer: {
      clinicName: 'Dra. Tatiane Vilela',
      crp: 'CRP 06/98605-SP',
      slogan: 'Saúde emocional para uma vida mais plena.',
      navigationTitle: 'Navegação',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato & Localização',
      ethicsTitle: 'Compromisso com o Código de Ética Profissional',
      ethicsNotice:
        'Toda a atividade clínica e os atendimentos presenciais e online são rigorosamente conduzidos em conformidade com o Código de Ética Profissional do Psicólogo (CFP e CRP SP nº 06/98605-SP) e a Resolução CFP nº 011/2018. Garantia absoluta de sigilo, confidencialidade irrevogável, ética e acolhimento.',
      confidentialityNotice:
        'Este site segue todas as diretrizes do Código de Ética Profissional do Psicólogo e a Resolução CFP nº 011/2018 para atendimento psicológico online.',
      locationsNotice: 'São Bernardo do Campo, 100% online, em todo o território do Brasil e exterior',
      copyright: '© 2026 Dra. Tatiane Vilela. Todos os direitos reservados.',
      emergencyNote:
        'Em caso de crise ou emergência psicológica imediata no Brasil, ligue para o CVV no número 188 ou dirija-se ao pronto-socorro mais próximo. Nos EUA, ligue ou envie SMS para 988 (Suicide & Crisis Lifeline).',
    },
    floatingWidget: {
      greeting: 'Olá! Como posso ajudar você hoje?',
      onlineStatus: 'Online agora para informações',
      option1: 'Agendar consulta agora',
      option2: 'Atendimento para quem mora nos EUA',
      option3: 'Dúvidas sobre Terapia de Casal / Sexual',
      typeMessage: 'Escreva sua mensagem...',
      sendBtn: 'Abrir WhatsApp',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      services: 'Services',
      cuidadoIdeal: 'Ideal Care',
      usa: 'Brazil & Abroad',
      contact: 'Contact',
      ctaHeader: 'Book on WhatsApp',
    },
    hero: {
      badge: 'In-Person in SP (Brazil) & 100% Online in Brazil & Abroad',
      headline: 'More connection\nwith your story\nfor a fuller life.',
      subheadline:
        'A warm, safe, and confidential space to care for your mental health, your relationships, and your sexual intimacy.',
      ctaPrimary: 'Book consultation on WhatsApp',
      ctaSecondary: 'Explore services',
      highlightBadge: 'CRP 06/98605-SP',
      onlineBadge: '100% Online Brazil & Abroad',
      stats: [
        { label: 'Years of clinical experience', value: '+14' },
        { label: 'Global care', value: 'Brazil & Abroad' },
        { label: 'Confidentiality & Ethics', value: '100% Strict' },
      ],
    },
    about: {
      tagline: 'About Me',
      title: 'Discover my practice space, a tranquil setting, a planned sanctuary crafted to foster serenity and warmth.',
      spaceQuote: 'Discover my space, a peaceful environment, a thoughtfully designed sanctuary with every detail crafted to foster serenity and warmth.',
      locations: 'São Bernardo do Campo, 100% online across Brazil and abroad',
      p1: 'Hello! I am Dr. Tatiane Vilela (CRP 06/98605-SP), clinical psychologist and sexologist with over a decade dedicated to supporting emotional health, self-discovery, and the quality of human bonds.',
      p2: 'I deeply believe that therapy is a journey to reconnect with your own story. In my practice — whether in-person in São Bernardo do Campo or through online video sessions for clients across Brazil and living abroad —, you will find a strictly non-judgmental environment founded on ethical rigor, genuine warmth, and sensitive listening.',
      p3: 'My practice integrates an understanding of individual complexities, the dynamics of couples and families, and the natural reality of human sexuality as an essential pillar of vitality and wellness.',
      p4: 'I offer in-person psychotherapy in São Bernardo do Campo and 100% online across Brazil and abroad, with warmth, ethics, and professionalism.',
      valuesTitle: 'Core pillars of my practice:',
      values: [
        {
          title: 'Active & Humanized Listening',
          desc: 'Undivided attention to your personal story and pain, without labels.',
        },
        {
          title: 'Unrestricted Respect',
          desc: 'Honoring your individuality, background, and personal pace.',
        },
        {
          title: 'Warm Welcoming',
          desc: 'A safe haven to express doubts, grief, and vulnerabilities.',
        },
        {
          title: 'Zero Judgment',
          desc: 'An open space to speak about sexuality and emotions with total freedom.',
        },
      ],
      ctaAbout: 'Speak with Dr. Tatiane',
    },
    services: {
      tagline: 'Specialized Services',
      title: 'Therapeutic Practice Areas',
      subtitle:
        'Approaches tailored to meet the different seasons and needs of your emotional and relational journey.',
      cardCta: 'Learn more',
      whatsappBtn: 'Speak on WhatsApp',
      items: [
        {
          id: 'diversidade-sexual',
          title: 'Sexual Diversity',
          subtitle: 'All love deserves respect.',
          shortDesc:
            'A safe space to talk about your identity, feelings, relationships, and discoveries. Here you will find warm, ethical, and non-judgmental listening. Being who you are is also health.',
          fullDesc: [
            'A safe space to talk about your identity, feelings, relationships, and discoveries.',
            'Here you will find warm, ethical, and non-judgmental listening. Being who you are is also health.',
          ],
          benefits: [
            'Warm, ethical, and non-judgmental listening',
            'Safe space for identity and discoveries',
            'Being who you are is also health',
          ],
          forWhom: [
            'Individuals seeking acceptance in their identity and expression',
            'Those desiring psychological support free from prejudice',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to learn more about Sexual Diversity therapy.',
          iconName: 'heart',
          imageUrl: 'https://i.imgur.com/GUU68n1.jpeg',
        },
        {
          id: 'relacao-pais-filhos',
          title: 'Parent-Child Relationship',
          subtitle: 'Dialogue today, stronger bonds tomorrow.',
          shortDesc:
            'Therapy can help improve communication, understand different perspectives, and build healthier and more affectionate relationships between parents and children at all life stages. Families who listen to each other grow together.',
          fullDesc: [
            'Therapy can help improve communication, understand different perspectives, and build healthier and more affectionate relationships between parents and children at all life stages.',
            'Families who listen to each other grow together.',
          ],
          benefits: [
            'Improved communication and family dialogue',
            'Understanding different perspectives',
            'Families who listen to each other grow together',
          ],
          forWhom: [
            'Parents and children seeking better coexistence',
            'Families facing conflicts or emotional distance',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule a consultation on Parent-Child Relationships.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/Us9EwMN.jpeg',
        },
        {
          id: 'empoderamento-feminino',
          title: 'Female Empowerment',
          subtitle: 'When you listen to yourself, recognize yourself, and choose yourself, life flows with more lightness and purpose.',
          shortDesc:
            'You can be anything you want, including yourself. Therapy is also an act of strength.',
          fullDesc: [
            'When you listen to yourself, recognize yourself, and choose yourself, life flows with more lightness and purpose.',
            'You can be anything you want, including yourself. Therapy is also an act of strength.',
          ],
          benefits: [
            'Recognition of one\'s own strength and autonomy',
            'Choices aligned with your purpose',
            'Therapy is also an act of strength',
          ],
          forWhom: [
            'Women seeking self-knowledge and empowerment',
            'Those wishing to live with more lightness and boundaries',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to learn more about Female Empowerment.',
          iconName: 'sparkles',
          imageUrl: 'https://i.imgur.com/dwTdy5c.jpeg',
        },
        {
          id: 'sexualidade-humana',
          title: 'Human Sexuality',
          subtitle: 'Knowledge, respect, and freedom to live who you are.',
          shortDesc:
            'Talking about sexuality is also caring for emotional health. Knowledge, respect, and freedom to live who you are.',
          fullDesc: [
            'Talking about sexuality is also caring for emotional health.',
            'Knowledge, respect, and freedom to live who you are.',
          ],
          benefits: [
            'Integrated care for emotional and intimate health',
            'Freedom to live who you are',
            'Knowledge and respect without taboos',
          ],
          forWhom: [
            'Individuals and couples seeking clarification and intimate well-being',
            'Those wishing to overcome taboos regarding sexuality',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule a consultation on Human Sexuality.',
          iconName: 'heart',
          imageUrl: 'https://i.imgur.com/0l4w8YJ.jpeg',
        },
        {
          id: 'psicoterapia-casal',
          title: 'Couples Therapy',
          subtitle: 'More dialogue. More understanding. More connection.',
          shortDesc:
            'A safe space for you both to look together at what matters. Strengthening healthier bonds that are also possible.',
          fullDesc: [
            'A safe space for you both to look together at what matters.',
            'Strengthening healthier bonds that are also possible.',
          ],
          benefits: [
            'More dialogue, understanding, and connection',
            'Safe space to look at what matters',
            'Strengthening healthier bonds',
          ],
          forWhom: [
            'Couples seeking reconnection and productive dialogue',
            'Partners wishing to strengthen their relationship',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to learn more about Couples Therapy.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/fZDoFAa.png',
        },
        {
          id: 'psicoterapia-familiar',
          title: 'Family Therapy',
          subtitle: 'Strengthening bonds for healthier relationships.',
          shortDesc:
            'Family therapy helps improve communication, resolve conflicts, and build a lighter, more welcoming environment for everyone. More connected families, more balanced lives.',
          fullDesc: [
            'Family therapy helps improve communication, resolve conflicts, and build a lighter, more welcoming environment for everyone.',
            'More connected families, more balanced lives.',
          ],
          benefits: [
            'Improved family communication',
            'Conflict resolution in a welcoming manner',
            'More connected families, more balanced lives',
          ],
          forWhom: [
            'Families seeking harmony and unity',
            'A lighter and more welcoming environment for all',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule Family Therapy.',
          iconName: 'users',
          imageUrl: 'https://i.imgur.com/HEq0loe.png',
        },
        {
          id: 'psicoterapia-individual',
          title: 'Individual Therapy',
          subtitle: 'You matter. And your story matters too.',
          shortDesc:
            'A safe space for you to listen to yourself, understand what you feel, and care for yourself. You matter. And your story matters too.',
          fullDesc: [
            'A safe space for you to listen to yourself, understand what you feel, and care for yourself.',
            'You matter. And your story matters too.',
          ],
          benefits: [
            'Safe space to listen to yourself and understand',
            'Attentive care for what you feel',
            'You matter. And your story matters too.',
          ],
          forWhom: [
            'Anyone seeking self-knowledge and emotional care',
            'Those wishing ethical and humanized professional support',
          ],
          whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule Individual Therapy.',
          iconName: 'user',
          imageUrl: 'https://i.imgur.com/aNEie4U.png',
        },
      ] as ServiceItem[],
    },
    whyChoose: {
      tagline: 'Why Choose Me',
      title: 'Why choose this therapeutic care?',
      subtitle:
        'Ethical care, top-tier clinical insight, and the comfort of meeting wherever you are located.',
      reasons: [
        {
          title: 'Active Professional Credentials',
          desc: 'Official licensing with CRP 06/98605-SP and specialized training in clinical psychology and human sexology.',
        },
        {
          title: 'Strict Confidentiality & Privacy',
          desc: 'Sessions conducted in full adherence to the highest international ethical standards for psychology.',
        },
        {
          title: 'Care Without Borders',
          desc: 'Encrypted, high-performance video consultations whether you reside in Brazil or in any country abroad.',
        },
        {
          title: 'Integral Approach to Sexuality',
          desc: 'Rare dual expertise bridging the emotional depths of psychology with the scientific expertise of sexology.',
        },
        {
          title: 'Time Zone Flexibility',
          desc: 'Appointment slots specifically arranged to accommodate local working hours across Brazil, the US, Europe, and worldwide.',
        },
        {
          title: 'Genuine Warmth & Empathy',
          desc: 'You will never be judged. Here, your struggles and emotions are met with respect, dignity, and warmth.',
        },
      ],
    },
    usaSection: {
      tagline: 'Border-Free Online Care',
      title: 'Online Therapy for Brazil and Abroad',
      highlightBadge: 'Psychological Care in Portuguese for Clients in Brazil & Worldwide',
      p1: 'I provide psychotherapy for anyone anywhere in the world — whether across Brazil or living abroad —, provided that the client speaks Portuguese, as all clinical consultations and sessions are conducted exclusively in Portuguese.',
      p2: 'A welcoming, secure, ethical, and confidential space. You never have to face emotional challenges alone: wherever you reside, as long as you speak Portuguese, you will find dedicated and transformative psychological support.',
      benefits: [
        {
          title: 'Sessions Exclusively in Portuguese',
          desc: 'All consultations and therapeutic sessions are conducted entirely in Portuguese, allowing you to convey emotions, memories, and life struggles with effortless authenticity.',
        },
        {
          title: 'Barrier-Free Empathy & Understanding',
          desc: 'Deep, compassionate understanding of your life context, whether living in Brazil or experiencing the emotional challenges of living abroad.',
        },
        {
          title: 'Comfort & Convenience Online',
          desc: 'Sessions conducted 100% online via secure video call with total comfort, allowing you to care for your wellbeing from your own home.',
        },
        {
          title: 'Privacy & Absolute Confidentiality',
          desc: 'Therapy in a strictly confidential and protected telehealth environment, fully adhering to the Psychologist Code of Ethics.',
        },
      ],
      note: 'Available for anyone residing in Brazil or abroad, as long as they speak Portuguese.',
      cta: 'Schedule Online Session via WhatsApp',
      whatsappMessage: 'Hello Dr. Tatiane, I would like to schedule an online therapy session (in Portuguese).',
    },
    testimonials: {
      tagline: 'Testimonials',
      title: 'What clients share',
      subtitle: 'Real stories of growth, self-discovery, and relational transformation.',
      items: [
        {
          id: '1',
          author: 'Mariana S.',
          location: 'São Paulo, SP',
          serviceType: 'Individual Therapy',
          text: 'Dr. Tatiane possesses such a generous and precise way of listening that I felt deeply welcomed from day one. I was able to understand and overcome anxiety episodes that had held me back for years. I recommend her with all my heart.',
          stars: 5,
        },
        {
          id: '2',
          author: 'Carlos & Patricia R.',
          location: 'São Bernardo do Campo, SP',
          serviceType: 'Couple Therapy',
          text: 'We were on the verge of divorce after 12 years together. Our work with Dr. Tatiane taught us how to truly communicate without hostility. We rediscovered the tenderness and complicity we had forgotten.',
          stars: 5,
        },
        {
          id: '3',
          author: 'Beatriz M.',
          location: 'Boston, Massachusetts (USA)',
          serviceType: 'Online Therapy USA',
          text: 'Living for 4 years in the US, I felt a deep emptiness and struggled with the distance from home. Doing therapy in Portuguese with Tatiane was the single best decision I made. An extraordinary professional!',
          stars: 5,
        },
        {
          id: '4',
          author: 'Lucas F.',
          location: 'Online Sessions',
          serviceType: 'Sexual Therapy',
          text: 'I was very embarrassed to open up about my sexual insecurities. The professionalism and natural comfort with which Dr. Tatiane approached the topic lifted a huge weight off my shoulders. It completely changed my life.',
          stars: 5,
        },
      ] as TestimonialItem[],
    },
    faq: {
      tagline: 'Frequently Asked Questions',
      title: 'Questions & Answers',
      subtitle: 'Everything you need to know about starting your therapy journey.',
      items: [
        {
          question: 'How do online therapy sessions work?',
          answer:
            'Sessions take place via secure, encrypted video calls (Google Meet or Zoom). All you need is a reliable internet connection and a private, quiet space where you can speak in total confidentiality.',
        },
        {
          question: 'What is the duration and frequency of sessions?',
          answer:
            'The duration and frequency of sessions are tailored to the specific therapeutic modality and unique journey of each patient, couple, or family. Weekly sessions are the most common cadence to ensure depth and consistent progress.',
        },
        {
          question: 'How does online therapy work for Brazil and clients living abroad?',
          answer:
            'Care is 100% online via secure, encrypted video consultations. Appointments are flexible and scheduled in harmony with your local time zone (Brazil, US, Europe, Japan, and other countries), offering warm therapeutic support in Portuguese in the comfort and privacy of your home.',
        },
        {
          question: 'Is session confidentiality guaranteed?',
          answer:
            'Yes, unconditionally. Professional confidentiality is a strict ethical obligation mandated by psychology licensing codes. Everything shared in session remains strictly private and protected.',
        },
        {
          question: 'How do I book my first session?',
          answer:
            'Simply click on any WhatsApp button across the site or submit the contact form. I will personally respond to coordinate the most convenient time slot for you.',
        },
      ] as FaqItem[],
    },
    ctaSection: {
      title: 'Ready to care for yourself and your story?',
      subtitle:
        'Taking the first step into therapy is an act of bravery and self-respect. I am here to walk alongside you on this journey.',
      whatsappBtn: 'Book consultation on WhatsApp',
      phoneText: 'Or call / text via WhatsApp at:',
      note: 'Humanized, ethical, and strictly confidential care.',
      whatsappMessage: 'Hello Dr. Tatiane, I have decided to start therapy and would like to schedule a consultation.',
    },
    contact: {
      tagline: 'Let\'s Connect',
      title: 'Get in Touch',
      subtitle:
        'Send a direct message via WhatsApp or submit the form below. We will get back to you warmly as soon as possible.',
      formName: 'Your Full Name',
      formEmail: 'Your Email Address',
      formPhone: 'Your WhatsApp / Phone with country code',
      formService: 'Service of Interest',
      formServicePlaceholder: 'Select an option',
      formLocation: 'Where do you currently reside?',
      formLocationOptions: [
        'São Bernardo do Campo or Greater SP (In-person)',
        'Another state or city in Brazil (Online)',
        'United States / North America (Online)',
        'Europe or United Kingdom (Online)',
        'Other country abroad (Online)',
      ],
      formMessage: 'How can I assist you? (Optional)',
      formSubmit: 'Send via WhatsApp',
      formSubmitEmail: 'Send via Email',
      directContactTitle: 'Direct Contact Details',
      addressLabel: 'Care Locations',
      addressValue: 'São Bernardo do Campo, 100% online across Brazil and abroad',
      whatsappLabel: 'Official WhatsApp',
      emailLabel: 'Professional Email',
      instagramLabel: 'Instagram',
      hoursLabel: 'Office Hours',
      hoursValue: 'Monday to Friday, 8am to 9pm | Saturdays, 8am to 2pm (BRT / compatible with US timezones and abroad)',
    },
    footer: {
      clinicName: 'Dra. Tatiane Vilela',
      crp: 'CRP 06/98605-SP',
      slogan: 'Emotional health for a fuller life.',
      navigationTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact & Location',
      ethicsTitle: 'Commitment to the Professional Ethics Code',
      ethicsNotice:
        'All clinical practice and care (in-person and online) are conducted in strict compliance with the Professional Psychology Code of Ethics (Federal Council of Psychology - CFP and CRP SP # 06/98605-SP) and CFP Resolution # 011/2018. Full guarantee of confidentiality, ethics, and empathetic listening.',
      confidentialityNotice:
        'This website complies with the Professional Psychology Code of Ethics and relevant regulations for online psychological consultation.',
      locationsNotice: 'São Bernardo do Campo, 100% online across Brazil and abroad',
      copyright: '© 2026 Dra. Tatiane Vilela. All rights reserved.',
      emergencyNote:
        'In case of an immediate psychological crisis in Brazil, call 188 (CVV) or visit the nearest emergency room. In the USA, call or text 988 (Suicide & Crisis Lifeline).',
    },
    floatingWidget: {
      greeting: 'Hello! How can I assist you today?',
      onlineStatus: 'Online now for inquiries',
      option1: 'Schedule a session now',
      option2: 'Inquiries for US residents',
      option3: 'Questions about Couple / Sex Therapy',
      typeMessage: 'Type your message...',
      sendBtn: 'Open WhatsApp',
    },
  },
};
