import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
}

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const leafEmojis = ["🍃", "🗿", "♠️"];

  useEffect(() => {
    const createLeaves = () => {
      const newLeaves: Leaf[] = [];
      for (let i = 0; i < 15; i++) {
        newLeaves.push({
          id: i,
          emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
          left: Math.random() * 100,
          animationDuration: 8 + Math.random() * 12,
          delay: Math.random() * 10,
          size: 1.5 + Math.random() * 2,
        });
      }
      setLeaves(newLeaves);
    };

    createLeaves();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-70"
          style={{
            left: `${leaf.left}%`,
            top: "-10%",
            fontSize: `${leaf.size}rem`,
            animation: `leaf-fall ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
          }}
        >
          {leaf.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
