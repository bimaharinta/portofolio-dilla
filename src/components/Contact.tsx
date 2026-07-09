import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 z-10 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            <span className="text-gradient">{t('contact_title')}</span>
          </h2>
          <p className="text-text-muted font-light">{t('contact_subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-pink/20 via-transparent to-transparent pointer-events-none" />

          <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-accent-pink font-medium">{t('contact_name_label')}</label>
                <input 
                  type="text" 
                  className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted"
                  placeholder={t('contact_name_placeholder')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-accent-pink font-medium">{t('contact_email_label')}</label>
                <input 
                  type="email" 
                  className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted"
                  placeholder={t('contact_email_placeholder')}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-accent-pink font-medium">{t('contact_message_label')}</label>
              <textarea 
                rows={4}
                className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted resize-none"
                placeholder={t('contact_message_placeholder')}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full py-4 rounded-lg bg-gradient-to-r from-accent-pink to-accent-purple text-white font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_var(--accent-pink)] transition-shadow duration-300 opacity-90 hover:opacity-100"
            >
              <span>{t('contact_btn_send')}</span>
              <Send size={18} />
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="relative z-10 mt-12 pt-8 border-t border-glass-border flex justify-center gap-8">
            <motion.a 
              href="mailto:ramadhanidilla68@gmail.com"
              whileHover={{ y: -5 }}
              className="p-3 rounded-full bg-bg-secondary border border-glass-border text-accent-pink hover:text-text-primary hover:border-accent-pink hover:shadow-[0_0_15px_var(--accent-pink)] transition-all duration-300"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a 
              href="https://wa.me/6285707817959"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 rounded-full bg-bg-secondary border border-glass-border text-accent-pink hover:text-text-primary hover:border-accent-pink hover:shadow-[0_0_15px_var(--accent-pink)] transition-all duration-300"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/adillarm/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 rounded-full bg-bg-secondary border border-glass-border text-accent-pink hover:text-text-primary hover:border-accent-pink hover:shadow-[0_0_15px_var(--accent-pink)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/dilla-ramadhani/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 rounded-full bg-bg-secondary border border-glass-border text-accent-pink hover:text-text-primary hover:border-accent-pink hover:shadow-[0_0_15px_var(--accent-pink)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
