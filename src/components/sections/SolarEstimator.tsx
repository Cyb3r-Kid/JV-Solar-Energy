import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Leaf, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EstimatorProps {
  onApplyToQuote?: (data: {
    projectType: string;
    capacity: string;
    monthlyBill: string;
    notes: string;
  }) => void;
}

export const SolarEstimator: React.FC<EstimatorProps> = ({ onApplyToQuote }) => {
  const navigate = useNavigate();

  // Inputs
  const [projectType, setProjectType] = useState<'Commercial' | 'Industrial' | 'Residential' | 'Ground Mounted' | 'Solar Water Pump'>('Industrial');
  const [monthlyBill, setMonthlyBill] = useState<number>(75000);
  const [areaSqFt, setAreaSqFt] = useState<number>(6000);
  const [customTariff, setCustomTariff] = useState<number>(8.5); // ₹ per kWh
  const [activeTab, setActiveTab] = useState<'byBill' | 'byArea'>('byBill');

  // Benchmark assumptions (Tamil Nadu specific solar insolation ~4.2 kWh/kWp/day)
  const benchmarks = useMemo(() => {
    switch (projectType) {
      case 'Industrial':
        return { tariff: 8.8, sqFtPerKW: 95, dailyYieldPerKW: 4.2 };
      case 'Commercial':
        return { tariff: 9.5, sqFtPerKW: 95, dailyYieldPerKW: 4.1 };
      case 'Residential':
        return { tariff: 6.8, sqFtPerKW: 100, dailyYieldPerKW: 4.0 };
      case 'Ground Mounted':
        return { tariff: 4.5, sqFtPerKW: 85, dailyYieldPerKW: 4.4 };
      case 'Solar Water Pump':
        return { tariff: 7.0, sqFtPerKW: 90, dailyYieldPerKW: 4.2 };
    }
  }, [projectType]);

  const effectiveTariff = customTariff || benchmarks.tariff;

  // Calculations
  const calculatedCapacityKW = useMemo(() => {
    if (activeTab === 'byBill') {
      const monthlyKwh = monthlyBill / effectiveTariff;
      const dailyKwh = monthlyKwh / 30;
      const kw = dailyKwh / benchmarks.dailyYieldPerKW;
      return Math.max(3, Math.round(kw));
    } else {
      const kw = areaSqFt / benchmarks.sqFtPerKW;
      return Math.max(3, Math.round(kw));
    }
  }, [activeTab, monthlyBill, areaSqFt, effectiveTariff, benchmarks]);

  const annualGenerationKWh = useMemo(() => {
    return Math.round(calculatedCapacityKW * benchmarks.dailyYieldPerKW * 365);
  }, [calculatedCapacityKW, benchmarks]);

  const monthlyGenerationKWh = useMemo(() => {
    return Math.round(annualGenerationKWh / 12);
  }, [annualGenerationKWh]);

  const estimatedAnnualSavings = useMemo(() => {
    return Math.round(annualGenerationKWh * effectiveTariff);
  }, [annualGenerationKWh, effectiveTariff]);

  const co2AvoidedTons = useMemo(() => {
    return (annualGenerationKWh * 0.82 / 1000).toFixed(1);
  }, [annualGenerationKWh]);

  const equivalentTrees = useMemo(() => {
    return Math.round((parseFloat(co2AvoidedTons) * 1000) / 22);
  }, [co2AvoidedTons]);

  const handleProceedToConsultation = () => {
    const formattedData = {
      projectType: projectType === 'Residential' ? 'Residential Rooftop' 
                 : projectType === 'Commercial' ? 'Commercial Solar'
                 : projectType === 'Industrial' ? 'Industrial Solar EPC'
                 : projectType === 'Ground Mounted' ? 'Ground Mounted Plant'
                 : 'Solar Water Pump',
      capacity: `${calculatedCapacityKW} KWp (Indicative)`,
      monthlyBill: `₹${monthlyBill.toLocaleString('en-IN')}`,
      notes: `Estimator Sizing: ${activeTab === 'byBill' ? `Monthly bill of ₹${monthlyBill}` : `Area of ${areaSqFt} sq.ft`}. Indicative annual generation: ${annualGenerationKWh.toLocaleString()} kWh.`
    };

    if (onApplyToQuote) {
      onApplyToQuote(formattedData);
    } else {
      navigate('/quote', { state: formattedData });
    }
  };

  return (
    <div className="w-full rounded-2xl border transition-colors p-6 sm:p-10 md:p-12 shadow-soft bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-solar-sage text-solar-forest text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
          <Calculator className="w-3.5 h-3.5 text-solar-emerald" />
          <span>Interactive Solar Project Sizing</span>
        </div>
        <h3 className="section-headline font-bold text-solar-darkText dark:text-white">
          Estimate Solar Generation & Savings.
        </h3>
        <p className="text-sm sm:text-base text-solar-secondaryText mt-2 leading-relaxed">
          Model indicative plant capacity based on your monthly energy expenditure or available roof footprint. Powered by South Indian solar irradiance benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Facility Type */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-3 font-semibold">
              1. Facility / Application Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {(['Industrial', 'Commercial', 'Residential', 'Ground Mounted', 'Solar Water Pump'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all text-left border ${
                    projectType === type
                      ? 'bg-solar-forest text-white border-solar-forest dark:bg-solar-emerald dark:border-solar-emerald shadow-sm'
                      : 'bg-solar-ivory dark:bg-solar-forest/30 text-solar-darkText dark:text-solar-ivory border-solar-borderLight dark:border-solar-borderDark hover:border-solar-emerald'
                  }`}
                >
                  <span className="truncate block">{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sizing Method Switch */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase font-mono tracking-wider text-solar-secondaryText font-semibold">
                2. Sizing Basis
              </label>
              <div className="inline-flex rounded-lg bg-solar-sage/60 dark:bg-solar-forest/50 p-1 border border-solar-borderLight dark:border-solar-borderDark text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('byBill')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'byBill'
                      ? 'bg-white dark:bg-solar-deepForest text-solar-forest dark:text-white shadow-sm'
                      : 'text-solar-secondaryText'
                  }`}
                >
                  By Monthly Bill (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('byArea')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'byArea'
                      ? 'bg-white dark:bg-solar-deepForest text-solar-forest dark:text-white shadow-sm'
                      : 'text-solar-secondaryText'
                  }`}
                >
                  By Available Area (Sq.Ft)
                </button>
              </div>
            </div>

            {/* Slider */}
            {activeTab === 'byBill' ? (
              <div className="bg-solar-ivory dark:bg-solar-forest/20 border border-solar-borderLight dark:border-solar-borderDark rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-solar-secondaryText font-medium">Monthly Electricity Bill</span>
                  <span className="text-2xl font-bold font-serif text-solar-forest dark:text-solar-gold">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full accent-solar-emerald cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-solar-secondaryText font-mono">
                  <span>₹5,000</span>
                  <span>₹2,50,000</span>
                  <span>₹10,00,000+</span>
                </div>
              </div>
            ) : (
              <div className="bg-solar-ivory dark:bg-solar-forest/20 border border-solar-borderLight dark:border-solar-borderDark rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-solar-secondaryText font-medium">Available Shade-Free Rooftop Area</span>
                  <span className="text-2xl font-bold font-serif text-solar-forest dark:text-solar-gold">
                    {areaSqFt.toLocaleString('en-IN')} <span className="text-sm font-normal text-solar-secondaryText">sq.ft</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full accent-solar-emerald cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-solar-secondaryText font-mono">
                  <span>500 sq.ft</span>
                  <span>25,000 sq.ft</span>
                  <span>1,00,000+ sq.ft</span>
                </div>
              </div>
            )}
          </div>

          {/* Grid Tariff Tuning */}
          <div className="flex items-center justify-between text-xs p-3.5 rounded-lg border border-solar-borderLight dark:border-solar-borderDark bg-solar-sage/20 dark:bg-solar-forest/30">
            <span className="text-solar-secondaryText">
              Assumed Grid Tariff ({projectType}):
            </span>
            <div className="flex items-center space-x-2 font-mono">
              <span>₹</span>
              <input
                type="number"
                min="3"
                max="20"
                step="0.1"
                value={customTariff}
                onChange={(e) => setCustomTariff(Number(e.target.value))}
                className="w-16 bg-white dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded px-2 py-1 text-center font-mono focus:outline-none"
              />
              <span>/ kWh</span>
            </div>
          </div>
        </div>

        {/* Results Card Column (5 cols) */}
        <div className="lg:col-span-5 bg-solar-ivory dark:bg-solar-forest/40 border border-solar-borderLight dark:border-solar-borderDark rounded-xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-solar-borderLight dark:border-solar-borderDark pb-5">
            <span className="text-xs font-mono uppercase tracking-wider text-solar-secondaryText block mb-1 font-semibold">
              Recommended Plant Sizing
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl sm:text-5xl font-bold font-serif text-solar-forest dark:text-solar-gold">
                {calculatedCapacityKW >= 1000 
                  ? `${(calculatedCapacityKW / 1000).toFixed(2)} MWp`
                  : `${calculatedCapacityKW} KWp`}
              </span>
              <span className="text-xs text-solar-secondaryText">DC Capacity</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-white dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark">
              <span className="text-xs text-solar-secondaryText block mb-1">Annual Yield</span>
              <span className="text-lg font-bold font-serif text-solar-darkText dark:text-white block">
                {annualGenerationKWh.toLocaleString()} <span className="text-xs font-normal">units</span>
              </span>
              <span className="text-[11px] text-solar-secondaryText block mt-0.5">~{monthlyGenerationKWh.toLocaleString()} units/mo</span>
            </div>

            <div className="p-3.5 rounded-lg bg-white dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark">
              <span className="text-xs text-solar-secondaryText block mb-1">Est. Savings</span>
              <span className="text-lg font-bold font-serif text-solar-emerald dark:text-solar-gold block">
                ₹{estimatedAnnualSavings.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-solar-secondaryText block mt-0.5">per year (indicative)</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3.5 rounded-lg bg-solar-sage/40 dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark text-xs">
            <Leaf className="w-4 h-4 text-solar-emerald flex-shrink-0" />
            <span className="text-solar-darkText dark:text-solar-ivory">
              ~{co2AvoidedTons} Tons CO₂ avoided / year (equals ~{equivalentTrees.toLocaleString()} trees)
            </span>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            onClick={handleProceedToConsultation}
            className="w-full flex items-center justify-center space-x-2 bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold px-5 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Proceed to Formal Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-start space-x-2 text-[11px] text-solar-secondaryText leading-relaxed pt-2">
            <AlertCircle className="w-3.5 h-3.5 text-solar-emerald flex-shrink-0 mt-0.5" />
            <span>
              Preliminary estimation based on 4.2 peak sun hours/day. Physical site survey and DISCOM sanction required for contractual generation guarantees.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
