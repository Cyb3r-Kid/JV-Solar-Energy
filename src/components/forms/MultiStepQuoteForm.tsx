import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { 
  User, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  IndianRupee, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  AlertTriangle, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  PhoneCall
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

const phoneRegex = /^(?:(?:\+|0{0,2})91[\s-]*)?[6789]\d{4}[\s-]?\d{5}$|^[6789]\d{9}$/;

export const QuoteFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100),
  companyName: z.string().max(120).optional(),
  phone: z.string().regex(phoneRegex, 'Enter a valid 10-digit Indian phone number'),
  email: z.string().email('Enter a valid email address'),
  projectType: z.enum([
    'Residential Rooftop',
    'Commercial Solar',
    'Industrial Solar EPC',
    'Ground Mounted Plant',
    'Solar Water Pump',
    'Other / Custom Project'
  ]),
  projectLocation: z.string().min(3, 'Please enter project location / city in India'),
  requiredCapacity: z.string().optional(),
  currentBillRange: z.string().optional(),
  additionalRequirements: z.string().max(2000).optional(),
  botTrap: z.string().max(0).optional()
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

interface MultiStepQuoteFormProps {
  initialData?: Partial<QuoteFormData>;
  onSuccessCallback?: (enquiryId: string) => void;
}

export const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({ 
  initialData, 
  onSuccessCallback 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ enquiryId: string; fullName: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    watch,
    formState: { errors }
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: initialData?.fullName || '',
      companyName: initialData?.companyName || '',
      phone: initialData?.phone || '',
      email: initialData?.email || '',
      projectType: initialData?.projectType || 'Industrial Solar EPC',
      projectLocation: initialData?.projectLocation || '',
      requiredCapacity: initialData?.requiredCapacity || '',
      currentBillRange: initialData?.currentBillRange || '',
      additionalRequirements: initialData?.additionalRequirements || '',
      botTrap: ''
    }
  });

  const selectedProjectType = watch('projectType');

  const validateStep = async (step: number): Promise<boolean> => {
    if (step === 1) {
      return await trigger(['fullName', 'phone', 'email']);
    }
    if (step === 2) {
      return await trigger(['projectType']);
    }
    if (step === 3) {
      return await trigger(['projectLocation']);
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again or call us.');
      }

      setSubmittedData({
        enquiryId: result.data.enquiryId,
        fullName: result.data.fullName
      });

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#087F5B', '#C9A96A', '#173D2B']
      });

      if (onSuccessCallback) {
        onSuccessCallback(result.data.enquiryId);
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Network error occurred while submitting enquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppEnquiry = () => {
    const values = getValues();
    const message = `Hello JV Solar Energy Team,
I would like to request an engineering consultation:
- Name: ${values.fullName || 'Client'}
- Company: ${values.companyName || 'N/A'}
- Solution: ${values.projectType}
- Location: ${values.projectLocation || 'Tamil Nadu'}
- Capacity: ${values.requiredCapacity || 'To be assessed'}
- Monthly Bill: ${values.currentBillRange || 'N/A'}
- Notes: ${values.additionalRequirements || 'Please share initial feasibility & quotation.'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleCopyId = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(submittedData.enquiryId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submittedData) {
    return (
      <div className="rounded-2xl border transition-colors p-8 sm:p-12 text-center bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark shadow-soft">
        <div className="w-14 h-14 rounded-full bg-solar-sage border border-solar-borderLight dark:border-solar-borderDark flex items-center justify-center mx-auto mb-6 text-solar-emerald">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-solar-emerald font-semibold">
          Consultation Request Confirmed
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-solar-darkText dark:text-white mt-2 mb-3">
          Thank You, {submittedData.fullName}.
        </h3>
        <p className="text-sm text-solar-secondaryText max-w-lg mx-auto mb-8 leading-relaxed">
          Your project consultation request has been logged into our engineering dispatch desk. An EPC project engineer will review your parameters and follow up within 24 business hours.
        </p>

        {/* Unique Tracking ID Card */}
        <div className="bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-xl p-5 max-w-md mx-auto mb-8 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[11px] uppercase font-mono tracking-wider text-solar-secondaryText block">
              Reference Tracking ID
            </span>
            <span className="text-xl font-mono font-bold text-solar-forest dark:text-solar-gold">
              {submittedData.enquiryId}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyId}
            className="p-2 rounded-lg border border-solar-borderLight dark:border-solar-borderDark hover:bg-solar-sage/30 transition-colors text-solar-darkText dark:text-solar-ivory"
            title="Copy Enquiry ID"
          >
            {copied ? <Check className="w-4 h-4 text-solar-emerald" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${COMPANY_CONFIG.phonePrimary}`}
            className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold px-5 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Directly</span>
          </a>
          <button
            type="button"
            onClick={handleWhatsAppEnquiry}
            className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold px-5 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Follow-up</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border transition-colors p-6 sm:p-10 shadow-soft bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark text-solar-darkText dark:text-solar-ivory">
      {/* Honeypot hidden input */}
      <input type="text" {...register('botTrap')} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Progress Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          {[
            { step: 1, label: 'Contact' },
            { step: 2, label: 'Solution' },
            { step: 3, label: 'Scope' },
            { step: 4, label: 'Confirm' }
          ].map((item, idx) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    currentStep === item.step
                      ? 'bg-solar-emerald text-white'
                      : currentStep > item.step
                      ? 'bg-solar-forest text-white'
                      : 'bg-solar-ivory dark:bg-solar-forest text-solar-secondaryText border border-solar-borderLight dark:border-solar-borderDark'
                  }`}
                >
                  {currentStep > item.step ? <Check className="w-3.5 h-3.5" /> : item.step}
                </div>
                <span className="text-[11px] font-medium text-solar-secondaryText mt-1.5 hidden sm:block">
                  {item.label}
                </span>
              </div>
              {idx < 3 && (
                <div
                  className={`flex-1 h-[1px] mx-3 transition-colors ${
                    currentStep > item.step ? 'bg-solar-emerald' : 'bg-solar-borderLight dark:border-solar-borderDark'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-start space-x-3">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* STEP 1: Customer Information */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div className="border-b border-solar-borderLight dark:border-solar-borderDark pb-3 mb-5">
              <h4 className="text-2xl font-serif font-bold text-solar-darkText dark:text-white">
                1. Contact Details
              </h4>
              <p className="text-xs text-solar-secondaryText mt-1">
                Tell us who to address the technical feasibility report and quotation to.
              </p>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#173D2B] dark:text-[#E1EAE3] mb-1.5 font-semibold">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-solar-emerald absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. S. Ramanathan"
                  {...register('fullName')}
                  className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                />
              </div>
              {errors.fullName && (
                <span className="text-xs text-red-500 mt-1 block">{errors.fullName.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#173D2B] dark:text-[#E1EAE3] mb-1.5 font-semibold">
                Company / Organization Name <span className="opacity-60">(Optional)</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-solar-emerald absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Apex Engineering Ltd"
                  {...register('companyName')}
                  className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#173D2B] dark:text-[#E1EAE3] mb-1.5 font-semibold">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-solar-emerald absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    placeholder="+91 98405 71770"
                    {...register('phone')}
                    className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                  />
                </div>
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#173D2B] dark:text-[#E1EAE3] mb-1.5 font-semibold">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-solar-emerald absolute left-3.5 top-3" />
                  <input
                    type="email"
                    placeholder="ramanathan@company.com"
                    {...register('email')}
                    className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Project Type Selection */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div className="border-b border-solar-borderLight dark:border-solar-borderDark pb-3 mb-5">
              <h4 className="text-2xl font-serif font-bold text-solar-darkText dark:text-white">
                2. Solar Solution Category
              </h4>
              <p className="text-xs text-solar-secondaryText mt-1">
                Select the project scale and application requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'Industrial Solar EPC', title: 'Industrial Solar EPC', desc: 'Factory, warehouse or manufacturing facility rooftop / captive plant.' },
                { id: 'Commercial Solar', title: 'Commercial Solar', desc: 'Offices, hospitals, colleges, IT parks & commercial buildings.' },
                { id: 'Ground Mounted Plant', title: 'Ground Mounted Plant', desc: 'Utility scale open access solar generation plants, 1 MW to 50+ MW.' },
                { id: 'Residential Rooftop', title: 'Residential Rooftop Solar', desc: 'Villas, independent bungalows, and residential complexes.' },
                { id: 'Solar Water Pump', title: 'Solar Water Pump System', desc: 'Agricultural borewell or openwell water pumping for farms.' },
                { id: 'Other / Custom Project', title: 'Custom EPC Scope', desc: 'Microgrids, hybrid solar setups, or special engineering scope.' }
              ].map((item) => (
                <label
                  key={item.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedProjectType === item.id
                      ? 'bg-solar-sage/40 dark:bg-solar-forest border-solar-emerald shadow-sm ring-1 ring-solar-emerald'
                      : 'bg-white dark:bg-solar-deepForest border-solar-borderLight dark:border-solar-borderDark hover:border-solar-emerald'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-semibold text-solar-darkText dark:text-white font-serif">{item.title}</div>
                      <div className="text-xs text-solar-secondaryText mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                    <input
                      type="radio"
                      value={item.id}
                      {...register('projectType')}
                      className="mt-1 accent-solar-emerald"
                    />
                  </div>
                </label>
              ))}
            </div>
            {errors.projectType && (
              <span className="text-xs text-red-500 mt-1 block">{errors.projectType.message}</span>
            )}
          </div>
        )}

        {/* STEP 3: Project Requirements */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-fade-in">
            <div className="border-b border-solar-borderLight dark:border-solar-borderDark pb-3 mb-5">
              <h4 className="text-2xl font-serif font-bold text-solar-darkText dark:text-white">
                3. Site & Technical Parameters
              </h4>
              <p className="text-xs text-solar-secondaryText mt-1">
                Provide site location and approximate energy metrics.
              </p>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                Project Site Location / City *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-solar-secondaryText absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Sriperumbudur, Chennai / Hosur / Coimbatore"
                  {...register('projectLocation')}
                  className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                />
              </div>
              {errors.projectLocation && (
                <span className="text-xs text-red-500 mt-1 block">{errors.projectLocation.message}</span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                  Target Capacity <span className="opacity-60">(Optional)</span>
                </label>
                <div className="relative">
                  <Zap className="w-4 h-4 text-solar-secondaryText absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. 100 KW / 1 MW / 500 KW"
                    {...register('requiredCapacity')}
                    className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                  Monthly Electricity Bill <span className="opacity-60">(Optional)</span>
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-solar-secondaryText absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. ₹75,000 / ₹4,00,000"
                    {...register('currentBillRange')}
                    className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg pl-10 pr-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                Additional Notes / Scope
              </label>
              <textarea
                rows={3}
                placeholder="Mention roof type (RCC, metal sheet), transformer sanctioned load, or preferred commissioning timeline..."
                {...register('additionalRequirements')}
                className="w-full bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-lg p-3 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald transition-colors"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Review and Confirmation */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div className="border-b border-solar-borderLight dark:border-solar-borderDark pb-3 mb-5">
              <h4 className="text-2xl font-serif font-bold text-solar-darkText dark:text-white">
                4. Review & Confirm
              </h4>
              <p className="text-xs text-solar-secondaryText mt-1">
                Please verify your details before submitting to the JV Solar Energy engineering desk.
              </p>
            </div>

            <div className="bg-solar-ivory dark:bg-solar-forest border border-solar-borderLight dark:border-solar-borderDark rounded-xl p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                <span className="text-solar-secondaryText">Customer Name:</span>
                <span className="font-semibold text-solar-darkText dark:text-white">{getValues('fullName')}</span>
              </div>
              {getValues('companyName') && (
                <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                  <span className="text-solar-secondaryText">Company:</span>
                  <span className="font-semibold text-solar-darkText dark:text-white">{getValues('companyName')}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                <span className="text-solar-secondaryText">Phone:</span>
                <span className="font-mono text-solar-emerald font-medium">{getValues('phone')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                <span className="text-solar-secondaryText">Email:</span>
                <span className="text-solar-darkText dark:text-white">{getValues('email')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                <span className="text-solar-secondaryText">Solution:</span>
                <span className="font-semibold text-solar-emerald">{getValues('projectType')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                <span className="text-solar-secondaryText">Location:</span>
                <span className="text-solar-darkText dark:text-white">{getValues('projectLocation')}</span>
              </div>
              {getValues('requiredCapacity') && (
                <div className="flex justify-between py-1 border-b border-solar-borderLight dark:border-solar-borderDark">
                  <span className="text-solar-secondaryText">Target Capacity:</span>
                  <span className="font-semibold text-solar-darkText dark:text-white">{getValues('requiredCapacity')}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-solar-secondaryText">
              By submitting, you request an initial technical feasibility evaluation by JV Solar Energy Pvt Ltd. Your information remains strictly confidential.
            </p>
          </div>
        )}

        {/* Stepper Navigation Buttons */}
        <div className="mt-8 pt-5 border-t border-solar-borderLight dark:border-solar-borderDark flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              disabled={isSubmitting}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-medium text-solar-secondaryText hover:text-solar-darkText dark:hover:text-white border border-solar-borderLight dark:border-solar-borderDark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-7 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-solar-emerald hover:bg-solar-emeraldDark text-white transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
