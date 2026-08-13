import { MoonIcon, SunIcon} from "../components/Icons/ReactIcons";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 hover:text-brand-soft transition-colors"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
