'use client';
import React from 'react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services, stylists } from "@/lib/data";
import { ArrowLeft, ArrowRight, Check, CheckCircle, Clock, DollarSign, Scissors, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

type BookingStep = "service" | "stylist" | "datetime" | "confirm";

const timeSlots = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function BookingPage() {
    const [step, setStep] = useState<BookingStep>("service");
    const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
    const [selectedStylist, setSelectedStylist] = useState<(typeof stylists)[0] | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const nextStep = () => {
        switch (step) {
            case "service": if (selectedService) setStep("stylist"); break;
            case "stylist": if (selectedStylist) setStep("datetime"); break;
            case "datetime": if (selectedDate && selectedTime) setStep("confirm"); break;
            default: break;
        }
    };

    const prevStep = () => {
         switch (step) {
            case "stylist": setStep("service"); break;
            case "datetime": setStep("stylist"); break;
            case "confirm": setStep("datetime"); break;
            default: break;
        }
    };

    const ProgressBar = () => {
      const steps = ["Služba", "Stylista", "Dátum a čas", "Potvrdenie"];
      const currentStepIndex = ["service", "stylist", "datetime", "confirm"].indexOf(step);

      return (
        <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-12">
            {steps.map((s, index) => (
                <React.Fragment key={s}>
                    <div className="flex flex-col items-center text-center">
                        <div className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                             index < currentStepIndex ? "bg-primary border-primary text-primary-foreground" :
                             index === currentStepIndex ? "border-primary scale-110" : "border-border bg-muted",
                        )}>
                           {index < currentStepIndex ? <Check className="w-6 h-6"/> : (index + 1)}
                        </div>
                         <p className={cn(
                            "mt-2 text-sm transition-colors duration-300",
                            index === currentStepIndex ? "text-primary font-semibold" : "text-muted-foreground"
                         )}>{s}</p>
                    </div>
                    {index < steps.length - 1 && <div className={cn("flex-1 h-1 mx-4 rounded", index < currentStepIndex ? "bg-primary" : "bg-border")}></div>}
                </React.Fragment>
            ))}
        </div>
      )
    }

    return (
        <div className="container mx-auto max-w-4xl py-12 md:py-20">
             <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-primary">Zarezervujte si svoj termín</h1>
                <p className="text-muted-foreground mt-2 text-lg">Sledujte kroky nižšie a zabezpečte si svoje miesto.</p>
            </header>
            
            <ProgressBar />

            {step === 'service' && (
                <Card className="shadow-lg">
                    <CardHeader><CardTitle className="font-headline text-2xl">1. Vyberte si službu</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map(service => (
                            <button key={service.id} onClick={() => setSelectedService(service)} className={cn("p-4 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-md", selectedService?.id === service.id ? "border-primary bg-muted/50 ring-2 ring-primary" : "border-border hover:border-primary/50")}>
                                <h3 className="font-bold text-lg font-headline">{service.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1 h-10">{service.description}</p>
                                <div className="flex items-center gap-4 mt-2 text-sm font-semibold">
                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary"/> {service.duration} min</span>
                                    <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-primary"/> {service.price.toFixed(2)} €</span>
                                </div>
                            </button>
                        ))}
                    </CardContent>
                    <CardFooter className="justify-end pt-6">
                        <Button onClick={nextStep} disabled={!selectedService} size="lg">
                            Ďalej <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

             {step === 'stylist' && (
                <Card className="shadow-lg">
                    <CardHeader><CardTitle className="font-headline text-2xl">2. Vyberte si stylistu</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stylists.map(stylist => (
                             <button key={stylist.id} onClick={() => setSelectedStylist(stylist)} className={cn("p-4 rounded-lg border-2 text-center transition-all duration-300 flex flex-col items-center hover:shadow-md", selectedStylist?.id === stylist.id ? "border-primary bg-muted/50 ring-2 ring-primary" : "border-border hover:border-primary/50")}>
                                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                                  <Image src={stylist.img} alt={stylist.name} data-ai-hint={stylist.hint} fill className="object-cover"/>
                                </div>
                                <h3 className="font-bold mt-3 font-headline">{stylist.name}</h3>
                                <p className="text-sm text-primary">{stylist.role}</p>
                            </button>
                        ))}
                    </CardContent>
                    <CardFooter className="justify-between pt-6">
                         <Button variant="outline" onClick={prevStep} size="lg">
                            <ArrowLeft className="mr-2 w-4 h-4"/> Späť
                        </Button>
                        <Button onClick={nextStep} disabled={!selectedStylist} size="lg">
                            Ďalej <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === 'datetime' && (
                <Card className="shadow-lg">
                    <CardHeader><CardTitle className="font-headline text-2xl">3. Vyberte si dátum a čas</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border justify-center"
                            disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                        />
                        <div className="grid grid-cols-3 gap-2 content-start">
                            {timeSlots.map(time => (
                                <Button key={time} variant={selectedTime === time ? "default" : "outline"} onClick={() => setSelectedTime(time)} className="py-6 text-base">
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="justify-between pt-6">
                         <Button variant="outline" onClick={prevStep} size="lg">
                            <ArrowLeft className="mr-2 w-4 h-4"/> Späť
                        </Button>
                        <Button onClick={nextStep} disabled={!selectedDate || !selectedTime} size="lg">
                            Ďalej <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === 'confirm' && (
                <Card className="shadow-lg">
                    <CardHeader className="text-center items-center">
                        <CheckCircle className="w-16 h-16 text-green-500"/>
                        <CardTitle className="text-3xl pt-4 font-headline">Potvrďte vašu rezerváciu</CardTitle>
                        <CardDescription>Prosím, skontrolujte si detaily vašej rezervácie a vyplňte vaše údaje.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="p-6 border rounded-lg bg-muted/50 space-y-3 text-lg">
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2 text-base"><Scissors/>Služba</span> <span className="font-bold">{selectedService?.name}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2 text-base"><User/>Stylista</span> <span className="font-bold">{selectedStylist?.name}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2 text-base"><Clock/>Dátum a čas</span> <span className="font-bold">{selectedDate?.toLocaleDateString('sk-SK')} o {selectedTime}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2 text-base"><DollarSign/>Cena</span> <span className="font-bold text-primary text-xl">{selectedService?.price.toFixed(2)} €</span></div>
                        </div>
                         <Separator />
                         <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Celé Meno</Label>
                                    <Input id="fullName" placeholder="Vaše meno" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefón</Label>
                                    <Input id="phone" placeholder="Vaše telefónne číslo" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="vas@email.com" required />
                            </div>
                         </div>
                    </CardContent>
                    <CardFooter className="justify-between pt-6">
                         <Button variant="outline" onClick={prevStep} size="lg">
                            <ArrowLeft className="mr-2 w-4 h-4"/> Späť
                        </Button>
                        <Button onClick={() => alert("Booking Confirmed!")} size="lg" className="bg-green-600 hover:bg-green-700">
                            Potvrdiť rezerváciu <Check className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

        </div>
    );
}

    