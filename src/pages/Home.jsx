import { AboutMe } from "../components/AboutMe";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects/index";
import { TechStack } from "../components/TechStack/index.jsx";

export const Home = () => {

  return (
    <section>
      <Hero />
      <Projects />
      <AboutMe />
      <TechStack />
    </section>

  );
};
