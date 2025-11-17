"use client";

import React, { useState, useEffect } from "react";
import { Settings, Wrench, Key } from "lucide-react";

export default function ExtraServicesOffered() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "Diagnostic",
      desc: "Advanced diagnostic services to identify and resolve vehicle issues with precision",
      icon: (
        <Settings className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />
      ),
    },
    {
      title: "Servicing & Repairs",
      desc: "Comprehensive servicing and repair solutions to keep your vehicle running smoothly",
      icon: (
        <Wrench className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />
      ),
    },
    {
      title: "Key Cutting",
      desc: "Professional key cutting and programming services for all vehicle makes and models",
      icon: <Key className="h-8 w-8 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />,
    },
  ];

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center font-bold text-4xl text-white mb-12">
          Extra Services Offered
        </h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`relative overflow-hidden rounded-lg border bg-[#0d0d0d] p-8 transition-all duration-300 cursor-pointer
                  ${
                    isMobile
                      ? isActive
                        ? "border-[#143B69]/70 shadow-[0_0_18px_#143B69]/60"
                        : "border-[#29292A]"
                      : "border-[#29292A] hover:border-[#143B69]/60 hover:shadow-[0_0_18px_#143B69]/40"
                  }`}
              >
                {/* Blue hover gradient background */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br from-[#0E2A4D]/25 to-transparent transition-opacity duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "opacity-100"
                          : "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                ></div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "bg-[#143B69]/20"
                          : "bg-[#143B69]/15"
                        : "bg-[#143B69]/15 group-hover:bg-[#143B69]/25"
                    }`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={`mb-3 font-semibold text-2xl transition-colors duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "text-[#143B69]"
                          : "text-white"
                        : "text-white group-hover:text-[#143B69]"
                    }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#777676] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
