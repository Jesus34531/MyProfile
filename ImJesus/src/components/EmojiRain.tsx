import React, { useEffect, useState } from 'react';

// Puedes cambiar los emojis aquí
const emojisArray = ['💻', '🎵', '⚾', '📚', '✨', '🏎️','🎸','🥷'];

export const EmojiRain: React.FC = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number; emoji: string }>>([]);

  useEffect(() => {
    // Generamos 30 gotas de lluvia aleatorias
    const generatedDrops = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Posición horizontal (0% a 100%)
      delay: Math.random() * 5, // Retraso de la animación
      duration: 3 + Math.random() * 4, // Velocidad de caída
      emoji: emojisArray[Math.floor(Math.random() * emojisArray.length)],
    }));
    setDrops(generatedDrops);
  }, []);

  return (
    <div className="emoji-rain-container">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="emoji"
          style={{
            left: `${drop.left}vw`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {drop.emoji}
        </span>
      ))}
    </div>
  );
};