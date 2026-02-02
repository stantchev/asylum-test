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
│ └── images/
│ ├── bg.jpg
│ ├── bg.webp
│ ├── gay-parties-logo.svg
│ └── test.tsx
│
└── src/
├── components/
│ ├── AboutModal.tsx
│ ├── EventCard.tsx
│ ├── GayLoungeModal.tsx
│ ├── ImprintModal.tsx
│ ├── Modal.tsx
│ ├── PrivacyModal.tsx
│ ├── RulesModal.tsx
│ └── Sidebar.tsx
│
├── data/
│ └── events.ts
│
├── pages/
│ ├── EventPage.tsx
│ └── index.tsx
│
├── services/
│ └── api.ts
│
├── styles/
│ └── globals.css
│
├── utils/
│ └── htmlParser.ts
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

## [Unreleased] - 02.02.2026

### Added
- `EventCard.tsx` – hover ефект: линия под евента се запълва с #FF2800 отляво надясно, заглавието става #FF2800, евентът се избутва леко надясно + scale
- По-малки и по-четими надписи в `EventCard` (text-xs/sm/md → text-sm/base/lg)
- Финален полиран вид на `EventCard` (закръглен badge, soft shadow, плавни transition-и)
- `RulesModal.tsx` – икони, визуално оформление, предупреждение в блок
- `AboutModal.tsx` – полиран стил с икони, #FF2800 акценти, голямо заглавие, Google Maps
- `ImprintModal.tsx` – полиран стил с икони, #FF2800 акценти, секции с bold заглавия
- `PrivacyModal.tsx` – полиран стил с икони, #FF2800 акценти, секции с bold заглавия
- Автоматично генериране на Gay Lounge събития от 16.01.2026 (в `App.tsx` useEffect)

### Changed
- Цветове в модалите и `EventCard` – ярко #FF2800 навсякъде (без glow)
- Надписи в `EventCard` – една идея по-големи (text-base/md/lg)
- Hover в `Sidebar` – червена линия под месеца само при hover или active (отляво надясно)
- Линията под месеца в `Sidebar` – невидима ако няма hover и не е currentMonth
- Унифициран бутон в `EventCard` – бял с черни букви за Gay Lounge
- Всички клиентски текстове в модалите – на английски

### Fixed
- Липсващия `onRulesClick` проп в `App.tsx` + state + модал
- Грешки с `getMonthFromDate` (импорт от `data/events.ts`)
- Самоимпорт в `Sidebar.tsx` (import { Sidebar } from "./components/Sidebar")
- Логика за `activeMonths` – преизчисляване в useEffect, за да светва следващия месец
- 500 грешка при липса на +Page.tsx (добавихме минимален тест файл)
- Синтактична грешка в `+config.js` (trailing запетая)

### Removed / Cleaned
- Ненужни импорти (като самоимпорт на Sidebar в себе си)
- Стари големи текстови размери в `EventCard` (заменени с по-малки и четими)

Общо:  
- 4 модала (Rules, About, Imprint, Privacy) – в един и същ polished стил
- `EventCard` – супер полирана карта с hover ефекти
- `Sidebar` – hover линия под месеца (само при hover/active)
- `App.tsx` – логика за събития и модали, преизчисляване на activeMonths

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
