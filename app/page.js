import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import { LanguageProvider } from '../context/LanguageContext';
import { getSiteContent, getCertificates } from '../lib/content';

// Admin panel edits revalidate this page immediately; this is only a fallback refresh.
export const revalidate = 3600;

export default async function Home() {
  const [content, certificates] = await Promise.all([getSiteContent(), getCertificates()]);
  return (<LanguageProvider content={content}>
    <Navbar />
    <main className="portfolio-layout container">
      <Hero />
      <div className="portfolio-content"><About /><Experience /><Projects /><Education /><Certificates items={certificates} /><Contact /></div>
    </main>
    <footer><div className="container"><p>&copy; {new Date().getFullYear()} Buğra Berat Kök</p><a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </LanguageProvider>);
}
