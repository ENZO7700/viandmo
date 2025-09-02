
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { bookings, type Booking } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { deleteBooking } from "./actions";
import { useState } from "react";
import { BookingForm } from "@/components/admin/BookingForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DeleteButton({ bookingId }: { bookingId: number }) {
    const deleteBookingWithId = deleteBooking.bind(null, bookingId);
    return (
        <form action={deleteBookingWithId} className="inline-flex">
            <Button variant="ghost" size="icon" type="submit">
                <Trash2 className="h-4 w-4 text-destructive" />
                <span className="sr-only">Zmazať</span>
            </Button>
        </form>
    );
}

function BookingDialog({ children, booking, onOpenChange, open }: { children: React.ReactNode, booking?: Booking, open: boolean, onOpenChange: (open: boolean) => void }) {
  const title = booking ? "Upraviť zákazku" : "Pridať novú zákazku";
  const description = booking ? "Upravte údaje o existujúcej zákazke." : "Vyplňte formulár pre vytvorenie novej zákazky.";
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <BookingForm booking={booking} onFormSubmit={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}


export default function AdminBookingsPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | undefined>(undefined);

    const handleAddClick = () => {
      setSelectedBooking(undefined);
      setDialogOpen(true);
    };

    const handleEditClick = (booking: Booking) => {
      setSelectedBooking(booking);
      setDialogOpen(true);
    }
    
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

    return (
        <div className="space-y-6">
            <BookingDialog
              booking={selectedBooking}
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            >
               {/* This is a dummy trigger, the dialog is controlled by state */}
               <button className="hidden" />
            </BookingDialog>


            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Správa zákazok</CardTitle>
                        <CardDescription>Zoznam všetkých prijatých a naplánovaných zákazok.</CardDescription>
                    </div>
                    <Button onClick={handleAddClick}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Pridať zákazku
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Klient</TableHead>
                                <TableHead>Služba</TableHead>
                                <TableHead>Dátum</TableHead>
                                <TableHead>Stav</TableHead>
                                <TableHead>Cena</TableHead>
                                <TableHead className="text-right">Akcie</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedBookings.length > 0 ? (
                                sortedBookings.map((job) => (
                                    <TableRow key={job.id}>
                                        <TableCell>
                                            <div className="font-medium">{job.clientName}</div>
                                        </TableCell>
                                        <TableCell>{job.title}</TableCell>
                                        <TableCell>{new Date(job.start).toLocaleDateString('sk-SK')}</TableCell>
                                        <TableCell>
                                            <Badge variant={job.status === 'Completed' ? 'default' : job.status === 'Cancelled' ? 'destructive' : 'secondary'}>{job.status}</Badge>
                                        </TableCell>
                                        <TableCell>{job.price.toLocaleString('sk-SK')} €</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => handleEditClick(job)}>
                                                <Pencil className="h-4 w-4" />
                                                <span className="sr-only">Upraviť</span>
                                            </Button>
                                            <DeleteButton bookingId={job.id} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10">
                                        Zatiaľ neevidujete žiadne zákazky.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
