import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Category, CategoryId, Project } from '../types';
import { siteConfig } from '../config/siteConfig';

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
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-16 border-b border-[#E5E2DC] pb-6"
        >
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-200 pb-2 relative cursor-pointer focus:outline-hidden ${
                  isActive
                    ? 'text-[#111111] font-medium'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-[#111111]"
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
          className="text-center py-20 text-[#666666] font-light"
        >
          <p className="text-lg">No projects published under this category yet.</p>
        </motion.div>
      ) : (
        /* Project Grid Container with animated layout transitions */
        <motion.div
          layout
          className={`grid grid-cols-1 ${
            isTwoColumn
              ? 'md:grid-cols-2 gap-12 lg:gap-20'
              : 'md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(idx * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                  layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group flex flex-col cursor-pointer"
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block relative overflow-hidden bg-[#F2F0EC] aspect-[4/3] w-full"
                >
                  {/* Project Thumbnail Image with Subtle Hover Zoom */}
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={`${project.title} - ${project.location}`}
                      referrerPolicy="no-referrer"
                      loading={idx < 4 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter group-hover:brightness-95"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#E8E5DF] text-[#666666] text-xs uppercase tracking-widest font-serif-editorial">
                      cla studio
                    </div>
                  )}

                  {/* Subtle Hover Overlay with Project Name */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-xs uppercase tracking-[0.2em] font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Project →
                    </span>
                  </div>
                </Link>

                {/* Understated Project Info below card */}
                <div className="pt-4 flex items-start justify-between gap-4 border-t border-transparent group-hover:border-[#E5E2DC] transition-colors duration-300">
                  <div>
                    <h3 className="font-serif-editorial text-xl font-normal text-[#111111] group-hover:text-[#666666] transition-colors duration-300">
                      <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#666666] mt-0.5 font-light">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#888888] pt-1 tracking-wide shrink-0">
                    {project.year}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
