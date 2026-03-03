'use client';
import Trophies from "@/components/Prizes/Trophies/Trophies";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const Prizes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={sectionRef} data-idx="3" className="relative z-30 min-h-screen w-full bg-[#070b0d] overflow-hidden" id="prizes">

      <div className="prizes-inner-scale relative z-10 flex min-h-[100dvh] w-full flex-col items-center gap-4 justify-start py-20 bg-cover background-bg transform-origin-top">
        <div className="z-[2] w-full max-w-7xl mx-auto text-white mb-12">
          <motion.h1
            style={{ x: headingX }}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
          >
            Prizes
            <motion.span
              style={{ x: backgroundHeadingX }}
              className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
            >
              Prizes
            </motion.span>
          </motion.h1>
        </div>
        <Trophies />
      </div>

      {/* Horizontal Scrolling Banner at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black py-4 border-y-2 border-[#ff3333] z-20 shadow-[0_0_20px_rgba(255,51,51,0.3)]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap font-anton text-2xl text-white md:text-3xl tracking-wider"
        >
          {Array(15).fill(" ⚡ Early Bird Ends Soon ⚡ Win Big Prizes ⚡ Limited Entries ⚡ ").map((text, i) => (
            <span key={i} className="mx-2">{text}</span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};
export default Prizes;