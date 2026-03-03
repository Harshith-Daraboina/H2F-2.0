'use client'

import React, { useState } from 'react';
import TeamMate from './TeamMate';
import teamData from './TeamData'; // Import the JSON data
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Sort the teams and members alphabetically
const teams = teamData.map((team) => {
  team.members.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : 0
  );
  return team;
});

const Team: React.FC = () => {
  const [currTeam, setCurrTeam] = useState(teams[0].name);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={sectionRef} id="team" data-idx="6" className="relative z-50 min-h-screen w-full bg-[#070b0d] pb-20 pt-16 mt-20 text-white flex flex-col items-center">
      <div className="z-[2] w-full max-w-7xl mx-auto text-white mb-20 md:mb-32">
        <motion.h1
          style={{ x: headingX }}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]"
        >
          Team
          <motion.span
            style={{ x: backgroundHeadingX }}
            className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]"
          >
            Team
          </motion.span>
        </motion.h1>
      </div>
      <div className="m-7 flex gap-y-4 w-11/12 cursor-pointer justify-evenly flex-wrap gap-x-4 text-xl">
        {teams.map((team) => (
          <button className={clsx('text-center font-semibold', { 'text-cyan-400 transition-all duration-100 ease-in': currTeam === team.name })} onClick={() => setCurrTeam(team.name)} key={team.name}> {team.name.split(' ')[0]} </button>
        ))}
      </div>
      <div className="mb-24 flex w-5/6 flex-wrap items-center justify-evenly gap-x-4 gap-y-8">
        {teams?.find(team => team.name === currTeam)?.members.map((member) => (
          <TeamMate
            key={member.name}
            photo={member.image}
            name={member.name}
            title={member.title}
            linkedinLink={member.linkedIn}
            githubLink={member.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
