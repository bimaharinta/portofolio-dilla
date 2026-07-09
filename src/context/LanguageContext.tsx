import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'EN' | 'ID';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  EN: {
    // Header
    nav_home: 'Home',
    nav_about: 'About Me',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_awards: 'Awards',
    nav_certifications: 'Certifications',
    nav_organizations: 'Organizations',
    nav_contact: 'Contact',

    // Hero
    hero_welcome: 'Welcome to my space',
    hero_hi: 'Hi, I\'m',
    hero_subtitle_1: 'Economic Student',
    hero_subtitle_2: 'Marketing Staff at Pawonjani',
    hero_subtitle_3: 'Ex-Business Development Officer at Peduli Sungai Surabaya',
    hero_btn: 'View My Journey',

    // About
    about_title: 'About Me',
    about_desc_1: 'My name is Dilla Ramadhani, student majoring in economics from State University Of Surabaya. Have the ability leadership, public speaking, and easy adapt to new things and experience in the field of digital marketing and Adobe Illustrator design.',
    about_desc_2: 'Based on skills help me develop communication skills, leadership, teamwork, and time management.',

    // Experience & Education
    exp_title: 'Experience',
    exp_subtitle: 'My professional journey',
    exp_present: 'Present',
    
    edu_title: 'Education',
    
    // Awards
    awards_title: 'Awards',
    awards_subtitle: 'Recognition and achievements',

    // Certifications
    cert_title: 'Certifications',
    cert_subtitle: 'Professional qualifications',

    // Organizations
    org_title: 'Organizations',
    org_subtitle: 'Leadership and involvement',
    
    // Contact
    contact_title: 'Contact',
    contact_subtitle: 'Let\'s connect and create something amazing.',
    contact_name_label: 'Name',
    contact_name_placeholder: 'Your Name',
    contact_email_label: 'Email',
    contact_email_placeholder: 'your@email.com',
    contact_message_label: 'Message',
    contact_message_placeholder: 'What\'s on your mind?',
    contact_btn_send: 'Send Message'
  },
  ID: {
    // Header
    nav_home: 'Beranda',
    nav_about: 'Tentang Saya',
    nav_experience: 'Pengalaman',
    nav_education: 'Pendidikan',
    nav_awards: 'Penghargaan',
    nav_certifications: 'Sertifikasi',
    nav_organizations: 'Organisasi',
    nav_contact: 'Kontak',

    // Hero
    hero_welcome: 'Selamat datang di halaman saya',
    hero_hi: 'Halo, saya',
    hero_subtitle_1: 'Mahasiswi Ekonomi',
    hero_subtitle_2: 'Staf Marketing di Pawonjani',
    hero_subtitle_3: 'Mantan Business Development Officer di Peduli Sungai Surabaya',
    hero_btn: 'Lihat Perjalanan Saya',

    // About
    about_title: 'Tentang Saya',
    about_desc_1: 'Nama saya Dilla Ramadhani, mahasiswi jurusan ekonomi dari Universitas Negeri Surabaya. Memiliki kemampuan kepemimpinan, public speaking, dan mudah beradaptasi dengan hal-hal baru serta memiliki pengalaman di bidang digital marketing dan desain Adobe Illustrator.',
    about_desc_2: 'Keterampilan ini membantu saya mengembangkan kemampuan komunikasi, kepemimpinan, kerja sama tim, dan manajemen waktu.',

    // Experience & Education
    exp_title: 'Pengalaman',
    exp_subtitle: 'Perjalanan profesional saya',
    exp_present: 'Saat ini',
    
    edu_title: 'Pendidikan',

    // Awards
    awards_title: 'Penghargaan',
    awards_subtitle: 'Pengakuan dan pencapaian',

    // Certifications
    cert_title: 'Sertifikasi',
    cert_subtitle: 'Kualifikasi profesional',

    // Organizations
    org_title: 'Organisasi',
    org_subtitle: 'Kepemimpinan dan keterlibatan',

    // Contact
    contact_title: 'Kontak',
    contact_subtitle: 'Mari terhubung dan buat sesuatu yang luar biasa.',
    contact_name_label: 'Nama',
    contact_name_placeholder: 'Nama Anda',
    contact_email_label: 'Email',
    contact_email_placeholder: 'email@anda.com',
    contact_message_label: 'Pesan',
    contact_message_placeholder: 'Apa yang ingin Anda sampaikan?',
    contact_btn_send: 'Kirim Pesan'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ID');

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations['EN']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
