'use client';

import React, { useRef } from 'react';
import { SponsorCard, SponsorCardProps } from './SponsorCard';
import { motion, useScroll, useTransform } from 'framer-motion';


const partnersData: SponsorCardProps[] = [
  {
    id: 'partner-iris',
    name: 'IRIS – organizing Partner',
    website: '#',
    logo: '/sponsers/sponsor-9.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-iridescence',
    name: 'Iridescence',
    website: 'https://www.instagram.com/iridescence.iiitdwd?igsh=MWVocmEwcHRteXVteQ==',
    logo: '/sponsers/sponsor-8.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-velocity',
    name: 'Velocity',
    website: '#',
    logo: '/sponsers/sponsor-7.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-iiitians',
    name: 'IIITians Network',
    website: 'https://in.linkedin.com/company/iiitians-network',
    logo: '/sponsers/sponsor-6.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-mosaic',
    name: 'Mosaic',
    website: '#',
    logo: '/sponsers/sponsor-1.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-kdem',
    name: 'KDEM',
    website: '#',
    logo: '/sponsers/sponsor-2.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'partner-devfolio',
    name: 'DevFolio',
    website: 'https://devfolio.co/',
    logo: '/sponsers/sponsor-5.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];

const sponsorsData: SponsorCardProps[] = [
  {
    id: 'sponsor-cyseck',
    name: 'Cyseck',
    website: '#',
    logo: '/sponsers/sponsor-3.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-infosys',
    name: 'Infosys',
    website: '#',
    logo: '/sponsers/sponsor-4.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
  {
    id: 'sponsor-idrp',
    name: 'IDRP',
    website: '#',
    logo: '/sponsers/sponsor.png',
    bgColor1: '#000',
    bgColor2: '#ccc',
  },
];

const Sponsors: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={sectionRef} id="sponsors" data-idx="5" className="relative z-50 min-h-screen w-full bg-[#070b0d]">
      <div
        className="sponsors-inner-scale relative flex h-fit w-full scroll-mt-12 flex-col items-center px-2 pb-20 pt-16 text-white transform-origin-top"
      >
        <div className="z-[2] w-full max-w-7xl mx-auto text-white mb-12">
          <motion.h1
            style={{ x: headingX }}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
          >
            Sponsors & Partners
            <motion.span
              style={{ x: backgroundHeadingX }}
              className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
            >
              Partners
            </motion.span>
          </motion.h1>
        </div>

        <div className="w-full flex flex-col items-center">
          {/* Partners Section */}
          <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="border-teamBorderLine flex-grow border-t-2" />
            </div>
            <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
              Partners
            </h1>

            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="border-teamBorderLine flex-grow border-t-2" />
            </div>
          </div>
          <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
            {partnersData.map((partner, index) => (
              <SponsorCard key={index} {...partner} />
            ))}
          </div>

          {/* Sponsors Section */}
          <div className="mb-12 mt-12 flex w-full max-w-4xl items-center gap-4">
            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="border-teamBorderLine flex-grow border-t-2" />
            </div>
            <h1 className="font-anton text-center text-xl uppercase md:text-2xl">
              Sponsors
            </h1>

            <div className="relative flex grow">
              <svg
                width={'10px'}
                height={'10px'}
                className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
                viewBox="0 0 10 10"
              >
                <rect width={'10px'} height={'10px'} />
              </svg>
              <hr className="border-teamBorderLine flex-grow border-t-2" />
            </div>
          </div>
          <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-8">
            {sponsorsData.map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
