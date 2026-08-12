import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#F9F8F6] pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group mb-4">
                <span className="font-serif-editorial text-4xl font-light tracking-tight text-white block">
                  cla
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 font-medium block mt-1">
                  {siteConfig.brand.fullName}
                </span>
              </Link>
              <p className="text-sm text-stone-400 font-light max-w-sm mt-4 leading-relaxed">
                Architecture, interior design & spatial planning driven by material honesty, contextual geometry, and enduring minimalism.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white hover:text-stone-300 transition-colors group"
              >
                <span>Get in touch with us</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Contact & Studio Details Column */}
          <div className="md:col-span-4 flex flex-col gap-4 text-xs font-light text-stone-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium mb-1">
              Studio Location
            </span>
            <address className="not-italic leading-relaxed">
              {siteConfig.contact.address.line1}<br />
              {siteConfig.contact.address.line2}<br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
            </address>

            <div className="flex flex-col gap-2 mt-4">
              <a
                href={`tel:${siteConfig.contact.phoneFormatted}`}
                className="hover:text-white transition-colors"
              >
                Tel: {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors"
              >
                Email: {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                WhatsApp Direct →
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-stone-400">
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-medium mb-1">
              Navigation
            </span>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-light gap-4">
          <p>© {currentYear} {siteConfig.brand.name} — {siteConfig.brand.fullName}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">Architecture • Interior • Spatial Design</p>
        </div>
      </div>
    </footer>
  );
}
