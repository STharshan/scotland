'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main id='home' className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 max-w-3xl"
        data-aos="fade-up"
      >
        {/* NEW HEADLINE */}
        <h1
          className="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight"
          data-aos="zoom-in"
        >
          Precision Tuning for Drivers Who Demand More.
        </h1>

        {/* NEW SUBHEADING */}
        <p
          className="mt-5 text-lg md:text-2xl text-gray-200 font-light leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Unlock more power, sharper response, and next-level performance with Scotland’s trusted tuning experts.
        </p>

        {/* CTA BUTTONS */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-md bg-[#1338BE] hover:bg-[#0E2A4D] transition-all duration-300 font-semibold uppercase shadow-lg shadow-blue-900/40"
          >
            Book Your Tune
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="px-8 py-3 rounded-md border border-white/40 hover:bg-white/20 transition-all duration-300 font-semibold uppercase"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 flex flex-col items-center space-y-2 z-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <span className="text-xs uppercase font-semibold tracking-widest">
          Scroll Down
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </main>
  );
};

export default Hero;
