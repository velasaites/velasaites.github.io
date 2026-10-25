"use client";

// Обёртка для сетки карточек: передаёт положение курсора каждой карточке .spot,
// а globals.css рисует по нему мягкую подсветку фона и рамки.
export default function SpotlightGroup({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`spot-group ${className}`}
      onPointerMove={(e) => {
        for (const card of e.currentTarget.querySelectorAll<HTMLElement>(".spot")) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }
      }}
    >
      {children}
    </div>
  );
}
