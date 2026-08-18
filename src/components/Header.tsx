import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { getProjectBySlug } from '../data/projects';
import { ClaLogoSvg } from './ClaLogoSvg';

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
            ? 'bg-[#FAF9F6] border-b border-[#E6E2DB] py-4 text-[#121212] shadow-xs'
            : isScrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E6E2DB]/70 py-4 shadow-xs text-[#121212]'
            : isHomepage
            ? 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-6 text-white'
            : 'bg-[#FAF9F6] py-6 text-[#121212] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Identity & 404 Context */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-3 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#121212]"
              aria-label="cla Creative Layers Architects Home"
            >
              <ClaLogoSvg
                variant={isNotFound || isScrolled || !isHomepage ? 'dark' : 'light'}
                className="h-8 sm:h-9 w-auto transition-all duration-300 group-hover:opacity-90"
              />
            </Link>

            {/* Architectural 404 State Indicator */}
            {isNotFound && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-mono text-[#6B6864] bg-[#ECEAE4] border border-[#E6E2DB] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212]/60" />
                404 // Missing
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
                        ? 'text-[#121212] font-semibold'
                        : 'text-white font-semibold'
                      : isNotFound || isScrolled || !isHomepage
                      ? 'text-[#6B6864] hover:text-[#121212]'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                        isNotFound || isScrolled || !isHomepage ? 'bg-[#D99200]' : 'bg-[#FFC01D]'
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
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#121212] border border-[#121212] px-4 py-1.5 hover:bg-[#121212] hover:text-[#FAF9F6] transition-all duration-300"
              >
                ← Return to Home
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative p-2 focus:outline-hidden transition-colors ${
              isNotFound || isScrolled || !isHomepage ? 'text-[#121212]' : 'text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <span
                className={`h-[1px] w-6 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#121212]' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-2 w-6' : ''}`}
              />
              <span
                className={`h-[1px] w-4 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#121212]' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-[1px] w-6 transition-all duration-300 ${
                  isNotFound || isScrolled || !isHomepage ? 'bg-[#121212]' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF9F6] transition-all duration-500 flex flex-col justify-between p-8 pt-28 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Mobile 404 Banner */}
          {isNotFound && (
            <div className="flex items-center gap-2 bg-[#ECEAE4] border border-[#E6E2DB] px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest text-[#6B6864]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#121212]/60" />
              <span>404 // Missing</span>
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
                    isActive ? 'text-[#121212] font-normal pl-2 border-l-2 border-[#D99200]' : 'text-[#6B6864]'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-[#E6E2DB] pt-8 flex flex-col gap-3 text-xs text-[#6B6864]">
          <ClaLogoSvg variant="dark" className="h-8 w-auto self-start" />
          <p>{siteConfig.brand.fullName}</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-[#121212] transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}

