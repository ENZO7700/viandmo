
'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={targetRef}
      className="relative h-auto w-full flex items-center justify-center text-center text-primary-foreground bg-[#00202e] py-20 md:py-32"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 p-4 flex flex-col items-center">
         <div className="mb-6">
           <Image 
             src="https://viandmo.com/wp-content/uploads/viandmo_logo_regular_white.svg" 
             alt="VI&MO Logo" 
             width={240} 
             height={63} 
             priority 
             data-ai-hint="logo"
           />
         </div>
         <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary-foreground text-shadow-lg">
            Pevné ruky & poctivý prístup
         </h1>
        <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80 text-shadow">
          Sťahovanie, odvoz odpadu a upratovanie v Bratislave a okolí
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
