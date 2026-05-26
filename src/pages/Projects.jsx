import { projects } from "../data/projects";
import { LuGithub, LuExternalLink } from "react-icons/lu";

export const Projects = () => {
    return (
        <section className="w-full min-h-screen bg-soft-bg transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-left">
                {/* Cabeçalho da Página */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-main-text mb-4">
                        Projetos em Destaque
                    </h2>
                    <p className="text-muted-text max-w-xl leading-relaxed">
                        Uma seleção de aplicações onde aplico engenharia de software robusta,
                        arquitetura limpa e design centrado na experiência do usuário.
                    </p>
                </div>

                {/* Lista de Projetos Alternados */}
                <div className="flex flex-col gap-32">
                    {projects.map((project, index) => {
                        // Se o índice for ímpar, inverte a ordem das colunas no desktop
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center w-full ${isEven ? "" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Coluna da Imagem (Mockup) */}

                                <div className="w-full md:w-1/2 group relative  rounded-xl border border-brand-deep/10 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-pink/40">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full
                                        group-hover:scale-102 transition-transform duration-500"
                                    />
                                </div>


                                {/* Coluna do Conteúdo (Texto) */}
                                <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink">
                                        {project.subtitle}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-main-text tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-text text-base leading-relaxed mt-2">
                                        {project.description}
                                    </p>

                                    {/* Tags / Tecnologias (Pílulas Minimalistas) */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium rounded-full border border-brand-deep/10 dark:border-white/5 bg-soft-bg text-muted-text"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links de Ação (Botões) */}
                                    <div className="flex items-center gap-6 mt-6">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-main-text hover:text-brand-pink transition-colors duration-300 "
                                        >
                                            <LuGithub size={18} /> Code
                                        </a>
                                        <a
                                            href={project.deploy}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-brand-pink hover:opacity-80 transition-opacity duration-300"
                                        >
                                            <LuExternalLink size={18} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Linha final de Call to Action */}
            <div className="p-32 text-center">
                <p className="text-muted-text mb-4">
                    Quer explorar mais do meu código e outros projetos de estudo?
                </p>
                <a
                    href="https://github.com/diascarla"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-pink hover:opacity-80 transition-opacity duration-300"
                >
                    <LuGithub size={18} /> Veja meu perfil completo no GitHub
                </a>
            </div>
        </section>
    );
};