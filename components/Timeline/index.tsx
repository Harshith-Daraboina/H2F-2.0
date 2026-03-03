'use client';
import TempTimeLine from '../Temp-Timeline';
import React, { useRef } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';


export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);



  return (
    <section ref={sectionRef} className="relative z-40 w-full min-h-[100dvh]" id="timeline" data-idx="4">
      <div className="timeline-inner-scale relative flex min-h-[100dvh] w-full flex-col gap-10 p-4 py-20 sm:px-0 bg-[#070b0d] transform-origin-top">
        <div className="size-full overflow-hidden max-md:hidden">
          <DesktopView />
        </div>
        <div className="size-full md:hidden">
          <MobileView />
        </div>
      </div>
    </section>
  );
}
