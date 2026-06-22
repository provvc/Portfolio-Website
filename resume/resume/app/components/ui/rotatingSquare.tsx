import { useEffect, useRef } from 'react';
import p5 from 'p5';

export function ShapesSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      // let astronaut: p5.Geometry;

      p.setup = () => {
        p.createCanvas(710, 400, p.WEBGL);
        p.angleMode(p.DEGREES);
      };

      const rotateWithFrameCount = () => {
        p.rotateZ(p.frameCount);
        p.rotateX(p.frameCount);
        p.rotateY(p.frameCount);
      };

      p.draw = () => {
      p.background(255);        // black bg to see contrast
      p.ambientLight(100);
      p.pointLight(255, 255, 255, 0, 0, 300);

      p.push();
      p.translate(-75, -100, 0);
      rotateWithFrameCount();
      p.specularMaterial(80, 80, 80);
      p.shininess(80);
      p.box(70, 70, 70);
      p.pop();
    };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={containerRef} />;
}