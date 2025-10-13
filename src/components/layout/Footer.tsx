'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 border-t backdrop-blur-sm py-12">
      <div className="container grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <Logo />
          <p className="text-sm text-muted-foreground max-w-xs mt-4">
            Spoľahlivé sťahovanie, vypratávanie a upratovanie v Bratislave a okolí. Rýchlo, efektívne a s ľudským prístupom.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Rýchle odkazy</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/#sluzby" className="hover:text-primary transition-colors">Služby</Link></li>
            <li><Link href="/#cennik" className="hover:text-primary transition-colors">Cenník</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">O nás</Link></li>
            <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Kontakt</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <a href="tel:+421911275755" className="hover:text-primary transition-colors">
                +421 911 275 755 (Sťahovanie)
              </a>
            </li>
             <li className="flex items-center justify-center md:justify-start">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <a href="tel:+421918895730" className="hover:text-primary transition-colors">
                +421 918 895 730 (Upratovanie)
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <a href="mailto:info@viandmo.com" className="hover:text-primary transition-colors">
                info@viandmo.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Obchodné údaje</h3>
           <div className="text-sm text-muted-foreground">
                <p>VI and MO s. r. o.</p>
                <p>Karpatské námestie 7770/10A</p>
                <p>831 06 Bratislava - Rača</p>
                <p>IČO: 56 811 322</p>
                <p>DIČ: 2122461176</p>
           </div>
        </div>
      </div>

      <Separator className="my-8 bg-muted" />

      <div className="container text-center text-sm text-muted-foreground">
        &copy; {currentYear} VI and MO s. r. o. Všetky práva vyhradené.
        <span className="mx-2">|</span>
        <Link href="/privacy-policy" className="hover:text-primary transition-colors">
          Ochrana osobných údajov
        </Link>
      </div>
    </footer>
  );
}
