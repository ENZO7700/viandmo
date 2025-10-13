'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#cennik", label: "Cenník" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "O nás" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  
  const NavLink = ({ href, label }: { href: string, label:string }) => (
    <Button asChild variant="link" className={cn(
      "text-sm font-semibold uppercase tracking-wider",
       (pathname === href || (href === '/blog' && pathname.startsWith('/blog'))) ? "text-primary" : "text-foreground hover:text-primary",
      "transition-colors duration-200"
    )}>
      <Link href={href}>{label}</Link>
    </Button>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex flex-grow justify-center items-center gap-4">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
           <Button asChild size="lg" className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="/contact">Cenová ponuka</Link>
            </Button>
        </nav>
        
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col items-center gap-6 mt-16">
                 <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    <Link href="/contact">Cenová ponuka</Link>
                  </Button>
                {navLinks.map(link => <NavLink key={link.href} {...link} />)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
