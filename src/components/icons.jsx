/** Small line icons, all drawn on a 24-unit grid with currentColor strokes. */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function TrophyIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4" />
      <path d="M12 14v3M9 20h6M10 20l.5-3h3l.5 3" />
    </svg>
  );
}

export function MedalIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13.5-1.5 6L12 17.5l4.5 2-1.5-6" />
    </svg>
  );
}

export function SmileIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 14.5a4 4 0 0 0 6 0" />
      <path d="M9.5 9.5h.01M14.5 9.5h.01" />
    </svg>
  );
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export const statIcons = {
  trophy: TrophyIcon,
  medal: MedalIcon,
  smile: SmileIcon,
};

/* ---- Social glyphs (solid, so they read at 16px) ---------------------- */

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.25-1.5 1.5-1.5H16.7V3.9c-.3 0-1.3-.13-2.4-.13-2.4 0-4 1.46-4 4.14V10H7.6v3h2.7v8h3.2Z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-4.2-5.5L6.2 21H2.9l7.7-8.8L2.5 3h6.8l3.8 5 4.1-5Zm-1.2 16h1.8L8.1 4.9H6.2L16 19Z" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5V20H3.6V8.5h3.34ZM5.27 3.4a1.94 1.94 0 1 1 0 3.87 1.94 1.94 0 0 1 0-3.87ZM20.4 20h-3.33v-5.98c0-1.5-.55-2.53-1.9-2.53-1.03 0-1.65.7-1.92 1.37-.1.24-.13.58-.13.92V20H9.8s.05-10.4 0-11.5h3.33v1.63c.44-.68 1.24-1.66 3.02-1.66 2.2 0 3.86 1.44 3.86 4.53V20Z" />
    </svg>
  );
}

export const socials = [
  { name: "Facebook", Icon: FacebookIcon, href: "#" },
  { name: "Instagram", Icon: InstagramIcon, href: "#" },
  { name: "X", Icon: XIcon, href: "#" },
  { name: "LinkedIn", Icon: LinkedInIcon, href: "#" },
];
