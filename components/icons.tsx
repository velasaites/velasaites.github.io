// Мелкие иконки сайта. Цвет берут из currentColor, размер — из className
// (если className передан, в нём должен быть и размер, например size-4).
type IconProps = { className?: string };

function Stroke({ className = "size-4", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m5 10.5 3.2 3L15 6.5" />
    </Stroke>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M6 14 14 6M7 6h7v7" />
    </Stroke>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M10 4v12M4 10h12" />
    </Stroke>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M7 9V7a3 3 0 0 1 6 0v2" />
    </Stroke>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.3 4.3l1.1 1.1M14.6 14.6l1.1 1.1M4.3 15.7l1.1-1.1M14.6 5.4l1.1-1.1" />
    </Stroke>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7Z" />
    </Stroke>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6.5V10l2.5 1.5" />
    </Stroke>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M3 3.5h2l1.6 9h8.2l1.7-6.5H6" />
      <circle cx="8" cy="16.5" r="1" />
      <circle cx="14" cy="16.5" r="1" />
    </Stroke>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="4.5" width="14" height="11" rx="2" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </Stroke>
  );
}

export function TelegramIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.5 13.3 1.8 11.8c-1-.3-1-1 .2-1.5L20.5 3.2c.9-.3 1.6.2 1.4 1.1Z" />
    </svg>
  );
}

// Четырёхлучевая звёздочка-разделитель для бегущей строки
export function SparkIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M10 1.5c.6 4.6 3.9 7.9 8.5 8.5-4.6.6-7.9 3.9-8.5 8.5-.6-4.6-3.9-7.9-8.5-8.5 4.6-.6 7.9-3.9 8.5-8.5Z" />
    </svg>
  );
}
