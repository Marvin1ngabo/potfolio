import HeroSection from "@/components/HeroSection";
import SkillsBar from "@/components/SkillsBar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsBar />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
