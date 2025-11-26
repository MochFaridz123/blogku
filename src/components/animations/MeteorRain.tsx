import { useEffect, useRef } from "react";
import meteorImage from "@/assets/meteor.png";

interface Meteor {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

const MeteorRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Meteor[]>([]);
  const meteorImg = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load meteor image
    const img = new Image();
    img.src = meteorImage;
    img.onload = () => {
      meteorImg.current = img;
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create meteors
    const createMeteor = (): Meteor => ({
      x: Math.random() * canvas.width,
      y: -50,
      speed: 2 + Math.random() * 3,
      size: 20 + Math.random() * 30,
      opacity: 0.3 + Math.random() * 0.7,
    });

    // Initialize meteors
    for (let i = 0; i < 5; i++) {
      meteorsRef.current.push(createMeteor());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteorsRef.current.forEach((meteor, index) => {
        // Update position
        meteor.y += meteor.speed;
        meteor.x += meteor.speed * 0.5;

        // Draw meteor with glow
        if (meteorImg.current) {
          // Glow effect
          ctx.shadowBlur = 20;
          ctx.shadowColor = "#ffffffff";
          ctx.globalAlpha = meteor.opacity;
          
          // Draw meteor image
          ctx.drawImage(
            meteorImg.current,
            meteor.x,
            meteor.y,
            meteor.size,
            meteor.size
          );

          // Add trail
          ctx.beginPath();
          ctx.moveTo(meteor.x + meteor.size / 2, meteor.y);
          ctx.lineTo(meteor.x - meteor.size, meteor.y - meteor.size);
          ctx.strokeStyle = `rgba(125, 255, 79, ${meteor.opacity * 0.3})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        // Reset meteor if off screen
        if (meteor.y > canvas.height || meteor.x > canvas.width) {
          meteorsRef.current[index] = createMeteor();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default MeteorRain;
