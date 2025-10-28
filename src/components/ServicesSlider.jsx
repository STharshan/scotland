'use client';
import React, { useEffect } from 'react';
import {
  FaTachometerAlt,
  FaTools,
  FaKey,
  FaCogs,
  FaPlug,
  FaCarBattery,
  FaFan,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'Diagnostics',
    icon: <FaTachometerAlt className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Audi A4 2.0tdi.jpeg',
  },
  {
    id: 2,
    title: 'Servicing & Repairs',
    icon: <FaTools className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Audi RS4.jpeg',
  },
  {
    id: 3,
    title: 'Key Cutting & Programming',
    icon: <FaKey className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Audi SQ5 3.0tfsi.jpeg',
  },
  {
    id: 4,
    title: 'Stage 1, DPF, Adblue & EGR',
    icon: <FaCogs className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Honda Civic.jpeg',
  },
  {
    id: 5,
    title: 'OBD Tuning',
    icon: <FaPlug className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Audi A4 2.0tdi.jpeg',
  },
  {
    id: 6,
    title: 'Bench Tuning',
    icon: <FaCarBattery className="text-[#004B93] text-3xl relative z-10" />,
    image: '/BMW X6 3.0d.jpeg',
  },
  {
    id: 7,
    title: 'Carbon Cleaning',
    icon: <FaFan className="text-[#004B93] text-3xl relative z-10" />,
    image: '/Vauxhall Astra 1.4t.jpeg',
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,  // ✅ animations repeat when scrolling up/down
      mirror: true, // ✅ triggers animation on scroll up
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="bg-white dark:bg-neutral-900 py-16 md:py-24 transition-colors duration-500"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Section */}
        <div data-aos="fade-down">
          <h5 className="text-[#004B93] uppercase tracking-wide font-semibold text-sm">
            Services
          </h5>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mt-2">
            What We Do
          </h2>
          <p className="text-2xl md:text-3xl font-light text-[#555] dark:text-gray-300 mt-3">
            We Provide Professional Vehicle <br /> Tuning & Performance Services
          </p>
        </div>

        {/* Service Cards (3 per row) */}
        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={100 * index}
              className="group bg-transparent rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[#004B93]/20"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="relative bg-white dark:bg-neutral-800 rounded-lg shadow-md dark:shadow-gray-900 mt-[-2.5rem] mx-6 py-8 px-4 transition-all duration-500">
                {/* Gear Watermark */}
                <div className="absolute inset-0 flex justify-center items-center opacity-5">
                  <FaCogs className="text-6xl text-gray-400 dark:text-gray-500" />
                </div>

                {/* Icon & Title */}
                <div className="relative flex flex-col items-center space-y-3">
                  {service.icon}
                  <h4 className="text-lg font-semibold text-[#2B2B2B] dark:text-white">
                    {service.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
