import React from 'react';
import { Modal } from './Modal';
interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ImprintModal({ isOpen, onClose }: ImprintModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="IMPRINT">
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
        <div>
          <h3 className="text-white font-medium mb-2">Legal Information</h3>
          <p>
            <strong className="text-white">Venue Name:</strong> Клуб Асайлъм
            (Asylum Club)
            <br />
            <strong className="text-white">Address:</strong> ул. „Христо Белчев"
            1, София център, 1000 София, Bulgaria
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <p>
            <strong className="text-white">Email:</strong> info@asylum-sofia.com
            <br />
            <strong className="text-white">Phone:</strong> +359 XXX XXX XXX
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">
            Responsible for Content
          </h3>
          <p>
            The content on this website is the responsibility of Asylum Club
            management.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Disclaimer</h3>
          <p>
            Despite careful content control, we assume no liability for the
            content of external links. The operators of linked pages are solely
            responsible for their content.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Copyright</h3>
          <p>
            All content, images, and materials on this website are protected by
            copyright. Unauthorized use or reproduction is prohibited.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Age Restriction</h3>
          <p>
            Entry to Asylum is restricted to persons 18 years and older. Valid
            ID required at the door.
          </p>
        </div>

        <p className="text-xs text-gray-500 pt-4">
          © 2026 Asylum Sofia. All rights reserved.
        </p>
      </div>
    </Modal>);

}