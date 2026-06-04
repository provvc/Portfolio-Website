import { useRef, useState, useCallback, ReactNode, CSSProperties } from "react";

interface GlareSpotlightCardProps {
  children: ReactNode;
  /** Radius of the glare spotlight in px */
  glareRadius?: number;
  /** Max opacity of the glare at the cursor center (0–1) */
  glareMaxOpacity?: number;
  /** Glare color — any valid CSS color or gradient stop color */
  glareColor?: string;
  /** Extra className for the outer wrapper */
  className?: string;
  /** Extra styles for the outer wrapper */
  style?: CSSProperties;
}

export function GlareSpotlightCard({
  children,
  glareRadius = 280,
  glareMaxOpacity = 0.25,
  glareColor = "rgba(255, 255, 255, 1)",
  className = "",
  style,
}: GlareSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // cursor position relative to card (in px)
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Build the radial glare gradient centred on the cursor.
  // It's rendered on a pseudo-layer using an absolutely-positioned div so it
  // composites on top of your card content without replacing it.
  const glareStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    borderRadius: "inherit",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
    background: isHovered
      ? `radial-gradient(
          circle ${glareRadius}px at ${cursor.x}px ${cursor.y}px,
          ${glareColor.replace("1)", `${glareMaxOpacity})`)} 0%,
          transparent 70%
        )`
      : "none",
    // mix-blend-mode: screen looks great on dark cards; change to "normal" for light cards
    mixBlendMode: "screen",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        // sensible defaults — override via className / style
        borderRadius: "1rem",
        ...style,
      }}
    >
      {/* Your card content */}
      {children}

      {/* Glare overlay */}
      <div style={glareStyle} aria-hidden />
    </div>
  );
}
