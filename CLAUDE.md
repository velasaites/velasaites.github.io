@AGENTS.md

# Vela — сайт-портфолио

- Общение по-русски.
- Тексты — в `content/site.json`; публикация — GitHub Pages через `.github/workflows/deploy.yml` при push в `main`.
- Адрес — https://velasaites.github.io/ (организация GitHub `velasaites`, репозиторий `velasaites.github.io`); `basePath` пустой (`next.config.ts`). Если сайт переедет в подпапку — префикс картинкам в `next/image` добавлять вручную (`NEXT_PUBLIC_BASE_PATH`).
- Репозиторий открытый: никаких секретов и личных данных. Автор коммитов — noreply-адрес GitHub.
