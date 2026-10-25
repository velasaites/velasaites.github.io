"use client";

// Ставит тему до отрисовки страницы, чтобы она не мигала: сохранённый выбор (кнопка в шапке)
// или, если его нет, тема устройства.
const script = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

// Приём из руководства Next.js «Preventing flash before hydration»: на сервере скрипт выполняется
// браузером при разборе HTML, а при гидрации на клиенте React видит type="text/plain" и не ругается.
export default function ThemeScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
