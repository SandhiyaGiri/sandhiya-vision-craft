import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Hackathons from '../components/Hackathons';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hackathons />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
