import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/data";
import { Lock } from "lucide-react";
import Image from "next/image";

const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 5.00;
const total = subtotal + shipping;

export default function CheckoutPage() {
    return (
        <div className="container mx-auto py-12">
             <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Checkout</h1>
                <p className="text-muted-foreground mt-2">Complete your purchase securely.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Shipping & Payment Forms */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Shipping Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" placeholder="123 Luxury Lane" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" placeholder="Beverly Hills" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="state">State</Label>
                                        <Input id="state" placeholder="CA" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" placeholder="90210" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Details</CardTitle>
                             <CardDescription>All transactions are secure and encrypted.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                               <div className="space-y-2">
                                    <Label htmlFor="card-name">Name on Card</Label>
                                    <Input id="card-name" placeholder="John M Doe" />
                                </div>
                               <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Information</Label>
                                    {/* Placeholder for Stripe Card Element */}
                                    <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <span className="text-muted-foreground">Card number, expiration, CVC</span>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Order Summary */}
                <div>
                     <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Image src={item.img} data-ai-hint={item.hint} alt={item.name} width={64} height={64} className="rounded-md object-cover"/>
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">${total.toFixed(2)}</span>
                            </div>
                        </CardContent>
                         <CardFooter>
                           <Button className="w-full font-bold text-lg h-12">
                                <Lock className="w-4 h-4 mr-2"/>
                                Pay ${total.toFixed(2)}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
