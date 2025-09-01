import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/data";
import { ListFilter, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Cleansing", "Conditioning", "Styling", "Treatments"];

export default function ShopPage() {
    return (
        <div className="container mx-auto py-12">
            <header className="relative h-64 rounded-lg overflow-hidden mb-12 flex items-center justify-center text-center">
                <Image
                    src="https://picsum.photos/1200/400"
                    alt="Stylish product display"
                    fill
                    className="object-cover object-center absolute inset-0 z-0"
                    data-ai-hint="product display"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative z-20 text-white p-4">
                    <h1 className="text-5xl font-bold tracking-tight">Our Products</h1>
                    <p className="mt-2 text-lg text-accent">Professional hair care, curated by experts.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Filters */}
                <aside className="lg:col-span-1 lg:sticky lg:top-24">
                    <Card>
                        <CardContent className="p-4">
                           <h3 className="text-lg font-semibold font-headline flex items-center gap-2"><ListFilter className="w-5 h-5"/> Filters</h3>
                           <div className="mt-4">
                               <h4 className="font-semibold mb-2">Category</h4>
                               <div className="flex flex-col gap-1">
                                   {categories.map(cat => (
                                       <Button key={cat} variant="ghost" className="justify-start">
                                           {cat}
                                       </Button>
                                   ))}
                               </div>
                           </div>
                        </CardContent>
                    </Card>
                </aside>

                {/* Products Grid */}
                <main className="lg:col-span-3">
                    <div className="flex items-center mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Search products..." className="pl-10" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map(product => (
                             <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                                <CardContent className="p-0">
                                <div className="aspect-square relative overflow-hidden">
                                    <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={product.hint} />
                                </div>
                                <div className="p-4 space-y-2">
                                    <h3 className="font-bold text-lg truncate" title={product.name}>{product.name}</h3>
                                    <p className="text-sm text-muted-foreground h-10">{product.description}</p>
                                    <div className="flex justify-between items-center pt-2">
                                    <p className="text-primary font-bold text-xl">${product.price.toFixed(2)}</p>
                                    <Button size="default" variant="outline">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
