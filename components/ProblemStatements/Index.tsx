'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Question from './Question';
import Asteriods from '@/public/Astroids.png';
import Image from 'next/image';


interface ProblemData {
  title: string;
  description: string;
  link: string;
}

const problem_data: ProblemData[] = [
  {
    title: 'SKILLDA',
    description:
      'Develop an immersive virtual lab for cybercrime investigations, focusing on cloud breaches, cryptocurrency fraud, and blockchain anomalies. Create customizable environments where students can simulate real-world forensic scenarios. The solution must include a detailed lab manual with step-by-step instructions and pre-configured setups, providing an interactive and hands-on experience for solving modern digital crimes.',
    link: 'https://docs.google.com/document/d/1YUllCpQJT1luTo8udgUSR46xLmrP-SN-QJD-Cz-Ljvo/edit',
  },
  {
    title: 'INFOKALASH',
    description:
      'Develop a scalable AutoML-MLOps platform prototype with the following requirements: integrate an end-to-end ML workflow using open-source AutoML tools, and design intuitive UI wireframes that ensure a seamless user journey. The solution should focus on scalability and ease of use, providing a fully functional prototype that streamlines the machine learning lifecycle from data ingestion to deployment.',
    link: 'https://docs.google.com/document/d/1rOiZUC9y77u_pa135wPBYiKU-4bdgwGj2LRFvrbMeoQ/edit',
  },
  {
    title: 'ZEBU ANIMATIONS (1)',
    description:
      'A standalone path tracing renderer is a software application that uses the path tracing algorithm to generate photorealistic images. By simulating the physics of light, path tracing can produce highly accurate and visually stunning renderings. Integrating AI into this process can enhance the capabilities of the renderer and provide additional benefits.',
    link: 'https://docs.google.com/document/d/1uTu2Z6X_ADfhlfqnYkcwudpIMVXQRUYnd9d0YqCudDc/edit',
  },
  {
    title: 'AEQUS',
    description:
      'Develop a method to predict tool wear or failure in a machining center based on vibrational data from the machine. Find an efficient way to predict tool wear in real time, allowing for timely maintenance and increased operational efficiency.',
    link: 'https://docs.google.com/document/d/1h96o9HlmUYNMeL43r3lEH6xxCyuDZILAeiqAAsGp3sU/edit',
  },
];

function ProblemStatements() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const problemsX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundProblemsX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section
      ref={containerRef}
      data-idx="2"
      id="problem"
      className="relative z-20 w-full bg-[#070b0d] text-white"
    >
      <div className="problem-inner-scale relative flex w-full flex-col items-center overflow-hidden px-2 pb-20 pt-16 transform-origin-top">
        {/* Parallax Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        >
          <Image src={Asteriods} alt="astroids" fill className="object-cover" />
        </motion.div>

        <div className="z-[2] w-full max-w-7xl mx-auto text-white mb-12">
          <motion.h1
            style={{ x: problemsX }}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
          >
            Problems
            <motion.span
              style={{ x: backgroundProblemsX }}
              className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
            >
              Problems
            </motion.span>
          </motion.h1>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full max-w-7xl grid-cols-1 gap-6 px-4 pb-12 pt-4 md:grid-cols-2 lg:grid-cols-3 mx-auto"
        >
          {problem_data.map((problem, index) => (
            <div key={index} className="flex flex-col items-stretch h-full">
              <Question
                title={problem.title}
                description={problem.description}
                link={problem.link}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemStatements;
