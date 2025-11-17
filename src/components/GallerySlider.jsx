'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircularGallery from '../components/CircularGallery';

const galleryItems = [
  { image: 'Audi A4 2.0tdi.jpeg', text: 'Audi A4 2.0tdi' },
  { image: 'Audi RS4.jpeg', text: 'Audi RS4' },
  { image: 'Audi SQ5 3.0tfsi.jpeg', text: 'Audi SQ5 3.0tfsi' },
  { image: 'Audi SQ7 4.0tdi V8.jpeg', text: 'Audi SQ7 4.0tdi V8' },
  { image: 'Audi SQ7.jpeg', text: 'Audi SQ7' },
  { image: 'BMW X6 3.0d.jpeg', text: 'BMW X6 3.0d' },
  { image: 'Honda Civic.jpeg', text: 'Honda Civic' },
  { image: 'Vauxhall Astra 1.4t.jpeg', text: 'Vauxhall Astra 1.4t' },
];

const GallerySection = () => {
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
      id="gallery"
      className="relative bg-gradient-to-b from-gray-50 to-white 
                 dark:from-black dark:to-neutral-950 
                 py-20 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Section Title */}
        <div className="mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#29292A] dark:text-white">
            Our Work Gallery
          </h2>

          <p className="text-[#454546] dark:text-[#777676] mt-3 text-lg max-w-2xl mx-auto">
            See how we transform performance, precision, and power — one vehicle at a time.
          </p>

          {/* Blue Accent Line */}
          <div className="mt-4 w-24 h-[3px] bg-[#1338BE] mx-auto rounded-full shadow-[0_0_12px_#1338BE]"></div>
        </div>

        {/* Circular Gallery Component */}
        <div
          className="relative mx-auto max-w-6xl"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            height: '600px',
            position: 'relative',
            overflow: 'hidden',
            background: 'transparent',
          }}
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#29292A"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* Blue Glow Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] 
                      bg-[#1338BE]/15 blur-[130px] rounded-full -z-10"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] 
                      bg-[#1338BE]/15 blur-[130px] rounded-full -z-10"></div>
    </section>
  );
};

export default GallerySection;
