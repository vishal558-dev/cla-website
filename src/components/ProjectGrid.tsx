import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Category, CategoryId, Project } from '../types';
import { siteConfig } from '../config/siteConfig';
import { getPublishedProjects } from '../data/projects';

interface ProjectGridProps {
  projects: Project[];
  categories: Category[];
  activeCategoryId: CategoryId;
  onSelectCategory?: (categoryId: CategoryId) => void;
  showCategoryFilters?: boolean;
}

export function ProjectGrid({
  projects,
  categories,
  activeCategoryId,
  onSelectCategory,
  showCategoryFilters = true,
}: ProjectGridProps) {
  const navigate = useNavigate();
  const isTwoColumn = siteConfig.settings.projectGridLayout === 'editorial-two-column';

  // Compute category project counts for badges
  const allProjects = getPublishedProjects();
  const getCategoryCount = (catId: CategoryId) => {
    if (catId === 'all') return allProjects.length;
    return allProjects.filter((p) => p.categories.includes(catId)).length;
  };

  const handleCategoryClick = (catId: CategoryId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      if (catId === 'all') {
        navigate('/projects');
      } else {
        navigate(`/projects/${catId}`);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      {showCategoryFilters && (
        <nav
          aria-label="Project categories"
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-16 border-b border-[#E6E2DB] pb-6"
        >
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 pb-2 relative cursor-pointer focus:outline-hidden flex items-center gap-2 group ${
                  isActive
                    ? 'text-[#121212] font-semibold'
                    : 'text-[#6B6864] hover:text-[#121212]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono tracking-normal px-1.5 py-0.5 rounded-xs transition-colors duration-300 ${
                    isActive
                      ? 'bg-[#121212] text-[#FFC01D] font-medium'
                      : 'bg-[#ECEAE4] text-[#7A7772] group-hover:bg-[#DFDBD2] group-hover:text-[#121212]'
                  }`}
                >
                  {String(count).padStart(2, '0')}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#D99200]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      )}

      {/* Empty State */}
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-[#6B6864] font-light"
        >
          <p className="text-lg">No projects published under this category yet.</p>
        </motion.div>
      ) : (
        /* Project Grid Container with animated layout transitions */
        <motion.div
          layout
          className={`grid grid-cols-1 ${
            isTwoColumn
              ? 'md:grid-cols-2 gap-12 lg:gap-16'
              : 'md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => {
              const formattedIndex = String(idx + 1).padStart(2, '0');
              const primaryCategory = project.categories[0] || 'architecture';
              const typology = project.metadata?.typology || project.subtitle;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(idx * 0.04, 0.2),
                    ease: [0.16, 1, 0.3, 1],
                    layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="group flex flex-col cursor-pointer"
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block project-card-image-wrap relative group shadow-xs hover:shadow-lg transition-shadow duration-300"
                    aria-label={`View project ${project.title}`}
                  >
                    {/* Project Thumbnail Image with Subtle Smooth Zoom & Contrast Filter */}
                    {project.heroImage ? (
                      <img
                        src={project.heroImage}
                        alt={`${project.title} - ${project.location}`}
                        referrerPolicy="no-referrer"
                        loading={idx < 4 ? 'eager' : 'lazy'}
                        className="project-card-img"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#EAE7E1] text-[#6B6864] text-xs uppercase tracking-widest font-serif-editorial">
                        cla studio
                      </div>
                    )}

                    {/* Subtle Matte Overlay for Contrast */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Architectural Tag (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <div className="flex items-center gap-1.5 bg-[#121212]/80 backdrop-blur-xs border border-white/15 px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.18em] text-white/90">
                        <span className="text-[#FFC01D] font-medium">{formattedIndex}</span>
                        <span className="text-white/40">/</span>
                        <span>{primaryCategory}</span>
                      </div>
                    </div>

                    {/* Center Hover Action Pill ("View Project →") */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="card-hover-action-btn opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-250">
                        <span>Explore</span>
                        <span className="text-[#FFC01D] transform group-hover:translate-x-1 transition-transform duration-250">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>

                  {/* Refined Project Info below card */}
                  <div className="pt-4 pb-1 flex flex-col justify-between border-t border-[#E6E2DB] group-hover:border-[#121212] transition-colors duration-300">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif-editorial text-2xl font-normal text-[#121212] flex items-center gap-2">
                        <Link to={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                        <span className="inline-block text-xs text-[#D99200] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 font-sans">
                          ↗
                        </span>
                      </h3>
                      <span className="text-[11px] font-mono text-[#8C8881] group-hover:text-[#121212] tracking-wider shrink-0 transition-colors duration-300">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-1 text-[11px] text-[#6B6864] font-light">
                      <span className="uppercase tracking-[0.16em]">
                        {project.location}
                      </span>
                      {typology && (
                        <span className="text-[10px] text-[#8C8881] font-mono tracking-tight truncate max-w-[50%] text-right hidden sm:inline-block">
                          {typology}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

