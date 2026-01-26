import { Event } from '../data/events';
import { parseEventDescription, decodeHtmlEntities } from '../utils/htmlParser';

const API_URL = 'https://kinkcorp.com/wp-json/wc/v3/products';
const CONSUMER_KEY = 'ck_6ddbbd55b7f090ffe47b7a55d4cfd02c0e516b94';
const CONSUMER_SECRET = 'cs_d8200ccfb7441499fa5abf3a324cd25110d7bd4d';

interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  price: string;
  date_created: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

/**
 * Fetch events from WooCommerce API
 */
export async function fetchEvents(): Promise<Event[]> {
  try {
    const url = `${API_URL}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&per_page=100&status=publish`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const products: WooCommerceProduct[] = await response.json();

    // Transform WooCommerce products to Event format
    return products.map(transformProductToEvent).filter(Boolean) as Event[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

/**
 * Transform WooCommerce product to Event interface
 */
function transformProductToEvent(product: WooCommerceProduct): Event | null {
  try {
    const parsedDescription = parseEventDescription(product.description);

    // Extract date from name or description
    const dateMatch = product.name.match(/(\d{1,2})\.(\d{1,2})/);
    const date = dateMatch ? `${dateMatch[1]}.${dateMatch[2]}.2026` : '';

    // Extract time from description
    const timeMatch = parsedDescription.fullText.match(/(\d{2}:\d{2})/);
    const time = timeMatch ? timeMatch[1] : '22:00';

    // Determine day of week (simplified - you might want to use a date library)
    const dayOfWeek = getDayOfWeek(date);

    // Extract month
    const month = getMonthFromDate(date);

    // Check if special event
    const isSpecial =
    product.name.toLowerCase().includes('special') ||
    product.name.toLowerCase().includes('flinta') ||
    parsedDescription.fullText.toLowerCase().includes('special');

    // Get event image
    const image = product.images?.[0]?.src || '';

    // Clean up title
    const title = decodeHtmlEntities(product.name).toUpperCase();

    // Extract details (dresscode)
    const details =
    parsedDescription.dresscode ||
    extractDresscode(parsedDescription.fullText) ||
    'Check event details';

    // Extract door time
    const doorTime = extractDoorTime(parsedDescription.fullText);

    // Extract lineup if present
    const lineup = extractLineup(parsedDescription.fullText);

    return {
      id: product.slug,
      day: dayOfWeek,
      date: date,
      time: time,
      title: title,
      details: details,
      doorTime: doorTime,
      isSpecial: isSpecial,
      lineup: lineup,
      description: parsedDescription.fullText,
      ticketLink: product.permalink,
      price: product.price ? `€${product.price}` : undefined,
      month: month,
      image: image
    };
  } catch (error) {
    console.error('Error transforming product:', product.name, error);
    return null;
  }
}

/**
 * Helper functions
 */

function getDayOfWeek(dateStr: string): string {
  if (!dateStr) return 'TBA';

  const [day, month] = dateStr.split('.').map(Number);
  const date = new Date(2026, month - 1, day);
  const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY'];

  return days[date.getDay()];
}

function getMonthFromDate(dateStr: string): string {
  if (!dateStr) return 'UPCOMING';

  const [, month] = dateStr.split('.').map(Number);
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

  return months[month - 1] || 'UPCOMING';
}

function extractDresscode(text: string): string | undefined {
  const match = text.match(/(?:👗|Dress code)[:\s]+(.*?)(?=⛓️|🎟️|📅|$)/is);
  return match?.[1]?.trim().split(/\n/)[0];
}

function extractDoorTime(text: string): string | undefined {
  const match = text.match(/doors?\s*(\d{2}:\d{2}(?:\s*-\s*\d{2}:\d{2})?)/i);
  return match ? `doors ${match[1]}` : undefined;
}

function extractLineup(text: string): string | undefined {
  const match = text.match(/(?:line-?up|lineup)[:\s]+(.*?)(?=👗|⛓️|🎟️|📅|$)/is);
  return match?.[1]?.trim().split(/\n/)[0];
}