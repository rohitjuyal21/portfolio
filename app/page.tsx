import AboutMe from "@/components/AboutMe";
import Animate from "@/components/Animate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopSection from "@/components/TopSection";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="space-y-4 sm:space-y-8">
      <Animate>
        <Header />
        <TopSection />
      </Animate>
      <Animate delay={0.2}>
        <AboutMe />
      </Animate>
      <Animate delay={0.4}>
        <WorkExperience />
        <Skills />
      </Animate>
      <Animate delay={0.6}>
        <Projects />
        <Footer />
      </Animate>
    </div>
  );
}
