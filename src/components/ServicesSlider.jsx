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

const BLUE = "#1338BE";       // Tune-In Scotland Blue
const DARK_GREY = "#29292A";
const MID_GREY = "#454546";
const LIGHT_GREY = "#777676";

const services = [
  {
    id: 1,
    title: 'Diagnostics',
    icon: <FaTachometerAlt className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Audi A4 2.0tdi.jpeg',
  },
  {
    id: 2,
    title: 'Servicing & Repairs',
    icon: <FaTools className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Audi RS4.jpeg',
  },
  {
    id: 3,
    title: 'Key Cutting & Programming',
    icon: <FaKey className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Audi SQ5 3.0tfsi.jpeg',
  },
  {
    id: 4,
    title: 'Stage 1, DPF, Adblue & EGR',
    icon: <FaCogs className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Honda Civic.jpeg',
  },
  {
    id: 5,
    title: 'OBD Tuning',
    icon: <FaPlug className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Audi A4 2.0tdi.jpeg',
  },
  {
    id: 6,
    title: 'Bench Tuning',
    icon: <FaCarBattery className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/BMW X6 3.0d.jpeg',
  },
  {
    id: 7,
    title: 'Carbon Cleaning',
    icon: <FaFan className="text-[#1338BE] drop-shadow-[0_0_6px_#1338BE] text-3xl relative z-10" />,
    image: '/Vauxhall Astra 1.4t.jpeg',
  },
];

const ServicesSection = () => {
 

  return (
    <section
      className="bg-white dark:bg-black py-16 md:py-24 transition-colors duration-500"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Top Section */}
        <div data-aos="fade-down">
          <h5 className="text-[#1338BE] uppercase tracking-wide font-semibold text-sm drop-shadow-[0_0_8px_#1338BE]">
            Services
          </h5>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#29292A] dark:text-white mt-2">
            What We Do
          </h2>

          <p className="text-2xl md:text-3xl font-light text-[#454546] dark:text-[#777676] mt-3">
            We Provide Professional Vehicle <br /> Tuning & Performance Services
          </p>
        </div>

        {/* Service Cards */}
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
              className="group bg-transparent rounded-lg transition-transform duration-300 
                         hover:-translate-y-1 hover:shadow-[0_0_15px_#1338BE]/50"
            >
              
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-md dark:shadow-black">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="relative bg-white dark:bg-[#29292A] rounded-lg shadow-md dark:shadow-black mt-[-2.5rem] mx-6 py-8 px-4 transition-all duration-500">

                {/* Grey Gear Watermark */}
                <div className="absolute inset-0 flex justify-center items-center opacity-5">
                  <FaCogs className="text-6xl text-[#777676]" />
                </div>

                {/* Icon + Title */}
                <div className="relative flex flex-col items-center space-y-3">
                  {service.icon}
                  <h4 className="text-lg font-semibold text-[#29292A] dark:text-white">
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
