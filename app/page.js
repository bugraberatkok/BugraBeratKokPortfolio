import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer><div className="container"><p>&copy; {new Date().getFullYear()} Buğra Berat Kök</p><a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub</a></div></footer>
    </>
  );
}
