'use client';
import Image from 'next/image';
import { MobileAnimate } from './Animate';
import ColoredCard from './ColoredCard';
import { timelines } from './content';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function MobileView() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <div ref={targetRef} className="relative flex grow flex-col items-center gap-2 overflow-x-hidden">
      <div className="z-[2] w-full max-w-7xl mx-auto text-white mt-16 mb-12">
        <motion.h1
          style={{ x: headingX }}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] text-white sm:left-20 md:text-[90px] mt-10"
        >
          TimeLine
          <motion.span
            style={{ x: backgroundHeadingX }}
            className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[4.4rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
          >
            TimeLine
          </motion.span>
        </motion.h1>
      </div>
      <MobileAnimate>
        <div
          id="mobile-timeline-rocket"
          className="pointer-events-none z-20 -ml-4 -mr-12 max-[600px]:hidden"
        >
          <Image
            src="/rocket.png"
            width={640}
            height={360}
            alt="rocket image"
            className="z-20 translate-y-10 rotate-[60deg] scale-150"
          />
        </div>
        <div className="relative z-10 -ml-4 flex size-fit max-w-96 justify-between self-center p-2 pr-4">
          <div className="z-10 -mr-[15px] flex h-[471px] flex-col justify-between place-self-center">
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="mobile-timeline-progress flex w-full items-center justify-end gap-2 hover:cursor-pointer"
              >
                <div className="text-center text-sm">{timeline.heading}</div>
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: '24px', height: '24px' }}
                  className="shrink-0 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                </svg>
              </div>
            ))}
          </div>
          <Image
            id="satellite"
            src="/satellite.png"
            width="35"
            height="35"
            alt="satellite"
            className="absolute right-[5.25px] top-5 z-10"
          />
          <svg
            className="shrink-0 place-self-center pb-2.5"
            viewBox="0 0 10 435"
            style={{ width: '6x', height: '435px' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6" height="100%" fill="white" />
            <rect
              id="mobile-timeline-progress-rect"
              width="6"
              height="0"
              fill="#a6dff9"
            />
          </svg>
        </div>
        <div className="flex h-fit w-full overflow-hidden">
          <div
            id="mobile-timeline-cards"
            className="relative h-[500px] w-fit grow"
          >
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="max-xs:p-2 flex h-full max-w-full justify-center overflow-auto p-4"
              >
                <div className="flex h-fit flex-col gap-4">
                  {timeline.details.map((detail, index) => (
                    <ColoredCard
                      key={index}
                      color={detail.color}
                      detail={detail.detail}
                      heading={detail.heading}
                      time={detail.time}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MobileAnimate>
      {/* <span className="text-3xl uppercase">Revealing Soon...</span> */}
    </div>
  );
}
