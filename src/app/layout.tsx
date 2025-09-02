import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, PT_Sans } from 'next/font/google';

const APP_NAME = "VI&MO | Sťahovanie a Upratovanie Bratislava";
const APP_DEFAULT_TITLE = "VI&MO | Sťahovanie a Upratovanie Bratislava";
const APP_TITLE_TEMPLATE = "%s | VI&MO";
const APP_DESCRIPTION = "Spoľahlivé sťahovanie, odvoz odpadu a profesionálne upratovacie služby v Bratislave a okolí. Pevné ruky & poctivý prístup.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#00202e",
};


const playfairDisplay = Playfair_Display({
  subsets: ['latin-ext'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['400', '700'],
});

const ptSans = PT_Sans({
  subsets: ['latin-ext'],
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
    <html lang="sk" className={cn(playfairDisplay.variable, ptSans.variable)} suppressHydrationWarning>
      <head />
      <body className={cn('font-body antialiased')}>
        {children}
      </body>
    </html>
  );
}
