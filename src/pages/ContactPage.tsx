import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { PageHero } from '../components/layout/PageHero';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: 'Other / Custom Project',
          projectLocation: 'Tamil Nadu / Online Inquiry',
          additionalRequirements: `Subject: ${formData.subject}\nMessage: ${formData.message}`
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transition-colors bg-solar-ivory dark:bg-solar-deepForest text-solar-darkText dark:text-solar-ivory min-h-screen">
      {/* 1. Image-Led Hero Section with Natural Sunlight Composition */}
      <PageHero
        image="/assets/images/hero-solar-farm.jpg"
        imagePosition="object-[center_35%]"
        eyebrow="COMMUNICATIONS DESK &bull; CHENNAI CORPORATE OFFICE"
        title="Let's Build a Brighter Future Together."
        description="Connect directly with our Chennai engineering headquarters to evaluate project feasibility, facility load analysis, and preliminary plant sizing."
        breadcrumbCurrent="Contact"
        ctaText="Request an Engineering Quote"
        ctaLink="/quote"
      />

      {/* 2. Contact Details & Inquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Map Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border transition-colors bg-white dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft space-y-6">
              <h3 className="text-xl font-bold font-serif text-solar-darkText dark:text-white border-b border-solar-borderLight dark:border-solar-borderDark pb-3">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-solar-emerald flex-shrink-0 mt-0.5" />
                  <div className="text-[#46534B] dark:text-[#E1EAE3] leading-relaxed">
                    <strong className="text-solar-darkText dark:text-white block font-medium">Registered Office:</strong>
                    {COMPANY_CONFIG.address.line1}, {COMPANY_CONFIG.address.street}, {COMPANY_CONFIG.address.area}, {COMPANY_CONFIG.address.city} - {COMPANY_CONFIG.address.pincode}, {COMPANY_CONFIG.address.state}.
                    <span className="block text-[11px] text-[#65736A] dark:text-[#E1EAE3]/70 mt-1 italic">
                      ({COMPANY_CONFIG.address.landmarkNote})
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-solar-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-solar-darkText dark:text-white block font-medium mb-0.5">Telephone / Mobile:</strong>
                    <a href={`tel:${COMPANY_CONFIG.phonePrimary}`} className="text-solar-emerald hover:underline block font-mono">
                      {COMPANY_CONFIG.phonePrimary} (Primary)
                    </a>
                    <a href={`tel:${COMPANY_CONFIG.phoneSecondary}`} className="text-[#46534B] dark:text-[#E1EAE3] hover:text-solar-emerald block font-mono mt-0.5">
                      {COMPANY_CONFIG.phoneSecondary} (Secondary)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-solar-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-solar-darkText dark:text-white block font-medium mb-0.5">Official Inquiries:</strong>
                    <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-solar-emerald hover:underline font-mono">
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-solar-emerald flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-solar-darkText dark:text-white block font-medium mb-0.5">Working Hours:</strong>
                    <span className="text-[#46534B] dark:text-[#E1EAE3]">{COMPANY_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hello%20JV%20Solar%20Energy,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3 px-4 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Engineering Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Location Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-solar-borderLight dark:border-solar-borderDark shadow-soft bg-white dark:bg-solar-forest">
              <div className="p-3 bg-solar-sage/30 dark:bg-solar-deepForest border-b border-solar-borderLight dark:border-solar-borderDark flex items-center justify-between text-xs text-solar-secondaryText">
                <span className="font-mono">Google Maps &bull; Navalur / Thalambur, Chennai</span>
                <span className="font-mono">PIN: 600130</span>
              </div>
              <iframe
                title="JV Solar Energy Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.764359423984!2d80.2173167!3d12.8458145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bb1b2e666a7%3A0xd64f1394f71a0701!2sNavalur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border transition-colors bg-white dark:bg-solar-forest border-solar-borderLight dark:border-solar-borderDark shadow-soft">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-solar-sage flex items-center justify-center mx-auto text-solar-emerald">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-solar-darkText dark:text-white">Message Dispatched</h3>
                <p className="text-xs sm:text-sm text-solar-secondaryText max-w-md mx-auto">
                  Thank you for contacting JV Solar Energy Pvt Ltd. A project engineer will review your inquiry and follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg border border-solar-borderLight dark:border-solar-borderDark text-xs font-mono uppercase text-solar-darkText dark:text-solar-ivory hover:bg-solar-lightGrey dark:hover:bg-solar-deepForest transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold font-serif text-solar-darkText dark:text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-solar-secondaryText mb-4">
                  For preliminary project estimations, we recommend our structured{' '}
                  <a href="/quote" className="text-solar-emerald underline font-semibold">Quote Request Form</a>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full bg-solar-ivory dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark rounded-lg px-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98405 XXXXX"
                      className="w-full bg-solar-ivory dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark rounded-lg px-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramanathan@example.com"
                      className="w-full bg-solar-ivory dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark rounded-lg px-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. 500 KW Factory Rooftop Inquiry"
                      className="w-full bg-solar-ivory dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark rounded-lg px-4 py-2.5 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-solar-secondaryText mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your facility location, sanctioned power load, or project query..."
                    className="w-full bg-solar-ivory dark:bg-solar-deepForest border border-solar-borderLight dark:border-solar-borderDark rounded-lg p-3 text-sm text-solar-darkText dark:text-solar-ivory focus:outline-none focus:border-solar-emerald"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 bg-solar-emerald hover:bg-solar-emeraldDark text-white font-semibold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Dispatching...' : 'Dispatch Direct Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
