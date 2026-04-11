import React from 'react';

export const ProjectCard = ({ title, description, tags, link, image }) => {
  return (
    <div className="group relative rounded-3xl border border-border-subtle 
                    bg-white/10 dark:bg-black/10 backdrop-blur-md 
                    shadow-sm transition-all duration-300 
                    hover:border-brand-soft overflow-hidden">
      
      {/* Container do GIF */}
      <div className="w-full h-48 overflow-hidden bg-gray-200/20">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-8">
        <div className="flex gap-3 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="text-[11px] uppercase tracking-widest text-brand-pink font-bold">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-3 text-main-text group-hover:text-brand-soft transition-colors">
          {title}
        </h3>
        
        <p className="text-main-text opacity-80 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <a href={link} className="inline-flex items-center text-sm font-medium text-main-text hover:text-brand-soft">
          Ver detalhes <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};