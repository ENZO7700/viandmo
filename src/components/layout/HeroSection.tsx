
'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });
  
  const shouldReduceMotion = useReducedMotion();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  const motionProps = shouldReduceMotion ? {} : { style: { y, opacity } };
  
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } },
  };

  return (
    <section 
      ref={targetRef}
      className="relative h-screen w-full flex items-center justify-center text-center text-primary-foreground bg-[#00202e]"
    >
      <motion.div {...motionProps} className="relative z-10 p-4 flex flex-col items-center -translate-y-[15%]">
         <motion.div 
            className="mb-6"
            variants={shouldReduceMotion ? undefined : logoVariants}
            initial="hidden"
            animate="visible"
          >
           <Image 
             src="https://viandmo.com/wp-content/uploads/viandmo_logo_regular_white.svg" 
             alt="VI&MO Logo" 
             width={240} 
             height={63} 
             priority 
             data-ai-hint="logo"
           />
         </motion.div>
         <motion.div
            variants={shouldReduceMotion ? undefined : textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-tight text-white text-shadow-lg">
                Pevné ruky & poctivý prístup
            </h1>
            <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto text-white text-shadow">
              Sťahovanie, odvoz odpadu a upratovanie v Bratislave a okolí
            </p>
         </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
