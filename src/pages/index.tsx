import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { EventCard } from '../components/EventCard';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Sidebar />

      {/* Main Content Area */}
      <main className="md:ml-[280px] min-h-screen relative">
        {/* Background Image Layer */}
        <div className="fixed inset-0 z-0 md:left-[280px]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 brightness-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Scroll Layer */}
        <div className="relative z-10 p-6 md:p-16 lg:p-24 max-w-5xl">
          {/* Month Header */}
          <header className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-8xl font-impact text-white/90 uppercase tracking-tight">
              FEBRUARY
            </h2>
          </header>

          {/* Events List */}
          <div className="space-y-16">
            {/* Special Event */}
            <EventCard
              isSpecial={true}
              day="SPECIAL"
              date="31.01.2026"
              time="22:00"
              title="FLINTA PARTY 'SLIT'"
              details="FLINTA persons only, no cis-men"
              lineup="line-up: F&L Associates, Marie Midori, Serena Landriel (Performance)" />


            {/* Regular Event 1 */}
            <EventCard
              day="SUNDAY"
              date="01.02.2026"
              time="16:00"
              title="NAKED SUNDAY"
              details="strict dresscode: fully naked, shoes only"
              doorTime="doors 16:00 to 18:00" />


            {/* Regular Event 2 */}
            <EventCard
              day="THURSDAY"
              date="05.02.2026"
              time="21:00"
              title="NAKED SEX PARTY"
              details="strict dresscode: fully naked, shoes only"
              doorTime="doors 21:00 to 23:00" />


            {/* Placeholder for future events to show scrolling */}
            <div className="opacity-50 pointer-events-none">
              <EventCard
                day="FRIDAY"
                date="06.02.2026"
                time="22:00"
                title="FRIDAY F*CK"
                details="men only, sportswear, sneakers"
                doorTime="doors 22:00" />

            </div>
          </div>
        </div>
      </main>
    </div>);

}