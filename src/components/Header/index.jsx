import { Link } from "react-router-dom";
import { ThemeToggle } from "../../context/ThemeToggle";
import { Logo } from "../Icons/Logo";

export const Header = () => {

  return (
    <nav className="fixed top-0 w-full z-50 bg-soft-bg/80 backdrop-blur-md border-b border-brand-deep/20">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="w-10 h-10" />{" "}
        </Link>

        <div className="flex flex-row items-center gap-8 text-sm font-sans text-main-text">
          <Link
            title="Início"
            to="/"
            className="hover:text-brand-soft transition-colors"
          >
            Início
          </Link>
          <Link
            title="Trabalhos"
            to="/projetos"
            className="hover:text-brand-soft transition-colors"
          >
            Projetos
          </Link>
          <Link
            title="Minha História"
            to="/sobre"
            className="hover:text-brand-soft transition-colors"
          >
            Sobre
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
