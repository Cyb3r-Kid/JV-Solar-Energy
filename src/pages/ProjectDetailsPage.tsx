import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  AlertCircle,
  Cpu
} from 'lucide-react';
import { PROJECTS_CONFIG, COMPANY_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_CONFIG.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-solar-ivory dark:bg-solar-deepForest min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-solar-darkText dark:text-white mb-2">Project Dossier Not Found</h2>
        <p className="text-sm text-solar-secondaryText mb-6">The requested project entry could not be located in our portfolio directory.</p>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-solar-emerald text-white font-semibold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects Directory</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section */}
      <PageHero
        image={project.image}
        imagePosition="object-[80%_center]"
        eyebrow={`PORTFOLIO DOSSIER &bull; ${project.category.toUpperCase()}`}
        title={project.name}
        description={`Commissioned clean energy infrastructure delivering ${project.capacity} capacity in ${project.location}.`}
        breadcrumbCurrent={project.name}
        ctaText="Build a Similar Project"
        ctaLink="/quote"
      />

      {/* 2. Main Dossier Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-solar-borderLight dark:border-solar-borderDark shadow-soft bg-white dark:bg-solar-deepForest relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
              {project.isIllustrativeVisual && (
                <div className="absolute bottom-4 left-4 text-[11px] text-white/90 font-mono bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  *Illustrative solar power plant visual representation
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-solar-darkText dark:text-white mb-3">
                Project Overview & Execution Context
              </h3>
              <p className="text-sm sm:text-base text-solar-secondaryText leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest space-y-2.5 shadow-soft">
              <h4 className="text-xs font-mono uppercase tracking-wider text-solar-emerald font-semibold flex items-center space-x-2">
                <Cpu className="w-4 h-4" />
                <span>Turnkey Scope of Engineering Works</span>
              </h4>
              <p className="text-sm text-solar-darkText dark:text-solar-ivory font-medium leading-relaxed">
                {project.scope}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-solar-secondaryText mb-3 font-semibold">
                Technical Highlights & Design Adherence
              </h4>
              <div className="space-y-2.5">
                {project.technicalHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest text-xs sm:text-sm text-solar-darkText dark:text-solar-ivory shadow-soft">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Right Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border transition-colors bg-white dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold border-b border-solar-borderLight dark:border-solar-borderDark pb-3">
                Engineering Fact Sheet
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-solar-secondaryText block text-[11px] uppercase font-mono font-medium">Installed Capacity</span>
                  <span className="text-2xl font-bold font-serif text-solar-forest dark:text-solar-gold">{project.capacity}</span>
                </div>

                <div>
                  <span className="text-solar-secondaryText block text-[11px] uppercase font-mono font-medium">Location</span>
                  <span className="text-solar-darkText dark:text-white font-medium">{project.location}</span>
                </div>

                <div>
                  <span className="text-solar-secondaryText block text-[11px] uppercase font-mono font-medium">Category</span>
                  <span className="text-solar-emerald font-medium">{project.category}</span>
                </div>

                <div>
                  <span className="text-solar-secondaryText block text-[11px] uppercase font-mono font-medium">Client Reference</span>
                  <span className="text-solar-darkText dark:text-white font-medium">{project.client}</span>
                </div>

                <div>
                  <span className="text-solar-secondaryText block text-[11px] uppercase font-mono font-medium">Grid Interface</span>
                  <span className="text-solar-darkText dark:text-white font-medium">HT Evacuation / CEIG Synchronized</span>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-4 border-t border-solar-borderLight dark:border-solar-borderDark space-y-3">
                <Link
                  to="/quote"
                  state={{
                    projectType: project.category,
                    requiredCapacity: project.capacity,
                    notes: `Inquiry based on project reference: ${project.name}`
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold px-5 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Build a Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY_CONFIG.phonePrimary}`}
                  className="w-full flex items-center justify-center space-x-2 border border-solar-borderLight dark:border-solar-borderDark bg-solar-ivory dark:bg-solar-deepForest hover:bg-solar-sage/40 text-solar-darkText dark:text-solar-ivory font-medium px-5 py-2.5 rounded-lg text-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-solar-emerald" />
                  <span>Call: {COMPANY_CONFIG.phonePrimary}</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-solar-sage/20 dark:bg-solar-forest/30 text-xs text-solar-secondaryText leading-relaxed flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-solar-emerald flex-shrink-0 mt-0.5" />
              <span>
                Project entry compiled from verified JV Solar Energy operational files. All commercial arrays are engineered to site-specific civil and electrical criteria.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
