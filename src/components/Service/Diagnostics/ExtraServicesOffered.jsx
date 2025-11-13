"use client";

import React from "react";
import { Settings, Wrench, Key } from "lucide-react";

export default function ExtraServicesOffered() {
  const services = [
    {
      title: "Diagnostic",
      desc: "Advanced diagnostic services to identify and resolve vehicle issues with precision",
      icon: <Settings className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Servicing & Repairs",
      desc: "Comprehensive servicing and repair solutions to keep your vehicle running smoothly",
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Key Cutting",
      desc: "Professional key cutting and programming services for all vehicle makes and models",
      icon: <Key className="h-8 w-8 text-orange-500" />,
    },
  ];

  return (
    <section className="bg-zinc-900 py-16 px-4">
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
              className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-8 transition-all hover:border-orange-500/50"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-semibold text-2xl text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover gradient background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
