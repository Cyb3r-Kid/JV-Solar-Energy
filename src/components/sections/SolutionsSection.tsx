import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_CONFIG } from '../../config/company';

export const SolutionsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-solar-emerald" />
            <span>Turnkey Clean Energy Solutions</span>
          </div>
          <h2 className="section-headline font-bold text-solar-darkText dark:text-white mb-4">
            Smart Solar Solutions for Every Scale.
          </h2>
          <p className="text-base sm:text-lg text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
            Thoughtfully engineered solar photovoltaic installations designed around the rigorous energy demands of commercial facilities, manufacturing plants, utility buyers, and rural estates.
          </p>
        </div>

        {/* Alternating Editorial Showcase */}
        <div className="space-y-20">
          {SERVICES_CONFIG.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Column (6 cols) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-soft border border-solar-borderLight dark:border-solar-borderDark group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-md bg-white dark:bg-solar-deepForest text-[11px] font-mono text-solar-forest dark:text-solar-gold uppercase tracking-wider font-semibold border border-solar-borderLight dark:border-solar-borderDark shadow-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column (6 cols) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="text-xs font-mono text-solar-emerald uppercase tracking-wider font-semibold">
                    0{index + 1} &bull; EPC CAPABILITY
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-solar-darkText dark:text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-solar-darkText dark:text-solar-ivory">
                        <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex items-center space-x-6">
                    <Link
                      to={`/solutions#${service.id}`}
                      className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-solar-emerald hover:text-solar-emeraldDark transition-colors group"
                    >
                      <span>Learn More & Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/quote"
                      state={{ projectType: service.title }}
                      className="text-xs font-mono uppercase tracking-wider text-solar-secondaryText hover:text-solar-darkText dark:hover:text-white transition-colors"
                    >
                      Get Quote &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
