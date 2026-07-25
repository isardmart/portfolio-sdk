import type { ExperienceTranslation, TranslatedLocale } from '../types.js';

/**
 * Authored translations of `EXPERIENCE`, keyed by entry `id`.
 * English is the source copy on the entries themselves.
 */
export const EXPERIENCE_TRANSLATIONS: Record<
  TranslatedLocale,
  Record<string, ExperienceTranslation>
> = {
  ca: {
    openfort: {
      position: 'Enginyer Full Stack',
      description:
        "Enginyer full-stack a Openfort, plataforma Wallet-as-a-Service (WaaS) que permet llançar projectes crypto en minuts. Desenvolupament d'SDKs per a Web (React, JavaScript), mòbil (React Native) i backends (Node.js). Carteres no custodiales branded, cross-app i invisibles; estàndards EIP (ex. 4337); Wagmi, Viem, Ethers; Ethereum i Solana. La plataforma processa més de 10M de transaccions per a més de 50 clients (ex. Beam, Kroma, DOS Chain).",
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        "Vaig definir l'estratègia tècnica i vaig lliurar solucions digitals de punta a punta per a clients de logística, des de l'arquitectura fins al desplegament en producció.",
    },
    'bonarea-it': {
      position: 'Desenvolupador Full Stack',
      description:
        'Vaig liderar la migració del frontend de Lit i JS pur a React amb Astro. Vaig adoptar Mantine com a biblioteca de components, reemplaçant una solució personalitzada en HTML i CSS. Vaig participar en la implementació de microserveis frontend usant Module Federation i single SPA. Vaig millorar el rendiment i la mantenibilitat del frontend amb aquestes tecnologies.',
    },
    'software-experts': {
      position: 'Desenvolupador Full Stack',
      description:
        'Vaig desenvolupar pàgines web adaptatives i funcionals, gestionant màrqueting, vendes i producte juntament amb un soci. Vaig participar en la creació i llançament de projectes web assegurant qualitat i consistència. Vaig treballar en un entorn pre-startup, adquirint diverses habilitats i adaptant-me a diferents rols segons les necessitats del negoci.',
    },
    citibeats: {
      position: 'Analista de Qualitat de Dades - Equip de Producte (Pràctiques)',
      description:
        "Vaig analitzar i validar la qualitat de dades socials per a models d'IA. Vaig col·laborar amb l'equip de producte per millorar els pipelines de processament de dades i assegurar entrades d'alta qualitat per a algoritmes d'aprenentatge automàtic.",
    },
  },
  de: {
    openfort: {
      position: 'Full Stack Ingenieur',
      description:
        'Full-Stack-Ingenieur bei Openfort, einer Wallet-as-a-Service (WaaS)-Plattform, mit der Entwickler in Minuten Krypto-Projekte starten können. Entwicklung von SDKs für Web (React, JavaScript), Mobile (React Native) und Backends (Node.js). Branded-, Cross-App- und unsichtbare Non-Custodial-Wallets; EIP-Standards (z. B. 4337); Wagmi, Viem, Ethers; Ethereum und Solana. Die Plattform verarbeitet über 10M Transaktionen für über 50 Kunden (z. B. Beam, Kroma, DOS Chain).',
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        'Technische Strategie definiert und End-to-End-Digitallösungen für Logistikkunden geliefert, von der Architektur bis zum Produktions-Deployment.',
    },
    'bonarea-it': {
      position: 'Full Stack Entwickler',
      description:
        'Führung der Migration des Frontends von Lit und reinem JS zu React mit Astro. Adoption von Mantine als Komponentenbibliothek, Ersetzen einer benutzerdefinierten Lösung in HTML und CSS. Beteiligung an der Implementierung von Frontend-Microservices mit Module Federation und Single SPA. Verbesserung der Leistung und Wartbarkeit des Frontends mit diesen Technologien.',
    },
    'software-experts': {
      position: 'Full Stack Entwickler',
      description:
        'Entwicklung adaptiver und funktionaler Webseiten, Verwaltung von Marketing, Vertrieb und Produkt gemeinsam mit einem Partner. Beteiligung an der Erstellung und dem Start von Webprojekten mit Gewährleistung von Qualität und Konsistenz. Arbeit in einer Pre-Startup-Umgebung, Erwerb vielfältiger Fähigkeiten und Anpassung an verschiedene Rollen je nach Geschäftsbedarf.',
    },
    citibeats: {
      position: 'Datenqualitätsanalyst - Produktteam (Praktikum)',
      description:
        'Analyse und Validierung der Qualität sozialer Daten für KI-Modelle. Zusammenarbeit mit dem Produktteam zur Verbesserung der Datenverarbeitungspipelines und Sicherstellung hochwertiger Eingaben für maschinelle Lernalgorithmen.',
    },
  },
  es: {
    openfort: {
      position: 'Ingeniero Full Stack',
      description:
        'Ingeniero full-stack en Openfort, plataforma Wallet-as-a-Service (WaaS) que permite lanzar proyectos crypto en minutos. Desarrollo de SDKs para Web (React, JavaScript), móvil (React Native) y backends (Node.js). Wallets no custodiadas branded, cross-app e invisibles; estándares EIP (ej. 4337); Wagmi, Viem, Ethers; Ethereum y Solana. La plataforma procesa más de 10M de transacciones para más de 50 clientes (ej. Beam, Kroma, DOS Chain).',
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        'Definí la estrategia técnica y entregué soluciones digitales de extremo a extremo para clientes de logística, desde la arquitectura hasta el despliegue en producción.',
    },
    'bonarea-it': {
      position: 'Desarrollador Full Stack',
      description:
        'Lideré la migración del frontend de Lit y JS puro a React con Astro. Adopté Mantine como biblioteca de componentes, reemplazando una solución personalizada en HTML y CSS. Participé en la implementación de microservicios frontend usando Module Federation y single SPA. Mejoré el rendimiento y la mantenibilidad del frontend con estas tecnologías.',
    },
    'software-experts': {
      position: 'Desarrollador Full Stack',
      description:
        'Desarrollé páginas web adaptativas y funcionales, manejando marketing, ventas y producto junto con un socio. Participé en la creación y lanzamiento de proyectos web asegurando calidad y consistencia. Trabajé en un entorno pre-startup, adquiriendo diversas habilidades y adaptándome a diferentes roles según las necesidades del negocio.',
    },
    citibeats: {
      position: 'Analista de Calidad de Datos - Equipo de Producto (Prácticas)',
      description:
        'Analicé y validé la calidad de datos sociales para modelos de IA. Colaboré con el equipo de producto para mejorar los pipelines de procesamiento de datos y asegurar entradas de alta calidad para algoritmos de aprendizaje automático.',
    },
  },
  fr: {
    openfort: {
      position: 'Ingénieur Full Stack',
      description:
        "Ingénieur full-stack chez Openfort, plateforme Wallet-as-a-Service (WaaS) permettant de lancer des projets crypto en quelques minutes. Développement d'SDKs pour Web (React, JavaScript), mobile (React Native) et backends (Node.js). Portefeuilles non-custodial branded, cross-app et invisibles; standards EIP (ex. 4337); Wagmi, Viem, Ethers; Ethereum et Solana. La plateforme traite plus de 10M de transactions pour plus de 50 clients (ex. Beam, Kroma, DOS Chain).",
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        "Défini la stratégie technique et livré des solutions numériques de bout en bout pour des clients logistiques, de l'architecture au déploiement en production.",
    },
    'bonarea-it': {
      position: 'Développeur Full Stack',
      description:
        "Direction de la migration du frontend de Lit et JS pur vers React avec Astro. Adoption de Mantine comme bibliothèque de composants, remplaçant une solution personnalisée en HTML et CSS. Participation à l'implémentation de microservices frontend utilisant Module Federation et single SPA. Amélioration des performances et de la maintenabilité du frontend avec ces technologies.",
    },
    'software-experts': {
      position: 'Développeur Full Stack',
      description:
        "Développement de pages web adaptatives et fonctionnelles, gestion du marketing, des ventes et du produit avec un partenaire. Participation à la création et au lancement de projets web en assurant qualité et cohérence. Travail dans un environnement pré-startup, acquisition de compétences diverses et adaptation à différents rôles selon les besoins de l'entreprise.",
    },
    citibeats: {
      position: 'Analyste Qualité des Données - Équipe Produit (Stage)',
      description:
        "Analyse et validation de la qualité des données sociales pour les modèles IA. Collaboration avec l'équipe produit pour améliorer les pipelines de traitement des données et assurer des entrées de haute qualité pour les algorithmes d'apprentissage automatique.",
    },
  },
  it: {
    openfort: {
      position: 'Ingegnere Full Stack',
      description:
        'Ingegnere full-stack in Openfort, piattaforma Wallet-as-a-Service (WaaS) che permette di lanciare progetti crypto in minuti. Sviluppo di SDK per Web (React, JavaScript), mobile (React Native) e backend (Node.js). Portafogli non-custodial branded, cross-app e invisibili; standard EIP (es. 4337); Wagmi, Viem, Ethers; Ethereum e Solana. La piattaforma processa oltre 10M di transazioni per oltre 50 clienti (es. Beam, Kroma, DOS Chain).',
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        "Definita la strategia tecnica e consegnate soluzioni digitali end-to-end per clienti della logistica, dall'architettura al deployment in produzione.",
    },
    'bonarea-it': {
      position: 'Sviluppatore Full Stack',
      description:
        "Guidato la migrazione del frontend da Lit e JS puro a React con Astro. Adottato Mantine come libreria di componenti, sostituendo una soluzione personalizzata in HTML e CSS. Partecipato all'implementazione di microservizi frontend utilizzando Module Federation e single SPA. Migliorato le prestazioni e la manutenibilità del frontend con queste tecnologie.",
    },
    'software-experts': {
      position: 'Sviluppatore Full Stack',
      description:
        'Sviluppato pagine web adattive e funzionali, gestendo marketing, vendite e prodotto insieme a un partner. Partecipato alla creazione e al lancio di progetti web assicurando qualità e coerenza. Lavorato in un ambiente pre-startup, acquisendo competenze diverse e adattandosi a ruoli diversi secondo le esigenze aziendali.',
    },
    citibeats: {
      position: 'Analista Qualità Dati - Team Prodotto (Tirocinio)',
      description:
        'Analizzato e validato la qualità dei dati sociali per modelli IA. Collaborato con il team prodotto per migliorare le pipeline di elaborazione dati e garantire input di alta qualità per algoritmi di apprendimento automatico.',
    },
  },
  pt: {
    openfort: {
      position: 'Engenheiro Full Stack',
      description:
        'Engenheiro full-stack na Openfort, plataforma Wallet-as-a-Service (WaaS) que permite lançar projetos crypto em minutos. Desenvolvimento de SDKs para Web (React, JavaScript), móvel (React Native) e backends (Node.js). Carteiras não custodiais branded, cross-app e invisíveis; padrões EIP (ex. 4337); Wagmi, Viem, Ethers; Ethereum e Solana. A plataforma processa mais de 10M de transações para mais de 50 clientes (ex. Beam, Kroma, DOS Chain).',
    },
    'exe-global-forwarders': {
      position: 'Chief Technology Officer',
      description:
        'Defini a estratégia técnica e entreguei soluções digitais de ponta a ponta para clientes de logística, da arquitetura ao deploy em produção.',
    },
    'bonarea-it': {
      position: 'Desenvolvedor Full Stack',
      description:
        'Liderei a migração do frontend de Lit e JS puro para React com Astro. Adotei Mantine como biblioteca de componentes, substituindo uma solução personalizada em HTML e CSS. Participei da implementação de microserviços frontend usando Module Federation e single SPA. Melhorei o desempenho e a manutenibilidade do frontend com essas tecnologias.',
    },
    'software-experts': {
      position: 'Desenvolvedor Full Stack',
      description:
        'Desenvolvi páginas web adaptativas e funcionais, lidando com marketing, vendas e produto junto com um parceiro. Participei da criação e lançamento de projetos web garantindo qualidade e consistência. Trabalhei em um ambiente pré-startup, adquirindo diversas habilidades e me adaptando a diferentes papéis de acordo com as necessidades do negócio.',
    },
    citibeats: {
      position: 'Analista de Qualidade de Dados - Equipe de Produto (Estágio)',
      description:
        'Analisei e validei a qualidade dos dados sociais para modelos de IA. Colaborei com a equipe de produto para melhorar os pipelines de processamento de dados e garantir entradas de alta qualidade para algoritmos de aprendizado de máquina.',
    },
  },
};
