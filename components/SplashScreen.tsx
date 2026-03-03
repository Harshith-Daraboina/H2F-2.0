'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#070b0d]"
                >
                    {/* Retro Window */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative border-4 border-[#3770FF] bg-[#070b0d] p-1 shadow-[8px_8px_0_0_rgba(55,112,255,0.3)]"
                    >
                        {/* Window Header */}
                        <div className="flex w-[320px] md:w-[450px] items-center justify-between bg-[#3770FF] px-2 py-1.5 flex-row-reverse">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 border-2 border-white flex items-center justify-center text-[12px] text-white font-bold leading-none select-none cursor-default">X</div>
                            </div>
                            <div className="flex gap-1.5 opacity-60">
                                <div className="w-3 h-3 bg-white"></div>
                                <div className="w-3 h-3 bg-white"></div>
                            </div>
                        </div>

                        {/* Window Content */}
                        <div className="flex flex-col items-center px-6 py-12 bg-black/40">
                            <motion.div
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="font-mono text-3xl md:text-5xl text-white tracking-[0.2em] mb-12 font-bold select-none drop-shadow-[0_0_15px_rgba(55,112,255,0.4)]"
                            >
                                LOADING...
                            </motion.div>

                            {/* Pixelated Progress Bar Container */}
                            <div className="w-full h-16 border-4 border-[#3770FF] p-2 flex items-center gap-1.5 rounded-sm">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: i * 0.12,
                                            duration: 0.1,
                                            ease: "steps(1)"
                                        }}
                                        className="h-full flex-1 bg-[#3770FF] shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
