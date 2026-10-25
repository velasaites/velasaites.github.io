"use client";

import { useEffect, useState } from "react";

// Меню для телефона и планшета: кнопка в шапке раскрывает список разделов, Esc или выбор пункта закрывают.
export default function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen(!open)}
        className="grid size-10 place-items-center rounded-full border border-line bg-surface transition hover:border-accent"
      >
        <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d={open ? "m5 5 10 10" : "M3.5 7h13"} className="transition-all" />
          <path d={open ? "M15 5 5 15" : "M3.5 13h13"} className="transition-all" />
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-3 top-[4.75rem] grid gap-1 rounded-3xl border border-line bg-surface p-2 shadow-2xl shadow-black/30"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-medium transition hover:bg-accent-soft"
            >
              {item.label}
              <span className="text-accent" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
