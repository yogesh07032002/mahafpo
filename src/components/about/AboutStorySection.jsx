import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/LanguageContext';

const AboutStorySection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      lead: "महाएफपीओ फेडरेशन हे महाराष्ट्रभरातील शेतकरी उत्पादक संस्था (FPOs), सहकारी संस्था आणि पाणी वापर संस्थांचे सक्षमीकरण करणारे एक अग्रगण्य सामूहिक व्यासपीठ आहे. आम्ही शेतकरी-चालित संस्थांना अधिक बळकट, व्यावसायिकदृष्ट्या सक्षम आणि आर्थिकदृष्ट्या शाश्वत कृषी उद्योग बनवण्यासाठी निरंतर कार्यरत आहोत.",
      p1: "महाएफपीओ फेडरेशनची नोंदणी १६ सप्टेंबर २०१९ रोजी झाली असून याचे नोंदणीकृत कार्यालय पुणे, महाराष्ट्र येथे आहे. स्थापनेपासूनच फेडरेशनने राज्यभरातील शेतकरी उत्पादक कंपन्यांशी (FPOs) सलोख्याचे संबंध प्रस्थापित करण्यावर आणि सामूहिक व्यवसाय विकासाच्या शाश्वत संधी निर्माण करण्यावर आपला भर दिला आहे.",
      p2: "FPO चे व्यवस्थापन, उद्योजकता आणि नेतृत्व कौशल्य अधिक बळकट करण्यासाठी आम्ही नियमितपणे विशेष प्रशिक्षण कार्यक्रम, क्षेत्रीय कार्यशाळा आणि राज्यस्तरीय कॉन्क्लेव्हचे आयोजन करतो. यामुळे संस्थांना आधुनिक कृषी तंत्रज्ञान आणि व्यवस्थापकीय पद्धतींचा प्रभावी वापर करणे शक्य होते.",
      p3: "बाजारपेठ जोडणी, वित्तीय सुलभता, सामूहिक शेतमाल एकत्रीकरण आणि थेट खरेदीदारांशी भागीदारी या माध्यमातून महाएफपीओ शेतकरी संस्थांसाठी एक सक्षम परिसंस्था निर्माण करत आहे; जिथे सर्व शेतकरी उत्पादक संस्था एकत्रितपणे प्रगती करू शकतील."
    },
    en: {
      lead: "At MAHAFPO Federation, we are a collective platform dedicated to strengthening Farmer Producer Organizations, cooperative institutions, and water user organizations across Maharashtra. We work towards enabling farmer-led organizations to become stronger, more professionally managed, and commercially sustainable enterprises.",
      p1: "MAHAFPO Federation was registered on 16 September 2019 with its registered office in Pune, Maharashtra. Since its inception, the Federation has focused on building enduring relationships with FPOs and creating viable avenues for collective agribusiness development.",
      p2: "To enhance institutional capabilities, we conduct practical training programs, workshops, and conclaves designed to reinforce FPO management, corporate governance, and entrepreneurial leadership across agrarian communities.",
      p3: "By expanding strategic market linkages, facilitating institutional credit, and enabling bulk aggregation, the Federation bridges farmers with corporate buyers, processors, and financial institutions to foster an ecosystem where farmer enterprises scale cooperatively."
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Top Main Paragraph (Same as Image Top Text) */}
          <p className="text-base font-bold sm:text-lg md:text-[19px] font-medium text-gray-900 leading-relaxed sm:leading-[1.75]">
            {t.lead}
          </p>

          {/* Body Paragraphs */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            {t.p1}
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            {t.p2}
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            {t.p3}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStorySection;