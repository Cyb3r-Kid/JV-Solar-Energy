import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export const LeadBannerSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0C261D] text-white relative overflow-hidden">
      {/* Background solar landscape photography with rich dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-solar-farm.jpg"
          alt="Clean solar power plant landscape"
          className="w-full h-full object-cover opacity-15"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(12, 38, 29, 0.97) 0%, rgba(12, 38, 29, 0.92) 50%, rgba(12, 38, 29, 0.98) 100%)'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#173D2B] border border-[#DCE8D9]/20 text-solar-gold text-xs font-mono uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
          <span>Clean Energy Partnership</span>
        </div>

        <h2 className="section-headline font-bold text-white drop-shadow-sm">
          Ready to Explore Solar Energy for Your Business?
        </h2>

        <p className="text-base sm:text-lg text-[#E1EAE3] leading-relaxed font-sans max-w-2xl mx-auto font-normal">
          Speak with our team about your requirements and take the next step towards a cleaner, more resilient energy solution.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${COMPANY_CONFIG.phonePrimary}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white transition-colors"
          >
            <Phone className="w-4 h-4 text-solar-gold" />
            <span>Call: {COMPANY_CONFIG.phonePrimary}</span>
          </a>
        </div>

        <div className="pt-6 border-t border-[#DCE8D9]/15 text-xs text-[#E1EAE3]/80 font-mono">
          JV Solar Energy Pvt Ltd &bull; Chennai HQ &bull; Direct Engineering Consultation
        </div>
      </div>
    </section>
  );
};
