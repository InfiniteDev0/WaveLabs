/** The three slanted bars that sit beside the Weave wordmark. */
export function BrandMark({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="skewX(-14)" fill="currentColor">
        <rect x="10" y="4" width="13" height="5" rx="2.5" />
        <rect x="6" y="11.5" width="17" height="5" rx="2.5" />
        <rect x="6" y="19" width="11" height="5" rx="2.5" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "", markClass = "text-[#7c3aed]" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <BrandMark className={`h-6 w-6 shrink-0 ${markClass}`} />
      <span className="text-xl font-semibold uppercase tracking-tight">Wave</span>
    </span>
  );
}
