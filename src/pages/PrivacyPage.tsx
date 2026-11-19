import React from 'react';
import { AlertCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section */}
      <PageHero
        image="/assets/images/residential-rooftop.jpg"
        imagePosition="object-[center_40%]"
        eyebrow="LEGAL &bull; DATA PRIVACY &bull; TECHNICAL DISCLOSURES"
        title="Privacy Policy & Engineering Disclaimers."
        description="Our commercial confidentiality standards, operational disclosures, and preliminary estimation guidelines."
        breadcrumbCurrent="Privacy Policy"
      />

      {/* 2. Policy Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
        {/* Section 1 */}
        <section className="space-y-4 text-xs sm:text-sm text-solar-secondaryText leading-relaxed">
          <h2 className="text-xl font-bold font-serif text-solar-darkText dark:text-white">
            1. Information Collection and Commercial Confidentiality
          </h2>
          <p>
            JV Solar Energy Pvt Ltd collects prospective customer information (including full name, business identity, telephone number, email address, site location, monthly electricity expenditure, and roof parameters) exclusively for evaluating solar feasibility, preparing techno-commercial engineering quotes, and establishing contact regarding authorized solar projects.
          </p>
          <p>
            We do not sell, rent, or trade your contact or technical data to third-party telemarketing or data brokerage services. All shared utility bills and architectural drawings remain confidential and are accessed strictly by our engineering and dispatch personnel.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-xl border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest space-y-3 text-xs sm:text-sm text-solar-secondaryText leading-relaxed shadow-soft">
          <div className="flex items-center space-x-2 text-solar-forest dark:text-solar-gold font-semibold font-serif text-base">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-solar-emerald" />
            <span>2. Technical Estimation & Solar Generation Disclaimer</span>
          </div>
          <p>
            The calculations provided by our Interactive Solar System Estimator or preliminary feasibility estimates represent indicative mathematical models based on general solar irradiance benchmarks (~4.0 to 4.4 kWh/kWp/day in Tamil Nadu and South India).
          </p>
          <p>
            Actual photovoltaic electricity production, generation yields, and cost savings depend entirely on certified physical site audits, rooftop angle/orientation, local microclimate dust deposition, shadow profiles from surrounding structures or vegetation, module degradation curves, and state electricity distribution company (DISCOM) sanctioned load parameters.
          </p>
          <p className="text-solar-darkText dark:text-white font-medium">
            No guaranteed minimum generation, financial return, or fixed payback schedule is implied without a signed, site-specific EPC contract detailing formal performance ratio (PR) testing procedures.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-xs sm:text-sm text-solar-secondaryText leading-relaxed">
          <h2 className="text-xl font-bold font-serif text-solar-darkText dark:text-white">
            3. Portfolio Designation & Operational Claims
          </h2>
          <p>
            All portfolio entries (including reference projects such as TI Cycle India, TVS Brake India, CMC Vellore, Amway, Aruppukottai, Karur, Dindigul, and Hospet) and company statistics (9+ years experience, 60+ MWp deployed, 30+ project sites) reflect historical company-reported project records and cumulative installations.
          </p>
          <p>
            Where photographic documentation is restricted due to industrial plant security guidelines, illustrative commercial solar photography is deployed and transparently marked with explanatory notices.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-xs sm:text-sm text-solar-secondaryText leading-relaxed border-t border-solar-borderLight dark:border-solar-borderDark pt-8">
          <h2 className="text-xl font-bold font-serif text-solar-darkText dark:text-white">
            4. Inquiries & Data Queries
          </h2>
          <p>
            For any queries regarding this policy, data modifications, or site survey requests, please address correspondence to:
          </p>
          <div className="p-4 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-white dark:bg-solar-forest font-mono text-xs text-solar-darkText dark:text-white leading-relaxed">
            JV Solar Energy Pvt Ltd<br />
            No. 1/149, Ground Floor, Pazhandi Amman Kovil Street, Thalambur Road, Navalur, Chennai - 600130, Tamil Nadu, India.<br />
            Email: {COMPANY_CONFIG.email} | Phone: {COMPANY_CONFIG.phonePrimary}
          </div>
        </section>
      </section>
    </div>
  );
};
