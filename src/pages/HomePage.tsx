import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { siteConfig } from '../config/siteConfig';
import { getProjectBySlug, getFeaturedProjects } from '../data/projects';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { SEO } from '../components/SEO';
import { ClaLogoSvg } from '../components/ClaLogoSvg';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

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
    <div className="w-full bg-[#FAF9F6] overflow-hidden">
      <SEO
        title="cla — Creative Layers Architects"
        description="Creative Layers Architects — Architecture, Interior Design & Spatial Planning. Minimal luxury architectural portfolio."
      />

      {/* 1. Opening Hero Section */}
      <section className="relative w-full h-screen min-h-[640px] bg-[#121212] overflow-hidden flex items-center justify-center">
        {heroBgImage ? (
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroBgImage}
              alt="Creative Layers Architects Featured Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-[#141414]" />
        )}

        {/* Hero Minimal Identity Display - Infinite resolution vector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
        >
          <ClaLogoSvg
            variant="light"
            className="w-full max-w-[320px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[640px] h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Hero Subtle Architectural Anchors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-8 hidden sm:flex flex-col text-white/70 text-[9px] uppercase font-mono tracking-[0.2em] z-10"
        >
          <span className="text-[#FFC01D] font-medium">01 // Selected Architecture</span>
          <span>Creative Layers Architects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 right-8 hidden sm:flex flex-col text-right text-white/70 text-[9px] uppercase font-mono tracking-[0.2em] z-10"
        >
          <span>Noida / Delhi NCR</span>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-light">Scroll</span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Featured Projects Slider Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E6E2DB]"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B6864] font-medium block mb-2">
              Selected Works
            </span>
            <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#121212] font-light">
              Featured Architecture
            </h2>
          </div>
          <Link
            to="/projects"
            className="group text-xs uppercase tracking-[0.2em] text-[#121212] hover:text-[#121212] transition-colors mt-4 md:mt-0 font-medium inline-flex items-center gap-2"
          >
            <span>All Projects</span>
            <span className="text-[#D99200] font-semibold transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <FeaturedSlider projects={featuredProjects} />
        </motion.div>
      </section>

      {/* 3. Homepage Short About Section */}
      <section className="py-20 lg:py-28 bg-[#F2EFE9] border-y border-[#E6E2DB]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
        >
          <img
            src={siteConfig.brand.symbolDark}
            alt="CLA Architectural Insignia"
            className="h-10 w-auto object-contain opacity-60 mb-6"
            loading="lazy"
          />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B6864] font-medium block mb-6">
            About the Studio
          </span>
          <p className="font-serif-editorial text-2xl md:text-3xl text-[#121212] font-light leading-relaxed mb-8">
            {siteConfig.homepage.aboutIntroText}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#121212] hover:text-[#121212] transition-colors group"
          >
            <span>Read more</span>
            <span className="text-[#D99200] font-semibold transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </section>

      {/* 4. Homepage Contact CTA */}
      <section className="py-24 lg:py-36 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#121212] font-light tracking-tight mb-6">
            {siteConfig.homepage.contactCta.heading}
          </h2>
          {siteConfig.homepage.contactCta.subheading && (
            <p className="text-sm font-light text-[#6B6864] max-w-xl mx-auto mb-10 leading-relaxed">
              {siteConfig.homepage.contactCta.subheading}
            </p>
          )}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#121212] text-[#FAF9F6] border border-[#121212] hover:border-[#D99200] hover:bg-[#1C1C1C] text-xs uppercase tracking-[0.22em] font-medium px-10 py-5 transition-all duration-300 shadow-xs group"
          >
            <span>{siteConfig.homepage.contactCta.buttonText}</span>
            <span className="text-[#FFC01D] font-medium transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
