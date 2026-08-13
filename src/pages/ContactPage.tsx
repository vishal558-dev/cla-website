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
                className="inline-flex items-center gap-2 bg-[#111111] text-[#F9F8F6] hover:bg-[#333333] text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 transition-colors mt-1"
              >
                <span>Direct WhatsApp Chat</span>
                <span>→</span>
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
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-3">
            Location Map
          </span>

          <div className="map-grid w-full h-[400px] lg:h-[480px] border border-[#E5E2DC] relative overflow-hidden">
            <div className="absolute inset-x-0 top-[22%] h-px bg-[#111111]/15 rotate-[17deg]" />
            <div className="absolute inset-x-0 top-[66%] h-px bg-[#111111]/15 -rotate-[14deg]" />
            <div className="absolute left-[19%] inset-y-0 w-px bg-[#111111]/15 -rotate-[9deg]" />
            <div className="absolute right-[26%] inset-y-0 w-px bg-[#111111]/15 rotate-[12deg]" />

            <div className="map-marker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#111111] border-[4px] border-[#F9F8F6] shadow-[0_0_0_1px_rgba(17,17,17,0.25)]" />
              <div className="mt-4 bg-[#111111] text-[#F9F8F6] px-4 py-2 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap shadow-lg">
                CLA Studio
              </div>
            </div>

            <div className="absolute left-6 top-6 max-w-[12rem]">
              <p className="font-serif-editorial text-3xl leading-none text-[#111111]">{mapCity}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#666666]">{contact.address.city}</p>
            </div>

            {/* Overlay Map Direct Link */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111]/90 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.2em] px-4 py-2 hover:bg-[#111111] transition-colors inline-block"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
