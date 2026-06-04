"use client";

import { useRef, CSSProperties, ReactNode } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LiquidBorderDivProps {
  children?: ReactNode;

  /** Border thickness in px. Default: 2 */
  borderWidth?: number;
  /** Border radius in px (matches your div's border-radius). Default: 16 */
  borderRadius?: number;

  // LiquidMetal colour / style
  /** Base metal colour. Default: #aaaaac */
  colorBack?: string;
  /** Tint overlay colour. Default: #ffffff */
  colorTint?: string;
  /** Stripe density (1–10). Default: 3 */
  repetition?: number;
  /** Edge softness (0–1). Default: 0.1 */
  softness?: number;
  /** Red chromatic shift (-1 to 1). Default: 0.3 */
  shiftRed?: number;
  /** Blue chromatic shift (-1 to 1). Default: 0.3 */
  shiftBlue?: number;
  /** Noise distortion (0–1). Default: 0.07 */
  distortion?: number;
  /** Edge contour strength (0–1). Default: 0.4 */
  contour?: number;
  /** Flow angle in degrees. Default: 70 */
  angle?: number;
  /** Animation speed. Default: 1 */
  speed?: number;

  // Layout / styling passthrough
  className?: string;
  style?: CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * LiquidBorderDiv
 *
 * Wraps any content with an animated liquid-metal border.
 * The LiquidMetal shader fills the full div, then a CSS mask punches out
 * the interior so only the border ring is visible.
 *
 * Install:
 *   npm i @paper-design/shaders-react
 *
 * Usage:
 *   <LiquidBorderDiv borderWidth={3} borderRadius={16} className="p-6 bg-zinc-900">
 *     <p className="text-white">Your content here</p>
 *   </LiquidBorderDiv>
 */
export function LiquidBorderDiv({
  children,

  borderWidth = 2,
  borderRadius = 16,

  colorBack = "#aaaaac",
  colorTint = "#ffffff",
  repetition = 3,
  softness = 0.1,
  shiftRed = 0.3,
  shiftBlue = 0.3,
  distortion = 0.07,
  contour = 0.4,
  angle = 70,
  speed = 1,

  className = "",
  style,
}: LiquidBorderDivProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // The CSS mask creates a "hollow rectangle" — the shader shows through only
  // in the border ring. The outer rect fills the whole element; the inner rect
  // (inset by borderWidth on each side) cuts a hole out of it.
  //
  // mask-composite: exclude  → keeps only the XOR region (the ring itself)
  const maskStyle: CSSProperties = {
    maskImage: `
      radial-gradient(
        rect at 50% 50%,
        black 0%, black 100%
      ),
      radial-gradient(
        rect at 50% 50%,
        black 0%, black 100%
      )
    `,
    // Use the simpler paint-order approach instead:
    // A full-cover black layer minus the inset area.
    WebkitMaskImage: `
      linear-gradient(black, black),
      linear-gradient(black, black)
    `,
    WebkitMaskSize: `100% 100%, calc(100% - ${borderWidth * 2}px) calc(100% - ${borderWidth * 2}px)`,
    WebkitMaskPosition: `0 0, ${borderWidth}px ${borderWidth}px`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskComposite: "xor",
    maskSize: `100% 100%, calc(100% - ${borderWidth * 2}px) calc(100% - ${borderWidth * 2}px)`,
    maskPosition: `0 0, ${borderWidth}px ${borderWidth}px`,
    maskRepeat: "no-repeat",
    maskComposite: "exclude",
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        borderRadius,
        ...style,
      }}
    >
      {/* Liquid metal border layer */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
          ...maskStyle,
        }}
      >
        <LiquidMetal
          // shape="none" renders a full rectangular fill — perfect for a border
          shape="none"
          colorBack={colorBack}
          colorTint={colorTint}
          repetition={repetition}
          softness={softness}
          shiftRed={shiftRed}
          shiftBlue={shiftBlue}
          distortion={distortion}
          contour={contour}
          angle={angle}
          speed={speed}
          width="100%"
          height="100%"
          fit="cover"
        />
      </div>

      {/* Content sits on top, padded inward by the border width */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          // Prevent content from overlapping the border edge
          margin: borderWidth,
          borderRadius: Math.max(0, borderRadius - borderWidth),
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
