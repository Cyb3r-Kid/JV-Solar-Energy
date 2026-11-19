import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutOverviewSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 transition-colors bg-solar-white dark:bg-solar-deepForest border-b border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photograph of Solar Installation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-solar-borderLight dark:border-solar-borderDark">
              <img
                src="/assets/images/industrial-rooftop.jpg"
                alt="Large industrial commercial solar installation by JV Solar Energy"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-deepForest/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark shadow-md text-xs">
                <span className="font-mono uppercase text-solar-emerald font-semibold block mb-0.5">
                  Turnkey Industrial EPC
                </span>
                <span className="text-solar-darkText dark:text-solar-ivory">
                  High-yield rooftop PV systems engineered for heavy manufacturing and captive commercial facilities.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Company Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold">
              <span className="w-2 h-2 rounded-full bg-solar-emerald" />
              <span>About JV Solar Energy</span>
            </div>

            <h2 className="section-headline font-bold text-solar-darkText dark:text-white">
              Building a Cleaner Energy Future.
            </h2>

            <p className="text-base sm:text-lg text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
              JV Solar Energy Pvt Ltd delivers integrated solar engineering, procurement and construction (EPC) solutions for commercial, industrial, residential, and institutional facilities.
            </p>

            <p className="text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
              Headquartered in Chennai, Tamil Nadu, we combine technical rigor with dependable site execution. Whether engineering a 200 KW captive rooftop or orchestrating multi-megawatt ground-mounted generation facilities, our engineers safeguard your capital investment through uncompromised structural design and electrical safety.
            </p>

            {/* Core Capability Checklist */}
            <div className="space-y-3 pt-2 border-t border-solar-borderLight dark:border-solar-borderDark">
              {[
                "Detailed 3D shadow analysis and structural roof integrity audits",
                "Tier-1 Mono PERC & TOPCon high-efficiency modules with flash test audits",
                "High-voltage evacuation line and CEIG safety statutory clearance liaison",
                "Decentralized multi-MPPT inverter topologies minimizing downtime risk"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-solar-darkText dark:text-solar-ivory">
                  <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-solar-emerald hover:text-solar-emeraldDark transition-colors group"
              >
                <span>Read Full Company Profile & Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
