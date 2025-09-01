'use client';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="container py-16 md:py-24 text-center">
                 <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-3xl md:text-5xl font-headline mb-4"
                >
                    Pripravení na zmenu?
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80"
                >
                    Objavte svoj dokonalý vzhľad. Náš tím expertov je tu, aby premenil vaše predstavy na skutočnosť.
                </motion.p>
                <Link href="/booking" passHref>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                    >
                        <Button size="lg" variant="secondary" className="px-8 py-6 text-lg transition-colors duration-300">
                            Rezervujte si svoj termín
                        </Button>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
