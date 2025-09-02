
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../layout/Logo";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { href: "/test", label: "Domov" },
  { href: "/test", label: "Cenník" },
  { href: "/test", label: "Rezervovať" },
  { href: "/test", label: "Produkty" },
  { href: "/test", label: "O nás" },
  { href: "/test", label: "Kontakt" },
];

export default function TestHeader() {
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex flex-grow justify-center items-center gap-4">
          {navLinks.map(link => <NavLink key={link.label} {...link} />)}
        </nav>
        
        <div className="flex items-center gap-2 ml-auto">
            <ThemeSwitcher />
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6"/>
                </Button>
                </SheetTrigger>
                <SheetContent className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <nav className="flex flex-col items-center gap-6 mt-16">
                    {navLinks.map(link => <NavLink key={link.label} {...link} />)}
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
