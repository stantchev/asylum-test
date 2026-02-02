// src/components/AboutModal.tsx
import React from 'react';
import { Modal } from './Modal';
import { MapPin, Music, Lock, Volume2, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Клуб+Асайлъм+ул.+Христо+Белчев+1+София';
  const embedMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjciTiAyM8KwMTknMTguOSJF!5e0!3m2!1sen!2sbg!4v1234567890';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-white">
        {/* Главно заглавие */}
        <h3 className="text-4xl md:text-5xl font-impact uppercase text-[#FF2800] text-center tracking-wider mb-2">
          About the place
        </h3>

        {/* Кратко описание */}
        <p className="text-center text-gray-400 text-lg mb-10 leading-relaxed">
          Sofia's sanctuary for self-expression – a late-night space where freedom meets intention.
        </p>

        {/* Списък с ключови характеристики – с икони */}
        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <Music className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Music First</strong>
              <p className="text-gray-300 leading-relaxed">
                From deep house and soulful grooves to hard techno, industrial, and left-field electronica – curated to move both body and mind.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Lock className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">No-Photo Policy</strong>
              <p className="text-gray-300 leading-relaxed">
                High-grade sound, elevated bar, and a dance floor designed for genuine connection. Every detail tuned toward trust, presence, and release.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Volume2 className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">The Space</strong>
              <p className="text-gray-300 leading-relaxed">
                Located in the city centre, Asylum blends club culture with comfort and care.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Heart className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Philosophy</strong>
              <p className="text-white/90 italic text-xl leading-relaxed">
                Lose yourself. Find your freedom. Welcome to Asylum.
              </p>
            </div>
          </div>
        </div>
		<div className="flex items-start gap-5">
            <MapPin className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
			<div>
            <strong className="text-xl md:text-2xl block mb-2 text-white">Location</strong>

          <p className="text-gray-300 leading-relaxed">
            Club Asylum, Sofia City Center, Hristo Belchev Str. 1, 1000 Sofia
          </p>
		  </div>
          </div>
        {/* Location + Google Maps */}
        <div className="space-y-6 mt-10">
          

          {/* Map */}
          <div className="aspect-video w-full border border-white/10 rounded-lg overflow-hidden">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Asylum Location"
            />
          </div>

          {/* Google Maps Link */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[#FF2800] text-white text-center uppercase font-medium text-lg hover:bg-red-700 transition rounded-lg shadow-lg hover:shadow-red-600/50"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </Modal>
  );
}