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
