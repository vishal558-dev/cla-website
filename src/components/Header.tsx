import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { getProjectBySlug } from '../data/projects';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // Determine if current route is a 404 / unknown route
  const isNotFound = (() => {
    if (location.pathname === '/404') return true;
    if (['/', '/about', '/contact', '/projects'].includes(location.pathname)) return false;
    if (location.pathname.startsWith('/projects/')) {
      const parts = location.pathname.split('/').filter(Boolean);
      if (parts.length === 2) {
        const param = parts[1];
        const knownCategories = ['all', 'architecture', 'interior'];
        if (knownCategories.includes(param)) return false;
        if (getProjectBySlug(param)) return false;
      }
      return true;
    }
    return true;
  })();

  // Scroll visibility handler (hide on scroll down, reveal on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isNotFound
            ? 'bg-[#F9F8F6] border-b border-[#E5E2DC] py-4 text-[#111111] shadow-xs'
            : isScrolled
            ? 'bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#E5E2DC]/60 py-4 shadow-xs text-[#111111]'
            : isHomepage
            ? 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-6 text-white'
            : 'bg-[#F9F8F6] py-6 text-[#111111] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Identity & 404 Context */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-baseline gap-2.5 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#111111]"
              aria-label="cla Creative Layers Architects Home"
            >
              <span
                className={`font-serif-editorial text-2xl lg:text-3xl font-light tracking-tight transition-opacity duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'text-[#111111]' : 'text-white'
                }`}
              >
                cla
              </span>
              <span
                className={`text-[11px] uppercase tracking-[0.2em] font-medium hidden sm:inline-block transition-colors duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'text-[#666666]' : 'text-white/80'
                }`}
              >
                {siteConfig.brand.fullName}
              </span>
            </Link>

            {/* Architectural 404 State Indicator */}
            {isNotFound && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-mono text-[#666666] bg-[#EFECE6] border border-[#E5E2DC] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60 animate-pulse" />
                404 // Page Missing
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                !isNotFound &&
                (link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs tracking-[0.18em] uppercase transition-colors duration-300 py-1 ${
                    isActive
                      ? isNotFound || isScrolled || !isHomepage
                        ? 'text-[#111111] font-semibold'
                        : 'text-white font-semibold'
                      : isNotFound || isScrolled || !isHomepage
                      ? 'text-[#666666] hover:text-[#111111]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-300 ${
                        isNotFound || isScrolled || !isHomepage ? 'bg-[#111111]' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              );
            })}

            {/* Custom 404 Quick Recovery Link */}
            {isNotFound && (
              <Link
                to="/"
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111] border border-[#111111] px-4 py-1.5 hover:bg-[#111111] hover:text-[#F9F8F6] transition-all duration-300"
              >
                ← Return to Home
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative p-2 focus:outline-hidden transition-colors ${
              isNotFound || isScrolled || !isHomepage ? 'text-[#111111]' : 'text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <span
                className={`h-[1px] w-6 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#111111]' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-2 w-6' : ''}`}
              />
              <span
                className={`h-[1px] w-4 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#111111]' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-[1px] w-6 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#111111]' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F9F8F6] transition-all duration-500 flex flex-col justify-between p-8 pt-28 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Mobile 404 Banner */}
          {isNotFound && (
            <div className="flex items-center gap-2 bg-[#EFECE6] border border-[#E5E2DC] px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest text-[#666666]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60" />
              <span>404 // Page Missing</span>
            </div>
          )}

          <nav className="flex flex-col gap-8" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => {
              const isActive =
                !isNotFound &&
                (link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-serif-editorial tracking-wide transition-colors ${
                    isActive ? 'text-[#111111] font-normal pl-2 border-l border-[#111111]' : 'text-[#666666]'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-[#E5E2DC] pt-8 flex flex-col gap-2 text-xs text-[#666666]">
          <p className="font-serif-editorial text-lg text-[#111111]">{siteConfig.brand.name}</p>
          <p>{siteConfig.brand.fullName}</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-[#111111] transition-colors mt-2"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}

