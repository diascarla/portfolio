import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard";

export const ProjectsSection = () => {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    return (
        < section className="relative py-20 px-6 overflow-hidden bg-soft-bg" >
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-deep">
                Projetos em Destaque
            </h2>

            {/* Grid limpo, os cards terão o efeito vidro */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            <div className=" mt-12 text-center ">
                <a href="/projects" className="inline-flex items-center text-lg font-medium text-main-text text-hover text-hover-scale group ">
                    Ver mais Projetos <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section >
    )
}