import HeroSection from "./components/HeroSection";

// pages/index.js
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('images/image-mesh-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <main className="flex min-h-screen container">
        <div className="container mx-auto px-12 py-4">
          <HeroSection/>
          </div>
      </main>
    </div>
  );
}
