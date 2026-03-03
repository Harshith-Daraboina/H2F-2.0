'use client';
import Image from 'next/image';
import CollegeLogo from '@/public/college-logo.png';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StarBackground from './StarBackground';

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative z-[70] w-full overflow-hidden bg-[#000000] px-8 py-10 sm:px-16">
      <StarBackground />
      {/* Centered Floating Astronaut */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute bottom-[-5%] left-1/2 -translate-x-1/2 z-0 hidden lg:block opacity-90"
      >
        <Image
          src="/astronote1.png"
          width={500}
          height={500}
          alt="Floating Astronaut"
          className="blur-[0.3px] drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        />
      </motion.div>

      <Link className="block relative z-10" href={'https://iiitdwd.ac.in'}>
        <Image
          className="aspect-[445/119] w-full max-w-[24rem]"
          alt="Logo"
          src={CollegeLogo}
          height={120}
        />
      </Link>
      <div className="mt-4 flex w-full flex-col justify-between gap-8 sm:flex-row sm:gap-1">
        <div className="flex flex-col gap-4">
          <div className="">
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="text-xl font-semibold text-slate-300">
                  Contact
                </div>
              </div>

              <div className="mb-2 text-sm text-slate-200">
                <Link
                  href="mailto:Hackathon@iiitdwd.ac.in"
                  className="flex items-center gap-3 transition-colors duration-300 hover:text-slate-100"
                >
                  <FaEnvelope className="text-slate-400" />
                  Hackathon@iiitdwd.ac.in
                </Link>
              </div>
              <Link
                href={'tel:+919789880949'}
                className="mb-2 flex items-center gap-3 text-sm text-slate-200 transition-colors hover:text-slate-100"
              >
                <FaPhoneAlt className="text-slate-400" />
                +91 9789880949 - Prajin Technical Secretary
              </Link>
              <Link
                href={'tel:+918489889568'}
                className="flex items-center gap-3 text-sm text-slate-200 transition-colors hover:text-slate-100"
              >
                <FaPhoneAlt className="text-slate-400" />
                +91 8489889568 - Prem Organizer
              </Link>
            </div>
          </div>
          <div className="max-w-xl">
            <div className="mb-6">
              <div className="mb-2 text-lg font-semibold text-slate-300">
                Address
              </div>
              <div className="text-sm leading-relaxed text-slate-200">
                Indian Institute of Information Technology (IIIT) Dharwad,
                Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
                Yellapur, Karnataka
              </div>
            </div>

            <div className="mt-4 flex w-full flex-wrap items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/hack-2-future/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/hack2future_1.0/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 max-[884px]:w-full">
            <p className="mb-2 text-lg text-slate-400">Location</p>
            <iframe
              title="Hackathon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
              width="400"
              height="250"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-[600px] h-[250px] rounded-xl bg-slate-600"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
