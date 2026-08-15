import { AboutMe } from "../components/AboutMe/AboutMe";
import { Hero } from "../components/Hero/Hero";
import { ProjectsSection } from "../components/ProjectsSection/ProjectSection";
import { TechStack } from "../components/TechStack/TechStack";

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
