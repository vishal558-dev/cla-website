import React from 'react';

export interface ClaLogoSvgProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'light' | 'dark';
  className?: string;
}

export function ClaLogoSvg({
  variant = 'light',
  className = '',
  ...props
}: ClaLogoSvgProps) {
  const isLight = variant === 'light'; // light lines/text for dark background

  const fg = isLight ? '#FAF9F6' : '#111111';
  const grid = isLight ? '#FAF9F6' : '#111111';
  const yellow = isLight ? '#FFC01D' : '#D99200';
  const gridOpacity = isLight ? 0.42 : 0.45;
  const hatchOpacity = isLight ? 0.85 : 0.85;
  const subColor = isLight ? '#E5E2DC' : '#444444';
  const hatchId = `cla-hatch-${variant}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 424 165"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-label="CLA — Creative Layers Architects"
      {...props}
    >
      <defs>
        {/* Seamless 45-degree architectural cross-hatch pattern with 100% transparent background */}
        <pattern
          id={hatchId}
          width="4.5"
          height="4.5"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="4.5"
            stroke={fg}
            strokeWidth="0.6"
            opacity={hatchOpacity}
          />
          <line
            x1="0"
            y1="0"
            x2="4.5"
            y2="0"
            stroke={fg}
            strokeWidth="0.6"
            opacity={hatchOpacity}
          />
        </pattern>
      </defs>

      {/* ARCHITECTURAL DRAFTING BLUEPRINT GRID LINES */}
      <g stroke={grid} strokeWidth="0.75" opacity={gridOpacity}>
        {/* Horizontal Guidelines */}
        <line x1="6" y1="66" x2="208" y2="66" />
        <line x1="6" y1="103" x2="208" y2="103" />
        <line x1="6" y1="140" x2="422" y2="140" />

        {/* Vertical Guidelines */}
        <line x1="14" y1="32" x2="14" y2="162" />
        <line x1="54" y1="32" x2="54" y2="162" />
        <line x1="90" y1="4" x2="90" y2="162" />
        <line x1="108" y1="4" x2="108" y2="162" />
        <line x1="118" y1="32" x2="118" y2="162" />
        <line x1="148" y1="32" x2="148" y2="162" />
        <line x1="178" y1="32" x2="178" y2="162" />
        <line x1="194" y1="32" x2="194" y2="162" />
        <line x1="208" y1="32" x2="208" y2="162" />

        {/* 'l' Top Tick Guide */}
        <line x1="82" y1="25" x2="116" y2="25" />
      </g>

      {/* GLYPH 'c' (Annular arc filled with transparent cross-hatch; center hole & wedge are 100% transparent) */}
      <path
        d="M 80.16 76.84 A 37 37 0 1 0 80.16 129.16 L 67.44 116.44 A 19 19 0 1 1 67.44 89.56 Z"
        fill={`url(#${hatchId})`}
        stroke={fg}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Diagonal corner guide lines into center */}
      <line x1="54" y1="103" x2="80.16" y2="76.84" stroke={fg} strokeWidth="1.0" />
      <line x1="54" y1="103" x2="80.16" y2="129.16" stroke={fg} strokeWidth="1.0" />
      <circle cx="54" cy="103" r="1" fill={fg} />

      {/* GLYPH 'l' */}
      {/* Top Yellow Solid Accent */}
      <rect
        x="90"
        y="25"
        width="18"
        height="68"
        fill={yellow}
        stroke={fg}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Bottom Transparent Hatch Segment */}
      <rect
        x="90"
        y="93"
        width="18"
        height="47"
        fill={`url(#${hatchId})`}
        stroke={fg}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />

      {/* GLYPH 'a' (Circular Donut with 100% transparent center hole, filled only with transparent cross-hatch) */}
      <path
        d="M 111 103 A 37 37 0 1 0 185 103 A 37 37 0 1 0 111 103 M 129 103 A 19 19 0 1 1 167 103 A 19 19 0 1 1 129 103 Z"
        fill={`url(#${hatchId})`}
        fillRule="evenodd"
        stroke={fg}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Right Yellow Solid Accent Bar */}
      <rect
        x="178"
        y="66"
        width="16"
        height="74"
        fill={yellow}
        stroke={fg}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />

      {/* BRAND TYPOGRAPHY */}
      <g fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif">
        <text
          x="218"
          y="67"
          fill={fg}
          fontSize="23"
          fontWeight="800"
          letterSpacing="0.24em"
        >
          CREATIVE
        </text>
        <text
          x="218"
          y="98"
          fill={fg}
          fontSize="23"
          fontWeight="800"
          letterSpacing="0.24em"
        >
          LAYERS
        </text>
        <text
          x="218"
          y="129"
          fill={yellow}
          fontSize="23"
          fontWeight="800"
          letterSpacing="0.25em"
        >
          ARCHITECTS
        </text>
        <text
          x="218"
          y="157"
          fill={subColor}
          fontSize="14"
          fontWeight="400"
          letterSpacing="0.03em"
        >
          creating places for people
        </text>
      </g>
    </svg>
  );
}
