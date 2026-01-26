import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
interface SidebarProps {
  months: string[];
  currentMonth: string;
  onAboutClick: () => void;
  onPrivacyClick: () => void;
  onImprintClick: () => void;
}
export function Sidebar({
  months,
  currentMonth,
  onAboutClick,
  onPrivacyClick,
  onImprintClick
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (callback: () => void) => {
    callback();
    setIsOpen(false);
  };
  const handleMonthClick = (month: string) => {
    const element = document.getElementById(month.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };
  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 text-white md:hidden bg-black/50 backdrop-blur-sm rounded">

        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-full md:w-[280px] z-40
        bg-black text-white p-6 md:p-8 flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>

        {/* Top Section: Logo & Tagline */}
        <div className="space-y-4">
          {/* Asylum Logo */}
          <div className="mb-1">
            <h1 className="text-4xl md:text-5xl font-impact tracking-tighter leading-none text-white">
              ASYLUM
            </h1>
            <div className="h-[2px] w-16 bg-white mt-2"></div>
          </div>

          <p className="text-xs text-gray-400 font-medium tracking-wide leading-relaxed">
            Sofia's sanctuary for self-expression
          </p>

          {/* Navigation - Dynamic months */}
          <nav className="mt-12 md:mt-24 space-y-2">
            {months.length > 0 ?
            months.map((month) =>
            <button
              key={month}
              onClick={() => handleMonthClick(month)}
              className={`
                    block text-lg font-medium transition-colors duration-200 text-left w-full
                    ${month === currentMonth ? 'text-white' : 'text-gray-500 hover:text-white'}
                  `}>

                  {month}
                </button>
            ) :

            <p className="text-gray-500 text-sm">No events scheduled</p>
            }
          </nav>
        </div>

        {/* Bottom Section: Links & Footer */}
        <div className="space-y-8">
          <div className="space-y-2">
            <button
              onClick={() => handleLinkClick(onAboutClick)}
              className="block text-lg hover:underline decoration-1 underline-offset-4 text-left w-full">

              ABOUT
            </button>
          </div>

          <div className="text-[10px] text-gray-500 uppercase tracking-wider">
            <button
              onClick={() => handleLinkClick(onImprintClick)}
              className="hover:text-white">

              IMPRINT
            </button>
            {' | '}
            <button
              onClick={() => handleLinkClick(onPrivacyClick)}
              className="hover:text-white">

              PRIVACY
            </button>
          </div>
        </div>
      </aside>
    </>);

}