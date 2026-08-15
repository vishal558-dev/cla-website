import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, getProjectsByCategory } from '../data/projects';
import { ProjectGrid } from '../components/ProjectGrid';
import { CategoryId } from '../types';
import { SEO } from '../components/SEO';

export function ProjectsPage() {
  const { category, param } = useParams<{ category?: string; param?: string }>();
  const navigate = useNavigate();

  const activeCategory: CategoryId = ((param || category) as CategoryId) || 'all';

  const categoryObj = categories.find((c) => c.id === activeCategory) || categories[0];
  const filteredProjects = getProjectsByCategory(activeCategory);

  const handleSelectCategory = (catId: CategoryId) => {
    if (catId === 'all') {
      navigate('/projects');
    } else {
      navigate(`/projects/${catId}`);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      <SEO
        title={`Projects — ${categoryObj.name}`}
        description={categoryObj.description || 'Explore architecture and interior design projects by Creative Layers Architects.'}
      />

      {/* Page Heading */}
      <div className="mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
          Portfolio
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-sm font-light text-[#666666] max-w-xl leading-relaxed">
          {categoryObj.description}
        </p>
      </div>

      {/* Reusable Project Grid */}
      <ProjectGrid
        projects={filteredProjects}
        categories={categories}
        activeCategoryId={activeCategory}
        onSelectCategory={handleSelectCategory}
        showCategoryFilters={true}
      />
    </div>
  );
}
