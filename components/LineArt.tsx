// Фоновые рисунки тонкими синими линиями: ноутбук, телефон, окно браузера и огоньки рядом.
// Цвет, прозрачность и свечение — класс .line-art в globals.css; линии прорисовываются при прокрутке.
// Каждой фигуре задан pathLength={1}, чтобы анимация «рисования» шла одинаково для любой длины линии.

type ArtProps = { className?: string };

function Art({ viewBox, className = "", children }: { viewBox: string; className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={`line-art pointer-events-none select-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function LaptopArt({ className }: ArtProps) {
  return (
    <Art viewBox="0 0 640 400" className={className}>
      {/* корпус */}
      <rect x="80" y="12" width="480" height="312" rx="18" pathLength={1} />
      <rect x="100" y="32" width="440" height="272" rx="6" pathLength={1} />
      <circle cx="320" cy="22" r="3" pathLength={1} />
      <path d="M16 340H624L606 368Q601 376 592 376H48Q39 376 34 368Z" pathLength={1} />
      <path d="M268 340Q272 350 284 350H356Q368 350 372 340" pathLength={1} />
      {/* сайт на экране: шапка */}
      <path d="M124 56H176" pathLength={1} />
      <path d="M380 56H404M418 56H442M456 56H480" pathLength={1} />
      <rect x="494" y="48" width="30" height="16" rx="8" pathLength={1} />
      {/* первый экран */}
      <path d="M124 100H318M124 120H286M124 144H244" pathLength={1} />
      <rect x="124" y="162" width="76" height="24" rx="12" pathLength={1} />
      <rect x="352" y="88" width="168" height="104" rx="10" pathLength={1} />
      <path d="M352 172L398 136L428 160L462 124L520 178" pathLength={1} />
      <circle cx="384" cy="112" r="9" pathLength={1} />
      {/* карточки */}
      <rect x="124" y="214" width="120" height="74" rx="8" pathLength={1} />
      <rect x="260" y="214" width="120" height="74" rx="8" pathLength={1} />
      <rect x="396" y="214" width="124" height="74" rx="8" pathLength={1} />
      <path d="M138 270H196M274 270H332M410 270H468" pathLength={1} />
    </Art>
  );
}

export function PhoneArt({ className }: ArtProps) {
  return (
    <Art viewBox="0 0 230 450" className={className}>
      {/* корпус, экран, «островок», кнопки сбоку */}
      <rect x="14" y="10" width="202" height="430" rx="36" pathLength={1} />
      <rect x="26" y="22" width="178" height="406" rx="26" pathLength={1} />
      <rect x="85" y="34" width="60" height="16" rx="8" pathLength={1} />
      <path d="M11 118V150M11 164V196M219 138V196" pathLength={1} />
      {/* интерфейс магазина */}
      <path d="M46 78H96" pathLength={1} />
      <circle cx="182" cy="78" r="9" pathLength={1} />
      <rect x="44" y="100" width="142" height="112" rx="14" pathLength={1} />
      <path d="M44 190L82 158L106 178L136 148L186 196" pathLength={1} />
      <path d="M44 234H164M44 252H132" pathLength={1} />
      <rect x="44" y="270" width="58" height="22" rx="11" pathLength={1} />
      <rect x="44" y="308" width="66" height="46" rx="9" pathLength={1} />
      <rect x="120" y="308" width="66" height="46" rx="9" pathLength={1} />
      <rect x="44" y="372" width="142" height="36" rx="18" pathLength={1} />
    </Art>
  );
}

export function BrowserArt({ className }: ArtProps) {
  return (
    <Art viewBox="0 0 520 380" className={className}>
      {/* окно */}
      <rect x="10" y="10" width="500" height="340" rx="16" pathLength={1} />
      <path d="M10 52H510" pathLength={1} />
      <circle cx="38" cy="31" r="5" pathLength={1} />
      <circle cx="58" cy="31" r="5" pathLength={1} />
      <circle cx="78" cy="31" r="5" pathLength={1} />
      <rect x="170" y="21" width="180" height="20" rx="10" pathLength={1} />
      {/* каталог: фильтры и карточки товаров */}
      <rect x="40" y="76" width="54" height="20" rx="10" pathLength={1} />
      <rect x="104" y="76" width="64" height="20" rx="10" pathLength={1} />
      <rect x="178" y="76" width="54" height="20" rx="10" pathLength={1} />
      <rect x="40" y="116" width="134" height="108" rx="10" pathLength={1} />
      <rect x="193" y="116" width="134" height="108" rx="10" pathLength={1} />
      <rect x="346" y="116" width="134" height="108" rx="10" pathLength={1} />
      <path d="M40 246H140M193 246H293M346 246H446" pathLength={1} />
      <path d="M40 266H90M193 266H243M346 266H396" pathLength={1} />
      <rect x="40" y="296" width="134" height="30" rx="15" pathLength={1} />
      {/* курсор */}
      <path d="M392 278V318L402 308L410 326L418 322L410 304H424Z" pathLength={1} />
    </Art>
  );
}

export function BubbleArt({ className }: ArtProps) {
  return (
    <Art viewBox="0 0 200 150" className={className}>
      <path d="M24 16H176Q188 16 188 28V98Q188 110 176 110H84L52 136L58 110H24Q12 110 12 98V28Q12 16 24 16Z" pathLength={1} />
      <path d="M86 50Q86 34 100 34Q115 34 115 49Q115 60 100 65V75" pathLength={1} />
      <circle cx="100" cy="89" r="2.5" pathLength={1} />
    </Art>
  );
}

// Огоньки: маленькие светящиеся точки, мерцают. Позиции — в процентах от родителя.
const defaultEmbers: [number, number, number, number][] = [
  [8, 18, 4, 0],
  [22, 72, 3, 1.4],
  [64, 10, 5, 0.6],
  [86, 46, 3, 2.1],
  [48, 88, 4, 1],
  [92, 84, 3, 2.8],
];

export function Embers({ className = "", points = defaultEmbers }: { className?: string; points?: [number, number, number, number][] }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {points.map(([left, top, size, delay]) => (
        <span
          key={`${left}-${top}`}
          className="ember"
          style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}
