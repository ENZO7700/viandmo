
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function TestPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Vitajte na testovacej stránke!</CardTitle>
          <CardDescription>
            Tu si môžete prezrieť nový "Amoled Black Mirror Glass" dizajn v akcii.
            Použite prepínač vpravo hore na zmenu medzi tmavou a svetlou témou.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p>Toto je hlavný obsah stránky, ktorý demonštruje vizuál komponentov v novej téme.</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
            <Card key={i}>
                <CardHeader>
                    <div className="relative h-48 w-full">
                        <Image src={`https://picsum.photos/600/400?random=${i}`} alt={`Placeholder ${i}`} fill className="object-cover rounded-t-lg" data-ai-hint="abstract texture" />
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle>Ukážková karta {i}</CardTitle>
                    <p className="text-muted-foreground mt-2">
                        Toto je obsah pre ukážkovú kartu na otestovanie vzhľadu komponentov v novom dizajne.
                    </p>
                    <Button className="mt-4 w-full">Zistiť viac</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
