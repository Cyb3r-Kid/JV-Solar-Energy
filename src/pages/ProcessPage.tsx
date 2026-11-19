import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  HardHat, 
  FileCheck2, 
  ShieldCheck 
} from 'lucide-react';
import { PROCESS_STEPS } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const ProcessPage: React.FC = () => {
  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section with Engineered Workflow Composition */}
      <PageHero
        image="/assets/images/solar-engineering-team.jpg"
        imagePosition="object-right lg:object-[92%_center]"
        eyebrow="EXECUTION LIFECYCLE &bull; QUALITY ASSURANCE"
        title="From Planning to Power Generation."
        description="A systematic 6-phase engineering lifecycle ensuring structural integrity, CEIG statutory safety compliance, and maximum 25-year photovoltaic generation yields."
        breadcrumbCurrent="Workflow"
        ctaText="Start Project Feasibility Assessment"
        ctaLink="/quote"
        secondaryCtaText="Contact Engineering Desk"
        secondaryCtaLink="/contact"
      />

      {/* 2. Six Process Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="p-8 sm:p-10 rounded-2xl border transition-colors bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-solar-forest dark:text-solar-gold block mb-1">
                  Phase {step.number}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-solar-emerald font-semibold block">
                  {step.shortDesc}
                </span>
              </div>

              <div className="lg:col-span-9 space-y-4">
                <h3 className="text-2xl font-bold font-serif text-solar-darkText dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-solar-borderLight dark:border-solar-borderDark grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-solar-secondaryText">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-solar-emerald flex-shrink-0" />
                    <span>Formal Engineering Documentation Deliverable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-solar-emerald flex-shrink-0" />
                    <span>CEIG / DISCOM Statutory Standards Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Safety, Statutory & Procurement Standards (Sage / Ivory) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t transition-colors bg-solar-sage/30 dark:bg-solar-forest/30 border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest space-y-3 shadow-soft">
              <HardHat className="w-6 h-6 text-solar-emerald" />
              <h4 className="text-base font-bold font-serif text-solar-darkText dark:text-white">Zero Compromise Site Safety</h4>
              <p className="text-xs sm:text-sm text-solar-secondaryText leading-relaxed">
                Lifeline rope access, certified fall arrest harnesses, and comprehensive PPE mandatory on every industrial installation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest space-y-3 shadow-soft">
              <FileCheck2 className="w-6 h-6 text-solar-emerald" />
              <h4 className="text-base font-bold font-serif text-solar-darkText dark:text-white">DISCOM & CEIG Liaison</h4>
              <p className="text-xs sm:text-sm text-solar-secondaryText leading-relaxed">
                We manage all paperwork: CEIG drawings approval, safety inspections, transformer approvals, and bidirectional net-meter synchronization.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-deepForest space-y-3 shadow-soft">
              <ShieldCheck className="w-6 h-6 text-solar-emerald" />
              <h4 className="text-base font-bold font-serif text-solar-darkText dark:text-white">Audited Tier-1 Sourcing</h4>
              <p className="text-xs sm:text-sm text-solar-secondaryText leading-relaxed">
                Every solar module pallet undergoes serial-number flash test verification and electroluminescence defect checks prior to deployment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-lg bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Schedule Engineering Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
