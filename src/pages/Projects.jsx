import { useMemo, useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { projects } from "../data/projects";

export const Projects = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const filteredProjects = useMemo(
        () =>
            projects.filter((project) => {
                const tagMatch = project.tags.some((tag) =>
                    tag.toLowerCase().includes(normalizedSearchTerm)
                );
                const titleMatch = project.title
                    .toLowerCase()
                    .includes(normalizedSearchTerm);
                const subtitleMatch = project.subtitle
                    .toLowerCase()
                    .includes(normalizedSearchTerm);

                return (
                    normalizedSearchTerm === "" || tagMatch || titleMatch || subtitleMatch
                );
            }),
        [normalizedSearchTerm]
    );

    return (
        <section className="w-full min-h-screen bg-soft-bg transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-left">
                {/* Cabeçalho da Página */}
                
                    <div className="max-w-6xl mx-auto gap-8 mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-deep">
                            Meus Projetos
                        </h2>
                        <p className="text-main-text opacity-80 text-lg leading-relaxed mb-6">
                            Uma seleção de aplicações onde aplico engenharia de software robusta,
                            arquitetura limpa e design centrado na experiência do usuário.
                        </p>
                    </div>

                    {/* Filtro de pesquisa */}
                    <div className="mb-10 flex flex-col items-center gap-4">
                        <label className="text-xs font-semibold uppercase tracking-widest text-main-text">
                            Buscar por tecnologia ou nome
                        </label>
                        <input
                            id="project-search"
                            type="text"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Ex: React, TypeScript, Node.js"
                            className="w-full rounded-xl px-4 py-3 text-sm text-main-text outline-none transition card-hover"
                        />
                    </div>
                

                {/* Lista de Projetos Alternados */}
                <div className="flex flex-col gap-32">
                    {filteredProjects.length === 0 ? (
                        <div className=" p-10 text-center text-main-text">
                            <p className="text-lg font-medium">
                                Nenhum projeto encontrado.
                            </p>
                            <p className="text-sm text-muted-text mt-2">
                                Tente outro termo de pesquisa ou limpe o filtro.
                            </p>
                        </div>
                    ) : (
                        filteredProjects.map((project, index) => {
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
                                            className="w-full h-full group-hover:scale-102 transition-transform duration-500"
                                        />
                                    </div>


                                    {/* Coluna do Conteúdo (Texto) */}
                                    <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-main-text">
                                            {project.subtitle}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-deep">
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
                                                    className="px-3 py-1 text-xs font-medium rounded-full border border-brand-deep/10 dark:border-white/5 bg-soft-bg text-brand-pink"
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
                                                className="flex items-center gap-2 text-sm font-semibold text-main-text text-hover text-hover-scale"
                                            >
                                                <LuGithub size={18} /> Code
                                            </a>
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-semibold text-brand-pink text-hover text-hover-scale"
                                            >
                                                <LuExternalLink size={18} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-pink text-hover text-hover-scale"
                >
                    <LuGithub size={18} /> Veja meu perfil completo no GitHub
                </a>
            </div>
        </section>
    );
};