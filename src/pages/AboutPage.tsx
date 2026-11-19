import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const AboutPage: React.FC = () => {
  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section with Negative Space Alignment */}
      <PageHero
        image="/assets/images/solar-engineering-team.jpg"
        imagePosition="object-right lg:object-[92%_center]"
        eyebrow="ABOUT JV SOLAR ENERGY &bull; EPC EXCELLENCE"
        title="Engineering a More Sustainable Tomorrow."
        description="Discover our disciplined engineering approach, turnkey EPC delivery, and proven operational benchmarks across South India."
        breadcrumbCurrent="About Us"
        ctaText="Get a Consultation"
        ctaLink="/quote"
        secondaryCtaText="Explore Solutions"
        secondaryCtaLink="/solutions"
      />

      {/* 2. Company Introduction (Warm White) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold block">
              Our Background
            </span>
            <h2 className="section-headline font-bold text-solar-darkText dark:text-white">
              Engineering Disciplined Solar Infrastructure.
            </h2>
            <p className="text-base text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
              Based in Chennai, Tamil Nadu, JV Solar Energy Pvt Ltd provides turnkey engineering, procurement and construction (EPC) solutions for industrial rooftops, ground-mounted utility farms, and commercial premises across South India.
            </p>
            <p className="text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
              We approach every installation through comprehensive electrical load modeling, 3D shadow analysis, and wind shear calculations. Rather than selling generic commodity kits, our engineering desk tailors each system for maximum 25-year generation yield and full statutory compliance.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-soft border border-solar-borderLight dark:border-solar-borderDark">
              <img
                src="/assets/images/industrial-rooftop.jpg"
                alt="Industrial solar rooftop installation"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Statistics Strip (Natural Sage / Warm Ivory) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-sage/30 dark:bg-solar-forest/40 border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest">
            <span className="text-5xl font-serif font-bold text-solar-forest dark:text-solar-gold block mb-2">{COMPANY_CONFIG.metrics.experienceYears}</span>
            <span className="text-xs uppercase font-mono tracking-wider text-solar-secondaryText block font-semibold">Years of Operational EPC</span>
            <span className="text-xs text-solar-secondaryText block mt-1">Established regional solar execution record</span>
          </div>

          <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest">
            <span className="text-5xl font-serif font-bold text-solar-emerald dark:text-solar-gold block mb-2">{COMPANY_CONFIG.metrics.deployedCapacityMWp}</span>
            <span className="text-xs uppercase font-mono tracking-wider text-solar-secondaryText block font-semibold">Megawatts-Peak Deployed</span>
            <span className="text-xs text-solar-secondaryText block mt-1">Cumulative clean generation installed</span>
          </div>

          <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest">
            <span className="text-5xl font-serif font-bold text-solar-forest dark:text-solar-gold block mb-2">{COMPANY_CONFIG.metrics.projectSitesCount}</span>
            <span className="text-xs uppercase font-mono tracking-wider text-solar-secondaryText block font-semibold">Commissioned Sites</span>
            <span className="text-xs text-solar-secondaryText block mt-1">Operating across Tamil Nadu & South India</span>
          </div>
        </div>
        <div className="text-center text-[11px] text-solar-secondaryText mt-4">
          *{COMPANY_CONFIG.metrics.disclaimer}
        </div>
      </section>

      {/* 4. Strategic Vision & Purpose (Warm Ivory) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-ivory dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-12 rounded-2xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest space-y-4 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-solar-sage flex items-center justify-center text-solar-forest">
              <Compass className="w-5 h-5 text-solar-emerald" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-solar-emerald font-semibold block">Strategic Vision</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-solar-darkText dark:text-white">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-solar-secondaryText leading-relaxed">
              To be South India's trusted solar EPC partner, renowned for engineering discipline, uncompromised safety, and enabling industrial partners to achieve long-term power autonomy.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest space-y-4 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-solar-sage flex items-center justify-center text-solar-forest">
              <Target className="w-5 h-5 text-solar-emerald" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-solar-emerald font-semibold block">Purpose & Commitment</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-solar-darkText dark:text-white">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-solar-secondaryText leading-relaxed">
              To deliver turnkey solar power plants engineered for 25+ years of sustained generation. We unite rigorous shadow simulation, Tier-1 hardware procurement, and dedicated lifetime maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Engineering Capabilities & Safety Protocols */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold block mb-2">
              Engineering Capabilities
            </span>
            <h2 className="section-headline font-bold text-solar-darkText dark:text-white">
              Uncompromising Quality from Blueprint to Commissioning.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                step: "01",
                title: "Engineering & Sizing",
                desc: "3D irradiance mapping, structural load calculation, and custom CAD single-line diagrams."
              },
              {
                step: "02",
                title: "Tier-1 Procurement",
                desc: "Direct sourcing of high-efficiency Mono PERC & TOPCon modules with factory flash tests."
              },
              {
                step: "03",
                title: "Turnkey Construction",
                desc: "Civil, mechanical, and electrical site construction strictly adhering to CEIG safety norms."
              },
              {
                step: "04",
                title: "Commissioning & O&M",
                desc: "DISCOM synchronization, bidirectional net-meter integration, and IoT telemetry."
              }
            ].map((col) => (
              <div key={col.step} className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-solar-ivory/60 dark:bg-solar-forest">
                <div className="text-2xl font-serif font-bold text-solar-forest dark:text-solar-gold mb-2">{col.step}</div>
                <h4 className="text-base font-bold font-serif text-solar-darkText dark:text-white mb-2">{col.title}</h4>
                <p className="text-xs text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Sustainable Commitment Section — "Our Contribution to India's Clean Energy Transition" */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0C261D] text-white relative overflow-hidden border-t border-[#DCE8D9]/15">
        {/* Ambient Photographic Background with Controlled Dark Forest Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ground-mounted.jpg"
            alt="Utility solar farm in Tamil Nadu"
            className="w-full h-full object-cover opacity-15"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(12, 38, 29, 0.98) 0%, rgba(12, 38, 29, 0.92) 50%, rgba(12, 38, 29, 0.98) 100%)'
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#173D2B] border border-[#DCE8D9]/20 text-solar-gold text-xs font-mono uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
            <span>NATIONAL CLEAN ENERGY INITIATIVE &bull; CHENNAI, TAMIL NADU</span>
          </div>

          <h2 className="section-headline font-bold text-white drop-shadow-sm">
            Our Contribution to India's Clean Energy Transition
          </h2>

          <p className="text-base sm:text-lg text-[#E1EAE3] leading-relaxed font-sans max-w-2xl mx-auto font-normal">
            As Tamil Nadu and India accelerate towards clean industrial energy, JV Solar Energy delivers durable, high-efficiency solar assets that combine substantial electricity bill reduction with responsible carbon reduction.
          </p>

          {/* Operational Contribution Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-2 text-center max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-[#173D2B]/80 border border-[#DCE8D9]/15">
              <span className="text-3xl font-serif font-bold text-white block mb-1">60+ MWp</span>
              <span className="text-xs uppercase font-mono tracking-wider text-solar-gold block font-semibold">Clean Capacity</span>
              <span className="text-[11px] text-[#E1EAE3] block mt-1">Deployed across South India</span>
            </div>
            <div className="p-4 rounded-xl bg-[#173D2B]/80 border border-[#DCE8D9]/15">
              <span className="text-3xl font-serif font-bold text-white block mb-1">30+</span>
              <span className="text-xs uppercase font-mono tracking-wider text-solar-gold block font-semibold">Commissioned Sites</span>
              <span className="text-[11px] text-[#E1EAE3] block mt-1">Industrial & commercial premises</span>
            </div>
            <div className="p-4 rounded-xl bg-[#173D2B]/80 border border-[#DCE8D9]/15">
              <span className="text-3xl font-serif font-bold text-white block mb-1">25-Year</span>
              <span className="text-xs uppercase font-mono tracking-wider text-solar-gold block font-semibold">Plant Longevity</span>
              <span className="text-[11px] text-[#E1EAE3] block mt-1">Tier-1 modules & CEIG design</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              View Deployed Portfolio
            </Link>
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Consult With Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
