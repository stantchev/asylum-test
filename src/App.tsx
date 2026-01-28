import React, { useEffect, useState, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { EventCard } from './components/EventCard';
import { AboutModal } from './components/AboutModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ImprintModal } from './components/ImprintModal';
import { RulesModal } from './components/RulesModal'; // ← добавен
import { EventPage } from './pages/EventPage';
import {
  Event,
  groupEventsByMonth,
  getCurrentMonth,
  getNextMonths,
  sortEventsByDate,
  getMonthFromDate,
} from './data/events';
import { fetchEvents } from './services/api';

export function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false); // ← НОВО: state за RULES модала
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeMonths, setActiveMonths] = useState<string[]>([]);
  const monthRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Fetch events on mount + добавя Gay Lounge от 16.01.2026
  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        setError(null);

        let fetchedEvents = await fetchEvents();

        // Добавяме Gay Lounge събития от 16.01.2026 нататък (само неделите)
        const startDate = new Date(2026, 0, 16); // 16 януари 2026
        const gayLoungeEvents: Event[] = [];
        let current = new Date(startDate);

        while (current.getFullYear() <= 2026) {
          if (current.getDay() === 0) { // 0 = Sunday
            const day = current.getDate().toString().padStart(2, '0');
            const month = (current.getMonth() + 1).toString().padStart(2, '0');
            const dateStr = `${day}.${month}.2026`;

            gayLoungeEvents.push({
              id: `gay-lounge-${dateStr.replace(/\./g, '-')}`,
              day: 'SUNDAY',
              date: dateStr,
              time: '18:00',
              title: 'GAY LOUNGE',
              details: 'Entry: 6€ - only at the door',
              doorTime: '18:00',
              isSpecial: true,
              lineup: '',
              description:
                'Gay Lounge every Sunday at Club Asylum.\n\n' +
                'Tickets are available **only at the door**.\n' +
                'Tickets cannot be reserved or purchased online.\n' +
                'Just come on Sunday at 18:00!',
              ticketLink: '#gay-lounge-modal',
              price: '€6',
              month: getMonthFromDate(dateStr),
              image:
                'https://i0.wp.com/kinkcorp.com/wp-content/uploads/2026/01/Gay-Lounge-2.png?resize=1536%2C864&ssl=1',
            });
          }
          current.setDate(current.getDate() + 1);
        }

        // Комбинираме API събитията + Gay Lounge
        const allEvents = [...fetchedEvents, ...gayLoungeEvents];

        // Сортираме по дата
        const sortedEvents = sortEventsByDate(allEvents);

        setEvents(sortedEvents);

        // Групираме
        const eventsByMonth = groupEventsByMonth(sortedEvents);
        const monthsWithEvents = Object.keys(eventsByMonth);

        // Определяме кои месеци да покажем
        const currentMonth = getCurrentMonth();
        const nextThreeMonths = getNextMonths(3);

        let displayMonths = nextThreeMonths.filter((month) =>
          monthsWithEvents.includes(month)
        );

        // Ако текущият месец няма събития → добавяме предишния ако има
        if (!displayMonths.includes(currentMonth)) {
          const allMonths = [
            'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
            'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
          ];
          const currentIndex = allMonths.indexOf(currentMonth);
          const previousMonth = allMonths[(currentIndex - 1 + 12) % 12];

          if (
            monthsWithEvents.includes(previousMonth) &&
            !displayMonths.includes(previousMonth)
          ) {
            displayMonths.unshift(previousMonth);
          }
        }

        // Ограничаваме до 3 месеца
        setActiveMonths(displayMonths.slice(0, 3));
      } catch (err) {
        console.error('Failed to load events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  // Auto-scroll to current month
  useEffect(() => {
    if (!loading && activeMonths.length > 0) {
      const currentMonth = getCurrentMonth();
      const targetMonth = activeMonths.includes(currentMonth)
        ? currentMonth
        : activeMonths[0];

      setTimeout(() => {
        const monthElement = monthRefs.current[targetMonth];
        if (monthElement) {
          monthElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 300);
    }
  }, [loading, activeMonths]);

  if (selectedEvent) {
    return <EventPage event={selectedEvent} onBack={() => setSelectedEvent(null)} />;
  }

  const eventsByMonth = groupEventsByMonth(events);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Sidebar
        months={activeMonths}
        currentMonth={getCurrentMonth()}
        onAboutClick={() => setIsAboutOpen(true)}
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onImprintClick={() => setIsImprintOpen(true)}
        onRulesClick={() => setIsRulesOpen(true)} // ← ТОВА беше липсващото – RULES сега ще работи
      />

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <ImprintModal isOpen={isImprintOpen} onClose={() => setIsImprintOpen(false)} />
      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} /> {/* ← ТОВА също беше липсващо */}

      {/* Main Content */}
      <main className="md:ml-[280px] min-h-screen relative">
        {/* Background */}
        <div className="fixed inset-0 z-0 md:left-[280px]">
          <div className="absolute inset-0 bg-[url('https://cdn.flixel.com/flixel/4sei02lbjw5ws8h1lnvs.thumbnail.jpg')] bg-cover bg-center grayscale contrast-125 brightness-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-16 lg:p-24 max-w-5xl">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
                <p className="text-gray-400">Loading events...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-900/20 border border-red-500/50 rounded p-6 mb-8">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {activeMonths.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-xl">No events scheduled at the moment.</p>
                  <p className="text-gray-500 mt-2">Check back soon for updates.</p>
                </div>
              ) : (
                activeMonths.map((month) => {
                  const monthEvents = eventsByMonth[month] || [];
                  if (monthEvents.length === 0) return null;

                  return (
                    <div
                      key={month}
                      id={month.toLowerCase()}
                      ref={(el) => (monthRefs.current[month] = el)}
                      className="mb-24"
                    >
                      <header className="mb-16 md:mb-20">
                        <h2 className="text-5xl md:text-8xl font-impact text-white/90 uppercase tracking-tight">
                          {month}
                        </h2>
                      </header>

                      <div className="space-y-16">
                        {monthEvents.map((event) => (
                          <EventCard
                            key={event.id}
                            id={event.id}
                            day={event.day}
                            date={event.date}
                            time={event.time}
                            title={event.title}
                            details={event.details}
                            doorTime={event.doorTime}
                            isSpecial={event.isSpecial}
                            lineup={event.lineup}
                            ticketLink={event.ticketLink}
                            onClick={() => setSelectedEvent(event)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}