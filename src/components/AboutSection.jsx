'use client';
import React, { useEffect } from 'react';
import { FaCarSide, FaCogs, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutTuneItScotland = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,       // Animation speed
      offset: 100,          // Trigger point
      once: false,          // <— run animation both scroll down & up
      mirror: true,         // <— animate again when scrolling back up
      easing: 'ease-in-out' // Smooth motion
    });
  }, []);

  return (
    <section
      className="bg-white dark:bg-neutral-900 py-16 md:py-24 transition-colors duration-500"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-up">
          {/* Label */}
          <div className="flex items-center gap-2" data-aos="fade-down" data-aos-delay="100">
            <FaCarSide className="text-[#004B93] text-xl" />
            <span className="text-[#004B93] font-semibold uppercase tracking-wide text-sm">
              About Tune It Scotland
            </span>
          </div>

          {/* Headings */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white leading-tight">
              Scotland’s Trusted Tuning & Performance Experts
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-[#555] dark:text-gray-300 leading-relaxed max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
           Tune It Scotland has been a trusted name in the car scene for 6–7 years — known for precision tuning, honest service, and a genuine passion for performance. In that time, we’ve built a strong reputation across Scotland by helping drivers unlock their car’s true potential.
          </p>

          {/* Experience & Professional Block */}
          <div className="flex items-start gap-4 mt-6" data-aos="fade-up" data-aos-delay="400">
            <div className="flex-shrink-0">
              <FaCogs className="text-[#004B93] text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">
                Experience & Professional
              </h4>
              <p className="text-[#555] dark:text-gray-300 text-sm mt-2">
                With years of hands-on expertise and a love for all things automotive, our team
                delivers reliable results every time. From diagnostics to remaps, we combine
                skill, technology, and care to keep your vehicle running at its best.
              </p>
            </div>
          </div>

          {/* Get In Touch Button */}
          <button
            className="flex items-center gap-2 bg-[#004B93] hover:bg-[#00376C] text-white font-semibold uppercase px-6 py-3 rounded-md mt-6 transition-all duration-300 dark:bg-[#005BBB] dark:hover:bg-[#004C96]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Get In Touch
            <FaArrowRight className="text-sm mt-[2px]" />
          </button>
        </div>

        {/* Right Image Section */}
        <div
          className="relative flex justify-center md:justify-end mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src="/tuneit-main.png"
              alt="Mechanic tuning car engine"
              className="rounded-lg shadow-xl w-[90%] md:w-[85%] object-cover dark:shadow-gray-800 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
            {/* Blue Corner Accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#004B93] -z-10 clip-triangle"></div>
          </div>

          {/* Overlapping Secondary Image */}
          <img
            src="/tuneit-main.png"
            alt="Car diagnostic tools in use"
            className="absolute -top-6 right-4 w-32 md:w-36 lg:w-40 rounded-md shadow-lg border-4 border-white dark:border-neutral-900 hidden sm:block transition-transform duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTuneItScotland;
