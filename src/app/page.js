import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

// pages/index.js
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('images/image-mesh-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main className="flex min-h-screen container">
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection/>
          <AboutSection/>
          </div>
      </main>
    </div>
  );
}
