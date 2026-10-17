import React, { useState, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const ContactSection = () => {
  const { language } = useContext(LanguageContext);

  // व्हॉट्सॲप नंबर (कंट्री कोडसह)
  const WHATSAPP_NUMBER = '917020856126'; 

  const content = {
    mr: {
      heading: 'संपर्क साधा',
      subheading: 'महाएफपीओ फेडरेशनशी थेट संपर्क साधा आणि शेतकरी चळवळीत सहभागी व्हा.',
      addressTitle: 'पत्ता',
      addressLine1: 'महाएफपीओ फेडरेशन, मुख्य कार्यालय,',
      addressLine2: 'पुणे, महाराष्ट्र, भारत - ४११०१६.',
      phoneTitle: 'फोन',
      phone1: '+91 98765 43210',
      phone2: '+91 98765 43211',
      emailTitle: 'ईमेल',
      email1: 'info@mahafpo.com',
      email2: 'contact@mahafpo.com',
      placeholders: {
        name: 'तुमचे नाव *',
        email: 'ईमेल पत्ता *',
        phone: 'फोन नंबर *',
        message: 'तुमचा संदेश *'
      },
      errorRequired: 'कृपया ही माहिती भरा',
      submitBtn: 'संदेश पाठवा'
    },
    en: {
      heading: 'GET IN TOUCH',
      subheading: 'Reach out directly to MAHAFPO Federation and connect with our team.',
      addressTitle: 'ADDRESS',
      addressLine1: 'MAHAFPO Federation, Head Office,',
      addressLine2: 'Pune, Maharashtra, India - 411016.',
      phoneTitle: 'PHONE',
      phone1: '+91 70208 56126',
      phone2: '+91 98765 43211',
      emailTitle: 'EMAIL',
      email1: 'info@mahafpo.com',
      email2: 'contact@mahafpo.com',
      placeholders: {
        name: 'Your Name *',
        email: 'Email Address *',
        phone: 'Phone Number *',
        message: 'Message *'
      },
      errorRequired: 'Please fill this field',
      submitBtn: 'SEND MESSAGE'
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Typing सुरू केल्यावर संबंधित एरर क्लिअर करणे
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.errorRequired;
    if (!formData.email.trim()) newErrors.email = t.errorRequired;
    if (!formData.phone.trim()) newErrors.phone = t.errorRequired;
    if (!formData.message.trim()) newErrors.message = t.errorRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // व्हॉट्सॲप मेसेज तयार करणे
    const whatsappText = `*New Inquiry from MAHAFPO Website*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    // थेट व्हॉट्सॲप उघडणे
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');

    // फॉर्म रिसेट करणे
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 font-sans text-gray-800 select-none">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* डावी बाजू: ३ संपर्क माहिती बॉक्स (5 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Address Box */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 border border-gray-400 bg-white rounded-none shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#2e6930] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#72b85e] mt-1 shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-wider text-gray-900 uppercase mb-2">
                    {t.addressTitle}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {t.addressLine1} <br />
                    {t.addressLine2}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Phone Box */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 border border-gray-400 bg-white rounded-none shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#2e6930] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#72b85e] mt-1 shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-wider text-gray-900 uppercase mb-2">
                    {t.phoneTitle}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {t.phone1} <br />
                    {t.phone2}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. Email Box */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 border border-gray-400 bg-white rounded-none shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#2e6930] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#72b85e] mt-1 shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-wider text-gray-900 uppercase mb-2">
                    {t.emailTitle}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {t.email1} <br />
                    {t.email2}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* उजवी बाजू: संपर्क फॉर्म (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col"
          >
            {/* Heading & Subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-gray-900 uppercase mb-3">
              {t.heading}
            </h2>
            <p className="text-sm text-gray-600 font-normal mb-8 max-w-xl">
              {t.subheading}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* 3 Left Vertical Fields */}
                <div className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.placeholders.name}
                      className={`w-full h-12 px-4 border text-sm text-gray-800 rounded-none outline-none transition-colors duration-200 ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-400 focus:border-[#2e6930]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[12px] text-red-500 mt-1 block font-medium">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.placeholders.email}
                      className={`w-full h-12 px-4 border text-sm text-gray-800 rounded-none outline-none transition-colors duration-200 ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-400 focus:border-[#2e6930]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[12px] text-red-500 mt-1 block font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.placeholders.phone}
                      className={`w-full h-12 px-4 border text-sm text-gray-800 rounded-none outline-none transition-colors duration-200 ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-400 focus:border-[#2e6930]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[12px] text-red-500 mt-1 block font-medium">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Textarea Field */}
                <div>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.placeholders.message}
                    className={`w-full h-[184px] p-4 border text-sm text-gray-800 rounded-none outline-none resize-none transition-colors duration-200 ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-400 focus:border-[#2e6930]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[12px] text-red-500 mt-1 block font-medium">
                      {errors.message}
                    </span>
                  )}
                </div>

              </div>

              {/* Submit / WhatsApp Trigger Button */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 bg-[#72b85e] hover:bg-[#5ca447] text-white text-sm font-bold tracking-wider px-8 py-3.5 rounded-none shadow-md transition-all duration-300 uppercase cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  <span>{t.submitBtn}</span>
                </motion.button>
              </div>
            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;