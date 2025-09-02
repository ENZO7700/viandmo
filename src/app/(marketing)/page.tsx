
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, Box, Trash2, Sparkles, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Hero Section Component
const HeroSection = () => (
  <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white">
     <Image
        src="https://picsum.photos/1920/1080?random=1"
        alt="Moving truck"
        fill
        priority
        className="object-cover object-center brightness-50"
        data-ai-hint="moving truck"
      />
    <div className="relative z-10 p-4">
      <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary-foreground drop-shadow-lg">
        Pevné ruky & poctivý prístup
      </h1>
      <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
        Sťahovanie, odvoz odpadu a upratovanie v Bratislave a okolí
      </p>
      <Link href="#cennik" passHref>
        <Button size="lg" className="mt-8 px-8 py-6 text-lg" variant="secondary">
          Cenová ponuka
        </Button>
      </Link>
    </div>
  </section>
);

// Services Section Component
const services = [
  {
    icon: <Truck className="w-12 h-12 text-primary" />,
    title: "Sťahovanie bytov a rodinných domov",
    description: "Bezstarostné sťahovanie bytov a domov v Bratislave a okolí.",
  },
  {
    icon: <Box className="w-12 h-12 text-primary" />,
    title: "Sťahovanie firiem, skladov a prevádzok",
    description: "Efektívne sťahovanie firiem a kancelárií bez zdržania.",
  },
  {
    icon: <Trash2 className="w-12 h-12 text-primary" />,
    title: "Vypratávanie, odvoz a likvidácia odpadu",
    description: "Vypratávanie a ekologický odvoz odpadu – bez starostí.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    title: "Profesionálne čistiace a upratovacie práce",
    description: "Čisté bývanie a pracovisko – pravidelne alebo jednorazovo.",
  }
];

const ServicesSection = () => (
  <section id="sluzby" className="py-16 md:py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">Naše služby</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="text-center p-6 flex flex-col items-center">
            <div className="mb-4">{service.icon}</div>
            <CardTitle className="text-xl font-headline mb-2">{service.title}</CardTitle>
            <p className="text-muted-foreground flex-grow">{service.description}</p>
            <Button variant="outline" className="mt-6" asChild>
              <Link href="/contact">Viac o službe</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Why Us Section Component
const WhyUsSection = () => (
  <section id="preco-my" className="py-16 md:py-24">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">Prečo VI&MO</h2>
      <p className="text-muted-foreground text-lg mb-8">Sme tu pre vás už 7 rokov.</p>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl leading-relaxed">
          Hľadáte spoľahlivú firmu na sťahovanie? Sťahujeme byty, domy, kancelárie aj celé firmy, odvezieme nepotrebné veci a postaráme sa o dokonalý poriadok. Pracujeme rýchlo, efektívne a s ľudským prístupom.
        </p>
      </div>
    </div>
  </section>
);

// Pricing Section Component
const PricingSection = () => (
    <section id="cennik" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary">Cenník</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="font-headline text-2xl">Cena pracovníkov</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 text-lg">
                        <p>Jeden pracovník - šofér + sťahovák: <span className="font-bold text-primary">40 € / hod.</span></p>
                        <p>Dvaja pracovníci od: <span className="font-bold text-primary">50 € / hod.</span></p>
                        <p>Traja a viac pracovníkov: <span className="font-bold text-primary">cena dohodou</span></p>
                    </CardContent>
                </Card>
                <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="font-headline text-2xl">Cena dopravy</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 text-lg">
                        <p>Cena dopravy v rámci Bratislavy: <span className="font-bold text-primary">do 30 €</span></p>
                        <p>Cena dopravy mimo mesta: <span className="font-bold text-primary">0,80 € / kilometer</span></p>
                        <p>Minimálna suma výjazdu na zákazku: <span className="font-bold text-primary">70 €</span></p>
                    </CardContent>
                </Card>
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
    <section id="faq" className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary">Časté otázky (FAQ)</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
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
  <section className="bg-primary text-primary-foreground">
    <div className="container py-16 md:py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-headline mb-4">
        Nezáväzná cenová ponuka už dnes
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
        Plánujete sťahovanie v Bratislave alebo okolí? Vyplňte krátky formulár a my Vám bezplatne pripravíme cenovú ponuku šitú presne na Vaše potreby. Žiadne záväzky, len rýchle a férové informácie.
      </p>
      <Link href="/contact" passHref>
        <Button size="lg" variant="secondary" className="px-8 py-6 text-lg transition-colors duration-300">
          Získať cenovú ponuku
        </Button>
      </Link>
    </div>
  </section>
);


// Testimonials Section
const TestimonialsSection = () => (
    <section className="py-16 md:py-24">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline text-primary">Povedali o nás</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Super rýchla a profesionálna partia. Sťahovanie prebehlo hladko a bez jediného škrabanca. Odporúčam!"</p>
                    <p className="font-bold">- Martin J.</p>
                </Card>
                 <Card className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Využili sme upratovacie služby po rekonštrukcii. Byt bol dokonale čistý. Skvelá práca a komunikácia."</p>
                    <p className="font-bold">- Zuzana K.</p>
                </Card>
                 <Card className="p-6 text-center">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"Potreboval som odviezť starý nábytok z pivnice. Chlapci boli veľmi ochotní a všetko rýchlo vypratali. Maximálna spokojnosť."</p>
                    <p className="font-bold">- Peter V.</p>
                </Card>
            </div>
        </div>
    </section>
);


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
