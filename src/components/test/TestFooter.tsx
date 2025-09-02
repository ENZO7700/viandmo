
'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../layout/Logo';

export default function TestFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      <div className="container grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Prémium služby pre váš dokonalý vzhľad.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Rýchle odkazy</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/test" className="transition-colors hover:text-foreground">Domov</Link></li>
            <li><Link href="/test" className="transition-colors hover:text-foreground">Cenník</Link></li>
            <li><Link href="/test" className="transition-colors hover:text-foreground">Rezervovať</Link></li>
            <li><Link href="/test" className="transition-colors hover:text-foreground">O nás</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><p>info@example.com</p></li>
            <li><p>+123 456 7890</p></li>
            <li><p>Hlavná Ulica 1, Mesto</p></li>
          </ul>
        </div>
      </div>

      <Separator className="my-8 bg-border/40" />

      <div className="container text-center text-sm text-muted-foreground">
        &copy; {currentYear} Black Mirror Inc. Všetky práva vyhradené.
      </div>
    </footer>
  );
}
