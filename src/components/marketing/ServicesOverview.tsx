'use client';

import { motion } from 'framer-motion';
import { Scissors, Droplet, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: 'scissors' | 'droplet' | 'heart';
}

interface ServicesOverviewProps {
  services: ServiceItem[];
}

const iconMap = {
  scissors: Scissors,
  droplet: Droplet,
  heart: Heart,
};

export function ServicesOverview({ services }: ServicesOverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold font-headline mb-12 text-foreground"
        >
          Naše Exkluzívne Služby
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center border border-border"
              >
                {IconComponent && <IconComponent className="h-16 w-16 text-primary mb-6" />}
                <h3 className="text-2xl font-semibold font-headline mb-4 text-foreground">{service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href={`/services#${service.id}`} passHref>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10 transition-colors duration-300">
                    Zobraziť viac
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <Link href="/booking" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-colors duration-300">
              Rezervujte si termín teraz
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
