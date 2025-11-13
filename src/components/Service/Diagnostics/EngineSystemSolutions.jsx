"use client";

import React from "react";
import {
  CircleAlert,
  Activity,
  Gauge,
  Wrench,
} from "lucide-react";

export default function EngineSystemSolutions() {
  const solutions = [
    {
      title: "DPF System Support",
      icon: <CircleAlert className="w-7 h-7 text-orange-500" />,
      items: [
        "Diagnose blocked filters",
        "Restore performance",
        "Prevent recurring issues",
      ],
    },
    {
      title: "EGR System Solutions",
      icon: <Activity className="w-7 h-7 text-orange-500" />,
      items: [
        "Identify faults",
        "Improve efficiency",
        "Reduce engine hesitation",
      ],
    },
    {
      title: "AdBlue / SCR Assistance",
      icon: <Gauge className="w-7 h-7 text-orange-500" />,
      items: [
        "Fix system errors",
        "Improve NOx performance",
        "Prevent limp mode issues",
      ],
    },
    {
      title: "ECU & Sensor Diagnostics",
      icon: <Wrench className="w-7 h-7 text-orange-500" />,
      items: [
        "Advanced fault tracing",
        "Performance-focused solutions",
        "OEM-level tools",
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engine System Solutions
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Professional diagnostics and system support for modern diesel engines.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-lg p-8 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
            >
              {/* Top gradient hover bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-300">
                  {sol.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {sol.title}
              </h3>

              {/* List */}
              <ul className="space-y-3">
                {sol.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
                    <span className="text-zinc-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
