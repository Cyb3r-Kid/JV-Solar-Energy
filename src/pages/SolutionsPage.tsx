import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const SolutionsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section with Composed Rooftop Layout */}
      <PageHero
        image="/assets/images/industrial-rooftop.jpg"
        imagePosition="object-[center_60%]"
        eyebrow="ENGINEERED SOLAR SERVICES &bull; EPC PORTFOLIO"
        title="Smart Solar Solutions for Every Scale."
        description="Explore custom-designed solar installations engineered to meet the distinct energy demands of commercial facilities, industrial manufacturing, and infrastructure."
        breadcrumbCurrent="Solutions"
        ctaText="Request a Sizing Assessment"
        ctaLink="/quote"
        secondaryCtaText="View Commissioned Projects"
        secondaryCtaLink="/projects"
      />

      {/* 2. Solutions Breakdown */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {SERVICES_CONFIG.map((srv, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image Column (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-soft border border-solar-borderLight dark:border-solar-borderDark group">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-white/95 dark:bg-solar-deepForest/95 backdrop-blur-sm text-[11px] font-mono text-solar-forest dark:text-solar-gold uppercase tracking-wider font-semibold border border-solar-borderLight dark:border-solar-borderDark">
                      {srv.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Column (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                <span className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold block">
                  CAPABILITY 0{index + 1}
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-solar-darkText dark:text-white tracking-tight">
                  {srv.title}
                </h2>

                <p className="text-sm sm:text-base text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-solar-darkText dark:text-white font-semibold block mb-2">
                    Key Engineering Deliverables
                  </span>
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-solar-secondaryText">
                      <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Applications Tags */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-solar-secondaryText block mb-2">
                    Typical Application Scope
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {srv.suitableFor.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md bg-solar-sage/40 dark:bg-solar-forest text-xs text-solar-darkText dark:text-solar-ivory border border-solar-borderLight dark:border-solar-borderDark font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications Bar */}
                <div className="p-4 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs shadow-soft">
                  {srv.specifications.map((spec, sIdx) => (
                    <div key={sIdx}>
                      <span className="text-solar-secondaryText block text-[11px] font-mono">{spec.label}</span>
                      <span className="text-solar-darkText dark:text-white font-medium block mt-0.5">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    to="/quote"
                    state={{ projectType: srv.title }}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Sizing & Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Redesigned Feasibility Assessment CTA — Professional Integrated Card */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0C261D] text-white relative overflow-hidden border-t border-[#DCE8D9]/15">
        {/* Ambient Photographic Background with Controlled Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/industrial-rooftop.jpg"
            alt="Industrial solar plant feasibility survey"
            className="w-full h-full object-cover opacity-15"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(12, 38, 29, 0.98) 0%, rgba(12, 38, 29, 0.93) 50%, rgba(12, 38, 29, 0.98) 100%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#173D2B]/90 border border-[#DCE8D9]/20 shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Eyebrow & Value Proposition */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0C261D] border border-[#DCE8D9]/20 text-solar-gold text-xs font-mono uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
                  <span>SOLAR PROJECT CONSULTATION &bull; ENGINEERING DESK</span>
                </div>

                <h2 className="section-headline font-bold text-white drop-shadow-sm">
                  Need a Customized Solar System Feasibility Assessment?
                </h2>

                <p className="text-base sm:text-lg text-[#E1EAE3] leading-relaxed font-sans max-w-2xl font-normal">
                  Our solar engineering desk evaluates structural roof weight capacity, shadow geometry, single-line electrical schematics, and DISCOM substation evacuation limits to engineer the ideal setup for your commercial or industrial facility.
                </p>

                {/* Audit Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#E1EAE3]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0" />
                    <span>3D Shadow & Load Modeling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0" />
                    <span>CEIG & DISCOM Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0" />
                    <span>Turnkey EPC Costing</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Prominent CTA Card */}
              <div className="lg:col-span-4 flex flex-col space-y-4">
                <Link
                  to="/quote"
                  className="w-full inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                >
                  <span>Request an Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919840571770"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0C261D] hover:bg-[#12382A] text-white border border-[#DCE8D9]/20 text-xs font-mono font-medium transition-colors text-center"
                >
                  <span>Call: +91 98405 71770</span>
                </a>

                <div className="text-[11px] text-center text-[#E1EAE3]/80 font-mono">
                  Direct engineering response within 24 business hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
