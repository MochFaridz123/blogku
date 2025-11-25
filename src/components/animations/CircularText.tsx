import { useEffect, useState } from "react";

const CircularText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const text = "Explore My Forest Portfolio ✦ ";
  const radius = 80;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate rotation based on mouse movement
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      setRotation(angle * (180 / Math.PI));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
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
