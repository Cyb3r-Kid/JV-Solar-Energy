import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface PageHeroProps {
  image: string;
  imagePosition?: string;
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbCurrent: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  image,
  imagePosition = 'object-center',
  eyebrow = 'JV SOLAR ENERGY &bull; EPC SOLUTIONS',
  title,
  description,
  breadcrumbCurrent,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}) => {
  return (
    <section className="relative min-h-[380px] sm:min-h-[430px] lg:min-h-[460px] flex items-center overflow-hidden bg-[#0C261D] text-white">
      {/* Background Image with tailored composition position */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${imagePosition} transition-transform duration-1000 ease-out`}
        />
        {/* Directional Dark Forest Overlay: High contrast on text side (left), revealing the photo subject on the right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(12, 38, 29, 0.97) 0%, rgba(12, 38, 29, 0.91) 48%, rgba(12, 38, 29, 0.45) 75%, rgba(12, 38, 29, 0.14) 100%)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(12, 38, 29, 0.70) 0%, transparent 45%, rgba(12, 38, 29, 0.85) 100%)'
          }}
        />
      </div>

      {/* Hero Content Container - Strictly Left-Aligned with Controlled Reading Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#E1EAE3] mb-4" aria-label="Breadcrumb">
            <Link to="/" className="text-[#E1EAE3] hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-solar-gold" />
            <span className="text-solar-gold font-medium">{breadcrumbCurrent}</span>
          </nav>

          {/* Eyebrow Label */}
          {eyebrow && (
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-gold font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-solar-gold" />
              <span dangerouslySetInnerHTML={{ __html: eyebrow }} />
            </div>
          )}

          {/* Heading using Playfair Display editorial serif with responsive clamp */}
          <h1 className="page-hero-headline font-bold text-white mb-4 drop-shadow-sm">
            {title}
          </h1>

          {/* Supporting Description constrained to 580px for optimal readability */}
          <p className="text-base sm:text-lg text-[#E1EAE3] leading-relaxed font-sans max-w-xl mb-8 font-normal">
            {description}
          </p>

          {/* Actions: Primary & Optional Secondary */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center gap-4">
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white transition-colors"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
