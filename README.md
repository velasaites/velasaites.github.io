# Vela — портфолио, сайты для бизнеса

Одностраничный сайт-портфолио. Next.js + Tailwind, собирается в готовые HTML-страницы
и публикуется на GitHub Pages: `https://velasaites.github.io/`.

## Где что менять

| Что | Где |
|---|---|
| Все тексты: имя, услуги, работы, шаги, цены, вопросы, контакты | `content/site.json` |
| Цены и сроки | `pricing` в `content/site.json` (карточка с `"featured": true` выделяется цветом) |
| Картинка-превью ссылки в мессенджерах | `app/opengraph-image.png` (1200×630), подпись — `app/opengraph-image.alt.txt` |
| Картинки работ | `public/works/` (имя файла — в `works[].image` в `site.json`) |
| Ноутбук и телефон на первом экране | `showcase` в `site.json`: адрес в строке браузера и снимки `public/works/showcase-desktop.jpg` (1280×800), `showcase-mobile.jpg` (480 px в ширину) |
| Вёрстка страницы | `app/page.tsx` |
| Мини-иллюстрации в карточках услуг | `components/ServiceVisual.tsx` (какую показать — `services[].visual` в `site.json`) |
| Цвета, шрифты и анимации | `app/globals.css`, `app/layout.tsx` |
| Значок во вкладке | `app/icon.svg` |

## Как посмотреть у себя

```bash
npm install
npm run dev
```

Сайт откроется по адресу http://localhost:3000/

## Как опубликовать

Сохранить изменения в GitHub (`git push` в ветку `main`) — GitHub сам соберёт сайт
и выложит его (`.github/workflows/deploy.yml`). Через 1–2 минуты обновление видно по ссылке.

## Важно

Репозиторий открытый — код видит любой. Никаких паролей, токенов и личных данных
(фамилия, адрес, школа, телефон) в файлах.

## Фото на первом экране

На ноутбуке и телефоне — пример сайта выдуманного магазина одежды SÉVA, собранный из бесплатных
фотографий [Unsplash](https://unsplash.com) (лицензия Unsplash разрешает коммерческое использование):

- девушка в бежевой куртке — mojtaba mosayebzadeh, https://unsplash.com/photos/nTLcbrCUVBQ
- девушка в бежевом пальто у воды — Margo Evardson, https://unsplash.com/photos/dnCcCJvk0Ic
- свитер на вешалке — Yuliia Pakhomova, https://unsplash.com/photos/nU5cyclcWuA
- кардиган и очки — Priscilla Luna Riguera, https://unsplash.com/photos/PbzOBFz8Ulc
- стопка свитеров — Meg MacDonald, https://unsplash.com/photos/9cxiJMMUJZ4
