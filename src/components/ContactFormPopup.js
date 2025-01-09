"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useLanguageStore from '../store/languageStore';

const ContactFormPopup = ({ isOpen, onClose, selectedPlan }) => {
  const { content } = useLanguageStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg"
            >
              <div className="bg-gradient-to-br from-[#1a1c20] to-[#2a2d35] rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-full bg-gradient-radial from-[#64ffda]/5 to-transparent opacity-50" />
                    <motion.div 
                      className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#64ffda]/10 to-transparent rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#48bfe3]/10 to-transparent rounded-full blur-3xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}>
                      {selectedPlan 
                        ? content.contactForm.packageTitle.replace('{package}', selectedPlan)
                        : content.contactForm.title
                      }
                    </h3>

                    {/* Name Input */}
                    <div>
                      <label className={`block text-white/80 mb-2 text-sm ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}>
                        {content.contactForm.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border-2 border-white/10 text-white focus:border-[#64ffda] outline-none transition-colors ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}
                        placeholder={content.contactForm.placeholders.name}
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className={`block text-white/80 mb-2 text-sm ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}>
                        {content.contactForm.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border-2 border-white/10 text-white focus:border-[#64ffda] outline-none transition-colors ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}
                        placeholder={content.contactForm.placeholders.email}
                      />
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label className={`block text-white/80 mb-2 text-sm ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}>
                        {content.contactForm.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border-2 border-white/10 text-white focus:border-[#64ffda] outline-none transition-colors ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}
                        placeholder={content.contactForm.placeholders.phone}
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className={`block text-white/80 mb-2 text-sm ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}>
                        {content.contactForm.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={`w-full px-4 py-3 rounded-xl bg-black/20 border-2 border-white/10 text-white focus:border-[#64ffda] outline-none transition-colors resize-none ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}
                        placeholder={content.contactForm.placeholders.message}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r from-[#64ffda] to-[#48bfe3] text-gray-900 rounded-xl font-bold shadow-lg shadow-[#64ffda]/20 ${content.language === 'ka' ? 'font-ka' : 'font-en'}`}
                    >
                      {content.contactForm.submit}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactFormPopup;
