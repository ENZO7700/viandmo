'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from 'framer-motion';

interface Testimonial {
    name: string;
    text: string;
    avatar: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
    return (
        <section className="container py-16 md:py-24">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl md:text-5xl font-headline mb-12 text-center text-foreground"
            >
                Čo hovoria naši klienti
            </motion.h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                            <div className="p-4">
                                <Card className="bg-muted/30 border-0">
                                    <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                                        <Avatar className="w-20 h-20 border-4 border-primary">
                                            <AvatarImage src={testimonial.avatar} data-ai-hint="person portrait"/>
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                                        <h3 className="font-bold text-lg text-primary">{testimonial.name}</h3>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
