'use client';
import React, { useRef } from 'react';
import Accordion from '@/components/Accordion';
import { faqData } from '@/data/faqs';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function FAQs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section id="faq" ref={sectionRef} data-idx="7" className="relative z-60 w-full min-h-screen bg-[#070b0d]">
      <motion.div className="relative flex flex-col items-center w-full py-28 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transform-origin-top">
        <div className="z-[2] w-full max-w-7xl mx-auto text-white mb-12">
          <motion.h1
            style={{ x: headingX }}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
          >
            FAQs
            <motion.span
              style={{ x: backgroundHeadingX }}
              className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
            >
              FAQs
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-20 w-full max-w-6xl px-4 md:px-8"
        >
          {faqData?.map((item, index) => (
            <Accordion
              question={item?.question}
              response={item?.answer}
              icon={item?.icon} // Pass the icon prop
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
