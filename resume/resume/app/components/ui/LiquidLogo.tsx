"use client";

import { LiquidMetal } from "@paper-design/shaders-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type LiquidLogoShape = "none" | "circle" | "daisy" | "diamond" | "metaballs";
type LiquidLogoFit = "contain" | "cover";

interface LiquidLogoProps {
  /** URL or HTMLImageElement for the logo mask (needs transparent background) */
  image?: string | HTMLImageElement;
  /** Fallback shape if no image is provided */
  shape?: LiquidLogoShape;

  // Colours
  /** Background / base metal colour. Default: #aaaaac (silver) */
  colorBack?: string;
  /** Overlay tint applied with colour-burn blending. Default: #ffffff */
  colorTint?: string;

  // Metal look
  /** Density of the reflective stripe pattern (1–10). Default: 2 */
  repetition?: number;
  /** Edge softness — 0 = hard chrome, 1 = soft gradient. Default: 0.1 */
  softness?: number;
  /** Red channel chromatic dispersion (-1 to 1). Default: 0.3 */
  shiftRed?: number;
  /** Blue channel chromatic dispersion (-1 to 1). Default: 0.3 */
  shiftBlue?: number;
  /** Noise distortion strength over the stripe pattern (0–1). Default: 0.07 */
  distortion?: number;
  /** Edge-contour distortion strength (0–1). Default: 0.4 */
  contour?: number;
  /** Direction of the flowing animation in degrees (0–360). Default: 70 */
  angle?: number;

  // Canvas / layout
  width?: number | string;
  height?: number | string;
  /** Zoom level (0.01–4). Default: 0.6 */
  scale?: number;
  /** How the shader fills the canvas. Default: "contain" */
  fit?: LiquidLogoFit;
  /** Animation speed — 0 pauses, 1 = real-time. Default: 1 */
  speed?: number;
}

export function LiquidLogo({
  image,
  shape = "metaballs",

  colorBack = "#cfe0ee",
  colorTint = "#ffffff",

  repetition = 6,
  softness = 0.1,
  shiftRed = 0.3,
  shiftBlue = 0.3,
  distortion = 0.07,
  contour = 0.4,
  angle = 70,

  width = 1000,
  height = 1000,
  scale = 0.5,
  fit = "cover",
  speed = 2,
}: LiquidLogoProps) {
  return (
    <LiquidMetal
      
      {...(image ? { image } : { shape })}
      
      colorBack={colorBack}
      colorTint={colorTint}
      
      repetition={repetition}
      softness={softness}
      shiftRed={shiftRed}
      shiftBlue={shiftBlue}
      distortion={distortion}
      contour={contour}
      angle={angle}
     
      width={width}
      height={height}
      scale={scale}
      fit={fit}
      speed={speed}
    />
  );
}
