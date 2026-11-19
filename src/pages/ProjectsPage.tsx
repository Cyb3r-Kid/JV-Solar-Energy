import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Filter, AlertCircle } from 'lucide-react';
import { PROJECTS_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Industrial',
    'Ground Mounted',
    'Rooftop Solar'
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_CONFIG;
    return PROJECTS_CONFIG.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section with Negative Space Ground-Mount Layout */}
      <PageHero
        image="/assets/images/ground-mounted.jpg"
        imagePosition="object-[80%_center]"
        eyebrow="PORTFOLIO DOSSIER &bull; 60+ MWP DEPLOYED"
        title="Projects That Move Clean Energy Forward."
        description="Explore utility and commercial solar generation installations commissioned across Tamil Nadu, Karnataka, and regional industrial corridors."
        breadcrumbCurrent="Projects"
        ctaText="Get a Project Assessment"
        ctaLink="/quote"
        secondaryCtaText="Explore Technical Workflow"
        secondaryCtaLink="/process"
      />

      {/* 2. Filter & Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-solar-secondaryText mr-2 flex items-center font-semibold">
              <Filter className="w-3.5 h-3.5 mr-1 text-solar-emerald" />
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-solar-emerald text-white font-semibold shadow-sm'
                    : 'bg-white dark:bg-solar-forest text-solar-secondaryText hover:text-solar-darkText dark:hover:text-white border border-solar-borderLight dark:border-solar-borderDark'
                }`}
              >
                {cat === 'All' ? 'All Projects (8)' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-solar-secondaryText">
            Displaying <span className="font-semibold text-solar-darkText dark:text-white font-mono">{filteredProjects.length}</span> verified installations
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border transition-colors bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark overflow-hidden shadow-soft"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden bg-solar-sage/30 dark:bg-solar-forest">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 dark:bg-solar-deepForest/95 backdrop-blur-sm text-[11px] font-mono text-solar-forest dark:text-solar-gold uppercase tracking-wider font-semibold border border-solar-borderLight dark:border-solar-borderDark">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-md bg-solar-emerald text-white font-mono text-xs font-semibold shadow-sm">
                  {project.capacity}
                </div>

                {project.isIllustrativeVisual && (
                  <div className="absolute bottom-4 left-4 text-[10px] text-white/90 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    *Illustrative Visual
                  </div>
                )}
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-solar-secondaryText mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-solar-emerald flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-solar-darkText dark:text-white group-hover:text-solar-emerald transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#46534B] dark:text-[#E1EAE3] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-solar-borderLight dark:border-solar-borderDark flex items-center justify-between text-xs">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-1.5 font-semibold uppercase tracking-wider text-solar-emerald hover:text-solar-emeraldDark transition-colors group-hover:underline"
                  >
                    <span>Full Project Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="font-mono text-solar-secondaryText text-[11px]">
                    Client: {project.client.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Integrity Disclaimer */}
        <div className="mt-14 p-5 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-solar-sage/20 dark:bg-solar-forest/30 flex items-start space-x-3 text-xs text-solar-secondaryText leading-relaxed">
          <AlertCircle className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-solar-darkText dark:text-white block mb-0.5">Transparency & Portfolio Note:</strong>
            All listed projects reflect historical company-reported project records and turnkey EPC works undertaken by JV Solar Energy Pvt Ltd. Illustrative visuals are applied where client plant confidentiality requires non-disclosure of actual factory floor photos.
          </div>
        </div>
      </section>
    </div>
  );
};
