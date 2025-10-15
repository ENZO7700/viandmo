
'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, Box, Trash2, Sparkles, Phone, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import HeroSection from '@/components/layout/HeroSection';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import imageData from '@/lib/placeholder-images.json';


// Services Section Component
const services = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Sťahovanie bytov a rodinných domov",
    description: "Bezstarostné sťahovanie bytov a domov v Bratislave a okolí.",
    featured: true,
  },
  {
    icon: <Box className="w-10 h-10 text-primary" />,
    title: "Sťahovanie firiem, skladov a prevádzok",
    description: "Efektívne sťahovanie firiem a kancelárií bez zdržania.",
  },
  {
    icon: <Trash2 className="w-10 h-10 text-primary" />,
    title: "Vypratávanie, odvoz a likvidácia odpadu",
    description: "Vypratávanie a ekologický odvoz odpadu – bez starostí.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Profesionálne čistiace a upratovacie práce",
    description: "Čisté bývanie a pracovisko – pravidelne alebo jednorazovo.",
  }
];

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

const ServicesSection = () => {
    const shouldReduceMotion = useReducedMotion();
    
    return (
      <motion.section 
        id="sluzby" 
        className="py-16 md:py-24 bg-background text-foreground"
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Naše Služby</h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Komplexné riešenia pre vaše sťahovanie a čistotu. Spoľahnite sa na pevné ruky a poctivý prístup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
               <motion.div
                key={index}
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                  <Card className={`text-left p-6 flex flex-col items-start shadow-lg rounded-xl transition-all duration-300 h-full bg-card`}>
                     <div className={`p-3 rounded-full mb-4 bg-primary/10`}>
                        {service.icon}
                    </div>
                    <CardTitle className={`text-xl font-headline font-semibold mb-2 text-foreground`}>{service.title}</CardTitle>
                    <p className={`flex-grow text-muted-foreground`}>{service.description}</p>
                     <Button asChild variant={service.featured ? 'secondary' : 'default'} className="mt-6 w-full rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                        <Link href="/contact">{service.featured ? 'Cenová ponuka' : 'Viac o službách'}</Link>
                    </Button>
                  </Card>
               </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
}

// Why Us Section Component
const WhyUsSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
      <motion.section 
        id="preco-my" 
        className="py-16 md:py-24 bg-muted/30 text-foreground"
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Prečo VI&MO</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sme tu pre vás už 7 rokov. Hľadáte spoľahlivú firmu na sťahovanie? Sťahujeme byty, domy, kancelárie aj celé firmy. Pracujeme rýchlo, efektívne a s ľudským prístupom. S nami máte istotu, že o vaše veci bude postarané ako o vlastné.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Našou prioritou je vaša spokojnosť a bezstarostný priebeh celej akcie. Postaráme sa aj o vypratanie nepotrebných vecí a dokonalý poriadok po práci.
                </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="https://viandmo.com/wp-content/uploads/viandmo_logo_regular.svg"
                    alt="VI&MO Logo"
                    fill
                    className="object-contain p-8"
                    data-ai-hint="logo"
                 />
            </div>
        </div>
      </motion.section>
    );
}

