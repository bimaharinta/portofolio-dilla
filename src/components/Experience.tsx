import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getExperiences = (lang: string) => [
  {
    id: 1,
    role: lang === 'ID' ? "Sensus Ekonomi" : "Economic Census",
    company: lang === 'ID' ? "Badan Pusat Statistik · Pekerja Lepas" : "Statistics Indonesia · Freelance",
    period: lang === 'ID' ? "Feb 2026 - Mar 2026 · 2 bln" : "Feb 2026 - Mar 2026 · 2 mos",
    location: lang === 'ID' ? "Tuban, Jawa Timur, Indonesia · Di lokasi" : "Tuban, East Java, Indonesia · On-site",
    type: "work",
    logo: "/src/assets/bps-logo.png",
    description: "",
    images: [
      { src: "/src/assets/sensus-1.png", caption: lang === 'ID' ? "Survey Penduduk Kabupaten Tuban" : "Population Survey of Tuban Regency" },
      { src: "/src/assets/sensus-2.png", caption: lang === 'ID' ? "Data Kependudukan Kabupaten Tuban" : "Population Data of Tuban Regency" }
    ]
  },
  {
    id: 2,
    role: lang === 'ID' ? "Staf Marketing" : "Marketing Staff",
    company: lang === 'ID' ? "Pawonjani Catering · Paruh Waktu" : "Pawonjani Catering · Part-time",
    period: lang === 'ID' ? "Des 2025 - Mar 2026 · 4 bln" : "Dec 2025 - Mar 2026 · 4 mos",
    location: lang === 'ID' ? "Surabaya, Jawa Timur, Indonesia · Jarak jauh" : "Surabaya, East Java, Indonesia · Remote",
    type: "work",
    logo: "/src/assets/pawonjani-logo.png",
    description: lang === 'ID' 
      ? "• Mengembangkan dan memelihara identitas merek Pawonjani sebagai mitra katering yang terpercaya, kreatif, dan berkualitas di pasar yang kompetitif.\n\n• Mengelola ekosistem digital, termasuk situs web, SEO/SEM, dan saluran media sosial (Instagram, Facebook). Membuat konten visual dan tertulis yang menarik seperti sorotan menu, testimoni klien, dan dokumentasi acara untuk berinteraksi dengan audiens target.\n\n• Merencanakan dan melaksanakan kampanye pemasaran multi-saluran (email, media sosial, kemitraan) untuk menghasilkan prospek dan membangun jalur penjualan yang kuat."
      : "• Develop and maintain Pawonjani's brand identity as a trusted, creative, and high-quality catering partner in a competitive market.\n\n• Manage the digital ecosystem, including website, SEO/SEM, and social media channels (Instagram, Facebook). Create compelling visual and written content such as menu highlights, client testimonials, and event showcases to engage the target audience.\n\n• Plan and execute multi-channel marketing campaigns (email, social media, partnerships) to generate inquiries and build a robust sales pipeline for event inquiries.",
  },
  {
    id: 3,
    role: lang === 'ID' ? "Seksi Pencairan Dana" : "Fund Disbursement Section",
    company: lang === 'ID' ? "Direktorat Jenderal Perbendaharaan - Kementerian Keuangan Republik Indonesia · Magang" : "Directorate General of Treasury - Ministry of Finance · Internship",
    period: lang === 'ID' ? "Mar 2025 - Jun 2025 · 4 bln" : "Mar 2025 - Jun 2025 · 4 mos",
    location: lang === 'ID' ? "Bojonegoro, Jawa Timur, Indonesia · Di lokasi" : "Bojonegoro, East Java, Indonesia · On-site",
    type: "work",
    logo: "/src/assets/djpb-logo.png",
    description: lang === 'ID'
      ? "Seksi Pencairan Dana bertugas mengelola basis data pelaksanaan anggaran, memeriksa dokumen perintah pembayaran, menerbitkan Surat Perintah Pencairan Dana (SP2D) atas nama Menteri Keuangan (Bendahara Umum Negara), mengelola basis data pembayaran gaji, mengesahkan surat keterangan penghentian pembayaran, serta menyusun laporan realisasi pencairan anggaran."
      : "The Fund Disbursement Section is tasked with managing the database for budget execution, examining payment order documents, issuing Fund Disbursement Orders (SP2D) in the name of the Minister of Finance (State Treasurer), managing the salary payment database, authorizing payment stoppage certificates, and compiling reports on budget disbursement realization.",
    images: [
      { src: "/src/assets/djpb-1.png", caption: lang === 'ID' ? "Diskusi Berita Keuangan Dan Perbendaharaan" : "Financial and Treasury News Discussion" },
      { src: "/src/assets/djpb-2.png", caption: lang === 'ID' ? "Rapat Evaluasi Terkait SP2D, SPM dan Pencairan Dana" : "Evaluation Meeting Regarding SP2D, SPM and Fund Disbursement" }
    ],
    skills: ["Economic Research", "Microsoft Excel", "Microsoft Word", "Finance"]
  },
  {
    id: 4,
    role: lang === 'ID' ? "Digital Marketing Intern" : "Digital Marketing Intern",
    company: lang === 'ID' ? "VINIX7 · Magang" : "VINIX7 · Internship",
    period: lang === 'ID' ? "Feb 2025 - Jun 2025 · 5 bln" : "Feb 2025 - Jun 2025 · 5 mos",
    location: lang === 'ID' ? "Sleman, Daerah Istimewa Yogyakarta, Indonesia · Jarak jauh" : "Sleman, Special Region of Yogyakarta, Indonesia · Remote",
    type: "work",
    logo: "/src/assets/vinix-logo.png",
    description: lang === 'ID'
      ? "Lulusan Studi Independen Digital Marketing berbasis proyek di VINIX7 (Kampus Merdeka). Dilatih oleh mentor industri dalam strategi berbasis data, mulai dari perencanaan konten hingga analitik kampanye. Siap mengaplikasikan keterampilan kreatif dan analitis untuk membangun strategi merek yang efektif."
      : "Graduate of a project-based Digital Marketing Independent Study at VINIX7 (Kampus Merdeka). Trained by industry mentors in data driven strategy, from content planning to campaign analytics. Ready to apply creative and analytical skills to build effective brand strategies",
    skills: ["Digital Marketing"]
  },
  {
    id: 5,
    role: lang === 'ID' ? "Asisten Perekonomian" : "Economic Assistant",
    company: lang === 'ID' ? "Pemerintah Kab. Bojonegoro · Magang" : "Bojonegoro Regency Government · Internship",
    period: lang === 'ID' ? "Jan 2025 - Mar 2025 · 3 bln" : "Jan 2025 - Mar 2025 · 3 mos",
    location: lang === 'ID' ? "Bojonegoro, Jawa Timur, Indonesia · Di lokasi" : "Bojonegoro, East Java, Indonesia · On-site",
    type: "work",
    logo: "/src/assets/bojonegoro-logo.png",
    description: lang === 'ID'
      ? "• Mendukung staf di Biro Perencanaan Ekonomi, memberikan bantuan esensial dalam koordinasi administratif, persiapan dokumen perencanaan dan anggaran, serta memastikan efisiensi operasional. Berdedikasi untuk mendukung perumusan kebijakan, pemantauan, dan evaluasi di berbagai sektor ekonomi makro, mikro, BUMD/BLUD, dan pengelolaan sumber daya alam di wilayah Bojonegoro\n\n• Membantu dalam tugas persiapan dan administratif untuk rapat koordinasi tingkat tinggi yang dihadiri oleh Bupati Bojonegoro, pimpinan TNI dan Polri setempat (Forkopimda), dan kepala instansi terkait.\n\n• Mengamati bagaimana arahan pemerintah pusat dari Kemendagri diterjemahkan menjadi tindakan lokal, seperti mengaktifkan Tim Pengendali Inflasi Daerah (TPID) dan Satgas Operasi Pasar"
      : "• Support staff in the Economic Planning Bureau, providing essential assistance in administrative coordination, planning and budget document preparation, and ensuring operational efficiency. Dedicated to supporting policy formulation, monitoring, and evaluation across key economic sector macroeconomics, microeconomics, BUMD/BLUD, and natural resource management within the Bojonegoro region\n\n• Assisted in the preparatory and administrative tasks for a high-level coordination meeting attended by the Regent of Bojonegoro, local military and police leadership (Forkopimda), and heads of relevant agencies.\n\n• Observed how central government directives from Kemendagri are translated into local action, such as activating the Regional Inflation Control Team (TPID) and Market Operation Task Forces",
    images: [
      { src: "/src/assets/bojonegoro-1.png", caption: lang === 'ID' ? "Koordinasi Rapat Pengendalian Inflasi Daerah Bersama Kemendagri" : "Coordination of Regional Inflation Control Meeting with Kemendagri" },
      { 
        src: "/src/assets/bojonegoro-2.png", 
        caption: lang === 'ID' ? "Staff Pembantu Perencanaan Biro Perekonomian" : "Assistant Staff for Economic Bureau Planning",
        description: lang === 'ID' 
          ? "Mendukung staf di Biro Perencanaan Ekonomi, memberikan bantuan esensial dalam koordinasi administratif." 
          : "Support staff in the Economic Planning Bureau, providing essential assistance in administrative coordination."
      }
    ],
    skills: ["Microsoft Excel", "Microsoft Word", "Economic Research"]
  },
  {
    id: 6,
    role: lang === 'ID' ? "Business Development Officer" : "Business Development Officer",
    company: lang === 'ID' ? "Peduli Sungai Surabaya · Paruh Waktu" : "Peduli Sungai Surabaya · Part-time",
    period: lang === 'ID' ? "Jan 2024 - Jan 2025 · 1 thn 1 bln" : "Jan 2024 - Jan 2025 · 1 yr 1 mo",
    location: lang === 'ID' ? "Surabaya, Jawa Timur, Indonesia · Jarak jauh" : "Surabaya, East Java, Indonesia · Remote",
    type: "work",
    logo: "/src/assets/pss-logo.png",
    description: lang === 'ID'
      ? "• Mengidentifikasi, bernegosiasi, dan mengamankan kemitraan dengan perusahaan, LSM, lembaga pemerintah, dan kelompok masyarakat untuk mendanai dan mengimplementasikan proyek konservasi dan revitalisasi sungai.\n\n• Mengembangkan dan mengusulkan model bisnis yang layak untuk inisiatif kepedulian sungai, seperti program sponsor perusahaan, ekowisata, layanan pengelolaan limbah, atau lini produk berkelanjutan yang terkait dengan kesehatan sungai.\n\n• Meneliti, menulis proposal, dan melakukan presentasi untuk mengamankan hibah, investasi dampak, dan pendanaan CSR (Corporate Social Responsibility) untuk infrastruktur dan program terkait sungai yang kritis."
      : "• Identify, negotiate, and secure partnerships with corporations, NGOs, government agencies, and community groups to fund and implement river conservation and revitalization projects.\n\n• Develop and propose viable business models for river care initiatives, such as corporate sponsorship programs, eco-tourism, waste management services, or sustainable product lines linked to river health.\n\n• Research, write proposals, and pitch to secure grants, impact investments, and CSR (Corporate Social Responsibility) funding for critical river-related infrastructure and programs.",
    skills: ["Communication", "Negotiation", "Market Research"]
  }
];

