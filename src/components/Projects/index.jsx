import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        < section className="relative py-20 px-6 overflow-hidden bg-soft-bg" >
            {/* Círculo de cor decorativo atrás dos cards */}
            < div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-light/30 rounded-full blur-[100px] -z-10" />
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-pink">
                Projetos em Destaque
            </h2>

            {/* Grid limpo, os cards terão o efeito vidro */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section >
    )
}