import React from 'react';
import { SolarGlobeVisualization } from '../three/SolarGlobeVisualization';

export const GlobeExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t transition-colors bg-brand-ivory dark:bg-brand-forestDarkest border-brand-borderLight dark:border-brand-borderDark text-brand-charcoal dark:text-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-olive dark:text-brand-gold font-semibold block mb-3">
            Regional Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal dark:text-brand-white mb-4">
            Energy Without Boundaries.
          </h2>
          <p className="text-base sm:text-lg text-brand-slate dark:text-brand-slateLight leading-relaxed">
            Building a cleaner and more sustainable energy future through intelligent solar engineering. Explore our connected generation nodes spanning Tamil Nadu and South India.
          </p>
        </div>

        {/* 3D Visual */}
        <div className="mb-8">
          <SolarGlobeVisualization />
        </div>

        {/* Editorial Sub-features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-borderLight dark:border-brand-borderDark text-xs text-brand-slate dark:text-brand-slateLight">
          <div>
            <span className="font-mono text-brand-charcoal dark:text-brand-white uppercase block font-semibold mb-1">
              High-Tension Evacuation
            </span>
            <span>11KV, 22KV, and 33KV substation feeders synchronized directly with state electricity boards.</span>
          </div>
          <div>
            <span className="font-mono text-brand-charcoal dark:text-brand-white uppercase block font-semibold mb-1">
              Inverter Architecture
            </span>
            <span>Decentralized multi-MPPT topologies preventing single-point string power collapse.</span>
          </div>
          <div>
            <span className="font-mono text-brand-charcoal dark:text-brand-white uppercase block font-semibold mb-1">
              Statutory Compliance
            </span>
            <span>Comprehensive CEIG safety approvals, earth mat testing, and bidirectional metering.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
