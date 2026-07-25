type Variant =
  | "canvas"
  | "noirwood"
  | "shopify"
  | "househub"
  | "nexcant"
  | "lumina";

const gradients: Record<Variant, { from: string; via: string; to: string }> = {
  canvas: { from: "#3E7BFA", via: "#8B7CFF", to: "#1E1A45" },
  noirwood: { from: "#0D0D0D", via: "#3A2B1A", to: "#B08D57" },
  shopify: { from: "#0E3B2E", via: "#12764F", to: "#63E6A8" },
  househub: { from: "#1B1408", via: "#7A5A26", to: "#F2C879" },
  nexcant: { from: "#081428", via: "#1E48B3", to: "#5CE1FF" },
  lumina: { from: "#0B1020", via: "#3E7BFA", to: "#EAF0FB" },
};

export default function ProjectArt({
  variant,
  title,
}: {
  variant: Variant;
  title: string;
}) {
  const g = gradients[variant];
  const gradId = `grad-${variant}`;
  const glowId = `glow-${variant}`;

  return (
    <svg
      viewBox="0 0 640 400"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${title} project artwork`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={g.from} />
          <stop offset="55%" stopColor={g.via} />
          <stop offset="100%" stopColor={g.to} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="400" fill={`url(#${gradId})`} />
      <rect width="640" height="400" fill={`url(#${glowId})`} />

      {/* Signature abstract mark per variant */}
      {variant === "canvas" && (
        <g opacity="0.9">
          <circle cx="180" cy="150" r="110" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="420" cy="260" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
          <path d="M60 320 Q 220 120 340 260 T 600 140" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" fill="none" />
        </g>
      )}
      {variant === "noirwood" && (
        <g opacity="0.85">
          <rect x="120" y="90" width="140" height="220" rx="4" fill="none" stroke="#F2C879" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="120" y1="150" x2="260" y2="150" stroke="#F2C879" strokeOpacity="0.35" strokeWidth="1" />
          <line x1="340" y1="70" x2="560" y2="330" stroke="#F2C879" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx="470" cy="140" r="60" fill="none" stroke="#F2C879" strokeOpacity="0.35" strokeWidth="1.5" />
        </g>
      )}
      {variant === "shopify" && (
        <g opacity="0.9">
          <rect x="90" y="200" width="90" height="110" rx="8" fill="#ffffff" fillOpacity="0.12" />
          <rect x="200" y="150" width="90" height="160" rx="8" fill="#ffffff" fillOpacity="0.16" />
          <rect x="310" y="100" width="90" height="210" rx="8" fill="#ffffff" fillOpacity="0.2" />
          <rect x="420" y="170" width="90" height="140" rx="8" fill="#ffffff" fillOpacity="0.14" />
        </g>
      )}
      {variant === "househub" && (
        <g opacity="0.9">
          <path d="M140 240 L 260 140 L 380 240 V 330 H 140 Z" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <path d="M320 280 L 420 200 L 520 280 V 340 H 320 Z" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
        </g>
      )}
      {variant === "nexcant" && (
        <g opacity="0.9">
          <path d="M0 300 L 100 260 L 200 290 L 300 200 L 400 240 L 500 150 L 640 190" stroke="#5CE1FF" strokeOpacity="0.6" strokeWidth="2" fill="none" />
          <circle cx="300" cy="200" r="5" fill="#5CE1FF" />
          <circle cx="500" cy="150" r="5" fill="#5CE1FF" />
        </g>
      )}
      {variant === "lumina" && (
        <g opacity="0.95">
          <circle cx="480" cy="120" r="140" fill="#ffffff" fillOpacity="0.08" />
          <circle cx="480" cy="120" r="90" fill="#ffffff" fillOpacity="0.1" />
          <circle cx="480" cy="120" r="40" fill="#ffffff" fillOpacity="0.25" />
        </g>
      )}

      {/* grid overlay */}
      <g opacity="0.06">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="400" stroke="#ffffff" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 80} x2="640" y2={i * 80} stroke="#ffffff" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}
