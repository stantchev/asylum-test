import React from 'react';
import { Modal } from './Modal';
import {
  CameraOff,
  HandHeart,
  Ban,
  Shirt,
  Ban as BanIcon,
  HeartHandshake,
} from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RulesModal({ isOpen, onClose }: RulesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-white">
        {/* Заглавие */}
        <h3 className="text-3xl md:text-4xl font-impact uppercase text-red-500 text-center tracking-wider mb-2">
          Club Rules
        </h3>
        <p className="text-center text-gray-400 text-lg mb-8">
          Please read and respect these rules – they keep the space safe and enjoyable for everyone.
        </p>

        {/* Списък с правила – с икони */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CameraOff className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">No photos or videos</strong>
              <p className="text-gray-300 leading-relaxed">
                Respect privacy and consent – no cameras, phones or recording of any kind.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HandHeart className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">Consent is mandatory</strong>
              <p className="text-gray-300 leading-relaxed">
                Always ask before touching or approaching someone. No means no.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Ban className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">No harassment</strong>
              <p className="text-gray-300 leading-relaxed">
                Any form of unwanted attention, comments or behavior will result in immediate removal.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shirt className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">Respect the dress code</strong>
              <p className="text-gray-300 leading-relaxed">
                Follow the event-specific rules – they are there for the vibe and safety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BanIcon className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">No drugs or illegal substances</strong>
              <p className="text-gray-300 leading-relaxed">
                Zero tolerance – immediate removal and potential ban.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HeartHandshake className="text-red-400 mt-1 flex-shrink-0" size={28} />
            <div>
              <strong className="text-xl block mb-1">Be kind and inclusive</strong>
              <p className="text-gray-300 leading-relaxed">
                This is a safe space for everyone – treat people with respect and kindness.
              </p>
            </div>
          </div>
        </div>

        {/* Важно предупреждение */}
        <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-6 mt-10 text-center">
          <p className="text-xl font-bold text-red-300 mb-2">
            Break the rules → you leave. No exceptions.
          </p>
          <p className="text-gray-300">
            Have fun, stay safe, and enjoy the night!
          </p>
        </div>
      </div>
    </Modal>
  );
}