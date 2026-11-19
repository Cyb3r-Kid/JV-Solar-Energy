import React from 'react';
import { COMPANY_CONFIG } from '../../config/company';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust-metrics" className="py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-ivory dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold block mb-2">
              Demonstrated Operational Scale
            </span>
            <h2 className="section-headline font-bold text-solar-darkText dark:text-white">
              An Established Engineering Track Record.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] max-w-md">
            Providing commercial and industrial facilities with reliable, high-yield captive solar infrastructure across South India.
          </p>
        </div>

        {/* Clean Editorial Horizontal Metrics with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-y border-solar-borderLight dark:border-solar-borderDark py-12">
          {/* Metric 1 */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-6xl sm:text-7xl font-serif font-bold text-solar-forest dark:text-solar-gold mb-3">
                {COMPANY_CONFIG.metrics.experienceYears}
              </div>
              <h3 className="text-lg font-bold font-serif text-solar-darkText dark:text-white mb-2">
                Years of Solar Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                Nearly a decade of specialized solar project engineering, site feasibility audits, and turnkey plant execution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-solar-borderLight dark:border-solar-borderDark text-[11px] font-mono text-[#65736A] dark:text-[#E1EAE3]/80 uppercase tracking-wider">
              OPERATING IN CHENNAI SINCE 2015
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col justify-between md:border-l md:border-solar-borderLight dark:md:border-solar-borderDark md:pl-8">
            <div>
              <div className="text-6xl sm:text-7xl font-serif font-bold text-solar-emerald dark:text-solar-gold mb-3">
                {COMPANY_CONFIG.metrics.deployedCapacityMWp}
              </div>
              <h3 className="text-lg font-bold font-serif text-solar-darkText dark:text-white mb-2">
                Megawatts-Peak Deployed
              </h3>
              <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                Cumulative installed capacity spanning large industrial rooftops, ground-mounted farms, and institutional power plants.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-solar-borderLight dark:border-solar-borderDark text-[11px] font-mono text-[#65736A] dark:text-[#E1EAE3]/80 uppercase tracking-wider">
              CLEAN INDUSTRIAL GENERATION
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col justify-between md:border-l md:border-solar-borderLight dark:md:border-solar-borderDark md:pl-8">
            <div>
              <div className="text-6xl sm:text-7xl font-serif font-bold text-solar-forest dark:text-solar-gold mb-3">
                {COMPANY_CONFIG.metrics.projectSitesCount}
              </div>
              <h3 className="text-lg font-bold font-serif text-solar-darkText dark:text-white mb-2">
                Commissioned Project Sites
              </h3>
              <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                High-performance installations operating across Tamil Nadu, Karnataka, and regional industrial corridors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-solar-borderLight dark:border-solar-borderDark text-[11px] font-mono text-[#65736A] dark:text-[#E1EAE3]/80 uppercase tracking-wider">
              TURNKEY COMMISSIONING
            </div>
          </div>
        </div>

        {/* Small Transparency Disclaimer */}
        <div className="mt-6 flex items-center justify-between flex-wrap gap-2 text-[11px] text-solar-secondaryText">
          <span>*{COMPANY_CONFIG.metrics.disclaimer}</span>
          <span className="font-mono">VERIFIED OPERATIONAL PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
};
