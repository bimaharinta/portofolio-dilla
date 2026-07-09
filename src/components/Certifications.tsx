import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getCertificationsData = (lang: string) => [
  {
    id: 1,
    title: lang === 'ID' ? "Sertifikasi bidang digital marketing" : "Certification in the field of digital marketing",
    date: lang === 'ID' ? "Diterbitkan Feb 2025 · Berakhir Feb 2027" : "Issued Feb 2025 · Expires Feb 2027",
    description: "Badan Nasional Sertifikasi Profesi (BNSP)",
    badge: lang === 'ID' ? "Sertifikasi" : "Certification",
    image: null,
    logo: "/src/assets/bnsp-logo.png",
    link: "https://drive.google.com/file/d/1A_G-syVIMEkGBDBtPyHMbznksEdCctU6/view",
    buttonText: lang === 'ID' ? "Lihat Kredensial" : "Show credential"
  },
  {
    id: 2,
    title: lang === 'ID' ? "Penyelesaian kursus AWS" : "AWS course completion",
    date: lang === 'ID' ? "Diterbitkan Mar 2024" : "Issued Mar 2024",
    description: "Amazon Web Services (AWS)",
    badge: lang === 'ID' ? "Sertifikasi" : "Certification",
    image: null,
    logo: "/src/assets/aws-logo.png",
    link: "https://drive.google.com/drive/folders/1XXIMSDBbTnVsC9B9AAXYMg5lzmFx20TJ",
    buttonText: lang === 'ID' ? "Lihat Kredensial" : "Show credential"
  },
  {
    id: 3,
    title: "Sertifikasi Pelatihan Excel",
    date: lang === 'ID' ? "Diterbitkan Mei 2024 · Berakhir Mei 2024" : "Issued May 2024 · Expires May 2024",
    description: "KarirNex - Credential ID No. 0145/B-2/KBT.EXCEL.2/KRX/V/2024",
    badge: lang === 'ID' ? "Sertifikasi" : "Certification",
    image: null,
    logo: "/src/assets/karirnex-logo.png",
    link: "https://drive.google.com/file/d/1rXF7IoUfjmRrj2SugCzdt7uvEfIfdvrq/view?usp=drivesdk",
    buttonText: lang === 'ID' ? "Lihat Kredensial" : "Show credential"
  },
  {
    id: 4,
    title: "Digital Marketing Revo U",
    date: lang === 'ID' ? "Diterbitkan Sep 2023" : "Issued Sep 2023",
    description: "RevoU",
    badge: lang === 'ID' ? "Sertifikasi" : "Certification",
    image: null,
    logo: "/src/assets/revou-logo.png",
    link: "https://certificates.revou.co/dilla-ramadhani-certificate-completion-dmmc23.pdf",
    buttonText: lang === 'ID' ? "Lihat Kredensial" : "Show credential"
  }
];

export const Certifications = () => {
  const { lang, t } = useLanguage();
  const certificationsData = getCertificationsData(lang);

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
    <section id="certifications" className="relative min-h-screen py-24 px-6 z-10 flex flex-col justify-center items-center">
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
              <><span className="text-gradient">Lisensi</span> & Sertifikasi</>
            ) : (
              <><span className="text-gradient">Licenses</span> & Certifications</>
            )}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => renderCard(cert, index))}
        </div>
      </div>
    </section>
  );
};
