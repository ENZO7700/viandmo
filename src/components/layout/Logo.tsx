import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-2xl font-bold font-headline tracking-tight", className)}>
      <span className="text-primary">Papi</span> Hair Design
    </Link>
  );
}
