import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[640px] sm:min-h-[680px] lg:min-h-[740px] flex items-center overflow-hidden bg-[#0C261D] text-white">
      {/* High-Resolution Cinematic Solar Farm Landscape Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-solar-farm.jpg"
          alt="Aerial view of utility scale solar power plant nestled in green rolling hills"
          className="w-full h-full object-cover object-center"
        />
        {/* Directional Dark Forest-Green Overlay: High contrast on the left content block, revealing rolling hills on the right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(12, 38, 29, 0.96) 0%, rgba(12, 38, 29, 0.88) 46%, rgba(12, 38, 29, 0.40) 75%, rgba(12, 38, 29, 0.12) 100%)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(12, 38, 29, 0.75) 0%, rgba(12, 38, 29, 0.35) 45%, rgba(12, 38, 29, 0.90) 100%)'
          }}
        />
      </div>

      {/* Hero Content Container - Strictly Left-Aligned with Controlled Text Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Text */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-gold font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-solar-gold" />
            <span>RENEWABLE ENERGY &bull; SOLAR EPC</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline font-bold text-white mb-6 drop-shadow-sm">
            Powering a Brighter Future Through Clean Energy.
          </h1>

          {/* Supporting Text — Soft Sage #E1EAE3 with 100% opacity for optimal legibility */}
          <p className="text-base sm:text-lg lg:text-xl text-[#E1EAE3] leading-relaxed font-sans mb-10 max-w-xl font-normal">
            Delivering thoughtfully engineered solar energy solutions that help businesses and communities move towards a cleaner, more sustainable future.
          </p>

          {/* CTAs: Emerald Primary & Understated Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-lg text-xs font-semibold uppercase tracking-wider bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg text-xs font-semibold uppercase tracking-wider bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white transition-colors"
            >
              <span>Explore Solutions</span>
            </Link>
          </div>
        </div>

        {/* Corporate Trust Strip */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#E1EAE3]">
          <div>
            <span className="block font-mono uppercase text-solar-gold tracking-wider text-[11px] mb-0.5 font-semibold">Specialization</span>
            <span className="text-white font-medium">Turnkey Solar EPC & Engineering</span>
          </div>
          <div>
            <span className="block font-mono uppercase text-solar-gold tracking-wider text-[11px] mb-0.5 font-semibold">Track Record</span>
            <span className="text-white font-medium">9+ Years &bull; 60+ MWp Deployed</span>
          </div>
          <div>
            <span className="block font-mono uppercase text-solar-gold tracking-wider text-[11px] mb-0.5 font-semibold">Regional Reach</span>
            <span className="text-white font-medium">Chennai, Tamil Nadu & South India</span>
          </div>
          <div>
            <span className="block font-mono uppercase text-solar-gold tracking-wider text-[11px] mb-0.5 font-semibold">Safety & Standards</span>
            <span className="text-white font-medium">CEIG Safety & DISCOM Compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
