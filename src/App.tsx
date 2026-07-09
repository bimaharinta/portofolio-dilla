import { BackgroundOrbs } from './components/BackgroundOrbs';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { Certifications } from './components/Certifications';
import { Organizations } from './components/Organizations';
import { Contact } from './components/Contact';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-10">
          <BackgroundOrbs />
          <Header />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Awards />
          <Certifications />
          <Organizations />
          <Contact />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
