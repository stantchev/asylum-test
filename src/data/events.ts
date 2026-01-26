// Event interface - keep for TypeScript typing
export interface Event {
  id: string;
  day: string;
  date: string;
  time: string;
  title: string;
  details: string;
  doorTime?: string;
  isSpecial?: boolean;
  lineup?: string;
  description?: string;
  ticketLink: string;
  price?: string;
  month: string;
  image?: string;
}

// Helper function to get event by ID
export function getEventById(events: Event[], id: string): Event | undefined {
  return events.find((event) => event.id === id);
}

// Helper function to group events by month
export function groupEventsByMonth(events: Event[]): Record<string, Event[]> {
  return events.reduce(
    (acc, event) => {
      if (!acc[event.month]) {
        acc[event.month] = [];
      }
      acc[event.month].push(event);
      return acc;
    },
    {} as Record<string, Event[]>
  );
}

// Helper function to get current month name
export function getCurrentMonth(): string {
  const months = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'];

  return months[new Date().getMonth()];
}

// Helper function to get next N months including current
export function getNextMonths(count: number = 3): string[] {
  const months = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'];

  const currentMonthIndex = new Date().getMonth();
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const monthIndex = (currentMonthIndex + i) % 12;
    result.push(months[monthIndex]);
  }

  return result;
}

// Helper function to sort events by date
export function sortEventsByDate(events: Event[]): Event[] {
  return events.sort((a, b) => {
    const dateA = parseEventDate(a.date);
    const dateB = parseEventDate(b.date);
    return dateA.getTime() - dateB.getTime();
  });
}

function parseEventDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year || 2026, (month || 1) - 1, day || 1);
}