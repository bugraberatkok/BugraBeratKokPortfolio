import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
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
    <Navbar hasCertificates={certificates.length > 0} />
    <main>
      <Hero certificates={certificates} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certificates items={certificates} />
      <Contact />
    </main>
    <footer className="site-footer"><div className="container"><p>&copy; {new Date().getFullYear()} Buğra Berat Kök</p><a href="https://github.com/bugraberatkok" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </LanguageProvider>);
}
