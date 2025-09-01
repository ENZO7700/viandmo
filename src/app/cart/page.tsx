
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Získame prvé 3 produkty na simuláciu obsahu košíka
const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 2 },
    { ...products[4], quantity: 1 },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 5.00;
const total = subtotal + shipping;


export default function CartPage() {
    return (
        <div className="container mx-auto py-12 md:py-20">
            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-primary flex items-center justify-center gap-4">
                    <ShoppingCart className="w-10 h-10"/> Nákupný košík
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">Skontrolujte si svoju objednávku a pokračujte k platbe.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                     <Card>
                        <CardHeader>
                            <CardTitle>Položky v košíku ({cartItems.length})</CardTitle>
                        </CardHeader>
                        <CardContent className="divide-y">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-6 py-6 first:pt-0 last:pb-0">
                                    <div className="relative h-24 w-24 rounded-md overflow-hidden">
                                        <Image src={item.img} alt={item.name} fill className="object-cover" data-ai-hint={item.hint}/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold font-headline text-lg">{item.name}</h3>
                                        <p className="text-muted-foreground text-sm">{item.category}</p>
                                        <p className="text-primary font-bold mt-1 text-lg">{item.price.toFixed(2)} €</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="h-8 w-8">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <Input readOnly value={item.quantity} className="h-8 w-12 text-center" />
                                         <Button variant="outline" size="icon" className="h-8 w-8">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                     </Card>
                </div>
                <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Súhrn objednávky</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span>Medzisúčet</span>
                                <span>{subtotal.toFixed(2)} €</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Doprava</span>
                                <span>{shipping.toFixed(2)} €</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-xl">
                                <span>Celkom</span>
                                <span>{total.toFixed(2)} €</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                           <Button size="lg" className="w-full">Pokračovať k platbe</Button>
                           <Button variant="outline" className="w-full" asChild>
                             <Link href="/shop">Späť do obchodu</Link>
                           </Button>
                        </CardFooter>
                    </Card>
                </aside>
            </div>
        </div>
    )
}
