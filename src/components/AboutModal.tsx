import React, { lazy } from 'react';
import { Modal } from './Modal';
import { MapPin } from 'lucide-react';
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Клуб+Асайлъм+ул.+Христо+Белчев+1+София';
  const embedMapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjciTiAyM8KwMTknMTguOSJF!5e0!3m2!1sen!2sbg!4v1234567890';
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ABOUT">
      <div className="space-y-6 text-white">
        {/* Club Name */}
        <div>
          <h3 className="text-xl font-impact uppercase mb-2">Asylum</h3>
          <p className="text-gray-300 leading-relaxed">
            Asylum is Sofia's sanctuary for self-expression - a late-night space
            where freedom meets intention. Music drives everything here: from
            deep house and soulful grooves to hard techno, industrial and
            left-field electronica, curated to move both body and mind.
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
            <MapPin size={18} />
            Location
          </h4>
          <p className="text-gray-300">
            Клуб Асайлъм
            <br />
            София център
            <br />
            ул. „Христо Белчев" 1<br />
            1000 София
          </p>
        </div>

        {/* About the Space */}
        <div>
          <h4 className="text-lg font-medium mb-2">The Space</h4>
          <p className="text-gray-300 leading-relaxed">
            Located in the city centre, Asylum blends club culture with comfort
            and care. Expect a no-photo policy, high-grade sound, an elevated
            bar, and a dance floor designed for genuine connection. Behind the
            decks and beyond the bar, every detail is tuned toward trust,
            presence and release.
          </p>
        </div>

        {/* Philosophy */}
        <div>
          <p className="text-white/90 italic text-lg">
            Lose yourself. Find your freedom. Welcome to Asylum.
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="space-y-3">
          <h4 className="text-lg font-medium">Find Us</h4>

          {/* Map Iframe */}
          <div className="aspect-video w-full border border-white/10 overflow-hidden">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Club Asylum Location">
            </iframe>
          </div>

          {/* Google Maps Link */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 bg-white text-black text-center font-medium uppercase tracking-wide hover:bg-gray-200 transition-colors">

            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </Modal>);

}