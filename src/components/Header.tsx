import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { key: 'nav_home', href: '#hero' },
  { key: 'nav_about', href: '#about' },
  { key: 'nav_experience', href: '#experience' },
  { key: 'nav_education', href: '#education' },
  { key: 'nav_awards', href: '#awards' },
  { key: 'nav_certifications', href: '#certifications' },
  { key: 'nav_organizations', href: '#organizations' },
  { key: 'nav_contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleLang = () => {
    setLang(lang === 'ID' ? 'EN' : 'ID');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/80 backdrop-blur-md shadow-glass-shadow' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="text-2xl font-bold text-text-primary group flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-sm text-white">
            DR
          </span>
          <span className="group-hover:text-accent-pink transition-colors duration-300">Dilla.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-text-muted hover:text-accent-pink hover:scale-105 transition-all duration-300"
            >
              {t(link.key)}
            </a>
          ))}
          
          <span className="text-text-muted/50">|</span>

          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-accent-pink hover:scale-105 transition-all duration-300"
          >
            <Globe size={18} />
            <span>{lang}</span>
          </button>

          <span className="text-text-muted/50">|</span>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-accent-pink hover:scale-105 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-muted hover:text-accent-pink transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.nav 
        className={`md:hidden absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-xl border-b border-glass-border overflow-hidden`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col py-6 px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-lg font-medium text-text-muted hover:text-accent-pink transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="h-px w-full bg-glass-border my-2" />

          {/* Language Toggle Mobile */}
          <button 
            onClick={() => {
              toggleLang();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-lg font-medium text-text-muted hover:text-accent-pink transition-colors"
          >
            <Globe size={24} />
            <span>{lang === 'ID' ? 'English (EN)' : 'Bahasa Indonesia (ID)'}</span>
          </button>
          
          {/* Theme Toggle Mobile */}
          <button 
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-lg font-medium text-text-muted hover:text-accent-pink transition-colors mt-2"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </motion.nav>
    </motion.header>
  );
};
