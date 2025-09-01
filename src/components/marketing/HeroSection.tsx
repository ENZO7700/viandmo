'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export function HeroSection({ title, subtitle, image, alt }: HeroSectionProps) {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-center brightness-75"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        placeholder="blur" // Príklad placeholderu
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Vlastný blur pre lepšie SEO
        data-ai-hint="salon interior"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4"
      >
        <h1 className="text-5xl md:text-7xl font-headline leading-tight mb-4 text-primary drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          {subtitle}
        </p>
        <Link href="/booking" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300">
              Rezervujte si svoj termín
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
