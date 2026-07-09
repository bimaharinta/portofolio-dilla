import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getOrganizationsData = (lang: string) => [
  {
    id: 1,
    title: "PKM Center Unesa",
    role: lang === 'ID' ? "Desain dan Dokumentasi" : "Design and Documentation",
    date: lang === 'ID' ? "Feb 2024 – Feb 2025" : "Feb 2024 – Feb 2025",
    logo: "/assets/pkm-center-logo.png",
    description: ""
  },
  {
    id: 2,
    title: "Youth Ranger Indonesia",
    role: lang === 'ID' ? "Anggota" : "Member",
    date: "Jul 2024 – Dec 2024",
    logo: "/assets/youth-ranger-logo.png",
    description: ""
  }
];

export const Organizations = () => {
  const { lang, t } = useLanguage();
  const organizationsData = getOrganizationsData(lang);
  
  return (
    <section id="organizations" className="relative min-h-screen py-24 px-6 z-10 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <span className="text-gradient">{t('org_title')}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {organizationsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/10 rounded-bl-full blur-2xl group-hover:bg-accent-pink/20 transition-all duration-500" />
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                {item.logo ? (
                  <div className="w-20 h-20 bg-white rounded-2xl p-2 flex-shrink-0 flex items-center justify-center overflow-hidden border border-accent-pink/20 group-hover:border-accent-pink/50 transition-colors shadow-lg">
                    <img src={item.logo} alt={`${item.title} Logo`} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-white/5 border border-accent-pink/20 text-accent-pink group-hover:border-accent-pink/50 transition-colors flex-shrink-0">
                    <Users size={40} />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-accent-pink font-medium mb-2 capitalize">{item.role}</p>
                  <p className="text-accent-purple/80 text-sm">{item.date}</p>
                  {item.description && (
                    <p className="text-text-secondary font-light mt-4">{item.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
