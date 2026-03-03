'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function About() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const aboutUsX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundAboutX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const whoWeAreX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={targetRef}
      id="about"
      data-idx="1"
      className="relative z-10 w-full bg-[#070b0d]"
    >
      <div className="about-inner-scale flex min-h-[100dvh] w-full flex-col items-center justify-center py-28 overflow-hidden transform-origin-top">
        <div className="z-[2] w-full max-w-7xl mx-auto text-white">
          <motion.h1
            style={{ x: aboutUsX }}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
          >
            About us
            <motion.span
              style={{ x: backgroundAboutX }}
              className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
            >
              About
            </motion.span>
          </motion.h1>
          <motion.div
            style={{ x: whoWeAreX }}
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-anton px-8 text-[40px] uppercase leading-[1] sm:px-16 md:px-28"
          >
            Who we are
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-roboto mt-20 flex flex-col gap-6 px-8 text-xl leading-relaxed text-slate-200 sm:px-16 md:px-28"
          >
            <motion.p variants={itemVariants}>
              IIIT Dharwad, established in 2015 as an Institute of National Importance under a Public-Private Partnership between the Ministry of Education, Government of Karnataka, and Keonics, aims to bridge the high-end IT skill gap and support India’s global leadership in the sector. It offers BTech programs in CSE, ECE, and DSAI, emphasizing IT solutions for India’s social challenges. With a semi-modern campus, a stately logo, and a strategic location in the Hubballi-Dharwad education hub with growing connectivity to Bengaluru the institute is poised to make a strong impact on the Indian IT industry, academic research, and the North Karnataka region.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
