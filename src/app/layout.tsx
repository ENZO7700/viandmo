
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Plus_Jakarta_Sans } from 'next/font/google';

const APP_NAME = "VI&MO";
const APP_DEFAULT_TITLE = "Sťahovanie Bytov a Firiem Bratislava | VI&MO";
const APP_TITLE_TEMPLATE = "%s | VI&MO";
const APP_DESCRIPTION = "Profesionálne sťahovanie bytov, domov a firiem v Bratislave a okolí. Ponúkame aj vypratávanie a upratovacie služby. Získajte nezáväznú cenovú ponuku.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.viandmo.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    images: [
      {
        url: '/og-image.jpg', // Odkaz na predvolený OG obrázok
        width: 1200,
        height: 630,
        alt: 'VI&MO Sťahovanie a Upratovanie v Bratislave',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
     images: [
      {
        url: '/og-image.jpg',
        alt: 'VI&MO Sťahovanie a Upratovanie v Bratislave',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#00202e",
};

const mainFont = Plus_Jakarta_Sans({
  subsets: ['latin-ext'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VI and MO s. r. o.',
  image: `${siteUrl}/viandmo_logo.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+421 911 275 755',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Karpatské námestie 7770/10A',
    addressLocality: 'Bratislava',
    postalCode: '831 06',
    addressCountry: 'SK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.2045899,
    longitude: 17.1479833,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/p/VI-MO-stahovanie-upratovanie-100063524682338/'
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={cn(mainFont.variable)} suppressHydrationWarning>
      <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
      </body>
    </html>
  );
}

    