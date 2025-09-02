
import { ThemeProvider } from '@/components/test/ThemeProvider';
import TestFooter from '@/components/test/TestFooter';
import TestHeader from '@/components/test/TestHeader';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="test-theme flex min-h-screen flex-col bg-background text-foreground">
        <TestHeader />
        <main className="flex-1">{children}</main>
        <TestFooter />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
