import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CupProps {
  cupImage: string;
  cupColor: string;
  className: string;
  prize: string;
  amount: string;
}

const Cup = ({ prize, cupImage, cupColor, className, amount }: CupProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView && amount && amount !== "Not Decided") {
      animate(count, parseFloat(amount), { duration: 2 });
    }
  }, [isInView, amount, count]);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className={
        'cup-div group relative flex w-[70%] flex-col items-center justify-center border-l-2 border-r-2 py-2 before:transition before:delay-75 before:duration-300 before:ease-in hover:before:opacity-70 sm:w-3/5 md:w-[30%] lg:w-1/4 xl:w-[17%] ' +
        className
      }
    >
      <div
        className={
          'cup-container grid-lines-bg flex h-full w-full flex-col items-center justify-center bg-inherit bg-gradient-carousel p-4 text-2xl md:text-xl lg:text-2xl 2xl:text-3xl ' +
          `${cupColor}`
        }
      >
        <Image
          src={cupImage}
          alt={''}
          width={0}
          height={0}
          sizes="100%"
          className={
            'w-9/12 transition duration-300 ease-in group-hover:-translate-y-20'
          }
        />
        <span
          className={
            'pb-4 text-center font-bold transition duration-300 ease-in group-hover:-translate-y-20'
          }
        >
          {prize}
        </span>
        <span
          className={
            'invisible flex w-full flex-col gap-2 pb-4 text-center font-bold opacity-0 transition-opacity delay-150 duration-300 ease-in group-hover:visible group-hover:-translate-y-16 group-hover:opacity-100'
          }
        >
          {!amount && <span>Revealing Soon</span>}
          {amount === "Not Decided" && <span>Not Decided</span>}
          {amount && amount !== "Not Decided" && (
            <>
              <span>₹ <motion.span>{rounded}</motion.span>,000</span>
            </>
          )}
          <span>Cash Prize</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Cup;
