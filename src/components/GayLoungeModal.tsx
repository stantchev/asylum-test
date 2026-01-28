// src/components/GayLoungeModal.tsx
import React from 'react';
import { Modal } from './Modal'; // ← твоят Modal компонент, който вече имаш
import { MapPin, DoorOpen, Euro } from 'lucide-react';

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
          <h3 className="text-5xl font-impact uppercase tracking-wider text-red-400 mb-4">
            GAY LOUNGE
          </h3>
          <p className="text-2xl font-medium">Every Sunday</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <DoorOpen className="mx-auto text-red-400 mb-2" size={32} />
            <p className="text-xl">Doors</p>
            <p className="text-2xl font-bold text-red-300">18:00</p>
          </div>
          <div>
            <Euro className="mx-auto text-red-400 mb-2" size={32} />
            <p className="text-xl">Entry</p>
            <p className="text-2xl font-bold text-red-300">6 €</p>
          </div>
          <div>
            <MapPin className="mx-auto text-red-400 mb-2" size={32} />
            <p className="text-xl">Club Asylum</p>
          </div>
        </div>

        {/* Important Info */}
        <div className="text-center space-y-4 text-lg">
          <p className="text-xl font-medium text-white">
            Tickets are available <span className="text-red-300 font-bold">only at the door</span>.
          </p>
          <p>
            Tickets cannot be reserved or purchased online.
          </p>
          <p className="italic text-red-300 text-xl">
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
            className="block w-full py-4 bg-red-600 text-white text-center uppercase font-medium hover:bg-red-500 transition rounded"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </Modal>
  );
}