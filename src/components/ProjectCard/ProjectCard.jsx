import { LuGithub } from "react-icons/lu";

export const ProjectCard = ({ title, description, tags, link, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl card-hover">
      <div className="h-48 w-full overflow-hidden bg-[color:var(--bg-page)]">
        <img
          src={image}
          alt={`Projeto ${title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <div className="mb-4 flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--brand-accent)]">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-center text-2xl font-semibold text-[color:var(--text-page)] transition-colors hover:text-brand-deep">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-[color:var(--text-muted)]">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver código do projeto ${title} (abre em nova aba)`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--text-page)] text-hover text-hover-scale focus-ring"
        >
          <LuGithub size={18} />
          <span>Code</span>
        </a>
      </div>
    </div>
  );
};