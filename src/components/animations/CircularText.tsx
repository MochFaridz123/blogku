import { useEffect, useRef, useState } from "react";

const CircularText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const text = "Explore My Forest Portfolio ✦ ";
  const radius = 80;
  const animationRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setMousePosition((prev) => {
        const dx = lastMousePos.current.x - prev.x;
        const dy = lastMousePos.current.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });

      setRotation((prev) => prev + 1);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
        {characters.map((char, index) => {
          const angle = index * angleStep;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={index}
              className="absolute text-accent font-bold text-sm text-glow"
              style={{
                left: `${radius + x}px`,
                top: `${radius + y}px`,
                transform: `rotate(${angle + 90}deg)`,
                transformOrigin: "center",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CircularText;
