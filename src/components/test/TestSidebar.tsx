
'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import Logo from '../layout/Logo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Separator } from '../ui/separator';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '/test', label: 'Domov' },
  { href: '/test', label: 'Cenník' },
  { href: '/test', label: 'Rezervovať' },
  { href: '/test', label: 'Produkty' },
  { href: '/test', label: 'O nás' },
  { href: '/test', label: 'Kontakt' },
];

export function TestSidebar() {
    const { state } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
           <div className="group-data-[collapsible=icon]:-ml-2">
             <Logo />
           </div>
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.label}>
              <SidebarMenuButton
                href={link.href}
                asChild
                tooltip={link.label}
              >
                <Link href={link.href}>
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
         <div className="flex justify-center gap-2 group-data-[collapsible=icon]:flex-col">
            <Link href="#" className="text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">
                <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">
                <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors">
                <Twitter className="h-6 w-6" />
            </Link>
        </div>
        <Separator className="my-2" />
        <ThemeSwitcher />
      </SidebarFooter>
    </Sidebar>
  );
}
