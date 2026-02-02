import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  months: string[];
  currentMonth: string;
  onAboutClick: () => void;
  onPrivacyClick: () => void;
  onImprintClick: () => void;
  onRulesClick: () => void;
}

export function Sidebar({
  months,
  currentMonth,
  onAboutClick,
  onPrivacyClick,
  onImprintClick,
  onRulesClick,
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
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 text-white md:hidden bg-black/50 backdrop-blur-sm rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-full md:w-[280px] z-40
          bg-black text-white p-6 md:p-8 flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Top Section */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="mb-1">
            <img
              src="/images/gay-parties-logo.svg"
              alt="gay parties logo"
              className="h-12 md:h-16 w-auto"
            />
            <div className="h-[2px] w-16 bg-white mt-2"></div>
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-wide leading-relaxed">
            Sofia's best gay parties
          </p>

          {/* Months Navigation */}
          <nav className="mt-12 md:mt-24 space-y-3">
            {months.length > 0 ? (
              months.map((month) => (
                <div key={month} className="relative group">
                  <button
                    onClick={() => handleMonthClick(month)}
                    className={`
                      block text-lg md:text-xl font-medium transition-colors duration-200 text-left w-full relative pb-1
                      ${month === currentMonth ? 'text-white' : 'text-gray-500 group-hover:text-white'}
                    `}
                  >
                    {month}
                  </button>

                  {/* Червена линия – ВИДИМА САМО при hover ИЛИ active */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden rounded-full">
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-r from-[#FF2800] to-transparent transition-all duration-500 ease-out
                        ${month === currentMonth ? 'opacity-100 w-full' : 'opacity-0 group-hover:opacity-100 group-hover:w-full w-0'}
                      `}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No events scheduled</p>
            )}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-8">
          {/* RULES + ABOUT */}
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <button
              onClick={() => handleLinkClick(onRulesClick)}
              className="hover:underline decoration-1 underline-offset-4"
            >
              RULES
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => handleLinkClick(onAboutClick)}
              className="hover:underline decoration-1 underline-offset-4"
            >
              ABOUT
            </button>
          </div>

          {/* IMPRINT | PRIVACY */}
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">
            <button onClick={() => handleLinkClick(onImprintClick)} className="hover:text-white">
              IMPRINT
            </button>{' | '}
            <button onClick={() => handleLinkClick(onPrivacyClick)} className="hover:text-white">
              PRIVACY
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}