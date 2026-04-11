export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-gradient-to-r from-transparent 
    via-border-subtle to-transparent flex justify-between items-center max-w-6xl mx-auto px-6 h-20"
    >
      <div>
        <p className="text-main-text text-sm font-sans font-medium tracking-widest">
          © {currentYear} Carla Dias
        </p>
      </div>

      <div className="flex justify-center items-center gap-4">
        {/* Container do ponto pulsante */}
        <span className="relative flex h-2 w-2">
          {/* Círculo que pulsa (Animação Ping) */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-soft opacity-75"></span>
          {/* Círculo fixo no centro */}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
        </span>

        <span className="text-xs font-medium tracking-wide text-main-text uppercase">
          Disponível para novos projetos
        </span>
      </div>

      <div>
        <ul className="flex gap-8 text-main-text font-sans font-medium tracking-widest text-sm">
          <li className="hover:text-brand-soft transition-colors">
            <a
              href="https://github.com/diascarla"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="hover:text-brand-soft transition-colors">
            <a
              href="https://www.linkedin.com/in/devcarladias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
