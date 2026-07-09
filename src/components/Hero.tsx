import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-light text-accent-pink mb-2">{t('hero_welcome')}</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-float">
              {t('hero_hi')} <br />
              <span className="text-gradient">Dilla Ramadhani.</span>
            </h1>
            <p className="text-lg md:text-2xl text-text-secondary font-light mb-10 max-w-2xl leading-relaxed">
              {t('hero_subtitle_1')} <span className="text-accent-pink mx-2">|</span> {t('hero_subtitle_2')} <span className="text-accent-pink mx-2">|</span> {t('hero_subtitle_3')}
            </p>

            <motion.button
              onClick={scrollToAbout}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-pink/10 border border-accent-pink/50 text-text-primary font-medium overflow-hidden group hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">{t('hero_btn')}</span>
              <ChevronDown className="relative z-10 w-5 h-5 animate-bounce" />
            </motion.button>
          </motion.div>
        </div>

        {/* Visual / Abstract Profile */}
        <div className="flex-1 flex justify-center items-center z-10">
          <motion.div 
            className="relative w-64 h-64 md:w-96 md:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 animate-float-slow">
              {/* Abstract decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-accent-pink/30 blur-[2px]" />
              <div className="absolute inset-2 rounded-full border border-accent-purple/20 rotate-45" />
              <div className="absolute inset-4 rounded-full border border-accent-purple/20 -rotate-45" />
              
              {/* Core glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-accent-pink/40 to-accent-purple/40 blur-2xl" />
              
              {/* Central Photo Element */}
              <div className="absolute -inset-4 flex items-end justify-center z-10 pointer-events-none">
                 <img 
                   src="/assets/dilla_profile.png"
                   alt="Dilla Ramadhani" 
                   className="w-[105%] h-[105%] object-cover object-top"
                   style={{
                     maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                   }}
                 />
              </div>
            </div>
            
            {/* Orbiting small elements */}
            <motion.div 
              className="absolute top-0 right-10 w-4 h-4 rounded-full bg-accent-pink shadow-[0_0_10px_var(--accent-pink)]"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-10 left-0 w-6 h-6 rounded-full bg-accent-purple shadow-[0_0_15px_var(--accent-purple)]"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
