'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation runs once per scroll
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <main className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-4"
        data-aos="fade-up"
      >
        <h1
          className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Precision tuning for drivers who demand more power, sharper response, and next-level performance
        </h1>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute bottom-10 flex flex-col items-center space-y-2 z-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <span className="text-xs uppercase font-semibold tracking-widest">Scroll Down</span>
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
