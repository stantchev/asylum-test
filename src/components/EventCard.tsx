import React from 'react';

interface EventCardProps {
  id?: string;
  day: string;
  date: string;
  time: string;
  title: string;
  details: string;
  doorTime?: string;
  isSpecial?: boolean;
  lineup?: string;
  ticketLink?: string;
  onClick?: () => void;
}

export function EventCard({
  id,
  day,
  date,
  time,
  title,
  details,
  doorTime,
  isSpecial = false,
  lineup,
  ticketLink,
  onClick
}: EventCardProps) {
  return (
    <div
      className={`relative mb-12 group transition-all duration-300
        ${onClick ? 'cursor-pointer hover:brightness-110' : ''}
        ${isSpecial ? 'pl-6' : ''}
      `}
      onClick={onClick}
    >
      {/* Red accent bar for special events */}
      {isSpecial && (
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
      )}

      <div className="flex flex-col space-y-1">

        {/* Special label */}
        {isSpecial && (
          <span className="text-white text-lg font-medium mb-1 tracking-wider">
            SPECIAL
          </span>
        )}

        {/* DAY badge */}
        <span className="inline-block w-fit border-2 border-red-600 px-3 py-1 text-red-600 font-bold tracking-widest uppercase">
          {day}
        </span>

        {/* Date & Time */}
        <div className="text-xl md:text-2xl font-medium text-white/90 mb-1">
          {date} <span className="ml-2">{time}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-impact uppercase text-white mb-3 leading-tight tracking-tight">
          {title}
        </h2>

        {/* Details */}
        <div className="text-base md:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed">
          <p>{details}</p>
          {doorTime && <p className="mt-1">{doorTime}</p>}
          {lineup && <p className="mt-2 text-white/80">{lineup}</p>}
        </div>

        {/* Ticket CTA */}
        {ticketLink && (
          <div className="mt-4">
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block px-6 py-3 bg-white text-black font-impact uppercase tracking-wide hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Get Tickets →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
