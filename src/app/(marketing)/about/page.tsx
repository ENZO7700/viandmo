import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Náš príbeh a tím | VI&MO Sťahovanie a Upratovanie',
  description: 'Spoznajte ľudí a filozofiu, ktorá stojí za úspechom firmy VI&MO. Zistite viac o našom prístupe k sťahovaniu a upratovaniu v Bratislave a okolí.',
};

const team = [
    { name: "Miroslav Danihel", role: "Sťahovanie", phone: "+421 911 275 755", img: "https://picsum.photos/200/200?random=1", hint: "man portrait" },
    { name: "Partner", role: "Upratovanie", phone: "+421 918 895 730", img: "https://picsum.photos/200/200?random=2", hint: "woman portrait" },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?random=20"
          alt="Tím VI&MO v akcii"
          fill
          priority
          className="object-cover object-center"
          data-ai-hint="team moving boxes"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary-foreground drop-shadow-lg">
            Náš Príbeh
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Spoznajte ľudí a prístup, ktorý stojí za úspechom VI&MO.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline mb-4 text-primary">Naša Filozofia</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Vo VI&MO veríme, že sťahovanie alebo upratovanie nemusí byť stresujúca udalosť. Našim poslaním je poskytovať spoľahlivé, efektívne a cenovo dostupné služby s ľudským a poctivým prístupom. Ku každej zákazke pristupujeme s maximálnou zodpovednosťou, či už ide o sťahovanie malého bytu alebo upratovanie veľkej firmy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Zakladáme si na pevných rukách, ktoré odnesú vaše starosti, a na precíznosti, ktorá zanechá vaše priestory dokonale čisté. Vaša spokojnosť je našou najväčšou odmenou a motorom pre neustále zlepšovanie našich služieb.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://picsum.photos/800/600?random=21"
                alt="Detail práce pri balení"
                fill
                className="object-cover"
                data-ai-hint="packing box detail"
             />
          </div>
        </div>
      </section>

       {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">Zoznámte sa s naším tímom</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Sme tu pre vás, pripravení zodpovedať vaše otázky a pomôcť vám s vašimi požiadavkami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center p-6 border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">
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
