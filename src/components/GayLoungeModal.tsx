// src/components/GayLoungeModal.tsx
import React from 'react';
import { Modal } from './Modal';
import { DoorOpen, Euro, MapPin } from 'lucide-react';

interface GayLoungeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GayLoungeModal({ isOpen, onClose }: GayLoungeModalProps) {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Клуб+Асайлъм+ул.+Христо+Белчев+1+София';
  const embedMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjciTiAyM8KwMTknMTguOSJF!5e0!3m2!1sen!2sbg!4v1234567890';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-white">
        {/* Banner */}
        <div className="relative -mx-6 -mt-6">
          <img
            src="https://i0.wp.com/kinkcorp.com/wp-content/uploads/2026/01/Gay-Lounge-2.png?resize=1536%2C864&ssl=1"
            alt="Gay Lounge Banner"
            className="w-full h-auto object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="text-5xl font-impact uppercase tracking-wider text-[#ff0000] mb-4">
            GAY LOUNGE
          </h3>
          <p className="text-2xl font-medium text-[#ff0000]">
            Every Sunday
          </p>
        </div>

        {/* Details – хоризонтално на мобилно */}
        <div className="grid grid-cols-3 gap-4 text-center md:gap-6">
          <div className="flex flex-col items-center">
            <DoorOpen className="text-[#ff0000] mb-1" size={28} />
            <p className="text-sm md:text-xl text-[#ff0000] font-medium">Doors</p>
            <p className="text-base md:text-2xl font-bold text-[#ff0000]">18:00</p>
          </div>

          <div className="flex flex-col items-center">
            <Euro className="text-[#ff0000] mb-1" size={28} />
            <p className="text-sm md:text-xl text-[#ff0000] font-medium">Entry</p>
            <p className="text-base md:text-2xl font-bold text-[#ff0000]">6 €</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="text-[#ff0000] mb-1" size={28} />
            <p className="text-sm md:text-xl text-[#ff0000] font-medium">Location</p>
            <p className="text-base md:text-2xl font-bold text-[#ff0000]">Club Asylum</p>
          </div>
        </div>

        {/* Important Info */}
        <div className="text-center space-y-4 text-lg">
          <p className="text-xl font-medium text-[#ff0000]">
            Tickets are available <span className="text-[#ff0000] font-bold">only at the door</span>.
          </p>
          <p className="text-[#ff0000]">
            Tickets cannot be reserved or purchased online.
          </p>
          <p className="italic text-[#ff0000] text-xl">
            Just come on Sunday at 18:00!
          </p>
        </div>

        {/* Map */}
        <div className="space-y-4">
          <div className="aspect-video w-full border border-white/10 rounded overflow-hidden">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Asylum"
            />
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[#ff0000] text-white text-center uppercase font-medium hover:bg-[#cc0000] transition rounded"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </Modal>
  );
}
