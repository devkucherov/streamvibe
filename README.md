## Stream Vibe

Фронтенд часть для сервиса по стримингу видео.

### Технологии

- **Vite** — сборщик проектов в обёртке в виде фреймворка Minista.
- **PostCSS** с `postcss-pxtorem` и `postcss-preset-env` (для продакшен‑сборки).
- **БЭМ** - методология для классов в разметке.
- **Sass (SCSS)** для стилизации.
- **Swiper** — слайдеры и карусели.
- **IMask** — маска ввода для телефона.
- **classnames** — удобная работа с классами.
- **@a1rth/css-normalize** — CSS‑нормализация.

### Структура проекта (упрощённо)

- `src/global.jsx` — общий layout сайта (head‑мета, хедер, контент, футер, баннер).
- `src/pages` — страницы:
  - `index.jsx` — главная.
  - `movies.jsx` — список фильмов и шоу.
  - `movie.jsx` — конкретный фильм.
  - `show.jsx` — конкретный сериал.
  - `subscriptions.jsx` — подписки.
  - `support.jsx` — поддержка.
- `src/section` — крупные секции страниц (`Hero`, `Categories`, `Devices`, `Plans`, `PlansComparison`, `MoviesBanner`, `MovieBanner`, `MovieDetails`, `Questions`, `Support`, `Banner` и т.д.).
- `src/components` — переиспользуемые UI‑компоненты (кнопки, карточки, табы, аккордеоны, слайдеры, таблицы, формы и пр.).
- `src/modules` — JS‑модули.
- `src/styles` — глобальные стили, шрифты, переменные и утилиты.
- `minista.config.js` — конфиг Minista (база, ассеты, alias `@/`, опции markdown, search и др.).

### Требования

- **Node.js** 18+ (рекомендуется актуальная LTS‑версия).
- npm или совместимый пакетный менеджер (pnpm, yarn — при необходимости адаптировать команды).

### Установка и запуск

```bash
git clone <repo-url>
cd stream-vibe
npm install
```

#### Режим разработки

```bash
npm start
```

Minista поднимет dev‑сервер. Откройте выведенный адрес (обычно `http://localhost:5173` или аналогичный порт) в браузере.

#### Сборка production‑версии

```bash
npm run build
```

Готовые статические файлы будут лежать в директории `dist` (по настройке `out` в `minista.config.js`).

#### Предпросмотр собранной версии

```bash
npm run preview
```

Minista запустит локальный сервер поверх содержимого `dist` для финальной проверки перед деплоем.

### Деплой

Проект собирается в статический бандл, который можно раздавать с любого статического хостинга:

- GitHub Pages, Netlify, Vercel, Cloudflare Pages и др.

Обратите внимание на поле `base` в `minista.config.js`:

- по умолчанию стоит `base: '/streamvibe/'` — это удобно для деплоя на GitHub Pages в репозиторий с таким именем.
- при деплое в корень домена можно изменить `base` на `'/'`.
