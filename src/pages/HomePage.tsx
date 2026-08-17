import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { getProjectBySlug, getFeaturedProjects } from '../data/projects';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { SEO } from '../components/SEO';
import { ClaLogoSvg } from '../components/ClaLogoSvg';

export function HomePage() {
  // Hero image uses heroBackgroundImage or the first real CLA project specified in siteConfig
  const heroProject = getProjectBySlug(siteConfig.homepage.heroProjectSlug);
  const heroBgImage = siteConfig.homepage.heroBackgroundImage || heroProject?.heroImage;

  // Get featured projects in the order configured in siteConfig
  const featuredProjects = getFeaturedProjects(
    siteConfig.settings.featuredCountMax,
    siteConfig.homepage.featuredProjectSlugs
  );

  return (
    <div className="w-full bg-[#F9F8F6]">
      <SEO
        title="cla — Creative Layers Architects"
        description="Creative Layers Architects — Architecture, Interior Design & Spatial Planning. Minimal luxury architectural portfolio."
      />

      {/* 1. Opening Hero Section */}
      <section className="relative w-full h-screen min-h-[640px] bg-[#111111] overflow-hidden flex items-center justify-center">
        {heroBgImage ? (
          <div className="absolute inset-0 w-full h-full animate-fade-in">
            <img
              src={heroBgImage}
              alt="Creative Layers Architects Featured Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#1A1A1A]" />
        )}

        {/* Hero Minimal Identity Display - Infinite resolution vector */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <ClaLogoSvg
            variant="light"
            className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[640px] h-auto drop-shadow-2xl animate-fade-in"
          />
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.25em] font-light">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* 2. Featured Projects Slider Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E2DC]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
              Selected Works
            </span>
            <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#111111] font-light">
              Featured Architecture
            </h2>
          </div>
          <Link
            to="/projects"
            className="group text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#111111] transition-colors mt-4 md:mt-0 font-medium inline-flex items-center gap-2"
          >
            <span>All Projects</span>
            <span className="text-[#D49B0E] font-semibold transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <FeaturedSlider projects={featuredProjects} />
      </section>

      {/* 3. Homepage Short About Section */}
      <section className="py-20 lg:py-28 bg-[#F2F0EC] border-y border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <img
            src={siteConfig.brand.symbolDark}
            alt="CLA Architectural Insignia"
            className="h-10 w-auto object-contain opacity-60 mb-6"
            loading="lazy"
          />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-6">
            About the Studio
          </span>
          <p className="font-serif-editorial text-2xl md:text-3xl text-[#111111] font-light leading-relaxed mb-8">
            {siteConfig.homepage.aboutIntroText}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#111111] transition-colors group"
          >
            <span>Read more</span>
            <span className="text-[#D49B0E] font-semibold transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* 4. Homepage Contact CTA */}
      <section className="py-24 lg:py-36 max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight mb-6">
          {siteConfig.homepage.contactCta.heading}
        </h2>
        {siteConfig.homepage.contactCta.subheading && (
          <p className="text-sm font-light text-[#666666] max-w-xl mx-auto mb-10 leading-relaxed">
            {siteConfig.homepage.contactCta.subheading}
          </p>
        )}
        <Link
          to="/contact"
          className="inline-block bg-[#111111] text-[#FAF9F6] border border-[#111111] hover:border-[#E5A912] hover:bg-[#1A1A1A] hover:text-[#FFC01D] text-xs uppercase tracking-[0.25em] font-medium px-10 py-5 transition-all duration-300 hover:tracking-[0.3em] shadow-xs hover:shadow-[0_6px_24px_rgba(229,169,18,0.2)]"
        >
          {siteConfig.homepage.contactCta.buttonText}
        </Link>
      </section>
    </div>
  );
}
