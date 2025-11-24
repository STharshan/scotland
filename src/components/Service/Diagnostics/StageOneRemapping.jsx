"use client";

import React, { useState, useEffect } from "react";
import { Zap, TrendingUp, Gauge, Leaf, DollarSign } from "lucide-react";

export default function StageOneRemapping() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 
              text-xs font-medium bg-[#1338BE]/15 text-[#1338BE] border-[#1338BE]/30 mb-4
              shadow-[0_0_8px_#1338BE]/40"
          >
            Stage 1 Remapping
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#29292A] dark:text-white mb-4">
            Unlock Your Vehicle's Potential
          </h2>

          <p className="text-xl text-[#454546] dark:text-[#777676] max-w-3xl mx-auto">
            Choose your path: Maximum performance or optimal efficiency. Both
            deliver instant, noticeable results.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* PERFORMANCE CARD */}
          <Card
            index={0}
            activeIndex={activeIndex}
            isMobile={isMobile}
            handleClick={handleClick}
            icon={<Zap />}
            title="Performance"
            description="Unlock your vehicle's true potential with a safe, reliable Stage 1 performance tune. This upgrade optimises engine parameters without requiring hardware changes."
            benefits={[
              { icon: <TrendingUp />, text: "Increased horsepower & torque" },
              { icon: <Zap />, text: "Sharper throttle response" },
              { icon: <Gauge />, text: "Faster acceleration" },
              { icon: <Zap />, text: "Smoother, more responsive power delivery" },
            ]}
            perfectFor={[
              "Drivers wanting more excitement",
              "Vehicles with stock hardware",
              "Safe, noticeable gains without stressing the engine",
            ]}
          />

          {/* ECONOMY CARD */}
          <Card
            index={1}
            activeIndex={activeIndex}
            isMobile={isMobile}
            handleClick={handleClick}
            icon={<Leaf />}
            title="Economy"
            description="Stage 1 can also be configured for optimal fuel efficiency with reduced fuel consumption and smoother delivery."
            benefits={[
              { icon: <DollarSign />, text: "Improved miles per gallon (MPG)" },
              { icon: <Leaf />, text: "Reduced fuel consumption" },
              { icon: <Gauge />, text: "Smoother low-RPM driving" },
              { icon: <DollarSign />, text: "Lower running costs" },
            ]}
            perfectFor={[
              "High-mileage drivers",
              "Fleet vehicles",
              "Anyone wanting to reduce fuel spend while keeping drivability",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* REUSABLE CARD */
function Card({
  index,
  activeIndex,
  isMobile,
  handleClick,
  icon,
  title,
  description,
  benefits,
  perfectFor,
}) {
  const isActive = activeIndex === index;

  return (
    <div
      onClick={() => handleClick(index)}
      className={`flex flex-col gap-6 rounded-xl border py-6 
        bg-white dark:bg-[#0d0d0d] transition-all duration-300 cursor-pointer relative overflow-hidden
        ${
          isMobile
            ? isActive
              ? "border-[#1338BE]/70 shadow-[0_0_25px_#1338BE]/60"
              : "border-[#d1d1d1] dark:border-[#29292A]"
            : "border-[#d1d1d1] dark:border-[#29292A] hover:border-[#1338BE]/50 hover:shadow-[0_0_25px_#1338BE]/40"
        }`}
    >
      {/* Blue Glow Background */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br from-[#0E2A4D]/25 to-transparent 
          transition-opacity duration-300
          ${
            isMobile
              ? isActive
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }`}
      ></div>

      <div className="p-8 lg:p-10">
        
        {/* Icon + Header */}
        <div className="mb-6">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors
              ${
                isMobile
                  ? isActive
                    ? "bg-[#1338BE]/25"
                    : "bg-[#1338BE]/15"
                  : "bg-[#1338BE]/15 group-hover:bg-[#1338BE]/25"
              }`}
          >
            {React.cloneElement(icon, {
              className: "w-7 h-7 text-[#1338BE] drop-shadow-[0_0_6px_#1338BE]",
            })}
          </div>

          <h3
            className={`text-3xl font-bold mb-2 transition-colors duration-300
              ${
                isMobile
                  ? isActive
                    ? "text-[#1338BE]"
                    : "text-[#29292A] dark:text-white"
                  : "text-[#29292A] dark:text-white group-hover:text-[#1338BE]"
              }`}
          >
            {title}
          </h3>

          <p className="text-lg leading-relaxed text-[#454546] dark:text-[#777676]">
            {description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-[#454546] dark:text-[#999] uppercase tracking-wider mb-4">
            Benefits
          </h4>
          <div className="grid gap-3">
            {benefits.map((b, i) => (
              <BenefitItem key={i} icon={b.icon} text={b.text} />
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <div>
          <h4 className="text-sm font-semibold text-[#454546] dark:text-[#999] uppercase tracking-wider mb-4">
            Perfect For
          </h4>
          <div className="grid gap-3">
            {perfectFor.map((p, i) => (
              <PerfectForItem key={i} text={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* Benefit Item */
function BenefitItem({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 bg-[#1338BE]/15">
        {React.cloneElement(icon, { className: "w-3 h-3 text-[#1338BE]" })}
      </div>
      <span className="text-[#29292A] dark:text-[#E5E5E5]">{text}</span>
    </div>
  );
}

/* Perfect For Item */
function PerfectForItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[#1338BE] mt-2 shrink-0"></div>
      <span className="text-[#454546] dark:text-[#777676]">{text}</span>
    </div>
  );
}
