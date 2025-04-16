import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services"; // Crea este componente similar
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MissionVision from "./components/MissionVision";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
