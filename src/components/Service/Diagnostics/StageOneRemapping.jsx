"use client";

import React from "react";
import {
  Zap,
  TrendingUp,
  Gauge,
  Leaf,
  DollarSign,
} from "lucide-react";

export default function StageOneRemapping() {
  const BLUE = "#143B69";

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          {/* Blue Tag */}
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 
                           text-xs font-medium bg-[#143B69]/15 text-[#143B69] border-[#143B69]/30 mb-4
                           shadow-[0_0_8px_#143B69]/40">
            Stage 1 Remapping
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Unlock Your Vehicle's Potential
          </h2>

          <p className="text-xl text-[#777676] max-w-3xl mx-auto">
            Choose your path: Maximum performance or optimal efficiency.
            Both deliver instant, noticeable results.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* PERFORMANCE CARD */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 bg-[#0d0d0d] border-[#29292A] 
                          shadow-sm group hover:border-[#143B69]/50 transition-colors duration-300">
            <div className="p-8 lg:p-10">

              {/* Icon + Header */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#143B69]/15 flex items-center justify-center mb-4 
                                group-hover:bg-[#143B69]/25 transition-colors">
                  <Zap className="w-7 h-7 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">Performance</h3>
                <p className="text-[#777676] text-lg leading-relaxed">
                  Unlock your vehicle's true potential with a safe, reliable
                  Stage 1 performance tune. This upgrade optimises engine parameters
                  without requiring hardware changes.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#454546] uppercase tracking-wider mb-4">
                  Benefits
                </h4>

                <div className="grid gap-3">
                  <BenefitItem icon={<TrendingUp />} text="Increased horsepower & torque" />
                  <BenefitItem icon={<Zap />} text="Sharper throttle response" />
                  <BenefitItem icon={<Gauge />} text="Faster acceleration" />
                  <BenefitItem icon={<Zap />} text="Smoother, more responsive power delivery" />
                </div>
              </div>

              {/* PERFECT FOR */}
              <div>
                <h4 className="text-sm font-semibold text-[#454546] uppercase tracking-wider mb-4">
                  Perfect For
                </h4>

                <div className="grid gap-3">
                  <PerfectForItem text="Drivers wanting more excitement" />
                  <PerfectForItem text="Vehicles with stock hardware" />
                  <PerfectForItem text="Safe, noticeable gains without stressing the engine" />
                </div>
              </div>
            </div>
          </div>

          {/* ECONOMY CARD */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 bg-[#0d0d0d] border-[#29292A] 
                          shadow-sm group hover:border-[#143B69]/50 transition-colors duration-300">
            <div className="p-8 lg:p-10">

              {/* Icon + Header */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#143B69]/15 flex items-center justify-center mb-4 
                                group-hover:bg-[#143B69]/25 transition-colors">
                  <Leaf className="w-7 h-7 text-[#143B69] drop-shadow-[0_0_6px_#143B69]" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">Economy</h3>
                <p className="text-[#777676] text-lg leading-relaxed">
                  Stage 1 can also be configured for optimal fuel efficiency with 
                  reduced fuel consumption and smoother delivery.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#454546] uppercase tracking-wider mb-4">
                  Benefits
                </h4>

                <div className="grid gap-3">
                  <BenefitItem icon={<DollarSign />} text="Improved miles per gallon (MPG)" />
                  <BenefitItem icon={<Leaf />} text="Reduced fuel consumption" />
                  <BenefitItem icon={<Gauge />} text="Smoother low-RPM driving" />
                  <BenefitItem icon={<DollarSign />} text="Lower running costs" />
                </div>
              </div>

              {/* PERFECT FOR */}
              <div>
                <h4 className="text-sm font-semibold text-[#454546] uppercase tracking-wider mb-4">
                  Perfect For
                </h4>

                <div className="grid gap-3">
                  <PerfectForItem text="High-mileage drivers" />
                  <PerfectForItem text="Fleet vehicles" />
                  <PerfectForItem text="Anyone wanting to reduce fuel spend while keeping drivability" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Small sub-components */
function BenefitItem({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 
                      bg-[#143B69]/15">
        {React.cloneElement(icon, { className: "w-3 h-3 text-[#143B69]" })}
      </div>
      <span className="text-[#E5E5E5]">{text}</span>
    </div>
  );
}

function PerfectForItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[#143B69] mt-2 shrink-0"></div>
      <span className="text-[#777676]">{text}</span>
    </div>
  );
}
