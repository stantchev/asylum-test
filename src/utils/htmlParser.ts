/**
 * Utility to parse and clean HTML strings from API responses
 */

export function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

export function stripHtmlTags(html: string): string {
  const decoded = decodeHtmlEntities(html);
  const temp = document.createElement('div');
  temp.innerHTML = decoded;
  return temp.textContent || temp.innerText || '';
}

export function parseHtmlToReact(html: string): string {
  // Decode HTML entities
  const decoded = decodeHtmlEntities(html);

  // Create a temporary div to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = decoded;

  return temp.innerHTML;
}

export function extractTextFromHtml(html: string): string {
  const decoded = decodeHtmlEntities(html);
  const temp = document.createElement('div');
  temp.innerHTML = decoded;

  // Get text content and clean up extra whitespace
  const text = temp.textContent || temp.innerText || '';
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Extract specific information from event description HTML
 */
export function parseEventDescription(html: string): {
  fullText: string;
  dresscode?: string;
  rules?: string;
  tickets?: string;
  date?: string;
  location?: string;
} {
  const decoded = decodeHtmlEntities(html);
  const temp = document.createElement('div');
  temp.innerHTML = decoded;

  const fullText = temp.textContent || temp.innerText || '';

  // Extract specific sections using regex
  const dresscodeMatch = fullText.match(
    /👗\s*Dress code[:\s]+(.*?)(?=⛓️|🎟️|$)/is
  );
  const rulesMatch = fullText.match(/⛓️\s*Rules[:\s]+(.*?)(?=🎟️|👗|$)/is);
  const ticketsMatch = fullText.match(/🎟️\s*Tickets[:\s]+(.*?)(?=---|$)/is);
  const dateMatch = fullText.match(/📅\s*([\d.]+)\s*\|\s*([\d:]+)/);

  return {
    fullText: fullText.replace(/\s+/g, ' ').trim(),
    dresscode: dresscodeMatch?.[1]?.trim(),
    rules: rulesMatch?.[1]?.trim(),
    tickets: ticketsMatch?.[1]?.trim(),
    date: dateMatch?.[0],
    location: 'Club Asylum'
  };
}