// Pricing Section Component
const PricingSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.section 
            id="cennik" 
            className="py-16 md:py-24 bg-background text-foreground"
            variants={shouldReduceMotion ? undefined : sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Cenník</h2>
                    <p className="text-muted-foreground mt-2 text-lg">Transparentné ceny bez skrytých poplatkov.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 bg-card shadow-lg rounded-xl">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="font-headline font-semibold text-2xl text-foreground">Cena pracovníkov</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-3 text-lg text-muted-foreground">
                            <p>Jeden pracovník - šofér + sťahovák: <span className="font-bold text-foreground">40 € / hod.</span></p>
                            <p>Dvaja pracovníci od: <span className="font-bold text-foreground">50 € / hod.</span></p>
                            <p>Traja a viac pracovníkov: <span className="font-bold text-foreground">cena dohodou</span></p>
                        </CardContent>
                    </Card>
                    <Card className="p-6 bg-card shadow-lg rounded-xl">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="font-headline font-semibold text-2xl text-foreground">Cena dopravy</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-3 text-lg text-muted-foreground">
                            <p>Cena dopravy v rámci Bratislavy: <span className="font-bold text-foreground">do 30 €</span></p>
                            <p>Cena dopravy mimo mesta: <span className="font-bold text-foreground">0,80 € / kilometer</span></p>
                            <p>Minimálna suma výjazdu na zákazku: <span className="font-bold text-foreground">70 €</span></p>
                        </CardContent>
                    </Card>
                </div>
                 <div className="text-center mt-8 text-muted-foreground">
                    <p>Uvedené ceny sú bez DPH. Nie sme platci DPH.</p>
                </div>
            </div>
        </motion.section>
    );
}
// FAQ Section Component
const faqs = [
    {
        question: "Ako si objednám vaše služby?",
        answer: "Najjednoduchší spôsob je vyplniť náš kontaktný formulár alebo nám zavolať. Pripravíme vám nezáväznú cenovú ponuku."
    },
    {
        question: "Pracujete aj počas víkendov?",
        answer: "Áno, po dohode pracujeme aj počas víkendov a sviatkov, aby sme sa maximálne prispôsobili vašim potrebám."
    },
    {
        question: "Je v cene zahrnutý aj baliaci materiál?",
        answer: "Baliaci materiál nie je štandardne v cene, ale vieme ho po dohode zabezpečiť. Odporúčame prekonzultovať detaily pri objednávke."
    },
];

const FaqSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.section 
            id="faq" 
            className="py-16 md:py-24 bg-muted/30 text-foreground"
            variants={shouldReduceMotion ? undefined : sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Časté otázky (FAQ)</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left text-foreground font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </motion.section>
    );
}
// CTA Section Component
const CtaSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
      <section className="bg-primary text-primary-foreground">
        <motion.div 
            className="container py-16 md:py-20 text-center"
            variants={shouldReduceMotion ? undefined : sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Pripravení na zmenu?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            Nechajte starosti so sťahovaním na nás. Vyplňte krátky formulár a my vám obratom pripravíme cenovú ponuku šitú na mieru. Rýchlo, férovo a bez záväzkov.
          </p>
          <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link href="/contact" passHref>
                <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-full shadow-lg">
                  Chcem nezáväznú ponuku
                </Button>
              </Link>
          </motion.div>
        </motion.div>
      </section>
    );
}

// Testimonials Section
const TestimonialsSection = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <motion.section 
            className="py-16 md:py-24 bg-muted/30 text-foreground"
            variants={shouldReduceMotion ? undefined : sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Povedali o nás</h2>
                     <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">Zistite, prečo sú naši klienti s našou prácou spokojní.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 text-left bg-card shadow-md rounded-lg relative overflow-hidden">
                        <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/10" />
                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"Super rýchla a profesionálna partia. Sťahovanie prebehlo hladko a bez jediného škrabanca. Odporúčam!"</p>
                        <p className="font-bold text-foreground">- Martin J.</p>
                    </Card>
                     <Card className="p-6 text-left bg-card shadow-md rounded-lg relative overflow-hidden">
                        <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/10" />
                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"Využili sme upratovacie služby po rekonštrukcii. Byt bol dokonale čistý. Skvelá práca a komunikácia."</p>
                        <p className="font-bold text-foreground">- Zuzana K.</p>
                    </Card>
                     <Card className="p-6 text-left bg-card shadow-md rounded-lg relative overflow-hidden">
                        <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/10" />
                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"Potreboval som odviezť starý nábytok z pivnice. Chlapci boli veľmi ochotní a všetko rýchlo vypratali. Maximálna spokojnosť."</p>
                        <p className="font-bold text-foreground">- Peter V.</p>
                    </Card>
                </div>
            </div>
        </motion.section>
    );
}

// Dummy Metadata component for client pages that need it.
const HomePageMetadata = () => (
    <div style={{ display: 'none' }}>
        <title>VI&MO | Sťahovanie a Upratovanie Bratislava - Pevné ruky & poctivý prístup</title>
        <meta name="description" content="Spoľahlivé sťahovanie bytov, domov a firiem, vypratávanie a profesionálne upratovacie služby v Bratislave a okolí. Získajte nezáväznú cenovú ponuku." />
    </div>
);

export default function HomePage() {
  return (
    <>
      <HomePageMetadata />
      <HeroSection />
      <>
        <ServicesSection />
        <WhyUsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </>
    </>
  );
}