'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import stars from '@/public/Stars Animate.svg';
import hero1 from '@/public/hero1.png';
import EventDetails from './EventDetails';
import { motion, useScroll, useTransform } from 'framer-motion';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const eventDate = new Date("2026-04-04T09:00:00");
      const currentTime = new Date();
      const difference = eventDate.getTime() - currentTime.getTime();

      let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time left
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="landing"
      className="font-roboto relative z-0 flex h-[100dvh] w-full items-center justify-between overflow-hidden"
      data-idx="0"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-x-0 inset-y-[-10%] z-0 h-[120%] w-full bg-[url('/bg.png')] bg-cover bg-center"
      />


      <div className="absolute top-0 z-[1] h-full w-full bg-black/40"></div>

      <motion.div style={{ y: backgroundY }} className="z-[2] mt-4 max-sm:w-full md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-1/2">
        <EventDetails timeLeft={timeLeft} />
      </motion.div>

      {/* Right Bottom Hero Graphic */}
      <motion.div
        style={{ y: backgroundY }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1, ease: "easeOut" },
          x: { duration: 1, ease: "easeOut" },
        }}
        className="absolute bottom-0 right-[2%] md:right-[5%] h-[85%] md:h-[95%] w-[70%] max-w-[900px] z-[3] pointer-events-none hidden md:block"
      >
        <Image
          src={hero1}
          alt="Hero Graphic"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        />
      </motion.div>
    </section>
  );
}
