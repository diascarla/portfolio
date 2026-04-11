import botFlix from "../assets/projects/botFlix.gif";
import toDoList from "../assets/projects/toDoList.gif";

export const projects = [
  {
    id: 1,
    title: "BotFlix",
    image: botFlix,
    description:
      "Solução inteligente para recomendação de filmes baseada em IA, focada em resolver a indecisão do usuário através de análise de humor.",
    tags: ["React", "IA", "Tailwind"],
    link: "https://github.com/diascarla/botflix.git",
    featured: true, // Útil para filtrar apenas os que vão para a Home
  },
  {
    id: 2,
    title: "Modern To-Do",
    image: toDoList,
    description:
      "Aplicação de gestão de tarefas com foco em produtividade, utilizando TypeScript para garantir um código robusto e escalável.",
    tags: ["TypeScript", "React", "Node.js"],
    link: "https://github.com/diascarla/to-do-list.git",
    featured: true,
  },
  {
    id: 3,
    title: "SyntaxWear",
    image: "https://via.placeholder.com/400x200?text=SyntaxWear",
    description:
      "E-commerce especializado em vestuário para desenvolvedores, com sistema de catálogo e interface focada na experiência de compra.",
    tags: ["React", "Styled Components", "Context API"], // Ajuste as tags conforme as tecnologias que usou
    link: "https://github.com/diascarla/syntax-wear-app.git",
    featured: true,
  },
  // Podes adicionar mais projetos aqui futuramente
];
