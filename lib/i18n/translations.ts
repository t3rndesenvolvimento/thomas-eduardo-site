export type Locale = "pt-BR" | "en-US"
export type Translations = typeof translations["pt-BR"]

export const translations = {
  "pt-BR": {
    // ─── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      process: "Processo",
      contact: "Diagnóstico gratuito",
    },

    // ─── Footer ───────────────────────────────────────────────────────────────
    footer: {
      available: "Disponível para projetos",
    },

    // ─── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      tagline: "Seu software não\nprecisa ser complicado.",
      title: "Thomas Eduardo, Engenheiro de Software",
      description:
        "Transformo processos manuais em sistemas rápidos, escaláveis e feitos para o seu negócio.",
      ctaPrimary: "Fazer Diagnóstico Grátis",
      ctaSecondary: "Ver Projetos",
      socialProof: "Sistemas e páginas em produção gerando receita",
      scroll: "rolar",
    },

    // ─── Pain Points ──────────────────────────────────────────────────────────
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

    // ─── Benefits ─────────────────────────────────────────────────────────────
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

    // ─── Projects ─────────────────────────────────────────────────────────────
    projects: {
      kicker: "Trabalhos",
      heading: "Projetos.",
      subtitle: "Casos reais de sistemas que geram resultado.",
      viewAll: "Ver todos",
      viewAllMobile: "Ver todos os projetos",
    },

    // ─── Testimonials ─────────────────────────────────────────────────────────
    testimonials: {
      kicker: "Depoimentos",
      heading: "O que dizem os clientes.",
    },

    // ─── About ────────────────────────────────────────────────────────────────
    about: {
      kicker: "Perfil",
      headingLine1: "Clareza.",
      headingLine2: "Performance.",
      headingLine3: "Resultado.",
      cta: "Falar com Thomas no WhatsApp",
      ctaMobile: "Falar no WhatsApp",
      p1: "Desenvolvo aplicações web e sistemas completos desde 2023, do banco de dados à interface gráfica.",
      p2: "Entendo o problema do seu negócio antes de escrever código. O objetivo é criar soluções simples, rápidas e lucrativas.",
      pillars: [
        {
          title: "Produto",
          text: "Decisões orientadas ao resultado e ao retorno financeiro do cliente.",
        },
        {
          title: "Engenharia",
          text: "Código limpo, arquitetura sólida e sistemas fáceis de manter.",
        },
        {
          title: "Previsibilidade",
          text: "Prazos cumpridos à risca e comunicação direta em cada etapa.",
        },
      ],
    },

    // ─── Tech Expertise ───────────────────────────────────────────────────────
    techExpertise: {
      kicker: "Stack",
      headingMobile: "Tecnologias.",
      headingDesktop: "Tecnologias & Ferramentas.",
      subtitle: "Stack moderna utilizada em projetos reais de alta escala.",
      groups: [
        {
          category: "Frontend",
          description: "Interfaces rápidas e responsivas.",
        },
        {
          category: "Backend",
          description: "APIs seguras e arquitetura escalável.",
        },
        {
          category: "Banco de Dados",
          description: "Modelagem otimizada de dados.",
        },
        {
          category: "Infraestrutura",
          description: "Deploy contínuo e computação na nuvem.",
        },
      ],
    },

    // ─── Engineering Approach ─────────────────────────────────────────────────
    engineering: {
      kicker: "Processo direto",
      heading: "Transparência do primeiro contato até a entrega.",
      body: "Acompanhe cada passo com prazos claros, alinhamentos constantes e entregas funcionais.",
      steps: [
        {
          title: "1. Diagnóstico",
          description:
            "Entendimento das necessidades do negócio e definição da melhor solução.",
          detail: "Escopo, arquitetura inicial e estimativa.",
        },
        {
          title: "2. Arquitetura",
          description: "Projetar interfaces rápidas e estruturas de dados eficientes.",
          detail: "Design limpo e banco otimizado.",
        },
        {
          title: "3. Desenvolvimento",
          description:
            "Construção com tecnologias modernas e foco em segurança.",
          detail: "Frontend intuitivo e backend escalável.",
        },
        {
          title: "4. Testes",
          description:
            "Garantia de funcionamento correto em todos os dispositivos.",
          detail: "Testes de velocidade, links e formulários.",
        },
        {
          title: "5. Publicação",
          description: "Deploy em servidores de alta disponibilidade sem quedas.",
          detail: "Publicação na nuvem e configuração.",
        },
        {
          title: "6. Acompanhamento",
          description:
            "Suporte pós-lançamento e acompanhamento de resultados.",
          detail: "Garantia contínua e ajustes.",
        },
      ],
    },

    // ─── Home CTA ─────────────────────────────────────────────────────────────
    homeCta: {
      kicker: "Vamos conversar?",
      line1: "Pronto para escalar o seu projeto",
      line2: "com tecnologia de ponta?",
      body: "Faça um diagnóstico gratuito. Em menos de 24 horas envio um plano inicial com escopo, prazo e estimativa.",
      ctaPrimary: "Fazer Diagnóstico Grátis",
      ctaSecondary: "Ver Todos os Projetos",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EN-US
  // ═══════════════════════════════════════════════════════════════════════════
  "en-US": {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      process: "Process",
      contact: "Free Diagnosis",
    },

    footer: {
      available: "Available for projects",
    },

    // ─── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      tagline: "Your software shouldn't\nbe complicated.",
      title: "Thomas Eduardo, Software Engineer",
      description:
        "I transform manual processes into fast, scalable systems built for your business.",
      ctaPrimary: "Get Free Diagnosis",
      ctaSecondary: "View Projects",
      socialProof: "Production systems and pages generating revenue",
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
      viewAll: "View all",
      viewAllMobile: "View all projects",
    },

    testimonials: {
      kicker: "Testimonials",
      heading: "Client feedback.",
    },

    about: {
      kicker: "Profile",
      headingLine1: "Clarity.",
      headingLine2: "Performance.",
      headingLine3: "Results.",
      cta: "Talk with Thomas on WhatsApp",
      ctaMobile: "Talk on WhatsApp",
      p1: "Building full-stack web applications and software systems since 2023.",
      p2: "I analyze your business problem before writing any code. The goal is simple, fast, and profitable solutions.",
      pillars: [
        {
          title: "Product",
          text: "Technical decisions driven by business outcome and financial return.",
        },
        {
          title: "Engineering",
          text: "Clean code, solid architecture, and easy to maintain systems.",
        },
        {
          title: "Predictability",
          text: "Strict deadlines met with direct communication at every step.",
        },
      ],
    },

    techExpertise: {
      kicker: "Stack",
      headingMobile: "Technologies.",
      headingDesktop: "Technologies & Tools.",
      subtitle: "Modern stack used in real production projects.",
      groups: [
        {
          category: "Frontend",
          description: "Fast, responsive web interfaces.",
        },
        {
          category: "Backend",
          description: "Secure APIs and scalable architecture.",
        },
        {
          category: "Database",
          description: "Optimized data modeling.",
        },
        {
          category: "Infrastructure",
          description: "Continuous deployment and cloud setups.",
        },
      ],
    },

    engineering: {
      kicker: "Direct process",
      heading: "Full transparency from first call to deployment.",
      body: "Track every step with clear timelines, frequent updates, and working software.",
      steps: [
        {
          title: "1. Diagnosis",
          description: "Understanding requirements and defining the best technical approach.",
          detail: "Scope, architecture, and timeline.",
        },
        {
          title: "2. Architecture",
          description: "Designing fast interfaces and efficient database structures.",
          detail: "Clean design and database tuning.",
        },
        {
          title: "3. Development",
          description: "Building with modern tools and security best practices.",
          detail: "Intuitive frontend and scalable backend.",
        },
        {
          title: "4. Testing",
          description: "Validating performance and responsiveness on all devices.",
          detail: "Speed, link, and form checks.",
        },
        {
          title: "5. Deployment",
          description: "Zero-downtime deployment on cloud servers.",
          detail: "Domain and cloud configuration.",
        },
        {
          title: "6. Support",
          description: "Post-launch support and ongoing performance checks.",
          detail: "Maintenance and continuous improvements.",
        },
      ],
    },

    homeCta: {
      kicker: "Let's talk?",
      line1: "Ready to scale your business",
      line2: "with high-end software?",
      body: "Request a free diagnosis. Get a clear plan with scope and timeline within 24 hours.",
      ctaPrimary: "Get Free Diagnosis",
      ctaSecondary: "View All Projects",
    },
  },
}
