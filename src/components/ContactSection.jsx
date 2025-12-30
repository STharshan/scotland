'use client';
import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


const ContactSection = () => {


  return (
    <section
      id="contact"
      className="relative scroll-m-10 bg-gray-50 dark:bg-neutral-900 py-20 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE: CONTACT DETAILS */}
        <div data-aos="fade-right">
          <FaMapMarkerAlt className="text-[#004B93]  text-4xl mb-3 mx-auto lg:mx-0" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mb-6 text-center lg:text-left">
            Find Us
          </h2>
          <a  target='_blank' href='https://maps.app.goo.gl/bLrYgG5rVCLcNCe46'>
            <p
              className="text-[#555] dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ont-medium hover:underline hover:text-[#004B93] underline-offset-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tune-it Scotland, Unit B8, 15 Carmyle Ave, Glasgow G32 8HL, United Kingdom
            </p>
          </a>
          <div className="mt-4 mb-10 w-24 h-[3px] bg-[#004B93] dark:bg-[#005BBB] mx-auto lg:mx-0 rounded-full"></div>

          {/* Contact Info */}
          <div className="space-y-5 text-[#2B2B2B] dark:text-gray-200 text-center lg:text-left">
            {/* Phone */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 cursor-pointer hover:text-[#004B93] transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaPhoneAlt className="text-[#004B93] text-lg" />
              <a
                href="tel:+447909445101"
                className="font-medium hover:underline underline-offset-2"
              >
                +44 7909 445101
              </a>
            </div>

            {/* Email */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 cursor-pointer hover:text-[#004B93] transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaEnvelope className="text-[#004B93] text-lg" />
              <a
                href="mailto:Tune-itscotland@hotmail.com"
                className="font-medium hover:underline underline-offset-2"
              >
                Tune-itscotland@hotmail.com
              </a>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div data-aos="zoom-in" data-aos-delay="400" className="mt-10 text-center lg:text-left">
            <a
              href="https://wa.me/447909445101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: GOOGLE MAP */}
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
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] md:h-[500px] dark:invert-[90%] dark:brightness-90 rounded-xl"
          ></iframe>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default ContactSection;
