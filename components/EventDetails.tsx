import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface EventDetailsProps {
  timeLeft: TimeLeft;
}

export default function EventDetails({ timeLeft }: EventDetailsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="z-[10] flex w-full flex-col items-start justify-center text-left pt-20"
    >
      <div className="flex flex-col items-start font-anton uppercase leading-[0.9] tracking-wide mb-8 ml-4 sm:ml-8 md:ml-12 lg:ml-20">
        <motion.div variants={itemVariants} className="text-[clamp(4.5rem,11vw,8.5rem)] text-white">
          <span>HACK</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-row items-center gap-4 text-[clamp(4.5rem,11vw,8.5rem)] text-white ml-0 sm:ml-4 lg:ml-8 mt-[-10px]">
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)]">2</span>
          <span>FUTURE</span>
        </motion.div>
      </div>

      {/* Buttons Section */}
      <motion.div variants={itemVariants} className="flex flex-col items-start gap-6 ml-[2%] sm:ml-8 md:ml-12 lg:ml-20">
        {/* Brochure Button */}
        {/* <a
          href={"/Hack2Future-Brochure.pdf"}
          target="_blank"
          className="bg-black px-8 uppercase border rounded border-slate-600 h-[44px] w-full max-w-[250px] flex items-center justify-center text-white"
        >
          Brochure
        </a> */}

        {/* Timer */}
        <div className="w-full max-w-[320px] rounded-md py-2 text-left text-white">
          <div className="text-lg font-normal mb-2 text-gray-300">Final Round In:</div>
          <div className="flex justify-start space-x-6">
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase">Seconds</span>
            </div>
          </div>
        </div>
        <a
          href={"https://hack-2-future-iiit-dharwad.devfolio.co"}
          target="_blank"
          className="bg-[#3770ff] hover:bg-[#2b58c9] transition-colors h-[48px] w-fit flex items-center justify-center text-[18px] font-medium gap-3 rounded-[4px] text-white px-8 outline-none mt-2"
        >
          <Image
            height={20}
            width={20}
            src={"/Devfolio.png"}
            alt={"devfolio"}
          />
          Go to Devfolio
        </a>
      </motion.div>
    </motion.div>
  );
}
