'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface QuestionProps {
  title: string;
  description: string;
  link: string;
}

function Question({ title, description, link }: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description.length > 150;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"] // When top of element touches bottom of screen, to when bottom of element touches bottom of screen
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, filter }}
      className="flex h-full w-full flex-col flex-grow"
    >
      <motion.div
        whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0,0,0,0.6)' }}
        className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-[#1b1e24] px-10 shadow-lg cursor-pointer flex-grow"
      >
        <div className="mb-6 mt-6 flex w-full items-center justify-center">
          <div className="relative flex flex-grow items-center">
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
          <h1 className="font-anton mx-4 text-center text-xl uppercase text-white md:text-2xl max-w-full">
            {title}
          </h1>
          <div className="relative flex flex-grow items-center">
            <hr className="border-teamBorderLine flex-grow border-t-2" />
            <svg
              width={'10px'}
              height={'10px'}
              className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
              viewBox="0 0 10 10"
            >
              <rect width={'10px'} height={'10px'} />
            </svg>
          </div>
        </div>
        <div className="flex-grow px-6 pb-4">
          <p className={`text-gray-200 transition-all duration-300 ${isExpanded || !isLongDescription ? '' : 'line-clamp-6'}`}>
            {description}
          </p>
          {isLongDescription && (
            <div className="w-full flex justify-center mt-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="px-6 pb-6">
          {link !== '#' && (
            <button
              onClick={() => {
                window.open(link, '_blank');
              }}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
            >
              More Details
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Question;
