import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PROJECTS_CONFIG } from '../../config/company';

export const FeaturedProjectsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 440;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b transition-colors bg-solar-ivory dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Style Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-solar-emerald" />
              <span>Project Experience</span>
            </div>
            <h2 className="section-headline font-bold text-solar-darkText dark:text-white">
              Projects That Move Clean Energy Forward.
            </h2>
            <p className="text-sm sm:text-base text-[#46534B] dark:text-[#E1EAE3] mt-3">
              Review company-reported solar generation assets commissioned across Tamil Nadu, Karnataka, and regional industrial belts.
            </p>
          </div>

          {/* Understated Controls */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest text-solar-darkText dark:text-solar-ivory hover:border-solar-emerald disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest text-solar-darkText dark:text-solar-ivory hover:border-solar-emerald disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Magazine-style Horizontal Project Showcase */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex space-x-8 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS_CONFIG.map((project) => (
            <div
              key={project.id}
              className="w-[320px] sm:w-[420px] flex-shrink-0 snap-start group flex flex-col justify-between"
            >
              {/* Project Image Frame */}
              <div className="relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-solar-borderLight dark:border-solar-borderDark bg-solar-sage/40 dark:bg-solar-forest mb-5 shadow-soft">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-white/95 dark:bg-solar-deepForest/95 backdrop-blur-sm text-[11px] font-mono text-solar-forest dark:text-solar-gold uppercase tracking-wider font-semibold border border-solar-borderLight dark:border-solar-borderDark">
                    {project.category}
                  </span>
                </div>

                {/* Capacity Pill */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-3 py-1.5 rounded-md bg-solar-emerald text-white font-mono text-xs font-semibold shadow-sm">
                  <span>{project.capacity}</span>
                </div>

                {project.isIllustrativeVisual && (
                  <div className="absolute bottom-4 left-4 text-[10px] text-white/90 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    *Illustrative Solar Visual
                  </div>
                )}
              </div>

              {/* Editorial Metadata */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs text-solar-secondaryText">
                  <MapPin className="w-3.5 h-3.5 text-solar-emerald flex-shrink-0" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-solar-darkText dark:text-white group-hover:text-solar-emerald transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-solar-borderLight dark:border-solar-borderDark">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-solar-emerald hover:text-solar-emeraldDark transition-colors group-hover:underline"
                  >
                    <span>View Project Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] font-mono text-solar-secondaryText">
                    Client: {project.client.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-solar-borderLight dark:border-solar-borderDark flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-solar-secondaryText">
          <span>*Portfolio based on company-reported solar generation assets in South India.</span>
          <Link
            to="/projects"
            className="font-mono uppercase tracking-wider text-solar-emerald font-semibold hover:underline"
          >
            Explore Complete Project Directory &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
