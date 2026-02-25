import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

// pages/index.js
export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen w-full"
      style={{
        backgroundImage: "url('images/image-mesh-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-1">
        <HeroSection/>
        <AchievementSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
    
  );
}
