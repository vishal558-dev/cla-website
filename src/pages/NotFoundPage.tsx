import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-[#FAF9F6]">
      <SEO title="Page Not Found" description="The requested page could not be found." />

      <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B6864] font-medium block mb-4">
        Error 404
      </span>

      <h1 className="font-serif-editorial text-7xl sm:text-8xl lg:text-9xl text-[#121212] font-light tracking-tight mb-4 select-none">
        404
      </h1>

      <p className="font-serif-editorial text-2xl text-[#121212] font-light mb-8 max-w-md">
        The requested spatial page or project resource could not be found.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-3 bg-[#121212] text-[#FAF9F6] border border-[#121212] hover:border-[#D99200] hover:bg-[#1C1C1C] text-xs uppercase tracking-[0.22em] font-medium px-8 py-4 transition-all duration-300 shadow-xs group"
      >
        <span>Return Home</span>
        <span className="text-[#FFC01D] font-medium transform group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}
