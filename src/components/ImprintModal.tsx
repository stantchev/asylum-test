// src/components/ImprintModal.tsx
import React from 'react';
import { Modal } from './Modal';
import { Info, Mail, Phone, Shield, Copyright, Users } from 'lucide-react';

interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImprintModal({ isOpen, onClose }: ImprintModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-white">
        {/* Главно заглавие */}
        <h3 className="text-4xl md:text-5xl font-impact uppercase text-[#FF2800] text-center tracking-wider mb-2">
          IMPRINT
        </h3>

        <p className="text-center text-gray-400 text-lg mb-10 leading-relaxed">
          Legal information and contact details for Asylum Club Sofia.
        </p>

        {/* Списък със секции – с икони */}
        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <Info className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Legal Information</strong>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Venue Name:</strong> Asylum Club<br />
                <strong className="text-white">Address:</strong> Hristo Belchev Str. 1, Sofia 1000, Bulgaria
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Mail className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Contact</strong>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Email:</strong> coming soon<br />
                <strong className="text-white">Phone:</strong> coming soon
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Shield className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Responsible for Content</strong>
              <p className="text-gray-300 leading-relaxed">
                The content on this website is the responsibility of Asylum Club management.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Shield className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Disclaimer</strong>
              <p className="text-gray-300 leading-relaxed">
                Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Copyright className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Copyright</strong>
              <p className="text-gray-300 leading-relaxed">
                All content, images, and materials on this website are protected by copyright. Unauthorized use or reproduction is prohibited.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Users className="text-[#FF2800] mt-1 flex-shrink-0" size={32} />
            <div>
              <strong className="text-xl md:text-2xl block mb-2 text-white">Age Restriction</strong>
              <p className="text-gray-300 leading-relaxed">
                Entry to Asylum is restricted to persons 18 years and older. Valid ID required at the door.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs md:text-sm text-gray-500 pt-8">
          © 2026 Asylum Sofia. All rights reserved.<br />
          Powered by Stanchev Digital.
        </p>
      </div>
    </Modal>
  );
}