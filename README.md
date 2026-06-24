# Тарас Шевельов — сайт масажиста

Преміальний односторінковий сайт на Next.js 14 (App Router), TypeScript та Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте http://localhost:3000

## Структура

- `app/page.tsx` — всі секції сторінки
- `app/layout.tsx` — метадані, SEO
- `app/globals.css` — базові стилі, ефект зерна на фото, анімації
- `components/Nav.tsx` — фіксована навігація
- `components/Reveal.tsx` — fade-up анімація при скролі
- `components/Faq.tsx` — акордеон FAQ
- `public/taras.jpg` — портретне фото

## Збірка для продакшну

```bash
npm run build
npm run start
```
