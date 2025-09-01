
'use client';
import Logo from "@/components/layout/Logo";
import { Toaster } from "@/components/ui/toaster";
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardNav } from "@/components/admin/DashboardNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
