
import { ThemeProvider } from '@/components/test/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TestSidebar } from '@/components/test/TestSidebar';

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
      <SidebarProvider>
        <div className="test-theme flex min-h-screen flex-col bg-background text-foreground">
          <TestSidebar />
          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
          <Toaster />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
