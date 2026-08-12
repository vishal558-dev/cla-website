import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export function SEO({ title, description, ogImage }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${siteConfig.brand.name}` : siteConfig.meta.defaultTitle;
    const metaDesc = description || siteConfig.meta.defaultDescription;

    document.title = fullTitle;

    // Update meta description
    let metaDescElement = document.querySelector('meta[name="description"]');
    if (!metaDescElement) {
      metaDescElement = document.createElement('meta');
      metaDescElement.setAttribute('name', 'description');
      document.head.appendChild(metaDescElement);
    }
    metaDescElement.setAttribute('content', metaDesc);

    // Update OG Title
    let ogTitleElement = document.querySelector('meta[property="og:title"]');
    if (ogTitleElement) {
      ogTitleElement.setAttribute('content', fullTitle);
    }

    // Update OG Description
    let ogDescElement = document.querySelector('meta[property="og:description"]');
    if (ogDescElement) {
      ogDescElement.setAttribute('content', metaDesc);
    }

    // Update OG Image if provided
    if (ogImage) {
      let ogImgElement = document.querySelector('meta[property="og:image"]');
      if (!ogImgElement) {
        ogImgElement = document.createElement('meta');
        ogImgElement.setAttribute('property', 'og:image');
        document.head.appendChild(ogImgElement);
      }
      ogImgElement.setAttribute('content', ogImage);
    }
  }, [title, description, ogImage]);

  return null;
}
