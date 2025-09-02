
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { bookings } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteBooking } from "./actions";

function DeleteButton({ bookingId }: { bookingId: number }) {
    // We bind the bookingId to the server action
    const deleteBookingWithId = deleteBooking.bind(null, bookingId);

    return (
        <form action={deleteBookingWithId}>
            <Button variant="ghost" size="icon" type="submit">
                <Trash2 className="h-4 w-4 text-destructive" />
                <span className="sr-only">Zmazať</span>
            </Button>
        </form>
    );
}


export default function AdminBookingsPage() {
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Správa zákazok</CardTitle>
                    <CardDescription>Zoznam všetkých prijatých a naplánovaných zákazok.</CardDescription>
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
