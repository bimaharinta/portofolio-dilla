import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, X, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const getEducationData = (lang: string) => [
  {
    id: 1,
    degree: "Mahasiswa, Ilmu Ekonomi",
    institution: "Universitas Negeri Surabaya",
    period: "Jan 2022 - Jan 2026",
    location: lang === 'ID' ? "Surabaya, Jawa Timur, Indonesia" : "Surabaya, East Java, Indonesia",
    type: "education",
    logo: "/assets/unesa-logo.png",
    description: lang === 'ID' 
      ? "Grade: 3.85/4.00\nActivities and societies: UKM Kewirausahaan Unesa, PKM Center Unesa\n\n• The Processing of 2023 Sakernas Microdata from Badan Pusat Statistik in the Article \"Factors Influencing Employment: An Analysis of Sociodemographic and Human Capital Factors in Indonesia\"\n• A Journal Publication Utilizing Sakernas Microdata, Processed with Stata, Titled \"Analysis of Odds Ratios for Employment Status and Migration\"\n• A concentration in Public Economics with an analysis of regional and national tax policies."
      : "Grade: 3.85/4.00\nActivities and societies: UKM Kewirausahaan Unesa, PKM Center Unesa\n\n• The Processing of 2023 Sakernas Microdata from Badan Pusat Statistik in the Article \"Factors Influencing Employment: An Analysis of Sociodemographic and Human Capital Factors in Indonesia\"\n• A Journal Publication Utilizing Sakernas Microdata, Processed with Stata, Titled \"Analysis of Odds Ratios for Employment Status and Migration\"\n• A concentration in Public Economics with an analysis of regional and national tax policies.",
    images: [
      { src: "/assets/education-1.png", caption: lang === 'ID' ? "Artikel Ketenagakerjaan" : "Employment Article" },
      { src: "/assets/education-2.png", caption: lang === 'ID' ? "Jurnal Mikro Data Sakernas" : "Sakernas Microdata Journal" }
    ],
    skills: ["Stata", "EViews", "Microsoft Word", "Microsoft Excel"]
  },
  {
    id: 2,
    degree: "5th Semester, Independent Student Entrepreneurship Academy Program",
    institution: "Universitas Airlangga",
    period: "Sep 2024 - Dec 2024",
    location: lang === 'ID' ? "Surabaya, Jawa Timur, Indonesia" : "Surabaya, East Java, Indonesia",
    type: "education",
    logo: "/assets/unair-logo.png",
    description: "Grade: 94.3/100 (A)",
    images: [
      { src: "/assets/education-3.png", caption: lang === 'ID' ? "Transkrip Akademik" : "Academic Transcript" }
    ],
    skills: ["Digital Marketing", "Microsoft Excel", "Social Media Marketing"]
  }
];

export const Education = () => {
  const { lang, t } = useLanguage();
  const educationList = getEducationData(lang);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="education" className="relative min-h-screen py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <span className="text-gradient">{t('edu_title')}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel flex flex-col rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 h-full relative"
            >
              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  {/* Inline Logo */}
                  {edu.logo ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl p-2 border border-glass-border shadow-lg flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-accent-pink/40 transition-all duration-300">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-pink/10 rounded-2xl border border-accent-pink/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={32} className="text-accent-pink" />
                    </div>
                  )}
                  
                  <div className="pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-pink group-hover:to-accent-purple transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-accent-pink font-semibold leading-snug mb-2">{edu.degree}</p>
                    
                    <div className="flex flex-col gap-1 text-sm text-text-muted">
                      {edu.period && (
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-accent-purple" />
                          <span>{edu.period}</span>
                        </div>
                      )}
                      {edu.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-accent-purple" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-text-secondary text-sm md:text-base leading-relaxed whitespace-pre-wrap mb-8 flex-grow">
                  {edu.description}
                </div>

                {/* Images */}
                {edu.images && (
                  <div className="mt-auto mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-text-muted font-bold mb-3">Attachments</h4>
                    <div className="flex flex-wrap gap-4">
                      {edu.images.map((img, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 bg-bg-secondary/80 p-2 pr-4 rounded-xl border border-glass-border cursor-pointer hover:border-accent-pink/50 hover:bg-accent-pink/10 transition-all shadow-sm"
                          onClick={() => setSelectedImage(img.src)}
                        >
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0">
                            <img src={img.src} alt={img.caption} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          </div>
                          <p className="text-text-primary font-medium text-xs md:text-sm">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {edu.skills && (
                  <div className="mt-auto pt-6 border-t border-glass-border">
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-bg-primary/50 border border-glass-border hover:border-accent-pink/40 hover:bg-accent-pink/5 text-text-primary text-xs md:text-sm rounded-lg transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Glowing Background Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center pt-20 p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-24 right-4 md:top-24 md:right-8 z-[1010] p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all shadow-lg"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
