import React from 'react';
import { VALUE_PROPOSITIONS } from '../../config/company';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-beige/50 dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-solar-emerald" />
            <span>Why Partner With JV Solar</span>
          </div>
          <h2 className="section-headline font-bold text-solar-darkText dark:text-white mb-4">
            Built on Trust. Driven by Engineering.
          </h2>
          <p className="text-base sm:text-lg text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
            Why leading manufacturing units, commercial facilities, and institutional developers partner with JV Solar Energy for turnkey renewable execution.
          </p>
        </div>

        {/* 6 Value Propositions in a Refined Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border transition-colors bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-solar-emerald font-semibold mb-4">
                  0{idx + 1} &bull; CORE PILLAR
                </div>

                <h3 className="text-xl font-bold font-serif text-solar-darkText dark:text-white mb-3">
                  {prop.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-solar-borderLight dark:border-solar-borderDark text-[11px] font-mono text-solar-secondaryText">
                ENGINEERING EXCELLENCE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
