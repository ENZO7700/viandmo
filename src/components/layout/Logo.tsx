import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative h-8 w-24", className)}>
      <Image 
        src="https://viandmo.com/wp-content/uploads/viandmo_logo_regular_white.svg" 
        alt="VI&MO Logo" 
        fill
        priority
        className="object-contain"
        data-ai-hint="logo"
      />
    </Link>
  );
}
