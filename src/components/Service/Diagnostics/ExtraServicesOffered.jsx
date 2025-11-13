"use client";

import React from "react";
import { Settings, Wrench, Key } from "lucide-react";

export default function ExtraServicesOffered() {

  const BLUE = "#143B69";

  const services = [
    {
      title: "Diagnostic",
      desc: "Advanced diagnostic services to identify and resolve vehicle issues with precision",
      icon: <Settings className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />,
    },
    {
      title: "Servicing & Repairs",
      desc: "Comprehensive servicing and repair solutions to keep your vehicle running smoothly",
      icon: <Wrench className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />,
    },
    {
      title: "Key Cutting",
      desc: "Professional key cutting and programming services for all vehicle makes and models",
      icon: <Key className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />,
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center font-bold text-4xl text-white mb-12">
          Extra Services Offered
        </h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg 
                         border border-[#29292A] bg-[#0d0d0d] p-8 
                         transition-all duration-300 
                         hover:border-[#143B69]/60 
                         hover:shadow-[0_0_18px_#143B69]/40"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center 
                              rounded-full bg-[#143B69]/15">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-semibold text-2xl text-white 
                             group-hover:text-[#143B69] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#777676] leading-relaxed">
                {item.desc}
              </p>

              {/* Blue hover gradient background */}
              <div className="absolute inset-0 -z-10 
                              bg-gradient-to-br from-[#0E2A4D]/20 to-transparent
                              opacity-0 transition-opacity duration-300 
                              group-hover:opacity-100">
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
