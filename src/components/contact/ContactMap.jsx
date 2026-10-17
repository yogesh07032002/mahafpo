import React from 'react';

const ContactMap = () => {
  return (
    <section className="w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden bg-gray-100 relative">
      <iframe
        title="MAHAFPO Federation Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.145823087831!2d73.83310867523736!3d18.54054588255689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf64a6b0015d%3A0x9324d6b523bee7f3!2sGRRP%2B678%20Kisan%20Bhavan%2C%2018%2C%20Range%20Hill%20Rd%2C%20near%20Bank%20of%20Baroda%2C%20Yashwant%20nagar%2C%20Ashok%20Nagar%2C%20Pune%2C%20Maharashtra%20411007!5e1!3m2!1sen!2sin!4v1789032028461!5m2!1sen!2sin"
        className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default ContactMap;