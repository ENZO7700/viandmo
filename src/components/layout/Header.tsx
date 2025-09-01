'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, ShoppingCart, User, UserPlus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "O nás" },
  { href: "/services", label: "Služby" },
  { href: "/shop", label: "Shop" },
  { href: "/admin", label: "Admin" },
];

export default function Header() {
  const pathname = usePathname();
  
  const NavLink = ({ href, label }: { href: string, label:string }) => (
    <Button asChild variant="link" className={cn(
      "text-sm font-semibold uppercase tracking-wider",
      pathname === href ? "text-primary" : "text-foreground hover:text-primary",
      "transition-colors duration-200"
    )}>
      <Link href={href}>{label}</Link>
    </Button>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex flex-grow justify-center items-center gap-4">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
           <Button asChild size="lg" className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="/booking">Rezervovať termín</Link>
            </Button>
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Button asChild variant="ghost" size="icon">
            <Link href="/cart"><ShoppingCart /></Link>
          </Button>
           <Button asChild variant="ghost" size="icon">
            <Link href="/login"><User /></Link>
          </Button>
        </div>
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
                    <Link href="/booking">Rezervovať termín</Link>
                  </Button>
                {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                <div className="flex flex-col w-full gap-2 mt-8">
                  <Button asChild variant="outline">
                    <Link href="/login"><User className="mr-2 h-4 w-4" /> Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register"><UserPlus className="mr-2 h-4 w-4" /> Sign Up</Link>
                  </Button>
                  <Button asChild variant="secondary">
                     <Link href="/cart"><ShoppingCart className="mr-2 h-4 w-4" /> View Cart</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
