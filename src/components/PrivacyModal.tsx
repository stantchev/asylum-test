import React from 'react';
import { Modal } from './Modal';
interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="PRIVACY POLICY">
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
        <p>
          At Asylum, we respect your privacy and are committed to protecting
          your personal data. This privacy policy explains how we collect, use,
          and safeguard your information.
        </p>

        <div>
          <h3 className="text-white font-medium mb-2">
            Information We Collect
          </h3>
          <p>
            We may collect personal information such as your name, email
            address, and payment details when you purchase tickets or sign up
            for our mailing list.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">
            How We Use Your Information
          </h3>
          <p>
            Your information is used to process ticket purchases, send event
            updates, and improve our services. We do not sell or share your
            personal data with third parties without your consent.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Photography Policy</h3>
          <p>
            Asylum operates a strict no-photo policy inside the venue to protect
            the privacy and freedom of all guests. Any photography or recording
            without explicit permission is prohibited.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal data
            at any time. Contact us for any privacy-related inquiries.
          </p>
        </div>

        <p className="text-xs text-gray-500 pt-4">Last updated: January 2026</p>
      </div>
    </Modal>);

}