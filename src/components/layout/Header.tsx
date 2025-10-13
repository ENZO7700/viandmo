'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu } from "lucide-react";
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
       (pathname === href || (href === '/blog' && pathname.startsWith('/blog'))) ? "text-primary" : "text-primary-foreground hover:text-primary",
      "transition-colors duration-200"
    )}>
      <Link href={href}>{label}</Link>
    </Button>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-foreground/10 bg-transparent">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="hidden md:flex flex-grow justify-end items-center gap-4">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
           <div className="flex items-center gap-2 ml-4">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
             </a>
             <a href="tel:+421911275755" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
             </a>
           </div>
        </nav>
        
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#00202e] p-6 border-r-0">
               <div className="mb-8">
                 <Logo />
               </div>
              <nav className="flex flex-col items-start gap-4">
                {navLinks.map(link => (
                    <Button asChild variant="link" className={cn(
                      "text-lg font-semibold",
                      (pathname === link.href || (link.href === '/blog' && pathname.startsWith('/blog'))) ? "text-primary" : "text-primary-foreground hover:text-primary",
                    )} key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
