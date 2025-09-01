
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?random=40"
          alt="Kontaktujte nás"
          fill
          priority
          className="object-cover object-center brightness-50"
          data-ai-hint="desk phone"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary drop-shadow-lg">
            Kontaktujte Nás
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Sme tu pre vás. Neváhajte nás osloviť s akýmikoľvek otázkami.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info & Hours */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-headline text-primary mb-4">Naše Štúdio</h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>Luxusná ulica 123, 841 01 Bratislava, Slovensko</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <a href="tel:+4219XX XXX XXX" className="hover:text-primary transition-colors">+421 9XX XXX XXX</a>
                </p>
                <p className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <a href="mailto:info@viandmo.sk" className="hover:text-primary transition-colors">info@viandmo.sk</a>
                </p>
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-headline text-primary mb-4">Otváracie Hodiny</h3>
               <div className="space-y-2 text-lg text-muted-foreground">
                <p className="flex justify-between"><span>Utorok - Piatok:</span> <span className="font-semibold">10:00 - 18:00</span></p>
                <p className="flex justify-between"><span>Sobota:</span> <span className="font-semibold">09:00 - 15:00</span></p>
                <p className="flex justify-between"><span>Nedeľa - Pondelok:</span> <span className="font-semibold">Zatvorené</span></p>
              </div>
            </div>
            {/* Placeholder for Map */}
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative shadow-lg">
                <Image
                    src="https://picsum.photos/800/450?random=41"
                    alt="Mapa polohy salónu"
                    fill
                    className="object-cover"
                    data-ai-hint="city map"
                />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button variant="secondary">Otvoriť v Mapách</Button>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
             <h2 className="text-3xl font-headline text-primary mb-4">Napíšte Nám</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Vaše Meno" required className="py-6"/>
                <Input type="email" placeholder="Váš Email" required className="py-6"/>
              </div>
              <Input placeholder="Predmet" required className="py-6"/>
              <Textarea placeholder="Vaša Správa..." rows={6} required />
              <Button type="submit" size="lg" className="w-full py-6">Odoslať správu</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
