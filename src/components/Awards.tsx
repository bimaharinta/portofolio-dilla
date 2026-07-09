import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getAwardsData = (lang: string) => [
  {
    id: 1,
    title: lang === 'ID' ? "Medali Perunggu dalam kompetisi esai internasional econovation" : "Bronze medal in the econovation event international essay competition",
    date: lang === 'ID' ? "Agt 2024" : "Aug 2024",
    description: lang === 'ID' ? "Kompetisi Esai Internasional Ekonomi Berkelanjutan 2024 yang diselenggarakan oleh Himpunan Mahasiswa Prodi Ekonomi Fakultas Ekonomika dan Bisnis Universitas Negeri Surabaya Dengan tema \"Inovasi Ekonomi untuk Mewujudkan Tujuan Pembangunan Berkelanjutan\"" : "Sustainable Economics International Essay Competition 2024 organized by Himpunan Mahasiswa Prodi Ekonomi Fakultas Ekonomika dan Bisnis Universitas Negeri Surabaya With the theme \"Economic Innovation to Realize the Sustainable Development Goals\"",
    badge: lang === 'ID' ? "Medali Perunggu" : "Bronze Medal",
    image: "/assets/award-econovation.png",
    logo: "/assets/hima-logo.png"
  },
  {
    id: 2,
    title: lang === 'ID' ? "Analisis Odds Ratio terhadap Migrasi Berbasis Status Pekerjaan" : "Analysis of Odds Ratio for Employment Status Risen Migration",
    date: "Dec 31, 2025",
    description: "Jurnal Ilmiah Mahasiswa Ekonomi Universitas Kediri",
    badge: lang === 'ID' ? "Publikasi" : "Publication",
    image: null,
    link: "https://ojs.unik-kediri.ac.id/index.php/jimek/article/view/7238/4554",
    buttonText: lang === 'ID' ? "Lihat publikasi" : "Show publication"
  }
];


export const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { lang } = useLanguage();
  const awardsData = getAwardsData(lang);

  const renderCard = (item: any, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel-hover glass-panel p-6 relative overflow-hidden group flex flex-col"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-bl-full blur-2xl group-hover:bg-accent-pink/20 transition-all duration-500" />

      <div className="flex justify-between items-start mb-4 relative z-10 gap-2">
        {item.logo ? (
          <div className="w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={item.logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-accent-pink/10 text-accent-pink flex-shrink-0">
            <Trophy size={28} />
          </div>
        )}
        <span className="px-3 py-1 bg-bg-secondary border border-accent-pink/30 text-accent-pink text-xs font-medium rounded-full text-right whitespace-nowrap">
          {item.date}
        </span>
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-2 relative z-10 leading-snug">{item.title}</h3>

      <p className="text-accent-pink/90 text-sm font-medium mb-3 relative z-10">{item.badge}</p>

      <p className="text-text-muted font-light text-sm leading-relaxed mb-6 flex-grow relative z-10">
        {item.description}
      </p>

      {item.image && (
        <div 
          className="w-full mt-auto relative z-10 rounded-xl overflow-hidden border border-accent-pink/20 group-hover:border-accent-pink/40 transition-colors cursor-pointer"
          onClick={() => setSelectedImage(item.image)}
        >
          <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-accent-pink/10 text-text-primary font-medium hover:bg-accent-pink/20 transition-colors border border-accent-pink/30 relative z-10"
        >
          <ExternalLink size={18} />
          {item.buttonText || "View Link"}
        </a>
      )}
    </motion.div>
  );

  return (
    <section id="awards" className="relative min-h-screen py-24 px-6 z-10 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            {lang === 'ID' ? (
              <>Penghargaan & <span className="text-gradient">Publikasi</span></>
            ) : (
              <><span className="text-gradient">Awards</span> & Publications</>
            )}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => renderCard(award, index))}
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
              className="relative flex justify-center items-center mt-12 md:mt-16 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Certificate full view" 
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-xl border border-pink-500/30 shadow-[0_0_40px_rgba(236,72,153,0.15)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
