'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services, stylists } from "@/lib/data";
import { ArrowLeft, ArrowRight, Check, CheckCircle, Clock, DollarSign, Scissors, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

type BookingStep = "service" | "stylist" | "datetime" | "confirm";

const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

export default function BookingPage() {
    const [step, setStep] = useState<BookingStep>("service");
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [selectedStylist, setSelectedStylist] = useState<typeof stylists[0] | null>(null);
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

    return (
        <div className="container mx-auto max-w-4xl py-12">
             <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Book Your Appointment</h1>
                <p className="text-muted-foreground mt-2">Follow the steps below to secure your spot.</p>
            </header>
            
            {step === 'service' && (
                <Card>
                    <CardHeader><CardTitle>1. Select a Service</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map(service => (
                            <button key={service.id} onClick={() => setSelectedService(service)} className={cn("p-4 rounded-lg border-2 text-left transition-all", selectedService?.id === service.id ? "border-primary bg-muted" : "border-border hover:border-primary")}>
                                <h3 className="font-bold text-lg">{service.name}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="flex items-center gap-4 mt-2 text-sm">
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary"/> {service.duration} min</span>
                                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-primary"/> {service.price.toFixed(2)}</span>
                                </div>
                            </button>
                        ))}
                    </CardContent>
                    <CardFooter className="justify-end">
                        <Button onClick={nextStep} disabled={!selectedService}>
                            Next <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

             {step === 'stylist' && (
                <Card>
                    <CardHeader><CardTitle>2. Select a Stylist</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stylists.map(stylist => (
                             <button key={stylist.id} onClick={() => setSelectedStylist(stylist)} className={cn("p-4 rounded-lg border-2 text-center transition-all flex flex-col items-center", selectedStylist?.id === stylist.id ? "border-primary bg-muted" : "border-border hover:border-primary")}>
                                <img src={stylist.img} alt={stylist.name} data-ai-hint={stylist.hint} className="w-24 h-24 rounded-full object-cover"/>
                                <h3 className="font-bold mt-2">{stylist.name}</h3>
                                <p className="text-sm text-primary">{stylist.role}</p>
                            </button>
                        ))}
                    </CardContent>
                    <CardFooter className="justify-between">
                         <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 w-4 h-4"/> Back
                        </Button>
                        <Button onClick={nextStep} disabled={!selectedStylist}>
                            Next <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === 'datetime' && (
                <Card>
                    <CardHeader><CardTitle>3. Select Date & Time</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border justify-center"
                        />
                        <div className="grid grid-cols-2 gap-2 content-start">
                            {timeSlots.map(time => (
                                <Button key={time} variant={selectedTime === time ? "default" : "outline"} onClick={() => setSelectedTime(time)}>
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                         <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 w-4 h-4"/> Back
                        </Button>
                        <Button onClick={nextStep} disabled={!selectedDate || !selectedTime}>
                            Next <ArrowRight className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {step === 'confirm' && (
                <Card>
                    <CardHeader className="text-center items-center">
                        <CheckCircle className="w-16 h-16 text-green-500"/>
                        <CardTitle className="text-3xl pt-4">Confirm Your Booking</CardTitle>
                        <CardDescription>Please review the details of your appointment below.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 border rounded-lg bg-muted/50 space-y-2">
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2"><Scissors/>Service</span> <span className="font-bold">{selectedService?.name}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2"><User/>Stylist</span> <span className="font-bold">{selectedStylist?.name}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2"><Clock/>Date & Time</span> <span className="font-bold">{selectedDate?.toLocaleDateString()} at {selectedTime}</span></div>
                             <div className="flex justify-between items-center"><span className="text-muted-foreground flex items-center gap-2"><DollarSign/>Price</span> <span className="font-bold text-primary text-lg">${selectedService?.price.toFixed(2)}</span></div>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                         <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 w-4 h-4"/> Back
                        </Button>
                        <Button onClick={() => alert("Booking Confirmed!")}>
                            Confirm Booking <Check className="ml-2 w-4 h-4"/>
                        </Button>
                    </CardFooter>
                </Card>
            )}

        </div>
    );
}
