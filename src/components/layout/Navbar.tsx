import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sun, 
  Moon,
  ChevronRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Workflow', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Corporate Bar — Always Solid, Crisp, High-Contrast */}
      <div className="hidden lg:block border-b transition-colors py-2 px-6 text-xs bg-[#F8F7F0] border-[#E5E8E2] text-[#46534B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <span className="font-semibold text-[#173D2B]">
              JV Solar Energy Pvt Ltd &bull; Solar EPC & Renewable Energy Engineering
            </span>
            <span className="text-[#C5CCC3]">|</span>
            <span className="text-[#46534B]">Chennai, Tamil Nadu</span>
            <span className="text-[#C5CCC3]">|</span>
            <span className="text-[#46534B]">9+ Years Experience &bull; 60+ MWp Deployed</span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_CONFIG.phonePrimary}`} 
              className="flex items-center space-x-1.5 text-[#173D2B] hover:text-[#087F5B] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#087F5B]" />
              <span className="font-mono">{COMPANY_CONFIG.phonePrimary}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_CONFIG.email}`} 
              className="flex items-center space-x-1.5 text-[#173D2B] hover:text-[#087F5B] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#087F5B]" />
              <span className="font-mono">{COMPANY_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Warm-White Sticky Navigation Bar — 100% SOLID BACKGROUND WITH VISIBLE FOREST-GREEN TEXT */}
      <header 
        className={`site-navbar transition-all duration-200 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo on the Left — Always Dark Forest Green on White */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#173D2B] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg className="w-6 h-6 text-[#C9A96A]" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="3" strokeDasharray="4 6"/>
                <path d="M50 26 L72 38 L72 62 L50 74 L28 62 L28 38 Z" fill="#087F5B" fillOpacity="0.8" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M50 26 L50 74 M28 38 L72 62 M28 62 L72 38" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
                <circle cx="50" cy="50" r="6" fill="#C9A96A"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold font-serif tracking-tight text-[#173D2B]">
                  JV SOLAR
                </span>
                <span className="text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded bg-[#DCE8D9] text-[#173D2B]">
                  ENERGY
                </span>
              </div>
              <div className="text-[10px] font-sans text-[#65736A] tracking-wide">
                EPC Solutions &bull; India
              </div>
            </div>
          </Link>

          {/* Centered Desktop Navigation Links — ALWAYS Visible Forest Green #173D2B */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#087F5B] font-bold bg-[#DCE8D9]/60'
                    : 'text-[#173D2B] font-medium hover:text-[#087F5B] hover:bg-[#F3F5F2]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTAs: Theme Toggle & Emerald Consultation Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#E5E8E2] text-[#173D2B] hover:bg-[#F3F5F2] transition-colors"
              title={`Switch to ${theme === 'natural' ? 'Dark Corporate' : 'Natural Warm'} theme`}
              aria-label="Toggle Theme"
            >
              {theme === 'natural' ? (
                <Moon className="w-4 h-4 text-[#65736A]" />
              ) : (
                <Sun className="w-4 h-4 text-[#E6B94F]" />
              )}
            </button>

            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#087F5B] hover:bg-[#06694b] text-white transition-all shadow-sm"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#E5E8E2] text-[#173D2B] bg-[#F8F7F0]"
              aria-label="Toggle Theme"
            >
              {theme === 'natural' ? <Moon className="w-4 h-4 text-[#65736A]" /> : <Sun className="w-4 h-4 text-[#E6B94F]" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-lg border border-[#E5E8E2] bg-[#F8F7F0] text-[#173D2B] hover:bg-white transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5 text-[#173D2B]" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN COMPLETELY OPAQUE MOBILE NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-y-auto ${
            theme === 'natural'
              ? 'bg-[#F8F7F0] text-[#202923]' 
              : 'bg-[#0C261D] text-[#F8F7F0]'
          }`}
          style={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar with Brand & Explicit Close Button */}
          <div className={`flex items-center justify-between px-6 py-5 border-b ${
            theme === 'natural' ? 'border-[#E5E8E2] bg-white' : 'border-[#1E4635] bg-[#12382A]'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-solar-forest flex items-center justify-center text-white">
                <svg className="w-5 h-5 text-solar-gold" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="3" strokeDasharray="4 6"/>
                  <path d="M50 26 L72 38 L72 62 L50 74 L28 62 L28 38 Z" fill="#087F5B" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-lg tracking-tight block leading-tight">
                  JV SOLAR ENERGY
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 block">
                  Corporate Portal
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-lg border transition-colors ${
                theme === 'natural' 
                  ? 'border-[#E5E8E2] bg-white text-[#202923] hover:bg-[#F3F5F2]' 
                  : 'border-[#1E4635] bg-[#173D2B] text-white hover:bg-[#0C261D]'
              }`}
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Spacious Touch-Friendly Navigation Links */}
          <div className="px-6 py-8 flex-1 flex flex-col justify-center space-y-2">
            <div className="text-[11px] uppercase font-mono tracking-widest opacity-50 mb-2 px-3">
              Navigation Menu
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl text-lg font-serif font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-solar-emerald text-white'
                    : theme === 'natural'
                    ? 'text-solar-darkText hover:bg-white'
                    : 'text-solar-ivory hover:bg-solar-darkGreen'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
            ))}
          </div>

          {/* Bottom Actions: Theme Switcher & Emerald Consultation CTA */}
          <div className={`p-6 border-t space-y-4 ${
            theme === 'natural' ? 'border-[#E5E8E2] bg-white' : 'border-[#1E4635] bg-[#12382A]'
          }`}>
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-mono uppercase tracking-wider opacity-60">
                Visual Experience
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                  theme === 'natural'
                    ? 'border-[#E5E8E2] bg-solar-ivory text-[#202923]'
                    : 'border-[#1E4635] bg-[#173D2B] text-solar-ivory'
                }`}
              >
                {theme === 'natural' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-solar-secondaryText" />
                    <span>Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-solar-gold" />
                    <span>Natural Warm</span>
                  </>
                )}
              </button>
            </div>

            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-xs bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_CONFIG.phonePrimary}`}
              className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-mono opacity-70 hover:opacity-100"
            >
              <Phone className="w-3.5 h-3.5 text-solar-emerald" />
              <span>Direct: {COMPANY_CONFIG.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
