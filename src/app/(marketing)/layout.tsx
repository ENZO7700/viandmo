import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import InstallBanner from '@/components/pwa/InstallBanner';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';


// Note: Metadata for contact page is defined here because contact page is a client component
// and metadata exports from client components are not always reliable.
export const metadata: Metadata = {
  title: 'Kontakt a Cenová Ponuka | VI&MO Sťahovanie Bratislava',
  description: 'Kontaktujte nás pre nezáväznú cenovú ponuku na sťahovanie, vypratávanie alebo upratovanie v Bratislave a okolí. Zavolajte nám alebo vyplňte formulár.',
};
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <InstallBanner />
      <Toaster />
    </div>
  );
}
