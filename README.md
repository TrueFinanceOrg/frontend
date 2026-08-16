# TrueFinance — frontend

Интерфейс веб-приложения для анализа инвестиционного портфеля.

## Стек

- React + Vite + TypeScript
- React Router
- TanStack Query
- Tailwind CSS
- shadcn/ui
- Feature-Sliced Design

## Структура `src`

```text
app/       — инициализация, провайдеры, роутер и глобальные стили
pages/     — страницы маршрутов
widgets/   — крупные блоки интерфейса и layout
features/  — пользовательские сценарии
entities/  — бизнес-сущности
shared/    — общие настройки, утилиты и UI-компоненты
```

Тесты располагаются рядом с проверяемыми файлами, например
`page-placeholder.test.tsx` рядом с `page-placeholder.tsx`.

## Запуск

```bash
npm install
npm run dev
```

Проверка production-сборки:

```bash
npm run build
```
