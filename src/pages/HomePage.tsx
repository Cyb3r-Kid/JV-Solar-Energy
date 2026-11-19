import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutOverviewSection } from '../components/sections/AboutOverviewSection';
import { TrustSection } from '../components/sections/TrustSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { GlobeExperienceSection } from '../components/sections/GlobeExperienceSection';
import { SolarEstimator } from '../components/sections/SolarEstimator';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { ProcessTimelineSection } from '../components/sections/ProcessTimelineSection';
import { LeadBannerSection } from '../components/sections/LeadBannerSection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Cinematic Full-Width Hero Section */}
      <HeroSection />

      {/* 2. Section 1: Company Introduction (Soft White) */}
      <AboutOverviewSection />

      {/* 3. Section 2: Company Impact Statistics (Warm Ivory) */}
      <TrustSection />

      {/* 4. Section 3: Our Solutions (Soft White) */}
      <SolutionsSection />

      {/* 5. Section 4: Why Choose JV Solar (Light Beige) */}
      <WhyChooseUsSection />

      {/* 6. Section 5: Regional Grid Topology Visualization (Subtle Sage / Ivory) */}
      <GlobeExperienceSection />

      {/* 7. Interactive Solar Project Estimator (Soft White) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 transition-colors bg-solar-white dark:bg-solar-deepForest border-b border-solar-borderLight dark:border-solar-borderDark">
        <div className="max-w-7xl mx-auto">
          <SolarEstimator />
        </div>
      </section>

      {/* 8. Section 6: Featured Projects Magazine Gallery (Warm Ivory) */}
      <FeaturedProjectsSection />

      {/* 9. Section 7: Project Workflow 6-Step Timeline (Soft White) */}
      <ProcessTimelineSection />

      {/* 10. Section 8: Final CTA Banner (Deep Forest Green) */}
      <LeadBannerSection />
    </div>
  );
};
