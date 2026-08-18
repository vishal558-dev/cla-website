import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  projectTitle: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  images,
  currentIndex,
  projectTitle,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const total = images.length;

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || total === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
      >
        {/* Top Bar: Project title, index counter, and close button */}
        <div
          className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5A912] font-semibold">
              Spatial Detail
            </span>
            <span className="text-white/40">•</span>
            <span className="font-serif-editorial text-lg text-white font-light tracking-wide truncate max-w-[200px] sm:max-w-md">
              {projectTitle}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-white/70">
              <span className="text-[#FFC01D] font-medium">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 text-white/30">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </span>

            <button
              type="button"
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 focus:outline-hidden cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Canvas: Image container with navigation arrows */}
        <div
          className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          {total > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200 focus:outline-hidden cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Image with smooth transition */}
          <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage}
                alt={`${projectTitle} - view ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="max-h-[72vh] max-w-full w-auto object-contain rounded-xs shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>

          {/* Next Button */}
          {total > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200 focus:outline-hidden cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnail Strip */}
        {total > 1 && (
          <div
            className="relative z-10 px-6 py-4 border-t border-white/10 overflow-x-auto flex items-center justify-center gap-3 bg-black/60 scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onNavigate(idx)}
                  className={`relative flex-shrink-0 h-12 w-18 overflow-hidden rounded-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-[#E5A912] opacity-100 scale-105'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  aria-label={`Jump to image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              );
            })}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
