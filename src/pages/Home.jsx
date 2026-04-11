import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.webp";
import { Button } from "../components/Button";
import { ReactIcon } from "../components/Icons/ReactIcons";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Home = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section
        className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay: Garante que o texto seja legível independente da foto */}
        <div className="absolute inset-0 bg-soft-bg/85 backdrop-blur-[2px] z-0" />

        <div className="absolute left-[25%] bottom-[20%] opacity-50 z-0 hidden lg:block rotate-12 pointer-events-none">
          <ReactIcon className="h-20 w-20  text-brand-deep animate-spin-slow" />
        </div>

        {/* Conteúdo Principal: z-10 para ficar ACIMA do overlay e do ícone de fundo */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Badge Superior */}
          <span className="px-4 py-1.5 rounded-full border border-brand-pink/20 bg-brand-soft/5 text-main-text text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in">
            Disponível para novos projetos
          </span>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-light text-main-text tracking-[0.05em] mb-6">
            &lt; DESENVOLVEDORA <br className="md:hidden" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-deep via-brand-pink to-brand-soft">
              FRONT-END
            </span>{" "}
            /&gt;
          </h1>

          {/* Subtítulo */}
          <p className="max-w-2xl text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-light tracking-wide">
            Crio Experiências Interativas com <strong>React</strong> e Foco no
            Usuário.
          </p>

          {/* Ações (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate("/projetos")}>Ver Projetos</Button>
            <Button variant="secondary" onClick={() => navigate("/sobre")}>
              Sobre Mim
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de Projetos em Destaque movida para fora do Hero */}
      <section className="relative py-20 px-6 overflow-hidden bg-soft-bg">
        {/* Círculo de cor decorativo atrás dos cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-light/30 rounded-full blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-12 text-center text-main-text">
          Projetos em Destaque
        </h2>

        {/* Grid limpo, os cards terão o efeito vidro */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};
