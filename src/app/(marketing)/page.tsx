import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, Box, Trash2, Sparkles, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VI&MO | Sťahovanie a Upratovanie Bratislava - Pevné ruky & poctivý prístup',
  description: 'Spoľahlivé sťahovanie bytov, domov a firiem, vypratávanie a profesionálne upratovacie služby v Bratislave a okolí. Získajte nezáväznú cenovú ponuku.',
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative h-[60vh] w-full flex items-center justify-center text-center bg-background text-foreground">
    <div className="absolute inset-0">
        <StarfieldCanvas />
    </div>
    <div className="relative z-10 p-4 flex flex-col items-center">
       <div className="mb-6">
         <Image src="/viandmo_logo.png" alt="VI&MO Logo" width={240} height={63} priority data-ai-hint="logo"/>
       </div>
       <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary-foreground text-shadow-lg">
          Pevné ruky & poctivý prístup
       </h1>
      <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
        Sťahovanie, odvoz odpadu a upratovanie v Bratislave a okolí
      </p>
    </div>
  </section>
);

// Services Section Component
const services = [
  {
    icon: <Truck className="w-10 h-10 text-primary-foreground" />,
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

const ServicesSection = () => (
  <section id="sluzby" className="py-16 md:py-24 bg-background text-foreground">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary mb-2">Naše Služby</h2>
         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Komplexné riešenia pre vaše sťahovanie a čistotu. Spoľahnite sa na pevné ruky a poctivý prístup.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className={`text-left p-6 flex flex-col items-start shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${service.featured ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
            <div className="mb-4">{service.icon}</div>
            <CardTitle className={`text-xl font-headline mb-2 ${service.featured ? 'text-primary-foreground' : 'text-foreground'}`}>{service.title}</CardTitle>
            <p className={`flex-grow ${service.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{service.description}</p>
             <Button asChild variant={service.featured ? 'secondary' : 'default'} className="mt-6 w-full">
                <Link href="/contact">{service.featured ? 'Cenová ponuka' : 'Viac o službách'}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Why Us Section Component
const WhyUsSection = () => (
  <section id="preco-my" className="py-16 md:py-24 bg-muted/30 text-foreground">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-headline text-primary mb-2">Prečo VI&MO</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Sme tu pre vás už 7 rokov. Našou prioritou je vaša spokojnosť a bezstarostný priebeh celej akcie.</p>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl leading-relaxed text-foreground/80">
          Hľadáte spoľahlivú firmu na sťahovanie? Sťahujeme byty, domy, kancelárie aj celé firmy, odvezieme nepotrebné veci a postaráme sa o dokonalý poriadok. Pracujeme rýchlo, efektívne a s ľudským prístupom. S nami máte istotu, že o vaše veci bude postarané ako o vlastné.
        </p>
      </div>
    </div>
  </section>
);

// Pricing Section Component
const PricingSection = () => (
    <section id="cennik" className="py-16 md:py-24 bg-background text-foreground">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline">Cenník</h2>
                <p className="text-muted-foreground mt-2 text-lg">Transparentné ceny bez skrytých poplatkov.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6 bg-card shadow-lg rounded-xl">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="font-headline text-2xl text-foreground">Cena pracovníkov</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 text-lg text-muted-foreground">
                        <p>Jeden pracovník - šofér + sťahovák: <span className="font-bold text-foreground">40 € / hod.</span></p>
                        <p>Dvaja pracovníci od: <span className="font-bold text-foreground">50 € / hod.</span></p>
                        <p>Traja a viac pracovníkov: <span className="font-bold text-foreground">cena dohodou</span></p>
                    </CardContent>
                </Card>
                <Card className="p-6 bg-card shadow-lg rounded-xl">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="font-headline text-2xl text-foreground">Cena dopravy</CardTitle>
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
    </section>
);

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

const FaqSection = () => (
    <section id="faq" className="py-16 md:py-24 bg-muted/30 text-foreground">
        <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline">Časté otázky (FAQ)</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left text-foreground">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
);

// CTA Section Component
const CtaSection = () => (
  <section className="bg-secondary text-secondary-foreground">
    <div className="container py-16 md:py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-headline mb-4">
        Nezáväzná cenová ponuka už dnes
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-secondary-foreground/80">
        Plánujete sťahovanie v Bratislave alebo okolí? Vyplňte krátky formulár a my Vám bezplatne pripravíme cenovú ponuku šitú presne na Vaše potreby. Žiadne záväzky, len rýchle a férové informácie.
      </p>
      <Link href="/contact" passHref>
        <Button size="lg" variant="default" className="px-8 py-6 text-lg transition-colors duration-300 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg">
          Získať cenovú ponuku
        </Button>
      </Link>
    </div>
  </section>
);


// Testimonials Section
const TestimonialsSection = () => (
    <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline">Povedali o nás</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 text-center bg-card shadow-lg rounded-xl">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Super rýchla a profesionálna partia. Sťahovanie prebehlo hladko a bez jediného škrabanca. Odporúčam!"</p>
                    <p className="font-bold text-foreground">- Martin J.</p>
                </Card>
                 <Card className="p-6 text-center bg-card shadow-lg rounded-xl">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Využili sme upratovacie služby po rekonštrukcii. Byt bol dokonale čistý. Skvelá práca a komunikácia."</p>
                    <p className="font-bold text-foreground">- Zuzana K.</p>
                </Card>
                 <Card className="p-6 text-center bg-card shadow-lg rounded-xl">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Potreboval som odviezť starý nábytok z pivnice. Chlapci boli veľmi ochotní a všetko rýchlo vypratali. Maximálna spokojnosť."</p>
                    <p className="font-bold text-foreground">- Peter V.</p>
                </Card>
            </div>
        </div>
    </section>
);

import StarfieldCanvas from '@/components/layout/StarfieldCanvas';


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="bg-white">
        <ServicesSection />
        <WhyUsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}
