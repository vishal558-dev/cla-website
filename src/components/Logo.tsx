import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ClaLogoSvg } from './ClaLogoSvg';

export interface LogoProps {
  variant?: 'dark' | 'light' | 'original';
  symbolOnly?: boolean;
  useSvg?: boolean;
  className?: string;
  imgClassName?: string;
  alt?: string;
  priority?: boolean;
}

export function Logo({
  variant = 'dark',
  symbolOnly = false,
  useSvg = true,
  className = '',
  imgClassName = '',
  alt,
  priority = false,
}: LogoProps) {
  if (useSvg && !symbolOnly && variant !== 'original') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <ClaLogoSvg
          variant={variant}
          className={`object-contain transition-all duration-300 ${imgClassName}`}
        />
      </div>
    );
  }

  let src = siteConfig.brand.logoDark;

  if (symbolOnly) {
    src = variant === 'light' ? siteConfig.brand.symbolLight : siteConfig.brand.symbolDark;
  } else if (variant === 'light') {
    src = siteConfig.brand.logoLight;
  } else if (variant === 'original') {
    src = siteConfig.brand.logoOriginal;
  }

  const defaultAlt = `${siteConfig.brand.name} — ${siteConfig.brand.fullName}`;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt={alt || defaultAlt}
        className={`object-contain transition-all duration-300 ${imgClassName}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
