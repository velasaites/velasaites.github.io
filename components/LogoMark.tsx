// Значок Vela: два паруса складываются в букву V. Цвета — из --logo-a / --logo-b (globals.css).
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M6 7Q8 26 19 33V11Z" fill="var(--logo-a)" />
      <path d="M34 7Q32 26 21 33V11Z" fill="var(--logo-b)" />
    </svg>
  );
}
