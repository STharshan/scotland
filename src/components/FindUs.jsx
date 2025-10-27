'use client';
import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false, // ✅ animations trigger both up and down
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="bg-gray-50 dark:bg-neutral-900 py-20 transition-colors duration-500"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-down"
        >
          <FaMapMarkerAlt className="text-[#004B93] dark:text-[#66A8FF] text-4xl mb-3" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white">
            Find Us
          </h2>
          <p
            className="text-[#555] dark:text-gray-300 mt-3 text-lg max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tune-it Scotland, Unit B8, 15 Carmyle Ave, Glasgow G32 8HL, United Kingdom
          </p>
          <div className="mt-4 w-24 h-[3px] bg-[#004B93] dark:bg-[#005BBB] rounded-full"></div>
        </div>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-[#d9e2ec] dark:border-neutral-700"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <iframe
            title="Tune-it Scotland Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89412.54126573337!2d-4.2427321!3d55.8405334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886bebbb590ac5%3A0x3e1fefe261cd55b0!2sUnit%20B8%2C%2015%20Carmyle%20Ave%2C%20Glasgow%20G32%208HL%2C%20United%20Kingdom!5e0!3m2!1sen!2slk!4v1696867764563!5m2!1sen!2slk"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] md:h-[500px] dark:invert-[90%] dark:brightness-90 rounded-xl"
          ></iframe>
        </div>
      </div>

      {/* Decorative Glow (Optional) */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default FindUs;
