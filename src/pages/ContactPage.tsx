import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';

export function ContactPage() {
  const { contact } = siteConfig;
  const mapCity = contact.address.city.split(',')[0];

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 lg:px-12 bg-[#F9F8F6]">
      <SEO
        title="Contact"
        description={`Get in touch with ${siteConfig.brand.fullName} (${siteConfig.brand.name}) for project inquiries.`}
      />

      {/* Page Heading */}
      <div className="mb-16 border-b border-[#E5E2DC] pb-10">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
          Inquiries
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight mb-4">
          Contact
        </h1>
        <p className="text-sm font-light text-[#666666] max-w-xl leading-relaxed">
          We welcome inquiries for bespoke residential architecture, interior transformations, and spatial consultations across Delhi NCR and India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Contact Details Column */}
        <div className="lg:col-span-5 flex flex-col gap-10 text-sm font-light text-[#333333]">
          
          {/* Address */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
              Studio Office
            </span>
            <address className="not-italic leading-relaxed text-base font-serif-editorial text-[#111111]">
              {contact.address.line1}<br />
              {contact.address.line2}<br />
              {contact.address.city}<br />
              {contact.address.country}
            </address>
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-col gap-4 border-t border-[#E5E2DC] pt-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-1">
                Telephone
              </span>
              <a
                href={`tel:${contact.phoneFormatted}`}
                className="text-lg font-serif-editorial text-[#111111] hover:text-[#666666] transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            <div className="mt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-1">
                Email Inquiries
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-serif-editorial text-[#111111] hover:text-[#666666] transition-colors"
              >
                {contact.email}
              </a>
            </div>

            <div className="mt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-1">
                Instant Messaging
              </span>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#111111] text-[#FAF9F6] border border-[#E5A912]/50 hover:border-[#E5A912] hover:bg-[#1A1A1A] hover:text-[#FFC01D] text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 transition-all duration-300 mt-1 shadow-xs hover:shadow-[0_4px_16px_rgba(229,169,18,0.18)] group"
              >
                <span>Direct WhatsApp Chat</span>
                <span className="text-[#FFC01D] font-semibold transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Office Hours */}
          {contact.officeHours && (
            <div className="border-t border-[#E5E2DC] pt-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-1">
                Operating Hours
              </span>
              <p className="text-xs text-[#666666]">{contact.officeHours}</p>
            </div>
          )}
        </div>

        {/* Studio location panel */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block">
              Studio Location Map
            </span>
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.18em] text-[#111111] hover:text-[#D49B0E] transition-colors font-medium inline-flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <span className="text-[#D49B0E] font-semibold">↗</span>
            </a>
          </div>

          <div className="w-full h-[400px] lg:h-[480px] border border-[#E5E2DC] relative overflow-hidden bg-[#F2F0EC] shadow-sm">
            {/* Real Interactive Google Maps Embed */}
            <iframe
              title="Creative Layers Architects Studio Location"
              src={contact.googleMapsEmbedUrl || "https://maps.google.com/maps?q=28.581335,77.364180&hl=en&z=15&output=embed"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.02] opacity-95 transition-opacity duration-300"
            />

            {/* Studio Badge Floating Card */}
            <div className="absolute top-4 left-4 z-10 bg-[#111111]/90 backdrop-blur-md text-[#FAF9F6] border border-white/10 border-l-2 border-l-[#E5A912] p-3.5 shadow-xl max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FFC01D] animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#FFC01D] font-medium">CLA Studio</span>
              </div>
              <p className="font-serif-editorial text-lg text-white leading-snug">
                {contact.address.line1}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-stone-300 font-light mt-1">
                {contact.address.line2}, {mapCity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
