
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { stylists } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?random=20"
          alt="Tím Papi Hair Design"
          fill
          priority
          className="object-cover object-center brightness-50"
          data-ai-hint="team salon"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary drop-shadow-lg">
            Náš Príbeh
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Spoznajte ľudí a vášeň, ktorá stojí za Papi Hair Design PRO.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline mb-4 text-primary">Naša Filozofia</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              V Papi Hair Design PRO veríme, že vlasy sú viac než len účes – sú vyjadrením osobnosti. Našim poslaním je vytvárať jedinečné a personalizované zážitky, ktoré podčiarknu vašu individualitu a dodajú vám sebavedomie. Sme presvedčení, že kombinácia prvotriednych zručností, kvalitných produktov a uvoľnenej atmosféry je kľúčom k dokonalosti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Neustále sa vzdelávame a sledujeme najnovšie trendy, aby sme vám mohli ponúknuť to najlepšie zo sveta vlasového dizajnu. Každý klient je pre nás inšpiráciou a ku každej práci pristupujeme s maximálnou starostlivosťou a kreativitou.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://picsum.photos/800/600?random=21"
                alt="Detail práce stylistu"
                fill
                className="object-cover"
                data-ai-hint="stylist detail"
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
              Sme hrdí na náš tím talentovaných a zanietených profesionálov, ktorí sú pripravení splniť vaše sny.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stylists.map((stylist) => (
              <div key={stylist.id} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
                    <Image
                      src={stylist.img}
                      alt={stylist.name}
                      fill
                      className="object-cover"
                      data-ai-hint={stylist.hint}
                    />
                </div>
                <h3 className="text-xl font-semibold font-headline">{stylist.name}</h3>
                <p className="text-primary">{stylist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">
            Staňte sa súčasťou našej rodiny
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Zažite rozdiel, ktorý prináša osobný prístup a majstrovské remeslo.
          </p>
          <Link href="/booking" passHref>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg transition-colors duration-300">
              Rezervujte si svoj termín
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
