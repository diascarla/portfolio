import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const ProjectsSection = () => {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-soft-bg px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-center text-3xl font-bold text-brand-deep md:text-4xl">
                    Projetos em Destaque
                </h2>

                <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/projetos"
                        className="inline-flex items-center gap-2 text-lg font-medium text-main-text text-hover text-hover-scale group focus-ring"
                    >
                        Ver todos os projetos
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};