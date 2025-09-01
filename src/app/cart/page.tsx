import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Trash2 } from "lucide-react";
import { products } from "@/lib/data";

const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 5.00;
const total = subtotal + shipping;

export default function CartPage() {
    return (
        <div className="container mx-auto py-12">
            <header className="mb-10">
                <h1 className="text-4xl font-bold tracking-tight">Your Cart</h1>
                <p className="text-muted-foreground mt-2">Review your items and proceed to checkout.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card>
                        <CardContent className="p-0">
                           <div className="divide-y divide-border">
                             {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4 p-4">
                                    <Image src={item.img} alt={item.name} data-ai-hint={item.hint} width={100} height={100} className="rounded-md object-cover"/>
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Input type="number" defaultValue={item.quantity} className="w-16 h-9 text-center"/>
                                    </div>
                                    <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                                        <Trash2 className="w-4 h-4"/>
                                    </Button>
                                </div>
                            ))}
                           </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <Separator/>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">${total.toFixed(2)}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button className="w-full" asChild>
                                <Link href="/checkout">Proceed to Checkout</Link>
                            </Button>
                            <Button variant="link" className="text-muted-foreground" asChild>
                                <Link href="/shop"><ArrowLeft className="w-4 h-4 mr-2"/> Continue Shopping</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
