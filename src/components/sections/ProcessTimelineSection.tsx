import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../config/company';

export const ProcessTimelineSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-white dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory border-solar-borderLight dark:border-solar-borderDark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-solar-emerald" />
            <span>Turnkey Project Workflow</span>
          </div>
          <h2 className="section-headline font-bold text-solar-darkText dark:text-white mb-4">
            From Planning to Power Generation.
          </h2>
          <p className="text-base sm:text-lg text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
            Our systematic 6-step execution lifecycle ensures seamless engineering, strict statutory safety compliance, and on-schedule grid synchronization.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl border transition-colors bg-solar-ivory/60 dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-serif font-bold text-solar-forest dark:text-solar-gold mb-4">
                  {step.number}
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-solar-emerald mb-1.5 font-semibold">
                  {step.shortDesc}
                </div>

                <h3 className="text-xl font-bold font-serif text-solar-darkText dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-solar-borderLight dark:border-solar-borderDark text-[11px] font-mono text-solar-secondaryText">
                PHASE 0{step.number} VERIFIED
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-solar-borderLight dark:border-solar-borderDark flex justify-between items-center text-xs">
          <span className="text-solar-secondaryText">
            Full compliance with Indian CEIG safety regulations & DISCOM interconnection rules.
          </span>
          <Link
            to="/process"
            className="inline-flex items-center space-x-1.5 font-mono uppercase tracking-wider text-solar-emerald font-semibold hover:underline"
          >
            <span>Read Detailed Lifecycle Protocol</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
