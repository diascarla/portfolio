import { AboutMe } from "../components/AboutMe";
import { Hero } from "../components/Hero";
import { ProjectsSection } from "../components/ProjectsSection";
import { TechStack } from "../components/TechStack/index.jsx";

export const Home = () => {

  return (
    <section>
      <Hero />
      <ProjectsSection />
      <AboutMe />
      <TechStack />
    </section>

  );
};
