import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Logo from "@/components/layout/Logo";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <Logo />
            </div>
          <CardTitle className="text-2xl">Prihlásenie do administrácie</CardTitle>
          <CardDescription>Zadajte svoje prihlasovacie údaje.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="vas@email.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Heslo</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Zabudli ste heslo?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Prihlásiť sa</Button>
          <div className="mt-4 text-center text-sm">
            Nemáte účet?{" "}
            <Link href="/register" className="underline text-primary">
              Zaregistrujte sa
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
