'use client';
import React, { useEffect } from 'react';
import { FaHeart, FaTools, FaUserCheck, FaCogs } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      id="why-choose-us"
      className="relative bg-white dark:bg-neutral-900 py-20 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE CONTENT */}
        <div data-aos="fade-right">
          {/* Heading */}
          <div className="relative mb-10 md:mb-12 text-center lg:text-left">
            <span className="absolute -top-8 md:-top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[40px] md:text-[120px] font-extrabold text-gray-100 dark:text-neutral-800 opacity-60 select-none pointer-events-none whitespace-nowrap">
              TUNE IT SCOTLAND
            </span>
            <h2 className="relative text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white z-10">
              Why Choose Us
            </h2>
          </div>

          {/* Description */}
          <div
            className="text-[#555] dark:text-gray-300 leading-relaxed text-sm md:text-base mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-6">
              At{' '}
              <span className="font-semibold text-[#2B2B2B] dark:text-white">
                Tune It Scotland
              </span>
              , we don’t just tune cars — we take pride in transforming how they
              drive, perform, and feel. Whether it’s a quick remap, in-depth
              diagnostics, or a full carbon clean, we treat every vehicle as if it’s
              our own. Our team is passionate about performance and genuinely cares
              about helping you get the most out of your car.
            </p>
            <p className="mb-6">
              From mobile callouts to in-house services at our unit, we make it easy
              and hassle-free to get expert tuning, servicing, and repairs. We
              believe in honesty, precision, and going above and beyond — every
              single time. No shortcuts. No guesswork. Just pure dedication to your
              vehicle’s performance and reliability.
            </p>
          </div>

          {/* Call to Action */}
          <div
            className="bg-[#004B93] hover:bg-[#00376C] dark:bg-[#005BBB] dark:hover:bg-[#004C96] text-white py-6 md:py-8 px-6 md:px-10 rounded-lg inline-block shadow-lg transition-all duration-300 text-center lg:text-left"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-lg md:text-2xl font-bold">
                Book Your Car Tuning Appointment
            </h3>
            <p className="text-xs md:text-base mt-3 text-blue-100 dark:text-blue-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Get your vehicle tuned for maximum performance, improved responsiveness, and smoother driving. Our experts will fine-tune your car to bring out its full potential — book now to experience the difference.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FEATURES GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {[
            { icon: <FaHeart />, title: 'Passion-Driven Service' },
            { icon: <FaTools />, title: 'Mobile or Workshop — Your Choice' },
            { icon: <FaUserCheck />, title: 'Customer-First Approach' },
            { icon: <FaCogs />, title: 'Expert Knowledge, Real Results' },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group h-[220px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#004B93] to-[#005BBB] text-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:brightness-110"
              data-aos="zoom-in-up"
              data-aos-delay={100 * (i + 1)}
            >
              {/* Background image overlay (optional subtle texture) */}
              <div className="absolute inset-0 opacity-20 bg-[url('/road-bg.jpg')] bg-cover bg-center"></div>

              {/* Icon */}
              <div className="text-5xl mb-3 relative z-10 drop-shadow-md">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold relative z-10 px-4 leading-snug">
                {item.title}
              </h4>

              {/* Angled white bottom using clip-path */}
              <div
                className="absolute bottom-0 left-0 w-full h-8 bg-white"
                style={{
                  clipPath: 'polygon(0 70%, 100% 100%, 100% 100%, 0 100%)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
