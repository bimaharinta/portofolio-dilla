import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MessageCircle, CheckCircle2, XCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({ show: false, message: '', type: 'success' });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSubmit = {
      access_key: "09da26d9-c716-4488-ab67-a633f77d182d",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (result.success) {
        showToast("Pesan berhasil dikirim! Kami akan segera membalasnya.", "success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast("Gagal mengirim pesan, silakan coba lagi.", "error");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      showToast("Terjadi kesalahan jaringan, silakan coba lagi.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-accent-pink font-medium">{t('contact_name_label')}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted"
                  placeholder={t('contact_name_placeholder')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-accent-pink font-medium">{t('contact_email_label')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted"
                  placeholder={t('contact_email_placeholder')}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-accent-pink font-medium">{t('contact_message_label')}</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-bg-secondary border border-glass-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300 placeholder:text-text-muted resize-none"
                placeholder={t('contact_message_placeholder')}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`mt-4 w-full py-4 rounded-lg bg-gradient-to-r from-accent-pink to-accent-purple text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_var(--accent-pink)] opacity-90 hover:opacity-100'}`}
            >
              <span>{isSubmitting ? 'Mengirim...' : t('contact_btn_send')}</span>
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

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md ${
              toast.type === 'success' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
            <span className="font-medium text-sm md:text-base">{toast.message}</span>
            <button 
              onClick={() => setToast(prev => ({ ...prev, show: false }))}
              className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
