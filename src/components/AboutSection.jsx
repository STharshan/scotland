'use client';
import React, { useEffect } from 'react';
import { FaCarSide, FaCogs, FaArrowRight } from 'react-icons/fa';


const AboutTuneItScotland = () => {

  return (
    <section
      className="bg-white dark:bg-[#000000] py-16 md:py-24 transition-colors duration-500"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-up">

          {/* Label */}
          <div className="flex items-center gap-2" data-aos="fade-down" data-aos-delay="100">
            <FaCarSide className="text-[#1338BE] dark:text-white text-xl" />

            <span className="text-[#1338BE] dark:text-white font-semibold uppercase tracking-wide text-sm">
              About Tune It Scotland
            </span>

          </div>

          {/* Headings */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#29292A] dark:text-white leading-tight">
              Scotland’s Trusted Tuning & Performance Experts
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-[#454546] dark:text-[#777676] leading-relaxed max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Tune It Scotland has been a trusted name in the car scene for 6–7 years - known for
            precision tuning, honest service, and a genuine passion for performance. In that time,
            we’ve built a strong reputation across Scotland by helping drivers unlock their car’s
            true potential.
          </p>

          {/* Experience Block */}
          <div className="flex items-start gap-4 mt-6" data-aos="fade-up" data-aos-delay="400">
            <div className="flex-shrink-0">
              <FaCogs className="text-[#1338BE] text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#29292A] dark:text-white">
                Experience & Professional
              </h4>
              <p className="text-[#454546] dark:text-[#777676] text-sm mt-2">
                With years of hands-on expertise and a love for all things automotive, our team
                delivers reliable results every time. From diagnostics to remaps, we combine
                skill, technology, and care to keep your vehicle running at its best.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="flex items-center gap-2 bg-[#1338BE] hover:bg-[#0E2A4D] 
             text-white font-semibold uppercase px-6 py-3 rounded-md mt-6 
             transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Get In Touch
            <FaArrowRight className="text-sm mt-[2px]" />
          </button>

        </div>

        {/* Right Images */}
        <div
          className="relative flex justify-center md:justify-end mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src="/about.jpg"
              alt="Mechanic tuning car engine"
              loading="lazy"
              className="rounded-lg shadow-xl w-[90%] md:w-[85%] object-cover 
                         dark:shadow-neutral-900 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />

            {/* Blue Corner Accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#1338BE]  z-100 clip-triangle"></div>
          </div>

          {/* Overlapping Secondary Image */}
          <img
            src="/newcar.png"
            alt="Car diagnostic tools in use"
            loading="lazy"
            className="absolute z-100 -top-6 right-4 w-32 md:w-36 lg:w-40
              
                       hidden sm:block transition-transform duration-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay="500"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutTuneItScotland;
