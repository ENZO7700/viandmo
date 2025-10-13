import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import InstallBanner from '@/components/pwa/InstallBanner';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

// Metadata for contact page is defined here because the page itself is a client component
export const metadata: Metadata = {
  title: 'Kontakt a Cenová Ponuka | VI&MO Sťahovanie Bratislava',
  description: 'Kontaktujte nás pre nezáväznú cenovú ponuku na sťahovanie, vypratávanie alebo upratovanie v Bratislave a okolí. Zavolajte nám alebo vyplňte formulár.',
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col light-theme">
      <div className="bg-[#00202e]">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <div className="bg-[#00202e]">
        <Footer />
      </div>
      <InstallBanner />
      <Toaster />
    </div>
  );
}
