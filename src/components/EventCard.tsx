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

  // Проверка дали е Gay Lounge
  const isGayLounge =
    title.toUpperCase().includes('GAY LOUNGE') ||
    ticketLink === '#gay-lounge-modal';

  const handleTicketClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // спираме bubble към card-а ако има onClick

    if (isGayLounge) {
      setIsModalOpen(true);
    } else if (ticketLink) {
      window.open(ticketLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div
        className={`relative mb-12 group transition-all duration-300
          ${onClick ? 'cursor-pointer hover:brightness-110' : ''}
        `}
        onClick={onClick}
      >

        <div className="flex flex-col space-y-1">

          {/* DAY badge */}
          <span className="inline-block w-fit bg-red-600 px-4 py-1.5 text-white font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(255,0,0,0.6)]">
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
            {price && !isGayLounge && (
              <p className="mt-2 font-bold text-emerald-400">{price}</p>
            )}
          </div>

          {/* Ticket / Info CTA */}
          {(ticketLink || isGayLounge) && (
            <div className="mt-6">
              <button
                type="button"
                onClick={handleTicketClick}
                className={`inline-block px-6 py-3 font-impact uppercase tracking-wide text-sm md:text-base transition-colors rounded
                  ${isGayLounge
					? 'bg-white hover:bg-gray-200 text-black'
                    : 'bg-white hover:bg-gray-200 text-black'}
                `}
              >
                {isGayLounge ? 'Entry Info →' : 'Get Tickets →'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Модалът за Gay Lounge */}
      {isGayLounge && (
        <GayLoungeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}