import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import { SEO } from '../components/SEO';

export function ProjectDetailPage() {
  const { slug, param } = useParams<{ slug?: string; param?: string }>();
  const projectSlug = slug || param;

  if (!projectSlug) {
    return <Navigate to="/404" replace />;
  }

  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 lg:px-12 bg-[#F9F8F6]">
      <SEO
        title={project.title}
        description={project.description}
        ogImage={project.heroImage}
      />

      {/* Top Header: Minimal Project Name + Back to Projects */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 mb-8 border-b border-[#E5E2DC]">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-1">
            {project.categories.join(' • ')}
          </span>
          <h1 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#111111] font-light tracking-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xs uppercase tracking-[0.18em] text-[#666666] mt-1 font-light">
              {project.subtitle}
            </p>
          )}
        </div>

        <Link
          to="/projects"
          className="group text-xs uppercase tracking-[0.2em] text-[#111111] hover:text-[#111111] transition-colors font-medium inline-flex items-center gap-2"
        >
          <span className="text-[#D49B0E] font-semibold transform group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* First Large Project Hero Image */}
      {project.heroImage && (
        <div className="w-full mb-16 overflow-hidden bg-[#F2F0EC]">
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            loading="eager"
            className="w-full h-auto max-h-[85vh] object-cover object-center animate-fade-in"
          />
        </div>
      )}

      {/* Metadata & Editorial Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 pb-16 border-b border-[#E5E2DC]">
        {/* Project Metadata Column */}
        <div className="md:col-span-4 flex flex-col gap-6 text-xs text-[#666666] font-light">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
              Location
            </span>
            <p>{project.location}</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
              Year
            </span>
            <p>{project.year}</p>
          </div>

          {project.metadata?.client && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
                Client
              </span>
              <p>{project.metadata.client}</p>
            </div>
          )}

          {project.metadata?.typology && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
                Typology
              </span>
              <p>{project.metadata.typology}</p>
            </div>
          )}

          {project.metadata?.scope && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
                Scope
              </span>
              <p>{project.metadata.scope}</p>
            </div>
          )}

          {project.metadata?.area && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#111111] font-medium block mb-1">
                Area
              </span>
              <p>{project.metadata.area}</p>
            </div>
          )}
        </div>

        {/* Description Column */}
        <div className="md:col-span-8">
          <p className="font-serif-editorial text-xl md:text-2xl text-[#111111] font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Vertical Image Sequence Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="flex flex-col gap-12 lg:gap-20 mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block border-b border-[#E5E2DC] pb-4">
            Gallery & Spatial Details
          </span>

          {project.galleryImages.map((imgUrl, index) => (
            <figure key={index} className="w-full bg-[#F2F0EC]">
              <img
                src={imgUrl}
                alt={`${project.title} gallery detail ${index + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-cover object-center transition-opacity duration-700 hover:opacity-95"
              />
            </figure>
          ))}
        </div>
      )}

      {/* Bottom Project Navigation (Previous / Next) */}
      <div className="border-t border-[#E5E2DC] pt-12 flex items-center justify-between">
        {prev ? (
          <Link
            to={`/projects/${prev.slug}`}
            className="group flex flex-col text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] group-hover:text-[#D49B0E] transition-colors mb-1">
              ← Previous Project
            </span>
            <span className="font-serif-editorial text-xl text-[#111111] group-hover:text-[#111111] transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-col text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] group-hover:text-[#D49B0E] transition-colors mb-1">
              Next Project →
            </span>
            <span className="font-serif-editorial text-xl text-[#111111] group-hover:text-[#111111] transition-colors">
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
