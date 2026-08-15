import { useTheme } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "../Icons/ReactIcons";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      className="cursor-pointer p-2 hover:text-brand-soft transition-colors"
      aria-label="Toggle theme" 
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
