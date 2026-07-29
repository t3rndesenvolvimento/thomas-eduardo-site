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
        "Construo interfaces e backends com Next.js, React, TypeScript e Node.js. Cases em produção com métricas de conversão e sistemas sob medida.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Precisa de um projeto?",
      socialProof: "Next.js · React · TypeScript · Node.js · São Paulo",
      scroll: "rolar",
    },

    painPoints: {
      kicker: "Gargalos reais",
      heading: "Sua empresa está perdendo tempo e vendas?",
      items: [
        {
          headline: "Lentidão que mata vendas",
          copy: "Cada segundo de espera afasta clientes. Páginas pesadas desperdiçam o seu orçamento de tráfego pago.",
        },
        {
          headline: "Atrasos e estouro de orçamento",
          copy: "Promessas de 30 dias que viram 6 meses. Código confuso e custos que dobram no meio do caminho.",
        },
        {
          headline: "Sistemas que travam no crescimento",
          copy: "Processos manuais e plataformas engessadas geram gargalos que travam a produtividade da sua equipe.",
        },
        {
          headline: "Quedas nos picos de tráfego",
          copy: "Campanhas fortes que derrubam o site. Falta de estabilidade destrói o retorno do seu investimento.",
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
          copy: "Páginas carregando em menos de 1 segundo para converter mais visitantes em clientes pagantes.",
          accent: "Alta velocidade",
        },
        {
          headline: "Entregas no Prazo",
          copy: "Cronograma claro, escopo fechado e comunicação constante do primeiro dia à entrega final.",
          accent: "Sem surpresas",
        },
        {
          headline: "Sistemas Sob Medida",
          copy: "Softwares intuitivos e automatizados que eliminam tarefas manuais e organizam sua operação.",
          accent: "Eficiência total",
        },
        {
          headline: "Estabilidade Garantida",
          copy: "Infraestrutura moderna que suporta picos de tráfego e vendas sem sair do ar.",
          accent: "Disponibilidade 24/7",
        },
      ],
    },

    projects: {
      kicker: "Cases",
      heading: "Projetos.",
      subtitle: "Trabalho real em produção — stack, problema e resultado.",
      viewAll: "Ver todos",
      viewAllMobile: "Ver todos os projetos",
    },

    testimonials: {
      kicker: "Depoimentos",
      heading: "O que dizem os clientes.",
    },

    about: {
      kicker: "Perfil",
      headingLine1: "Produto.",
      headingLine2: "Código.",
      headingLine3: "Entrega.",
      cta: "LinkedIn",
      ctaMobile: "LinkedIn",
      p1: "Desenvolvedor full stack desde 2023. Atuo do frontend ao backend com foco em produtos que vão para produção.",
      p2: "Busco oportunidades CLT ou PJ como Full Stack / Product Engineer. Também atendo projetos sob demanda em /freelance.",
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
      headingMobile: "Tecnologias.",
      headingDesktop: "Tecnologias & Ferramentas.",
      subtitle: "Stack usada em projetos reais em produção.",
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
          category: "Banco de Dados",
          description: "PostgreSQL, MongoDB, Prisma.",
        },
        {
          category: "Infraestrutura",
          description: "Vercel, Docker, CI/CD, AWS.",
        },
      ],
    },

    engineering: {
      kicker: "Processo",
      heading: "Do discovery ao deploy.",
      body: "Etapas claras, entregas funcionais e feedback contínuo.",
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
          description: "Incrementos em produção-ready.",
          detail: "Código type-safe e revisável.",
        },
        {
          title: "4. Testes",
          description: "Validar fluxos críticos.",
          detail: "Manual + automatizado quando faz sentido.",
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
      body: "CLT ou PJ como Full Stack / Product Engineer — ou um briefing rápido se você precisa de um site ou sistema.",
      ctaPrimary: "Me chamar no LinkedIn",
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
        "I build UIs and backends with Next.js, React, TypeScript and Node.js. Production work with conversion metrics and custom systems.",
      ctaPrimary: "View projects",
      ctaSecondary: "Need a project?",
      socialProof: "Next.js · React · TypeScript · Node.js · São Paulo",
      scroll: "scroll",
    },

    painPoints: {
      kicker: "Real bottlenecks",
      heading: "Is your business losing sales and time?",
      items: [
        {
          headline: "Slow load times killing conversion",
          copy: "Every extra second drives users away. Heavy sites waste your ad budget.",
        },
        {
          headline: "Project delays & budget blowouts",
          copy: "30-day promises turning into 6 months. Unclear code doubling costs.",
        },
        {
          headline: "Systems freezing under growth",
          copy: "Manual tasks and rigid platforms blocking your team's daily productivity.",
        },
        {
          headline: "Traffic spikes crashing your site",
          copy: "Strong ad campaigns taking down your site, destroying marketing ROI.",
        },
      ],
    },

    benefits: {
      kicker: "The solution",
      heading: "Engineering focused on results:",
      cta: "Get free diagnosis",
      items: [
        {
          headline: "Speed and Conversion",
          copy: "Pages loading under 1 second to convert more visitors into paying customers.",
          accent: "Lightning fast",
        },
        {
          headline: "On-Time Delivery",
          copy: "Clear timeline, locked scope, and constant updates from day one.",
          accent: "No surprises",
        },
        {
          headline: "Custom Web Software",
          copy: "Automated and intuitive platforms that eliminate manual tasks.",
          accent: "Full efficiency",
        },
        {
          headline: "Guaranteed Stability",
          copy: "Modern architecture that handles traffic spikes without downtime.",
          accent: "24/7 uptime",
        },
      ],
    },

    projects: {
      kicker: "Work",
      heading: "Selected projects.",
      subtitle: "Real production work — stack, problem, outcome.",
      viewAll: "View all",
      viewAllMobile: "View all projects",
    },

    testimonials: {
      kicker: "Testimonials",
      heading: "Client feedback.",
    },

    about: {
      kicker: "Profile",
      headingLine1: "Product.",
      headingLine2: "Code.",
      headingLine3: "Delivery.",
      cta: "LinkedIn",
      ctaMobile: "LinkedIn",
      p1: "Full-stack developer since 2023. From UI to API, shipping to production.",
      p2: "Open to full-time or contract roles. Freelance work lives at /freelance.",
      pillars: [
        {
          title: "Product",
          text: "Technical choices tied to the business metric that matters.",
        },
        {
          title: "Engineering",
          text: "TypeScript, clear APIs, readable code, predictable deploys.",
        },
        {
          title: "Communication",
          text: "Explicit scope, honest timelines, steady updates.",
        },
      ],
    },

    techExpertise: {
      kicker: "Stack",
      headingMobile: "Technologies.",
      headingDesktop: "Technologies & Tools.",
      subtitle: "Stack used in real production projects.",
      groups: [
        {
          category: "Frontend",
          description: "Next.js, React, TypeScript, Tailwind.",
        },
        {
          category: "Backend",
          description: "Node.js, REST APIs, auth.",
        },
        {
          category: "Database",
          description: "PostgreSQL, MongoDB, Prisma.",
        },
        {
          category: "Infrastructure",
          description: "Vercel, Docker, CI/CD, AWS.",
        },
      ],
    },

    engineering: {
      kicker: "Process",
      heading: "From discovery to deploy.",
      body: "Clear steps, working software, continuous feedback.",
      steps: [
        {
          title: "1. Discovery",
          description: "Understand the problem and success metrics.",
          detail: "Scope and acceptance criteria.",
        },
        {
          title: "2. Architecture",
          description: "Stack, data and constraints.",
          detail: "Documented decisions.",
        },
        {
          title: "3. Development",
          description: "Production-ready increments.",
          detail: "Type-safe, reviewable code.",
        },
        {
          title: "4. Testing",
          description: "Validate critical flows.",
          detail: "Manual + automated when it pays off.",
        },
        {
          title: "5. Deploy",
          description: "CI/CD and stable environments.",
          detail: "Basic monitoring.",
        },
        {
          title: "6. Iteration",
          description: "Improve from real usage.",
          detail: "Continuous improvement.",
        },
      ],
    },

    homeCta: {
      kicker: "Next step",
      line1: "Open to opportunities",
      line2: "and project work",
      body: "Full-time or contract as Full Stack / Product Engineer — or a short briefing if you need a site or system.",
      ctaPrimary: "LinkedIn",
      ctaSecondary: "Hire for a project",
    },
  },
}
