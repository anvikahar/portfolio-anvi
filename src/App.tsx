import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { BackgroundGraph } from './components/BackgroundGraph';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Force-enable dark theme for the whole site
    document.documentElement.classList.add('dark');
    try {
      localStorage.setItem('theme', 'dark');
    } catch (e) {}
  }, []);
  return (
    <div className="relative min-h-screen">
      <div className="page-background" aria-hidden>
        <BackgroundGraph />
        <BackgroundAnimation />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
