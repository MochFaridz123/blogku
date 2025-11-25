import { useEffect, useRef, useState } from "react";

const BouncingMarquee = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const speed = 2;

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!textRef.current || !containerRef.current) return;

      const textWidth = textRef.current.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const maxPosition = containerWidth - textWidth;

      setPosition((prev) => {
        let newPosition = prev + speed * direction;

        // Bounce at boundaries
        if (newPosition <= 0) {
          newPosition = 0;
          setDirection(1);
        } else if (newPosition >= maxPosition) {
          newPosition = maxPosition;
          setDirection(-1);
        }

        return newPosition;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 py-4 border-y border-forest-lime/30"
    >
      <div
        ref={textRef}
        className="inline-block whitespace-nowrap text-glow"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-accent">
          🌿 Selamat Datang di Forest Portfolio 🌿
        </h2>
      </div>
    </div>
  );
};

export default BouncingMarquee;
