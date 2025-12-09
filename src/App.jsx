import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
