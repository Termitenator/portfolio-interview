import Hero from "./components/hero/hero";
import AboutSection from "./components/about/about";
import ProjectSection from "./components/project/project";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="project">
        <ProjectSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
