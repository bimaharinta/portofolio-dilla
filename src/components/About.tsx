import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';


const skills = [
  "Digital Marketing",
  "Adobe Illustrator",
  "Leadership",
  "Public Speaking",
  "Business Development",
  "Economics"
];



export const About = () => {
  const constraintsRef = useRef(null);
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 z-10 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-gradient">{t('about_title')}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-12 relative group"
            style={{ perspective: 1000 }}
          >
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl text-accent-pink font-semibold mb-6"
              >
                {t('about_title')}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed font-light mb-4"
              >
                {t('about_desc_1')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed font-light"
              >
                {t('about_desc_2')}
              </motion.p>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-bl-full blur-xl transition-all duration-500 group-hover:bg-accent-pink/20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-purple/10 rounded-tr-full blur-xl transition-all duration-500 group-hover:bg-accent-purple/20" />
            </motion.div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] glass-panel overflow-hidden flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-50" />
            
            <div ref={constraintsRef} className="relative w-full h-full flex flex-wrap content-center justify-center gap-4">
              {skills.map((skill) => {
                // Randomize animation values slightly for each pill
                const randomDelay = Math.random() * 2;
                const randomDuration = 4 + Math.random() * 3;
                const randomY = 10 + Math.random() * 15;
                
                return (
                  <motion.div
                    key={skill}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    whileDrag={{ scale: 1.1, zIndex: 50 }}
                    animate={{
                      y: [0, -randomY, 0],
                    }}
                    transition={{
                      duration: randomDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: randomDelay,
                    }}
                    className="relative group cursor-grab active:cursor-grabbing"
                  >
                    <div className="absolute inset-0 bg-accent-pink/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative px-6 py-3 rounded-full bg-bg-secondary border border-accent-pink/30 text-text-primary font-medium backdrop-blur-sm group-hover:border-accent-pink group-hover:scale-105 transition-all duration-300 z-10">
                      {skill}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
