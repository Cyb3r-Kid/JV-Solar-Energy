import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageSquare, 
  Clock 
} from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_CONFIG } from '../../config/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C261D] text-[#E1EAE3] pt-16 pb-12 border-t border-[#DCE8D9]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DCE8D9]/15">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-solar-forest flex items-center justify-center text-white shadow-sm">
                <svg className="w-6 h-6 text-solar-gold" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="3" strokeDasharray="4 6"/>
                  <path d="M50 26 L72 38 L72 62 L50 74 L28 62 L28 38 Z" fill="#087F5B" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold font-serif tracking-tight text-white block">
                  JV SOLAR ENERGY
                </span>
                <span className="text-[10px] font-mono tracking-widest text-solar-gold uppercase block font-semibold">
                  PVT LTD &bull; SOLAR EPC EXCELLENCE
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#E1EAE3] leading-relaxed max-w-sm font-normal">
              Specialized Solar EPC firm delivering turnkey rooftop photovoltaic power plants, industrial captive generation, utility ground-mounted plants, and solar pumping installations across Chennai, Tamil Nadu, and South India.
            </p>

            <div className="pt-2 flex items-center space-x-2.5 text-xs flex-wrap gap-y-2">
              <span className="bg-[#173D2B] px-3 py-1 rounded-md text-white font-mono text-[11px] font-medium border border-[#DCE8D9]/20">
                9+ Yrs Experience
              </span>
              <span className="bg-[#173D2B] px-3 py-1 rounded-md text-white font-mono text-[11px] font-medium border border-[#DCE8D9]/20">
                60+ MWp Deployed
              </span>
              <span className="bg-[#173D2B] px-3 py-1 rounded-md text-white font-mono text-[11px] font-medium border border-[#DCE8D9]/20">
                30+ Sites
              </span>
            </div>
            <p className="text-[11px] text-[#E1EAE3]/80 italic">
              *Figures reflect company-reported operational records across project sites.
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-solar-gold font-bold mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
              <span>Navigation</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">About Us</Link></li>
              <li><Link to="/solutions" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Solutions</Link></li>
              <li><Link to="/projects" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Projects</Link></li>
              <li><Link to="/process" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Workflow</Link></li>
              <li><Link to="/quote" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Get a Quote</Link></li>
              <li><Link to="/contact" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Solar Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-solar-gold font-bold mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
              <span>Our Solutions</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/solutions#commercial-rooftop" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Commercial Solar Rooftop
                </Link>
              </li>
              <li>
                <Link to="/solutions#industrial-solar" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Industrial Solar EPC
                </Link>
              </li>
              <li>
                <Link to="/solutions#ground-mounted" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Ground-Mounted Solar Plants
                </Link>
              </li>
              <li>
                <Link to="/solutions#residential-rooftop" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Residential Rooftop Systems
                </Link>
              </li>
              <li>
                <Link to="/solutions#solar-water-pump" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Solar Water Pumping
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Captive & Group-Captive Power
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#E1EAE3] hover:text-solar-gold transition-colors block font-medium">
                  Solar Project O&M Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-solar-gold font-bold mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-solar-gold" />
              <span>Contact Information</span>
            </div>

            <div className="space-y-3.5 text-xs leading-relaxed text-[#E1EAE3]">
              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded bg-[#173D2B] text-solar-emerald mt-0.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-white font-medium block">Corporate Office:</span>
                  <span className="text-[#E1EAE3]">
                    {COMPANY_CONFIG.address.line1}, {COMPANY_CONFIG.address.street}, {COMPANY_CONFIG.address.area}, {COMPANY_CONFIG.address.city} - {COMPANY_CONFIG.address.pincode}, {COMPANY_CONFIG.address.state}.
                  </span>
                  <span className="block text-[11px] text-[#E1EAE3]/80 mt-1">
                    ({COMPANY_CONFIG.address.landmarkNote})
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded bg-[#173D2B] text-solar-emerald flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <a href={`tel:${COMPANY_CONFIG.phonePrimary}`} className="text-white hover:text-solar-gold transition-colors font-mono font-medium">
                    {COMPANY_CONFIG.phonePrimary}
                  </a>
                  <span className="mx-2 text-[#E1EAE3]/40">|</span>
                  <a href={`tel:${COMPANY_CONFIG.phoneSecondary}`} className="text-[#E1EAE3] hover:text-solar-gold transition-colors font-mono font-medium">
                    {COMPANY_CONFIG.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded bg-[#173D2B] text-solar-emerald flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-white hover:text-solar-gold transition-colors font-mono font-medium">
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-1.5 rounded bg-[#173D2B] text-solar-emerald flex-shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#E1EAE3] font-medium">{COMPANY_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E1EAE3] gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved. Engineering & Turnkey Solar EPC.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-[#E1EAE3] hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy & Disclaimers
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#E1EAE3] hover:text-solar-gold transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Action */}
      <a
        href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hello%20JV%20Solar%20Energy,%20I%20would%20like%20to%20discuss%20a%20solar%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 flex items-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-full shadow-lg transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>
    </footer>
  );
};
