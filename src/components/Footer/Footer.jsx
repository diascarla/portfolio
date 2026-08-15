export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-brand-deep/20 bg-soft-bg px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-[color:var(--text-page)] uppercase">
            © {currentYear} Carla Dias
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-soft opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-deep" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            Disponível para novos projetos
          </span>
        </div>

        <div>
          <ul className="flex items-center gap-6 text-sm font-medium tracking-[0.2em] text-[color:var(--text-page)] uppercase">
            <li className="transition-all duration-200 hover:text-[color:var(--brand-accent)]">
              <a
                href="https://github.com/diascarla"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
              >
                GitHub
              </a>
            </li>
            <li className="transition-all duration-200 hover:text-[color:var(--brand-accent)]">
              <a
                href="https://www.linkedin.com/in/devcarladias/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
