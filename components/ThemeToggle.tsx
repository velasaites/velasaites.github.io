"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

// Кнопка смены темы в шапке. Тему хранит атрибут data-theme на <html> (его ставит скрипт в layout.tsx),
// выбор запоминается в localStorage. Новая тема расходится кругом от кнопки (View Transitions),
// а при выключенных в системе анимациях — просто плавно проявляется.
export default function ThemeToggle() {
  // Пока тему не выбирали вручную — следуем за темой устройства
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    if (!document.startViewTransition) return apply();
    const transition = document.startViewTransition(apply);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Сменить тему: светлая или тёмная"
      title="Светлая / тёмная тема"
      className="theme-toggle relative grid size-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:text-accent"
    >
      <MoonIcon className="icon-moon col-start-1 row-start-1 size-[18px]" />
      <SunIcon className="icon-sun col-start-1 row-start-1 size-5" />
    </button>
  );
}
