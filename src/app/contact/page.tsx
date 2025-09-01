
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormState, useForm } from 'react-hook-form';
import { submitContactForm, type ContactFormState } from '../actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';


export default function ContactPage() {
    const { toast } = useToast();

    const initialState: ContactFormState = {
        message: "",
    };

    const [state, formAction] = useFormState(submitContactForm, initialState);
    const { register, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: state?.fields?.name || '',
            phone: state?.fields?.phone || '',
            email: state?.fields?.email || '',
            address: state?.fields?.address || '',
            message: state?.fields?.message || '',
        },
    });

    useEffect(() => {
        if (state.message && !state.issues) {
            toast({
                title: "Správa odoslaná",
                description: state.message,
                variant: "default",
            });
            reset();
        } else if (state.message && state.issues) {
             toast({
                title: "Chyba vo formulári",
                description: state.message,
                variant: "destructive",
            });
        }
    }, [state, reset, toast]);


  return (
    <>
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?random=40"
          alt="Kontaktujte nás"
          fill
          priority
          className="object-cover object-center brightness-50"
          data-ai-hint="desk phone"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary drop-shadow-lg">
            Kontaktujte Nás
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Sme tu pre vás. Napíšte nám a získajte nezáväznú cenovú ponuku.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
             <Card>
                <CardHeader><CardTitle>Kontaktné údaje</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                            <a href="tel:+421911275755" className="hover:text-primary transition-colors">+421 911 275 755</a>
                            <span className="text-sm text-muted-foreground block">Sťahovanie</span>
                        </div>
                    </p>
                     <p className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                         <div>
                            <a href="tel:+421918895730" className="hover:text-primary transition-colors">+421 918 895 730</a>
                             <span className="text-sm text-muted-foreground block">Upratovanie</span>
                        </div>
                    </p>
                    <p className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                        <a href="mailto:info@viandmo.com" className="hover:text-primary transition-colors">info@viandmo.com</a>
                    </p>
                     <p className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                        <span>Karpatské námestie 7770/10A<br/>831 06 Bratislava - Rača</span>
                    </p>
                </CardContent>
             </Card>

            {/* Placeholder for Map */}
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.582390956554!2d17.14798331565108!3d48.20458997922961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8edb5da8d5a9%3A0x8a914a22b7987daf!2sKarpatsk%C3%A9%20n%C3%A1mestie%2010a%2C%20831%2006%20Bratislava!5e0!3m2!1ssk!2ssk!4v1684321654879!5m2!1ssk!2ssk!4v1684321654879!5m2!1ssk!2ssk" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa polohy VI&MO"
                ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8">
             <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl font-headline text-primary">Napíšte Nám</CardTitle>
                <p className="text-muted-foreground">Odpovieme vám čo najskôr.</p>
             </CardHeader>
             <CardContent className="p-0">
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Meno/Firma *</Label>
                    <Input id="name" {...register("name")} placeholder="Vaše meno alebo názov firmy" />
                    {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone">Mobil *</Label>
                    <Input id="phone" type="tel" {...register("phone")} placeholder="Vaše telefónne číslo" />
                    {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="vas@email.com" />
                    {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresa (nepovinné)</Label>
                    <Input id="address" {...register("address")} placeholder="Adresa sťahovania alebo upratovania" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="message">Vaša Správa *</Label>
                    <Textarea id="message" {...register("message")} placeholder="Popíšte nám, s čím vám môžeme pomôcť..." rows={5} />
                    {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full py-6">Odoslať správu</Button>
                </form>
             </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
