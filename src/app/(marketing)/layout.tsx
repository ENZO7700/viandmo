import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import InstallBanner from '@/components/pwa/InstallBanner';
import { Toaster } from '@/components/ui/toaster';

interface MarketingLayoutProps {
  children: React.ReactNode;
}


export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
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
