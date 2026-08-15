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
        <section className="min-h-screen w-full bg-soft-bg transition-colors duration-300">
            <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 text-left">
                <div className="mx-auto mb-20 max-w-6xl gap-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-brand-deep md:text-4xl">
                        Meus Projetos
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-[color:var(--text-muted)]">
                        Uma seleção de aplicações onde aplico engenharia de software robusta,
                        arquitetura limpa e design centrado na experiência do usuário.
                    </p>
                </div>

                <div className="mb-10 flex flex-col items-center gap-4">
                    <label htmlFor="project-search" className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-page)]">
                        Buscar por tecnologia ou nome
                    </label>
                    <input
                        id="project-search"
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Ex: React, TypeScript, Node.js"
                        className="w-full rounded-xl border border-brand-deep/20 bg-[color:var(--bg-card)] px-4 py-3 text-sm text-[color:var(--text-page)] outline-none transition focus-visible:ring-4 focus-visible:ring-brand-soft/40 card-hover"
                        aria-label="Buscar projetos por tecnologia ou nome"
                    />
                </div>

                <div className="flex flex-col gap-32">
                    {filteredProjects.length === 0 ? (
                        <div className="p-10 text-center text-[color:var(--text-page)]">
                            <p className="text-lg font-medium">Nenhum projeto encontrado.</p>
                            <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                                Tente outro termo de pesquisa ou limpe o filtro.
                            </p>
                        </div>
                    ) : (
                        filteredProjects.map((project, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={project.id}
                                    className={`flex w-full flex-col items-center gap-12 md:flex-row md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
                                >
                                    <div className="group relative w-full overflow-hidden rounded-xl border border-brand-deep/10 transition-all duration-300 hover:border-brand-pink/40 md:w-1/2">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} mockup do projeto`}
                                            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col items-start gap-4 md:w-1/2">
                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-page)]">
                                            {project.subtitle}
                                        </span>
                                        <h3 className="text-2xl font-bold tracking-tight text-brand-deep md:text-3xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-base leading-relaxed text-[color:var(--text-muted)]">
                                            {project.description}
                                        </p>

                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded-full border border-brand-deep/10 bg-soft-bg px-3 py-1 text-xs font-medium text-[color:var(--brand-accent)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center gap-6">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text-page)] text-hover text-hover-scale focus-ring"
                                            >
                                                <LuGithub size={18} /> Code
                                            </a>
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-semibold text-brand-pink text-hover text-hover-scale focus-ring"
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

            <div className="px-6 py-10 text-center md:p-32">
                <p className="mb-4 text-[color:var(--text-muted)]">
                    Quer explorar mais do meu código e outros projetos de estudo?
                </p>
                <a
                    href="https://github.com/diascarla"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-pink text-hover text-hover-scale focus-ring"
                >
                    <LuGithub size={18} /> Veja meu perfil completo no GitHub
                </a>
            </div>
        </section>
    );
};