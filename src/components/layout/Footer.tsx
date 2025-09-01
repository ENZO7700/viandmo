'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-12">
      <div className="container grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <Logo />
          <p className="text-sm text-muted-foreground max-w-xs mt-4">
            Exkluzívna starostlivosť o vlasy, kde sa umenie stretáva s inováciou. Prebuďte svoju krásu s nami.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Rýchle odkazy</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                O nás
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Služby
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary transition-colors">
                Cenník
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-primary transition-colors">
                Online rezervácia
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">
                E-shop
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Kontakt</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <a href="tel:+4219XX XXX XXX" className="hover:text-primary transition-colors">
                +421 9XX XXX XXX
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <a href="mailto:info@papihairdesignpro.com" className="hover:text-primary transition-colors">
                info@papihairdesignpro.com
              </a>
            </li>
            <li className="text-sm">
              Luxusná ulica 123, <br /> 841 01 Bratislava, Slovensko
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Sledujte nás</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/papihairdesignpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/papihairdesignpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-muted" />

      <div className="container text-center text-sm text-muted-foreground">
        &copy; {currentYear} Papi Hair Design PRO. Všetky práva vyhradené.
        <span className="mx-2">|</span>
        <Link href="/privacy-policy" className="hover:text-primary transition-colors">
          Ochrana osobných údajov
        </Link>
        <span className="mx-2">|</span>
        <Link href="/terms-of-service" className="hover:text-primary transition-colors">
          Podmienky používania
        </Link>
      </div>
    </footer>
  );
}
