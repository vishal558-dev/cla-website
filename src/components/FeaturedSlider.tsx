import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface FeaturedSliderProps {
  projects: Project[];
  autoPlayIntervalMs?: number;
}

export function FeaturedSlider({ projects, autoPlayIntervalMs = 5500 }: FeaturedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = projects.length;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused && total > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayIntervalMs);
    }
  }, [nextSlide, isPaused, total, autoPlayIntervalMs]);

  // Handle Autoplay timer
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, resetAutoplay]);

  if (total === 0) return null;

  const currentProject = projects[currentIndex];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      className="relative w-full h-[85vh] min-h-[580px] max-h-[920px] bg-[#111111] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Projects Slider"
    >
      {/* Background Images with horizontal glide & crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={project.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.88]"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          );
        })}
      </div>

      {/* Visually Hidden Metadata for SEO & Accessibility */}
      <div className="sr-only">
        <h2>{currentProject.title}</h2>
        <p>{currentProject.description}</p>
        <p>Location: {currentProject.location}</p>
      </div>

      {/* Floating View Project CTA (Visual overlay requirement: ONLY View Project button) */}
      <div className="slider-cta-container">
        <Link
          to={`/projects/${currentProject.slug}`}
          className="slider-view-project-btn group"
        >
          <span>View Project</span>
          <span className="text-[#FFC01D] font-medium transform group-hover:translate-x-1.5 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>

      {/* Minimal Slider Controls & Counter (Bottom Right) */}
      <div className="slider-controls-container flex items-center gap-4 sm:gap-6 bg-[#121212]/80 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 shadow-md">
        {/* Progress Counter (e.g., 01 / 05) */}
        <div className="text-xs font-mono tracking-widest text-white/90">
          <span className="text-[#FFC01D] font-medium">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-white/40 mx-1.5">/</span>
          <span className="text-white/50">{String(total).padStart(2, '0')}</span>
        </div>

        <div className="h-4 w-[1px] bg-white/20" />

        {/* Previous & Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              prevSlide();
              resetAutoplay();
            }}
            className="p-1.5 text-white/70 hover:text-[#FFC01D] transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Previous Slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="p-1.5 text-white/70 hover:text-[#FFC01D] transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Next Slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Minimal Progress Bar along bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-20">
        <div
          className="h-full bg-[#D99200] transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>
    </section>
  );
}
