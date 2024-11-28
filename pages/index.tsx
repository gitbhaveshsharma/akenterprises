import { useEffect } from "react"; // Import useEffect for AOS initialization
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Founder from "./components/Founder"; // Fixed import statement
import JoinUs from "./components/JoinUs/JoinUs";
import Contact from "./components/Contact";
import Project from "./components/Project";
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="w-full sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1 container mx-auto">
          <section id="home" data-aos="fade-zoom-in">
            <Hero />
          </section>
          <section id="about" className="py-15" data-aos="fade-up">
            <About />
            <Certifications />
          </section>
          <section id="services" className="py-20" data-aos="fade-up">
            <Services />
          </section>
          <section id="portfolio" className="py-20 mt-1" data-aos="fade-up">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-12">
                Our Portfolio
              </h2>
              <Project />
            </div>
          </section>
          <section className="py-20" data-aos="fade-up">
            <Founder />
            <JoinUs />
          </section>
          <section id="contact" data-aos="fade-up">
            <Contact />
          </section>
        </div>
        <footer className="text-white">
          <Footer />
        </footer>
      </div>
    </>
  );
}
