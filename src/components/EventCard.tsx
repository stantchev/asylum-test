import React, { useState } from 'react';
import { GayLoungeModal } from './GayLoungeModal';

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
  price?: string;
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
  price,
  onClick,
}: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isGayLounge =
    title.toUpperCase().includes('GAY LOUNGE') ||
    ticketLink === '#gay-lounge-modal';

  const handleTicketClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isGayLounge) {
      setIsModalOpen(true);
    } else if (ticketLink) {
      window.open(ticketLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div
        className={`group relative mb-12 transition-all duration-300 ease-out cursor-pointer
          ${onClick ? 'hover:brightness-105' : ''}
        `}
        onClick={onClick}
      >
        {/* Основен контейнер */}
        <div className="space-y-3 pb-6 group-hover:translate-x-2 group-hover:scale-[1.01] transition-transform duration-300 ease-out">
          {/* DAY badge */}
          <span className="inline-block px-4 py-1.5 text-sm md:text-base font-bold tracking-widest uppercase rounded bg-red-600 text-white shadow-[0_0_10px_rgba(255,40,0,0.5)]">
            {day}
          </span>

          {/* Date & Time */}
          <div className="text-base md:text-lg font-medium text-white/90">
            {date} <span className="ml-2">{time}</span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-3xl font-impact uppercase text-white group-hover:text-[#FF2800] transition-colors duration-300">
            {title}
          </h2>

          {/* Details */}
          <div className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
            <p>{details}</p>
            {doorTime && <p className="mt-1">{doorTime}</p>}
            {lineup && <p className="mt-1 text-white/80">{lineup}</p>}
            {price && !isGayLounge && (
              <p className="mt-1 font-bold text-emerald-400">{price}</p>
            )}
          </div>
        </div>

        {/* Разделителна линия – hover градиент отляво надясно */}
        <div className="relative h-[1.5px] bg-gray-700/70 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF2800] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out"></div>
        </div>

        {/* Ticket / Info CTA */}
        {(ticketLink || isGayLounge) && (
          <div className="mt-5">
            <button
              type="button"
              onClick={handleTicketClick}
              className={`inline-block px-6 py-2.5 text-sm md:text-base font-impact uppercase tracking-wide rounded transition-colors
                bg-white hover:bg-gray-200 text-black shadow-sm hover:shadow-md`}
            >
              {isGayLounge ? 'Entry Info →' : 'Get Tickets →'}
            </button>
          </div>
        )}
      </div>

      {/* Модал за Gay Lounge */}
      {isGayLounge && (
        <GayLoungeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}