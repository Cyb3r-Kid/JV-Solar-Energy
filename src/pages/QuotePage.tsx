import React from 'react';
import { useLocation } from 'react-router-dom';
import { MultiStepQuoteForm } from '../components/forms/MultiStepQuoteForm';
import { Phone, Mail, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const QuotePage: React.FC = () => {
  const location = useLocation();
  const stateData = location.state as {
    projectType?: any;
    capacity?: string;
    monthlyBill?: string;
    notes?: string;
  } | null;

  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section */}
      <PageHero
        image="/assets/images/solar-closeup.jpg"
        imagePosition="object-[85%_center]"
        eyebrow="DIRECT ENGINEERING DESK &bull; PROPOSAL REQUEST"
        title="Request an Engineering Consultation & Quote."
        description="Submit your facility parameters to receive an indicative project feasibility analysis, capacity sizing, and turnkey pricing proposal."
        breadcrumbCurrent="Get a Quote"
      />

      {/* 2. Main Form & Sidebar Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Column (8 cols) */}
          <div className="lg:col-span-8">
            <MultiStepQuoteForm
              initialData={{
                projectType: stateData?.projectType || 'Industrial Solar EPC',
                requiredCapacity: stateData?.capacity || '',
                currentBillRange: stateData?.monthlyBill || '',
                additionalRequirements: stateData?.notes || ''
              }}
            />
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border transition-colors bg-white dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-solar-emerald font-semibold flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Next Steps in Evaluation</span>
              </h3>

              <div className="space-y-3.5 text-xs text-solar-secondaryText">
                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-solar-sage text-solar-forest font-mono font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5 border border-solar-borderLight dark:border-solar-borderDark">
                    1
                  </span>
                  <span><strong>Site Evaluation:</strong> An experienced solar engineer reviews your geographical solar irradiance and roof/ground suitability.</span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-solar-sage text-solar-forest font-mono font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5 border border-solar-borderLight dark:border-solar-borderDark">
                    2
                  </span>
                  <span><strong>Preliminary Sizing & Yield:</strong> We calculate specific solar generation yield based on local insolation benchmarks.</span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-solar-sage text-solar-forest font-mono font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5 border border-solar-borderLight dark:border-solar-borderDark">
                    3
                  </span>
                  <span><strong>Turnkey Proposal:</strong> A transparent techno-commercial proposal detailing Tier-1 BOM, SLD diagrams, and milestones.</span>
                </div>
              </div>
            </div>

            {/* Direct Assistance Box */}
            <div className="p-6 rounded-2xl border transition-colors bg-white dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-solar-secondaryText block font-semibold">
                Direct Engineering Telephone
              </span>

              <div className="space-y-2.5">
                <a
                  href={`tel:${COMPANY_CONFIG.phonePrimary}`}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-solar-ivory dark:bg-solar-deepForest hover:bg-solar-sage/30 transition-colors text-solar-darkText dark:text-solar-ivory"
                >
                  <Phone className="w-4 h-4 text-solar-emerald flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-solar-secondaryText block uppercase font-mono font-semibold">Primary Desk</span>
                    <span className="text-xs font-mono font-semibold">{COMPANY_CONFIG.phonePrimary}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-solar-ivory dark:bg-solar-deepForest hover:bg-solar-sage/30 transition-colors text-solar-darkText dark:text-solar-ivory"
                >
                  <Mail className="w-4 h-4 text-solar-emerald flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-solar-secondaryText block uppercase font-mono font-semibold">Official Email</span>
                    <span className="text-xs font-mono">{COMPANY_CONFIG.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hello%20JV%20Solar%20Energy,%20I%20would%20like%20to%20discuss%20a%20solar%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full p-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
