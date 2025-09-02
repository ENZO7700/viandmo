
'use client';
import { Toaster } from "@/components/ui/toaster";
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardNav } from "@/components/admin/DashboardNav";
import { ThemeProvider } from "@/components/admin/ThemeProvider";

export default function AdminLayout({
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
      <div className="test-theme flex min-h-screen w-full flex-col bg-background text-foreground">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
