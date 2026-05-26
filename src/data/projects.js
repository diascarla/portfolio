import movieFlix from "../assets/projects/animacao.png";
import botFlix from "../assets/projects/botFlix.gif";
import toDoList from "../assets/projects/toDoList.gif";
import magicBackground from "../assets/projects/animacao-magic-background.gif";

export const projects = [
  {
    id: 1,
    title: "BotFlix",
    subtitle: "Recomendação Inteligente de Cinema com IA",
    image: botFlix,
    description:
      "Solução inteligente para recomendação de filmes baseada em IA, focada em resolver a indecisão do usuário através de análise de humor. A aplicação consome APIs de bancos de dados de cinema para renderizar interfaces fluidas e utiliza modelos generativos para criar uma experiência personalizada.",
    tags: ["React", "IA Integration", "Tailwind CSS", "REST API"],
    link: "https://github.com/diascarla/botflix.git",
    deploy: "https://botflix-phi.vercel.app/", // Adicione o link do deploy quando tiver
    featured: true,
  },
  {
    id: 2,
    title: "Modern To-Do",
    subtitle: "Gerenciamento de Produtividade Diária",
    image: toDoList,
    description:
      "Aplicação de gestão de tarefas com foco em produtividade, utilizando TypeScript para garantir um código robusto e escalável. Conta com gerenciamento de estados complexos, persistência de dados local (LocalStorage) e um design responsivo milimétrico.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://github.com/diascarla/to-do-list.git",
    deploy: "https://to-do-list-ten-eta-57.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "SyntaxWear",
    subtitle: "E-commerce para Desenvolvedores",
    image: "https://via.placeholder.com/400x200?text=SyntaxWear",
    description:
      "E-commerce especializado em vestuário para desenvolvedores, com sistema de catálogo dinâmico e uma interface minimalista focada na experiência de compra (UX), estruturada com gerenciamento de estado global.",
    tags: ["React", "Styled Components", "Context API"],
    link: "https://github.com/diascarla/syntax-wear-app.git",
    deploy: "https://syntax-wear-app-seven.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Magic Background",
    subtitle: "Design Generativo com IA e Automação",
    image: magicBackground,
    description:
      "Uma aplicação inovadora que transforma descrições textuais em backgrounds dinâmicos utilizando HTML e CSS. O grande diferencial está na arquitetura de Back-End: em vez de um servidor tradicional, o sistema utiliza um workflow automatizado no n8n conectado a modelos de linguagem (OpenAI), otimizando o tempo de resposta e a infraestrutura.",
    tags: [
      "JavaScript Vanilla",
      "n8n Automation",
      "AI Integration",
      "Webhooks",
    ],
    link: "https://github.com/diascarla/magic-background.git",
    deploy: "https://magic-background-self.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "MovieFlix API",
    subtitle: "Ecossistema Back-End Escalável e Documentado",
    image: movieFlix,
    description:
      "Uma API RESTful robusta desenvolvida para o gerenciamento de catálogos cinematográficos. O projeto simula um ambiente real de produção, utilizando TypeScript para tipagem estática, Docker para containerização, Prisma ORM para comunicação segura com o banco de dados SQL e documentação interativa com Swagger.",
    tags: ["Node.js", "TypeScript", "Docker", "Prisma ORM", "Swagger"],
    link: "https://github.com/diascarla/movie-flix-api.git",
    featured: true,
  },
];
