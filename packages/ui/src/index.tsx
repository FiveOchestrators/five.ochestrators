type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <svg
      className={compact ? "brand-mark brand-mark-compact" : "brand-mark"}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Five Ochestrators hexagon mark"
    >
      <path d="M24 3.5 42 13.9v20.2L24 44.5 6 34.1V13.9L24 3.5Z" fill="currentColor" />
      <path d="M17.2 16.8h13.6v4H21v4h8.2v4H21v4.4h-3.8V16.8Z" fill="var(--mark-cut, #071317)" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .8a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.5v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.1v3.2c0 .3.2.7.8.5A11.5 11.5 0 0 0 12 .8Z" />
    </svg>
  );
}

export function OrbitGlyph() {
  return (
    <svg className="orbit-glyph" viewBox="0 0 760 520" aria-hidden="true">
      <defs>
        <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b6d75" stopOpacity=".25" />
          <stop offset=".48" stopColor="#8ed9ce" stopOpacity=".9" />
          <stop offset="1" stopColor="#f58968" stopOpacity=".3" />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx="380" cy="260" rx="286" ry="164" fill="none" stroke="#1a3d43" strokeWidth="1" />
      <ellipse cx="380" cy="260" rx="220" ry="124" fill="none" stroke="#204b51" strokeWidth="1" strokeDasharray="4 10" />
      <path d="M102 160C218 108 290 170 380 260" fill="none" stroke="url(#lineGlow)" strokeWidth="2" />
      <path d="M615 116C510 122 462 191 380 260" fill="none" stroke="url(#lineGlow)" strokeWidth="2" />
      <path d="M670 326C540 350 486 297 380 260" fill="none" stroke="url(#lineGlow)" strokeWidth="2" />
      <path d="M380 452C385 357 380 335 380 260" fill="none" stroke="url(#lineGlow)" strokeWidth="2" />
      <path d="M106 350C244 367 309 319 380 260" fill="none" stroke="url(#lineGlow)" strokeWidth="2" />
      <circle cx="380" cy="260" r="82" fill="#0a2025" stroke="#6fc3b6" strokeOpacity=".55" filter="url(#softGlow)" />
    </svg>
  );
}
