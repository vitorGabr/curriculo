import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export const RESUME_DATA = {
  name: "Vitor Gabriel de Jesus",
  initials: "VG",
  location: "Sumaré, São Paulo, Brasil",
  about:
    "Desenvolvedor Front-End focado em construir produtos com atenção extra aos detalhes",
  summary:
    "Como Desenvolvedor Front-End, levei com sucesso vários produtos de 0 a 1. Lidero equipes de forma eficaz, garantindo um ambiente onde as pessoas possam fazer seu melhor trabalho. Atualmente trabalho principalmente com TypeScript, React, Node.js e GraphQL. Tenho mais de 8 anos de experiência trabalhando remotamente com empresas de todo o mundo.",
  avatarUrl: "https://avatars.githubusercontent.com/u/51758729",
  contact: {
    email: "macstudios.info@gmail.com",
    tel: "+5519998579701",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vitorGabr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitor-gabriel-de-jesus-27802918a/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade Paulista",
      degree: "Bacharelado em Ciência da Computação",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Marry Perry Paris",
      link: "https://marryperryparis.com.br/",
      badges: ["Remote"],
      title: "Desenvolvedor Front-End Pleno",
      start: "2021",
      description:
        "Implementei novos recursos, liderei equipe, trabalhei na melhoria da forma como os desenvolvedores enviam o código, iniciei a migração do Emotion para Tailwind CSS e muito mais. Tecnologias: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Astro",
    "Tailwind CSS/Panda CSS",
    "Node.js",
    "GraphQL",
    "Relay",
    "Flutter",
  ],
  projects: [
    {
      title: "Quizle",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Supabase",
        "OpenAI"
      ],
      description: "Termo com toque pessoal: geração de palavras aleatórias, definições e mais.",
      link: {
        label: "quizle.vercel.app",
        href: "https://quizle.vercel.app/",
      },
    },
    {
      title: "Eu Vivi",
      techStack: [
        "Freelance",
        "Flutter",
      ],
      description: "O APP EU VIVI é uma ferramenta gratuita e colaborativa de mapeamento da segurança em atividades turísticas no Brasil.",
      link: {
        label: "feriasvivas.org.br/aplicativoeuvivi",
        href: "http://www.feriasvivas.org.br/aplicativoeuvivi/",
      },
    },
    {
      title: "Movieely",
      techStack: [
        "Side Project",
        "TypeScript",
        "Reactjs",
        "Firebase",
        "TMDB API"
      ],
      description: "Clone Netflix com Firebase e TMDB: Streaming intuitivo e conteúdo envolvente.",
      link: {
        label: "movieely-next.vercel.app",
        href: "https://movieely-next.vercel.app",
      },
    },
  ],
} as const;