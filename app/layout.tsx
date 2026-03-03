'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Analytics } from '@vercel/analytics/react';
import { NavbarContext } from './context/navbarContext';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import SplashScreen from '@/components/SplashScreen';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [option, setOption] = useState(0);
  return (
    <html lang="en">
      <body className={'w-screen overflow-x-hidden font-sans'}>
        <NavbarContext.Provider value={{ option, setOption }}>
          <SplashScreen />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
          <Analytics />
        </NavbarContext.Provider>
      </body>
    </html>
  );
}