export const Experience = () => {
  const { lang, t } = useLanguage();
  const experiences = getExperiences(lang);

  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <span className="text-gradient">{t('exp_title')}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-pink to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border -translate-x-1/2 rounded-full" />

          {/* Experience Nodes */}
          <div className="flex flex-col gap-16 md:gap-0">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${index !== 0 ? 'md:-mt-12 lg:-mt-20' : ''}`}>
                
                {/* Node glowing point */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-pink -translate-x-1/2 z-20"
                  initial={{ borderColor: 'var(--accent-purple)', boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                  whileInView={{ 
                    borderColor: 'var(--accent-pink)', 
                    backgroundColor: 'var(--accent-pink)',
                    boxShadow: '0 0 20px var(--accent-pink)' 
                  }}
                  viewport={{ once: false, margin: "-200px" }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`glass-panel p-6 group ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        {exp.logo ? (
                          <div className="w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="p-3 rounded-full bg-pink-500/10 text-pink-400 flex-shrink-0">
                            {exp.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-text-primary leading-tight mb-1">{exp.role}</h3>
                          <p className="text-accent-pink font-medium">{exp.company}</p>
                          {exp.period && <p className="text-accent-purple text-sm mt-1">{exp.period}</p>}
                          {exp.location && <p className="text-text-muted text-sm mt-1">{exp.location}</p>}
                        </div>
                      </div>
                      
                      {exp.description && (
                        <p className="text-text-secondary mt-4 text-sm md:text-base leading-relaxed pl-2 whitespace-pre-wrap">
                          {exp.description}
                        </p>
                      )}

                      {exp.images && (
                        <div className="mt-6 flex flex-col gap-4">
                          {exp.images.map((img, i) => (
                            <div key={i} className="flex flex-col gap-3 bg-bg-secondary p-3 md:p-4 rounded-xl border border-glass-border">
                              <div className="flex items-start gap-4">
                                <img src={img.src} alt={img.caption} className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg shrink-0" />
                                <p className="text-text-primary font-medium text-sm md:text-base leading-snug pt-1">{img.caption}</p>
                              </div>
                              {(img as any).description && (
                                <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                                  {(img as any).description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {exp.skills && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-accent-pink/10 border border-accent-pink/30 text-accent-pink text-xs md:text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Hover glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink/0 via-accent-pink/10 to-accent-purple/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 rounded-2xl -z-10" />
                    </motion.div>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
