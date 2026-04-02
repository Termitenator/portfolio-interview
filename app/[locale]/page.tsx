import Hero from "./components/hero/page";
import AboutSection from "./components/about/page";
import ProjectSection from "./components/project/page";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutSection />
      <ProjectSection />
    </section>
  );
}
