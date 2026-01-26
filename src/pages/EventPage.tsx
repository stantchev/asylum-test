import React from 'react';
import { Event } from '../data/events';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { parseHtmlToReact } from '../utils/htmlParser';
interface EventPageProps {
  event: Event;
  onBack: () => void;
}
export function EventPage({ event, onBack }: EventPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {event.image ?
        <>
            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${event.image})`
            }}>
          </div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          </> :

        <>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 brightness-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
          </>
        }
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">

          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform" />

          <span className="uppercase text-sm tracking-wide">
            Back to Events
          </span>
        </button>

        {/* Event Header */}
        <div className="mb-12">
          {event.isSpecial &&
          <div className="inline-block px-3 py-1 bg-[#FF0000] text-white text-xs font-bold uppercase tracking-wider mb-4">
              SPECIAL EVENT
            </div>
          }

          <h1 className="text-5xl md:text-7xl font-impact uppercase text-white mb-6 leading-tight">
            {event.title}
          </h1>

          {/* Event Meta */}
          <div className="flex flex-wrap gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {event.day}, {event.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{event.time}</span>
            </div>
            {event.price &&
            <div className="flex items-center gap-2">
                <span className="text-xl">💳</span>
                <span className="font-medium text-white">{event.price}</span>
              </div>
            }
          </div>

          {/* Ticket CTA - Primary */}
          <div className="mb-8">
            <a
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-12 py-4 bg-white text-black text-center font-impact uppercase tracking-wide text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-lg">

              🎟️ Get Tickets
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Limited capacity • Early booking recommended
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-8 bg-black/40 backdrop-blur-sm border border-white/10 p-8">
          {/* Description with HTML parsing */}
          {event.description &&
          <div>
              <h2 className="text-2xl font-impact uppercase mb-4 text-white">
                Event Details
              </h2>
              <div
              className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: parseHtmlToReact(event.description)
              }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem'
              }} />

            </div>
          }

          {/* Quick Info */}
          <div className="border-t border-white/10 pt-6">
            <div className="space-y-3 text-gray-300">
              {event.details &&
              <p>
                  <strong className="text-white">Dress Code:</strong>{' '}
                  {event.details}
                </p>
              }
              {event.doorTime &&
              <p>
                  <strong className="text-white">Door Times:</strong>{' '}
                  {event.doorTime}
                </p>
              }
              {event.lineup &&
              <div>
                  <strong className="text-white">Line-up:</strong>
                  <p className="mt-1">{event.lineup}</p>
                </div>
              }
            </div>
          </div>

          {/* Venue Info */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-impact uppercase mb-4 text-white flex items-center gap-2">
              <MapPin size={24} />
              Venue
            </h2>
            <p className="text-gray-300">
              Клуб Асайлъм
              <br />
              ул. „Христо Белчев" 1<br />
              София център, 1000 София
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Клуб+Асайлъм+ул.+Христо+Белчев+1+София"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-white hover:underline">

              Get Directions →
            </a>
          </div>

          {/* Important Info */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-impact uppercase mb-4 text-white">
              Important Information
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 18+ only. Valid ID required at the door.</li>
              <li>• No photo/video policy strictly enforced.</li>
              <li>• Consent and respect are mandatory.</li>
              <li>• Door selection applies.</li>
              <li>• Tickets are non-refundable.</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto px-12 py-4 bg-white text-black font-impact uppercase tracking-wide text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-lg">

            Get Tickets Now →
          </a>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/95 backdrop-blur-sm border-t border-white/10 md:hidden z-50">
        <a
          href={event.ticketLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-white text-black text-center font-impact uppercase tracking-wide hover:bg-gray-200 transition-colors">

          Get Tickets {event.price && `• ${event.price}`}
        </a>
      </div>
    </div>);

}