'use client';

import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { IoMenu } from 'react-icons/io5';
import { NavbarContext } from '@/app/context/navbarContext';

const navs = [
  {
    href: '/#landing',
    name: 'Home',
  },
  {
    href: '/#about',
    name: 'About',
  },
  {
    href: '/#problem',
    name: 'Problem',
  },
  {
    href: '/#prizes',
    name: 'Prizes',
  },
  {
    href: '/#timeline',
    name: 'Timeline',
  },
  {
    href: '/#sponsors',
    name: 'Sponsors',
  },
  {
    href: '/#team',
    name: 'Team',
  },
  {
    href: '/#faq',
    name: 'FAQs',
  },
];

export default function Navbar() {
  const { option, setOption } = useContext(NavbarContext);
  const [open, setOpen] = useState(false);
  const lenis = useLenis(({ scroll }) => { });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for entries that are actually intersecting
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length > 0) {
          // If multiple are intersecting, pick the one with highest ratio or one closest to top
          const bestEntry = intersecting.reduce((prev, current) =>
            (current.intersectionRatio > prev.intersectionRatio) ? current : prev
          );

          const index = navs.findIndex(
            (nav) => nav.href === `/#${bestEntry.target.id}`
          );
          if (index !== -1) {
            setOption(index);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.1] }
    );

    navs.forEach((nav) => {
      const id = nav.href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navs, setOption]);

  return (
    <div className="w-full">
      <nav className="fixed right-4 top-6 z-[90] flex w-fit items-center rounded-full bg-black/60 p-4 text-center shadow-lg backdrop-blur md:left-0 md:right-0 md:mx-auto md:px-2">
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex text-2xl text-white md:hidden"
        >
          <IoMenu />
        </button>
        <div
          id="nav-highlight"
          style={{ transform: `translateX(${100 * option}%)` }}
          className="absolute z-[-1] hidden h-10 w-28 rounded-full bg-[#3770FF] shadow-[0_0_15px_rgba(55,112,255,0.6)] transition-all duration-300 md:flex"
        ></div>
        {navs.map((navItem, i) => (
          <Link
            key={i}
            href={navItem.href}
            className={`hidden w-28 justify-center transition-colors duration-300 md:flex ${option === i ? 'font-semibold text-white' : 'text-white hover:drop-shadow-[0_0_8px_#00F5FF]'
              }`}
            onClick={() => {
              setOption(i);
              lenis?.scrollTo(navItem.href.slice(1), {
                lerp: 0.07,
                duration: 0.6,
              });
            }}
          >
            {navItem.name}
          </Link>
        ))}
      </nav>

      <div
        className={`fixed left-0 top-0 z-[100] flex h-full w-screen flex-col bg-black/70 px-8 py-10 backdrop-blur-sm transition-all duration-500 ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex w-full items-center justify-between">
          <div></div>
          <button onClick={() => setOpen(!open)} className="text-3xl text-white">
            <IoMenu />
          </button>
        </div>
        <div className="flex w-full flex-col items-center gap-6 py-20">
          {navs.map((navItem, i) => (
            <Link
              key={i}
              className={`text-2xl transition-all duration-300 hover:drop-shadow-[0_0_10px_#00F5FF] ${option === i ? 'font-semibold text-white drop-shadow-[0_0_10px_#00F5FF]' : 'text-white'
                }`}
              onClick={() => {
                setOpen(!open),
                  lenis?.scrollTo(navItem.href.slice(1), {
                    lerp: 0.07,
                    duration: 0.6,
                  });
              }}
              href={navItem.href}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
