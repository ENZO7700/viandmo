
'use client'

import { ThemeProvider } from "@/components/admin/ThemeProvider";

export function AdminProviders({
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
      {children}
    </ThemeProvider>
  );
}
