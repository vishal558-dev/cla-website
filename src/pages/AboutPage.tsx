import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/SEO';

export function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-12 bg-[#F9F8F6]">
      <SEO
        title="About Us"
        description={`Learn about ${siteConfig.brand.fullName} (${siteConfig.brand.name}) — minimal luxury architecture and spatial design.`}
      />

      {/* Page Heading - Starts directly with text, no hero image */}
      <div className="mb-16 border-b border-[#E5E2DC] pb-10">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
          Studio Philosophy
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight mb-6">
          About Us
        </h1>
        <p className="font-serif-editorial text-2xl md:text-3xl text-[#111111] font-light leading-relaxed">
          {siteConfig.brand.fullName} is an architecture and spatial design practice exploring the relationship between form, light, and material texture.
        </p>
      </div>

      {/* Main Firm Introduction Essay */}
      <div className="space-y-8 text-sm md:text-base text-[#444444] font-light leading-relaxed mb-20">
        <p>
          Founded on the principle that architecture should serve as a quiet framework for living, our studio creates spaces characterized by spatial clarity, tactile materiality, and contextual sensitivity.
        </p>
        <p>
          We view every project as a unique layered dialogue between site, shadow, climate, and human ritual. Rather than imposing predetermined styles, our methodology carefully strips away the non-essential to reveal the inherent beauty of natural stone, timber, concrete, and daylight.
        </p>
        <p>
          Based in Delhi NCR, our practice spans bespoke residential architecture, spatial interior transformations, and contextual pavilion design across the region and India.
        </p>
      </div>

      {/* Extensible Future Sections (Founder, Team, Awards, Services) */}
      {/* These will render seamlessly when enabled in siteConfig.settings */}
      {siteConfig.settings.enableFounderSection && (
        <section className="mb-20 pt-12 border-t border-[#E5E2DC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-4">
            Leadership
          </span>
          <h2 className="font-serif-editorial text-3xl text-[#111111] font-light mb-6">
            Principal / Founder
          </h2>
          {/* Founder bio content will go here when supplied */}
        </section>
      )}

      {siteConfig.settings.enableTeamSection && (
        <section className="mb-20 pt-12 border-t border-[#E5E2DC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-4">
            People
          </span>
          <h2 className="font-serif-editorial text-3xl text-[#111111] font-light mb-6">
            The Studio Team
          </h2>
          {/* Team list content will go here when supplied */}
        </section>
      )}

      {siteConfig.settings.enableAwardsSection && (
        <section className="mb-20 pt-12 border-t border-[#E5E2DC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-4">
            Recognition
          </span>
          <h2 className="font-serif-editorial text-3xl text-[#111111] font-light mb-6">
            Awards & Distinctions
          </h2>
          {/* Awards list content will go here when supplied */}
        </section>
      )}

      {siteConfig.settings.enableServicesSection && (
        <section className="mb-20 pt-12 border-t border-[#E5E2DC]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-4">
            Capabilities
          </span>
          <h2 className="font-serif-editorial text-3xl text-[#111111] font-light mb-6">
            Architectural Services
          </h2>
          {/* Services content will go here when supplied */}
        </section>
      )}
    </div>
  );
}
