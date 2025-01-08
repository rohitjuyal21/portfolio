import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import TopSection from "@/components/TopSection";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="space-y-6">
      <TopSection />
      <AboutMe />
      <WorkExperience />
      <Skills />
    </div>
  );
}
