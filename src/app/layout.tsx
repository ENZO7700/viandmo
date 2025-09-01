
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, PT_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'VI&MO | Sťahovanie a Upratovanie Bratislava',
  description: 'Spoľahlivé sťahovanie, odvoz odpadu a profesionálne upratovacie služby v Bratislave a okolí. Pevné ruky & poctivý prístup.',
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['400', '700'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '700'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={cn(playfairDisplay.variable, ptSans.variable)}>
      <head />
      <body className={cn('font-body antialiased')}>
        {children}
      </body>
    </html>
  );
}
