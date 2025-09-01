import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, Droplets, ShoppingCart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-primary" />,
    title: "Precision Haircuts",
    description: "Tailored cuts for men and women, designed to complement your style and features.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Expert Coloring",
    description: "From rich single-process color to artistic balayage, our experts create stunning results.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Luxury Treatments",
    description: "Revitalize your hair with our deep conditioning and nourishing treatments.",
  },
];

const stylists = [
  { name: "Papi", role: "Master Stylist", img: "https://picsum.photos/200/200?random=1", hint: "man portrait" },
  { name: "Isabella", role: "Color Specialist", img: "https://picsum.photos/200/200?random=2", hint: "woman portrait" },
  { name: "Marco", role: "Barber & Stylist", img: "https://picsum.photos/200/200?random=3", hint: "man portrait smiling" },
];

const products = [
  { name: "Nourishing Shampoo", price: "$28", img: "https://picsum.photos/400/400?random=4", hint: "shampoo bottle" },
  { name: "Hydrating Conditioner", price: "$32", img: "https://picsum.photos/400/400?random=5", hint: "hair product" },
  { name: "Styling Clay", price: "$25", img: "https://picsum.photos/400/400?random=6", hint: "hair wax" },
  { name: "Shine Serum", price: "$27", img: "https://picsum.photos/400/400?random=7", hint: "serum bottle" },
  { name: "Texturizing Spray", price: "$26", img: "https://picsum.photos/400/400?random=8", hint: "spray bottle" },
];

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center">
        <Image
          src="https://picsum.photos/1600/900"
          alt="Modern stylish salon interior"
          fill
          priority
          data-ai-hint="modern salon"
          className="object-cover object-center absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-shadow-lg">
            Experience the Art of Hair Design
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-accent">
            Where luxury meets craftsmanship. Discover your perfect look with our master stylists.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/shop">Shop Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Our Signature Services</h2>
        <p className="mt-2 text-center max-w-2xl mx-auto text-muted-foreground">Crafted with precision, tailored for you.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="bg-muted rounded-full p-4">
                  {service.icon}
                </div>
                <CardTitle className="pt-4 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stylists Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Meet Our Stylists</h2>
          <p className="mt-2 text-center max-w-2xl mx-auto text-muted-foreground">The artists behind the masterpieces.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stylists.map((stylist) => (
              <div key={stylist.name} className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 border-4 border-primary">
                  <AvatarImage src={stylist.img} alt={stylist.name} data-ai-hint={stylist.hint} />
                  <AvatarFallback>{stylist.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-bold">{stylist.name}</h3>
                <p className="text-primary">{stylist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Products</h2>
        <p className="mt-2 text-center max-w-2xl mx-auto text-muted-foreground">Professional care, delivered to your door.</p>
        <div className="mt-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={product.hint} />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-primary font-bold text-lg">{product.price}</p>
                          <Button size="sm" variant="outline">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="link" className="text-lg text-accent">
            <Link href="/shop">
              Shop All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
