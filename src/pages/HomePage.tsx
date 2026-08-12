import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { getProjectBySlug, getFeaturedProjects } from '../data/projects';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { SEO } from '../components/SEO';

export function HomePage() {
  // Hero image uses the first real CLA project specified in siteConfig
  const heroProject = getProjectBySlug(siteConfig.homepage.heroProjectSlug);

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
        {heroProject?.heroImage ? (
          <div className="absolute inset-0 w-full h-full animate-fade-in">
            <img
              src={heroProject.heroImage}
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

        {/* Hero Minimal Identity Display */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif-editorial text-7xl sm:text-8xl md:text-9xl font-light tracking-tight text-white mb-2 select-none">
            {siteConfig.brand.name}
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] font-medium text-white/80">
            {siteConfig.brand.fullName}
          </p>
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
            className="text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#666666] transition-colors mt-4 md:mt-0 font-medium"
          >
            All Projects →
          </Link>
        </div>

        <FeaturedSlider projects={featuredProjects} />
      </section>

      {/* 3. Homepage Short About Section */}
      <section className="py-20 lg:py-28 bg-[#F2F0EC] border-y border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-6">
            About the Studio
          </span>
          <p className="font-serif-editorial text-2xl md:text-3xl text-[#111111] font-light leading-relaxed mb-8">
            {siteConfig.homepage.aboutIntroText}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#666666] transition-colors group"
          >
            <span>Read more</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
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
          className="inline-block bg-[#111111] text-[#F9F8F6] hover:bg-[#222222] text-xs uppercase tracking-[0.25em] font-medium px-10 py-5 transition-all duration-300 hover:tracking-[0.3em]"
        >
          {siteConfig.homepage.contactCta.buttonText}
        </Link>
      </section>
    </div>
  );
}
