'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

interface Tier {
    name: string;
    price: string;
    benefits: string[];
    includesLower: boolean;
}

const tiers: Tier[] = [
    {
        name: "Diamond Tier",
        price: "₹2,00,000",
        benefits: ["Logo on banners", "Exclusive press release mentions", "Complimentary prime stall"],
        includesLower: true
    },
    {
        name: "Platinum Tier",
        price: "₹1,00,000",
        benefits: ["Exclusive press release mentions", "Complimentary prime stall"],
        includesLower: true
    },
    {
        name: "Gold Tier",
        price: "₹75,000",
        benefits: ["Mention in some press releases & media", "Multiple social media shoutouts"],
        includesLower: true
    },
    {
        name: "Silver Tier",
        price: "₹50,000",
        benefits: ["Mention in some press releases & media", "Complimentary stall"],
        includesLower: false
    }
];

const TierCard: React.FC<{ tier: Tier; index: number }> = ({ tier, index }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col w-full max-w-[280px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-300"
        >
            {/* Top Half */}
            <div className="bg-[#0f1b2d] p-8 flex flex-col items-center justify-center text-center gap-2 min-h-[160px] border-b border-white/5">
                <h3 className="font-anton text-3xl uppercase text-white tracking-wider">
                    {tier.name.split(' ')[0]} <br /> {tier.name.split(' ')[1]}
                </h3>
                <p className="font-anton text-2xl text-white mt-1">
                    {tier.price}
                </p>
            </div>

            {/* Bottom Half */}
            <div className="bg-white p-6 flex flex-col grow min-h-[300px]">
                <h4 className="font-bold text-black mb-4">Key Benefits:</h4>
                <ul className="space-y-3 grow">
                    {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-800 leading-tight">
                            <div className="mt-0.5 p-0.5 rounded border border-gray-400">
                                <Check className="w-3 h-3 text-black" strokeWidth={3} />
                            </div>
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
                {tier.includesLower && (
                    <p className="mt-6 text-[10px] text-gray-500 italic font-medium">
                        *Includes all benefits from lower tiers
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default function SponsorshipTiers() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const headingX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const backgroundHeadingX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

    return (
        <section
            ref={sectionRef}
            id="sponsorship-tiers"
            className="relative z-[40] w-full bg-[#070b0d] py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="relative mb-20">
                    <motion.h2
                        style={{ x: headingX }}
                        className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-16 md:text-[80px] text-white"
                    >
                        Sponsorship Tiers
                        <motion.span
                            style={{ x: backgroundHeadingX }}
                            className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[5rem] text-[#1b1e24] md:-left-8 md:text-[160px] whitespace-nowrap"
                        >
                            Benefits
                        </motion.span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4 md:px-8 justify-items-center">
                    {tiers.map((tier, index) => (
                        <TierCard key={tier.name} tier={tier} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
