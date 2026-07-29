export type Locale = "pt-BR" | "en-US"
export type Translations = typeof translations["pt-BR"]

export const translations = {
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      process: "Processo",
      contact: "Projetos sob demanda",
    },

    footer: {
      available: "Aberto a CLT, PJ e projetos",
    },

    hero: {
      tagline: "Full Stack & Product Engineer",
      title: "Thomas Eduardo, Full Stack / Product Engineer",
      description:
        "Interfaces e backends com Next.js, React, TypeScript e Node.js. Cases em produção com métricas reais — não só mockups.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Precisa de um projeto?",
      socialProof: "Next.js · React · TypeScript · Node.js",
      scroll: "rolar",
    },

    painPoints: {
      kicker: "Gargalos reais",
      heading: "Sua empresa está perdendo tempo e vendas?",
      items: [
        {
          headline: "Lentidão que mata vendas",
          copy: "Cada segundo de espera afasta clientes.",
        },
        {
          headline: "Atrasos e estouro de orçamento",
          copy: "Promessas de 30 dias que viram 6 meses.",
        },
        {
          headline: "Sistemas que travam no crescimento",
          copy: "Processos manuais e plataformas engessadas.",
        },
        {
          headline: "Quedas nos picos de tráfego",
          copy: "Campanhas fortes que derrubam o site.",
        },
      ],
    },

    benefits: {
      kicker: "A solução",
      heading: "Engenharia focada em resultados:",
      cta: "Fazer diagnóstico",
      items: [
        {
          headline: "Velocidade e Conversão",
          copy: "Páginas rápidas para converter mais.",
          accent: "Alta velocidade",
        },
        {
          headline: "Entregas no Prazo",
          copy: "Cronograma claro e escopo fechado.",
          accent: "Sem surpresas",
        },
        {
          headline: "Sistemas Sob Medida",
          copy: "Software que organiza a operação.",
          accent: "Eficiência total",
        },
        {
          headline: "Estabilidade",
          copy: "Infraestrutura para picos de tráfego.",
          accent: "Disponibilidade",
        },
      ],
    },

    projects: {
      kicker: "Cases",
      heading: "Projetos",
      subtitle: "Trabalho em produção — stack, problema e resultado.",
      viewAll: "Ver todos",
      viewAllMobile: "Ver todos os projetos",
    },

    testimonials: {
      kicker: "Depoimentos",
      heading: "O que dizem os clientes",
    },

    about: {
      kicker: "Perfil",
      headingLine1: "Produto.",
      headingLine2: "Código.",
      headingLine3: "Entrega.",
      cta: "LinkedIn",
      ctaMobile: "LinkedIn",
      p1: "Full stack desde 2023. Atuo do frontend ao backend com foco em produtos que vão para produção.",
      p2: "Busco CLT ou PJ como Full Stack / Product Engineer. Projetos sob demanda ficam em /freelance.",
      pillars: [
        {
          title: "Produto",
          text: "Decisões técnicas alinhadas ao problema de negócio e à métrica que importa.",
        },
        {
          title: "Engenharia",
          text: "TypeScript, APIs claras, código legível e deploy previsível.",
        },
        {
          title: "Comunicação",
          text: "Escopo explícito, prazos honestos e atualização constante.",
        },
      ],
    },

    techExpertise: {
      kicker: "Stack",
      headingMobile: "Tecnologias",
      headingDesktop: "Stack em produção",
      subtitle: "Ferramentas usadas em projetos reais — não lista de buzzwords.",
      groups: [
        {
          category: "Frontend",
          description: "Next.js, React, TypeScript, Tailwind.",
        },
        {
          category: "Backend",
          description: "Node.js, APIs REST, autenticação.",
        },
        {
          category: "Dados",
          description: "PostgreSQL, MongoDB, Prisma.",
        },
        {
          category: "Infra",
          description: "Vercel, Docker, CI/CD, AWS.",
        },
      ],
    },

    engineering: {
      kicker: "Processo",
      heading: "Do discovery ao deploy.",
      body: "Etapas claras e entregas funcionais.",
      steps: [
        {
          title: "1. Discovery",
          description: "Entender o problema e o sucesso mensurável.",
          detail: "Escopo e critérios de aceite.",
        },
        {
          title: "2. Arquitetura",
          description: "Stack, dados e limites técnicos.",
          detail: "Decisões documentadas.",
        },
        {
          title: "3. Desenvolvimento",
          description: "Incrementos production-ready.",
          detail: "Código type-safe.",
        },
        {
          title: "4. Testes",
          description: "Validar fluxos críticos.",
          detail: "Manual + automatizado.",
        },
        {
          title: "5. Deploy",
          description: "CI/CD e ambiente estável.",
          detail: "Monitoramento básico.",
        },
        {
          title: "6. Iteração",
          description: "Ajustes com base em uso real.",
          detail: "Melhoria contínua.",
        },
      ],
    },

    homeCta: {
      kicker: "Próximo passo",
      line1: "Aberto a oportunidades",
      line2: "e a projetos sob demanda",
      body: "CLT ou PJ como Full Stack / Product Engineer — ou um briefing se você precisa de um site ou sistema.",
      ctaPrimary: "LinkedIn",
      ctaSecondary: "Quero um projeto",
    },
  },

  "en-US": {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      process: "Process",
      contact: "Hire for a project",
    },

    footer: {
      available: "Open to full-time, contract & freelance",
    },

    hero: {
      tagline: "Full Stack & Product Engineer",
      title: "Thomas Eduardo, Full Stack / Product Engineer",
      description:
        "UIs and backends with Next.js, React, TypeScript and Node.js. Production cases with real metrics — not just mockups.",
      ctaPrimary: "View projects",
      ctaSecondary: "Need a project?",
      socialProof: "Next.js · React · TypeScript · Node.js",
      scroll: "scroll",
    },

    painPoints: {
      kicker: "Bottlenecks",
      heading: "Losing sales and time?",
      items: [
        { headline: "Slow load times", copy: "Every second costs conversion." },
        { headline: "Delays & budget blowouts", copy: "30-day promises become 6 months." },
        { headline: "Systems that freeze", copy: "Manual processes blocking growth." },
        { headline: "Traffic spikes", copy: "Campaigns taking the site down." },
      ],
    },

    benefits: {
      kicker: "The solution",
      heading: "Engineering focused on outcomes:",
      cta: "Get started",
      items: [
        { headline: "Speed", copy: "Fast pages that convert.", accent: "Fast" },
        { headline: "On time", copy: "Clear scope and timeline.", accent: "Predictable" },
        { headline: "Custom software", copy: "Systems that fit the business.", accent: "Fit" },
        { headline: "Stability", copy: "Infra that holds under load.", accent: "Reliable" },
      ],
    },

    projects: {
      kicker: "Work",
      heading: "Projects",
      subtitle: "Production work — stack, problem, outcome.",
      viewAll: "View all",
      viewAllMobile: "View all projects",
    },

    testimonials: {
      kicker: "Testimonials",
      heading: "Client feedback",
    },

    about: {
      kicker: "Profile",
      headingLine1: "Product.",
      headingLine2: "Code.",
      headingLine3: "Delivery.",
      cta: "LinkedIn",
      ctaMobile: "LinkedIn",
      p1: "Full-stack since 2023. UI to API, shipping to production.",
      p2: "Open to full-time or contract. Freelance at /freelance.",
      pillars: [
        { title: "Product", text: "Tech choices tied to the metric that matters." },
        { title: "Engineering", text: "TypeScript, clear APIs, predictable deploys." },
        { title: "Communication", text: "Explicit scope, honest timelines." },
      ],
    },

    techExpertise: {
      kicker: "Stack",
      headingMobile: "Technologies",
      headingDesktop: "Production stack",
      subtitle: "Tools used in real projects — not a buzzword list.",
      groups: [
        { category: "Frontend", description: "Next.js, React, TypeScript, Tailwind." },
        { category: "Backend", description: "Node.js, REST APIs, auth." },
        { category: "Data", description: "PostgreSQL, MongoDB, Prisma." },
        { category: "Infra", description: "Vercel, Docker, CI/CD, AWS." },
      ],
    },

    engineering: {
      kicker: "Process",
      heading: "From discovery to deploy.",
      body: "Clear steps and working software.",
      steps: [
        { title: "1. Discovery", description: "Problem and success metrics.", detail: "Scope." },
        { title: "2. Architecture", description: "Stack and constraints.", detail: "Decisions." },
        { title: "3. Build", description: "Production-ready increments.", detail: "Type-safe." },
        { title: "4. Test", description: "Critical flows.", detail: "Manual + auto." },
        { title: "5. Deploy", description: "CI/CD, stable env.", detail: "Monitoring." },
        { title: "6. Iterate", description: "From real usage.", detail: "Improve." },
      ],
    },

    homeCta: {
      kicker: "Next step",
      line1: "Open to opportunities",
      line2: "and project work",
      body: "Full-time or contract — or a short briefing for a project.",
      ctaPrimary: "LinkedIn",
      ctaSecondary: "Hire for a project",
    },
  },
}
