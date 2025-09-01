import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Logo from "@/components/layout/Logo";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
                <Logo />
            </div>
          <CardTitle className="text-2xl">Vytvoriť administrátorský účet</CardTitle>
          <CardDescription>Vytvorte si účet pre prístup do systému.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Celé meno</Label>
            <Input id="name" placeholder="Meno a priezvisko" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="vas@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Heslo</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Vytvoriť účet</Button>
          <div className="mt-4 text-center text-sm">
            Už máte účet?{" "}
            <Link href="/login" className="underline text-primary">
              Prihláste sa
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
