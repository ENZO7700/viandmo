'use client'

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import imageData from '@/lib/placeholder-images.json';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const team = [
    { name: "Miroslav Danihel", role: "Sťahovanie", phone: "+421 911 275 755", img: imageData.teamMember1.src, width: imageData.teamMember1.width, height: imageData.teamMember1.height, hint: imageData.teamMember1.hint },
    { name: "Partner", role: "Upratovanie", phone: "+421 918 895 730", img: imageData.teamMember2.src, width: imageData.teamMember2.width, height: imageData.teamMember2.height, hint: imageData.teamMember2.hint },
];


export default function AboutPage() {
    const shouldReduceMotion = useReducedMotion();
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src={imageData.aboutHero.src}
          alt="Tím VI&MO v akcii"
          fill
          priority
          className="object-cover object-center"
          data-ai-hint={imageData.aboutHero.hint}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
            className="relative z-10 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-tight text-primary-foreground drop-shadow-lg">
            Náš Príbeh
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Spoznajte ľudí a prístup, ktorý stojí za úspechom VI&MO.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section 
        className="py-16 md:py-24 bg-muted/30"
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">Naša Filozofia</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Vo VI&MO veríme, že sťahovanie alebo upratovanie nemusí byť stresujúca udalosť. Našim poslaním je poskytovať spoľahlivé, efektívne a cenovo dostupné služby s ľudským a poctivým prístupom. Ku každej zákazke pristupujeme s maximálnou zodpovednosťou, či už ide o sťahovanie malého bytu alebo upratovanie veľkej firmy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Zakladáme si na pevných rukách, ktoré odnesú vaše starosti, a na precíznosti, ktorá zanechá vaše priestory dokonale čisté. Vaša spokojnosť je našou najväčšou odmenou a motorom pre neustále zlepšovanie našich služieb.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
             <Image
                src={imageData.aboutPacking.src}
                alt="Detail práce pri balení"
                fill
                className="object-cover"
                data-ai-hint={imageData.aboutPacking.hint}
             />
          </div>
        </div>
      </motion.section>

       {/* Team Section */}
      <motion.section 
        className="py-16 md:py-24"
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Zoznámte sa s naším tímom</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Sme tu pre vás, pripravení zodpovedať vaše otázky a pomôcť vám s vašimi požiadavkami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
                <motion.div 
                    key={member.name}
                    className="text-center p-6 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
                    whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={member.width}
                          height={member.height}
                          className="object-cover"
                          data-ai-hint={member.hint}
                        />
                    </div>
                    <h3 className="text-2xl font-semibold font-headline">{member.name}</h3>
                    <p className="text-primary text-lg">{member.role}</p>
                     <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 mt-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4"/>
                        {member.phone}
                    </a>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Máte otázky alebo si želáte ponuku?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Neváhajte nás kontaktovať. Radi vám poradíme a pripravíme nezáväznú cenovú ponuku.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg transition-transform duration-300 hover:scale-105 rounded-full shadow-lg">
              Kontaktujte nás
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
