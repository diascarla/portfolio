import { Link } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-deep/20 bg-soft-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center rounded-full focus-ring">
          <Logo className="h-10 w-10" aria-label="Carla Dias - Página inicial"/>
        </Link>

        <div className="flex flex-row items-center gap-6 text-sm font-sans text-main-text md:gap-8">
          <div className="hidden gap-6 sm:flex md:gap-8">
            <Link
              title="Início"
              to="/"
              className="rounded-full px-3 py-2 transition-colors focus-ring"
            >
              Início
            </Link>
            <Link
              title="Projetos"
              to="/projetos"
              className="rounded-full px-3 py-2 transition-colors focus-ring"
            >
              Projetos
            </Link>
            <Link
              title="Sobre"
              to="/sobre"
              className="rounded-full px-3 py-2 transition-colors focus-ring"
            >
              Sobre
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
