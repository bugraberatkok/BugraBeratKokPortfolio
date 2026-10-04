import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
export default function Home() {
  return (<>
    <Navbar />
    <main className="portfolio-layout container">
      <Hero />
      <div className="portfolio-content"><About /><Experience /><Projects /><Education /><Contact /></div>
    </main>
    <footer><div className="container"><p>&copy; {new Date().getFullYear()} Buğra Berat Kök</p><a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </>);
}
