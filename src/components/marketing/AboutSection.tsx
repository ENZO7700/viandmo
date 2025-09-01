'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export function AboutSection({ title, description, image, alt }: AboutSectionProps) {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-headline mb-6 text-primary">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          <Link href="/about">
            <Button variant="outline" className="px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              Dozvedieť sa viac
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-ai-hint="stylist hair"
          />
        </motion.div>
      </div>
    </section>
  );
}
