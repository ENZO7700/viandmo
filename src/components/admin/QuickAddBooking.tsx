'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { handleQuickAdd } from '@/app/actions';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { services, stylists } from '@/lib/data';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const bookingFormSchema = z.object({
  service: z.string().min(1, 'Service is required'),
  stylist: z.string().min(1, 'Stylist is required'),
  date: z.date({ required_error: 'Date is required' }),
  time: z.string().min(1, 'Time is required'),
  customerName: z.string().min(1, 'Customer name is required'),
  customerPhone: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Parsing...' : 'Parse Request'}
    </Button>
  );
}

export default function QuickAddBooking() {
  const [state, formAction] = useFormState(handleQuickAdd, { data: null, error: null });

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service: '',
      stylist: '',
      time: '',
      customerName: '',
      customerPhone: '',
    }
  });

  useEffect(() => {
    if (state.data) {
      const { service, stylist, date, time } = state.data;
      const serviceMatch = services.find(s => s.name.toLowerCase().includes(service.toLowerCase()));
      const stylistMatch = stylists.find(s => s.name.toLowerCase().includes(stylist.toLowerCase()));
      
      form.reset({
        service: serviceMatch ? serviceMatch.id : '',
        stylist: stylistMatch ? stylistMatch.id : '',
        date: date ? new Date(date) : new Date(),
        time: time || '',
        customerName: '',
        customerPhone: '',
      });
    }
  }, [state.data, form]);
  
  function onSubmit(data: BookingFormValues) {
    console.log(data);
    // Here you would typically call another server action to save the booking
    alert('Booking would be created with these details:\n' + JSON.stringify(data, null, 2));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Add Booking</CardTitle>
        <CardDescription>
          Use natural language to quickly start a booking. For example: "Men's cut with Papi tomorrow at 2 PM".
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col md:flex-row gap-4 items-start">
          <Textarea name="request" placeholder="Enter booking request..." className="flex-1" />
          <SubmitButton />
        </form>
        {state.error && <p className="text-destructive text-sm mt-2">{state.error}</p>}
        
        <Separator className="my-6" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stylist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stylist</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a stylist" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {stylists.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter customer's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter customer's phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Create Booking</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
