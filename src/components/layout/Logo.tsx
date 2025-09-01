import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative flex items-center h-12 w-40", className)}>
      <Image 
        src="https://picsum.photos/seed/logo/200/60" 
        alt="Papi Hair Design PRO Logo" 
        fill
        priority
        className="object-contain"
        data-ai-hint="logo design"
      />
    </Link>
  );
}
