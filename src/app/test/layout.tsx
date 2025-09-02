
import { ThemeProvider } from '@/components/test/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { ThemeSwitcher } from '@/components/test/ThemeSwitcher';

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
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                 <div className="container flex h-14 items-center">
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Testovacia sekcia</h1>
                    </div>
                    <ThemeSwitcher />
                </div>
            </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
          <Toaster />
        </div>
    </ThemeProvider>
  );
}
