import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative flex items-center h-12 w-40", className)}>
      <Image 
        src="/viandmo_logo.png" 
        alt="VI&MO Logo" 
        width={160}
        height={42}
        priority
        className="object-contain"
        data-ai-hint="logo"
      />
    </Link>
  );
}
