"use client";

import React, { useState, useEffect } from "react";
import { CircleAlert, Activity, Gauge, Wrench } from "lucide-react";

export default function EngineSystemSolutions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view once on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const BLUE = "#1338BE";

  const solutions = [
    {
      title: "DPF System Support",
      icon: (
        <CircleAlert className="w-7 h-7 text-[#1338BE] drop-shadow-[0_0_6px_#1338BE]" />
      ),
      items: [
        "Diagnose blocked filters",
        "Restore performance",
        "Prevent recurring issues",
      ],
    },
    {
      title: "EGR System Solutions",
      icon: (
        <Activity className="w-7 h-7 text-[#1338BE] drop-shadow-[0_0_6px_#1338BE]" />
      ),
      items: [
        "Identify faults",
        "Improve efficiency",
        "Reduce engine hesitation",
      ],
    },
    {
      title: "AdBlue / SCR Assistance",
      icon: (
        <Gauge className="w-7 h-7 text-[#1338BE] drop-shadow-[0_0_6px_#1338BE]" />
      ),
      items: [
        "Fix system errors",
        "Improve NOx performance",
        "Prevent limp mode issues",
      ],
    },
    {
      title: "ECU & Sensor Diagnostics",
      icon: (
        <Wrench className="w-7 h-7 text-[#1338BE] drop-shadow-[0_0_6px_#1338BE]" />
      ),
      items: [
        "Advanced fault tracing",
        "Performance-focused solutions",
        "OEM-level tools",
      ],
    },
  ];

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engine System Solutions
          </h2>
          <p className="text-lg text-[#777676] max-w-2xl mx-auto">
            Professional diagnostics and system support for modern diesel engines.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`group relative bg-[#111] border border-[#29292A] rounded-lg p-8 transition-all duration-300 cursor-pointer 
                  ${
                    isMobile
                      ? isActive
                        ? "border-[#1338BE]/70 shadow-[0_0_20px_#1338BE]/60"
                        : ""
                      : "hover:border-[#1338BE]/50 hover:shadow-[0_0_20px_#1338BE]/40"
                  }`}
              >
                {/* Top glow bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 rounded-t-lg transition-opacity duration-300 
                    ${
                      isMobile
                        ? isActive
                          ? "opacity-100 bg-gradient-to-r from-[#0E2A4D] to-[#1338BE]"
                          : "opacity-0"
                        : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#0E2A4D] to-[#1338BE]"
                    }`}
                ></div>

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "bg-[#1338BE]/10"
                          : "bg-[#1a1a1a]"
                        : "bg-[#1a1a1a] group-hover:bg-[#1338BE]/10"
                    }`}
                  >
                    {sol.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300
                  ${
                    isMobile
                      ? isActive
                        ? "text-[#1338BE]"
                        : "text-white"
                      : "text-white group-hover:text-[#1338BE]"
                  }`}
                >
                  {sol.title}
                </h3>

                {/* List */}
                <ul className="space-y-3">
                  {sol.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1338BE] mt-2 shrink-0"></div>
                      <span className="text-[#777676] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
