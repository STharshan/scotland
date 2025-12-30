'use client';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaTools, FaUserCheck, FaCogs } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    { icon: <FaHeart />, title: 'Passion-Driven Service' },
    { icon: <FaTools />, title: 'Mobile or Workshop — Your Choice' },
    { icon: <FaUserCheck />, title: 'Customer-First Approach' },
    { icon: <FaCogs />, title: 'Expert Knowledge, Real Results' },
  ];

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="why-choose-us"
      className="relative bg-white dark:bg-black py-20 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT SIDE CONTENT */}
        <div data-aos="fade-right">
          {/* Heading */}
          <div className="relative mb-10 md:mb-12 text-center lg:text-left">
            <span className="absolute -top-8 md:-top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 
              text-[40px] md:text-[120px] font-extrabold text-[#777676] dark:text-[#29292A] 
              opacity-40 select-none whitespace-nowrap">
              TUNE IT SCOTLAND
            </span>

            <h2 className="relative text-3xl md:text-5xl font-extrabold text-[#29292A] dark:text-white z-10">
              Why Choose Us
            </h2>
          </div>

          {/* Description */}
          <div
            className="text-[#454546] dark:text-[#777676] leading-relaxed text-sm md:text-base mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-6">
              At{' '}
              <span className="font-semibold text-[#29292A] dark:text-white">
                Tune It Scotland
              </span>
              , we don’t just tune cars - we take pride in transforming how they
              drive, perform, and feel. Whether it’s a quick remap, in-depth
              diagnostics, or a full carbon clean, we treat every vehicle as if it’s
              our own.
            </p>

            <p className="mb-6">
              From mobile callouts to in-house services at our unit, we make it easy
              and hassle-free to get expert tuning, servicing, and repairs. We
              believe in honesty, precision, and going above and beyond - every
              single time.
            </p>
          </div>

          {/* Call To Action */}
          <div
            className="bg-[#1338BE] hover:bg-[#0E2A4D] 
            text-white py-6 md:py-8 px-6 md:px-10 rounded-lg inline-block shadow-[0_0_15px_#1338BE] 
            transition-all duration-300 text-center lg:text-left"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-lg md:text-2xl font-bold">
              Book Your Car Tuning Appointment
            </h3>
            <p className="text-xs md:text-base mt-3 text-blue-100 dark:text-blue-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Get your vehicle tuned for maximum performance, improved responsiveness,
              and smoother driving.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">

          {/* CARD 1 — BLUE TOP + WHITE BOTTOM + TITLE INSIDE WHITE */}
          <div className="relative h-[230px] w-full rounded-lg overflow-hidden shadow-md bg-gradient-to-b from-[#0E2A4D] to-[#1338BE]">
            
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[url('/road-bg.jpg')] bg-cover bg-center opacity-30"></div>

            {/* Icon */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl text-white z-10">
              <FaHeart />
            </div>

            {/* White angled bottom */}
            <div
              className="absolute bottom-0 w-full h-[75px] bg-white"
              style={{
                clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
              }}
            ></div>

            {/* TEXT INSIDE WHITE PART (BLACK COLOR) */}
            <h4 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black font-semibold text-base whitespace-nowrap z-20">
              Passion-Driven Service
            </h4>
          </div>

          {/* CARDS 2–4 */}
          {[features[1], features[2], features[3]].map((item, i) => (
            <div
              key={i}
              className="relative h-[250px] rounded-lg overflow-hidden bg-white shadow-md"
            >
              {/* Icon */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl text-[#1338BE] z-10">
                {item.icon}
              </div>

              {/* Blue angled bottom */}
              <div
                className="absolute bottom-0 w-full h-[120px] bg-[#1338BE]"
                style={{
                  clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>

              {/* Title inside blue */}
              <h4 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-base font-semibold whitespace-nowrap z-20">
                {item.title}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
