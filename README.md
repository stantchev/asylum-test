# Gay Parties Sofia

Web приложение за показване на гей партита и събития в София (клуб Asylum). Събира информация от WooCommerce API, добавя recurring събитие "Gay Lounge" и предоставя удобен интерфейс с модали за правила, about и т.н.

## Основни функции

- **Динамично зареждане на събития** от WooCommerce REST API (`/wp-json/wc/v3/products`)
- **Автоматично генериране** на recurring събитие **Gay Lounge** (всяка неделя от 16.01.2026 нататък)
- **Специален модал** за Gay Lounge с банер, цени, правила за вход и Google Maps
- **Sidebar** с навигация по месеци, Rules / About / Imprint / Privacy
- **Responsive дизайн** (мобилно меню, smooth scroll до месеци)
- **Loading / Error states** + background overlay

## Технологии

- **Frontend**: React 18 + TypeScript + Vite
- **Стилизация**: Tailwind CSS
- **Икони**: lucide-react
- **UI компоненти**: Headless UI (Dialog/Transition) + custom Modal
- **API**: WooCommerce REST API v3 (products)
- **Други**: React Router (за EventPage), date handling с native Date

## Структура (основни файлове)
project-root/
├── public/
│   └── images/
│       ├── bg.jpg
│       ├── bg.webp
│       ├── gay-parties-logo.svg
│       └── test.tsx
│
└── src/
├── components/
│   ├── AboutModal.tsx
│   ├── EventCard.tsx
│   ├── GayLoungeModal.tsx
│   ├── ImprintModal.tsx
│   ├── Modal.tsx
│   ├── PrivacyModal.tsx
│   ├── RulesModal.tsx
│   └── Sidebar.tsx
│
├── data/
│   └── events.ts
│
├── pages/
│   ├── EventPage.tsx
│   └── index.tsx
│
├── services/
│   └── api.ts
│
├── styles/
│   └── globals.css
│
├── utils/
│   └── htmlParser.ts
│
├── App.tsx
├── index.css
└── index.tsx


### Кратко описание на основните директории

- `public/images/` – статични изображения (background, logo)
- `src/components/` – всички React компоненти (модали, карта за събитие, sidebar)
- `src/data/` – типове и помощни функции за събития (Event interface, group/sort helpers)
- `src/pages/` – страници (EventPage + index)
- `src/services/` – API логика (fetch от WooCommerce)
- `src/utils/` – помощни функции (HTML парсване)
- `src/styles/` – глобални стилове
- `src/App.tsx` – главен компонент (fetch, state, routing, модали)

## Как работи приложението (high-level)

1. **App.tsx** при mount вика `fetchEvents()` от `services/api.ts`
2. `fetchEvents()` взима продукти от WooCommerce с филтър `search=gay+gays`
3. Трансформира продуктите в `Event[]` чрез `transformProductToEvent`
4. **Добавя** Gay Lounge събития (от 16.01.2026 нататък, всяка неделя)
5. Сортира и групира по месеци
6. Показва 3 активни месеца в Sidebar-а
7. При клик на събитие → отваря `EventPage`
8. При клик на бутон "Entry Info →" в Gay Lounge → отваря `GayLoungeModal`
9. Sidebar-а има Rules/About/Imprint/Privacy модали

## Инсталация

```bash
npm install
npm run dev
```

# Changelog

## [Unreleased] - 28.01.2026

### Added
- `RulesModal.tsx` с икони, визуално оформление и предупреждение в блок.
- Икони от `lucide-react`: `CameraOff`, `HandHeart`, `Ban`, `Shirt`, `HeartHandshake`.
- `"RULES"` бутон в `Sidebar` до `"ABOUT"` (хоризонтално, с `"|"`).
- `#gay-lounge-modal` `ticketLink` за модала.
- Автоматично генериране на Gay Lounge събитията от 16.01.2026.

### Changed
- Преведох всички видими текстове в модала на английски.
- Цветове променени на червено (`red-400`, `red-300`, `red-500`).
- Унифициран бутон в `EventCard.tsx` – бял с черни букви за Gay Lounge.
- Оптимизирана логика в `App.tsx` за сортиране и групиране.

### Fixed
- Липсващия `onRulesClick` проп в `App.tsx` + state + модал.
- Грешки с `getMonthFromDate` (импорт от `data/events.ts`).
