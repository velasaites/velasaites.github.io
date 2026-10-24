import type { NextConfig } from "next";

// Сайт живёт в корне https://velasaites.github.io/ (репозиторий velasaites/velasaites.github.io),
// поэтому префикса в путях нет. Если сайт переедет в подпапку вида <логин>.github.io/<проект>/ —
// вписать сюда "/<проект>".
const basePath = "";

const nextConfig: NextConfig = {
  // Собираем готовые HTML-страницы в папку out/ — GitHub Pages умеет только такие.
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
