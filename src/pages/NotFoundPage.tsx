import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-[#F9F8F6]">
      <SEO title="Page Not Found" description="The requested page could not be found." />

      <span className="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium block mb-4">
        Error 404
      </span>

      <h1 className="font-serif-editorial text-7xl sm:text-8xl lg:text-9xl text-[#111111] font-light tracking-tight mb-4 select-none">
        404
      </h1>

      <p className="font-serif-editorial text-2xl text-[#111111] font-light mb-8 max-w-md">
        The requested spatial page or project resource could not be found.
      </p>

      <Link
        to="/"
        className="inline-block bg-[#111111] text-[#F9F8F6] hover:bg-[#222222] text-xs uppercase tracking-[0.25em] font-medium px-8 py-4 transition-all duration-300 hover:tracking-[0.3em]"
      >
        Return Home
      </Link>
    </div>
  );
}
