import { MoonIcon, SunIcon} from "../components/Icons/ReactIcons";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full "
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
