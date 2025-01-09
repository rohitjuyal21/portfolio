import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopSection from "@/components/TopSection";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="space-y-8">
      <Header />
      <TopSection />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
