// src/components/PrivacyModal.tsx
import React from 'react';
import { Modal } from './Modal';
import {
  Shield,
  Lock,
  CameraOff,
  Database,
  UserCheck,
  FileText,
} from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-white">
        {/* Главно заглавие */}
        <h3 className="text-4xl md:text-5xl font-impact uppercase text-[#FF2800] text-center tracking-wider mb-2">
          PRIVACY POLICY
        </h3>

        <p className="text-center text-gray-400 text-lg mb-10 leading-relaxed">
          At Asylum, your privacy matters. We are committed to protecting your personal data.
        </p>

        {/* Списък с ключови секции – с икони */}
        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <Shield className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Our Commitment</strong>
              <p className="text-gray-300 leading-relaxed">
                We respect your privacy and take all necessary measures to safeguard your personal information.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Database className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Information We Collect</strong>
              <p className="text-gray-300 leading-relaxed">
                We may collect personal data such as your name, email address, and payment details when you purchase tickets or subscribe to our mailing list.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Lock className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">How We Use Your Information</strong>
              <p className="text-gray-300 leading-relaxed">
                Your data is used to process purchases, send event updates, and improve our services. We do not sell or share your personal data with third parties without your explicit consent.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <CameraOff className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Photography Policy</strong>
              <p className="text-gray-300 leading-relaxed">
                Asylum enforces a strict no-photo and no-recording policy inside the venue to protect the privacy and freedom of all guests. Any unauthorized photography or recording is prohibited.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <UserCheck className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Your Rights</strong>
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your personal data at any time. Contact us for any privacy-related inquiries.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FileText className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Data Security</strong>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs md:text-sm text-gray-500 pt-8">
          Last updated: January 2026
        </p>
      </div>
    </Modal>
  );
}