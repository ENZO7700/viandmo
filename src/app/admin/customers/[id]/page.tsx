import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { bookings, customers } from "@/lib/data";
import { Calendar, DollarSign, Edit, Mail, Phone, User } from "lucide-react";
import Image from 'next/image';

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
    const customer = customers.find(c => c.id === params.id);
    const customerBookings = bookings.filter(b => b.customerName === customer?.name);

    if (!customer) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-headline">Zákazník nebol nájdený.</h1>
                <p className="text-muted-foreground">Prosím, vráťte sa na zoznam zákazníkov.</p>
            </div>
        )
    }

    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                         <Avatar className="w-20 h-20 border-2 border-primary">
                            <AvatarImage src={`https://picsum.photos/200/200?random=${customer.id}`} data-ai-hint="person portrait" />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">{customer.name}</CardTitle>
                            <CardDescription>{customer.email}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground"/>
                            <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground"/>
                            <span>Členom od 15. mája 2023</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Poznámky stylistu</CardTitle>
                         <CardDescription>Dôležité informácie a preferencie klienta.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Textarea placeholder="Napr. Receptúra farby, preferencie strihu..." defaultValue="Farba: Wella Koleston Perfect 7/71 + 6%.\nStrih: Pravidelne zastrihávať končeky, preferuje objem.\nAlergie: Žiadne známe." />
                        <Button className="w-full">Uložiť poznámky</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
                 <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Počet rezervácií</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{customer.bookings}</div>
                            <p className="text-xs text-muted-foreground">Celkový počet návštev</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Celková útrata</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${customer.totalSpent.toFixed(2)}</div>
                             <p className="text-xs text-muted-foreground">Priemerná cena návštevy: ${(customer.totalSpent / customer.bookings).toFixed(2)}</p>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>História rezervácií</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Dátum</TableHead>
                                    <TableHead>Služba</TableHead>
                                    <TableHead>Stylista</TableHead>
                                    <TableHead>Stav</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customerBookings.map((booking) => (
                                    <TableRow key={booking.id}>
                                        <TableCell>{booking.date} <span className="text-muted-foreground text-xs">o {booking.time}</span></TableCell>
                                        <TableCell>{booking.service}</TableCell>
                                        <TableCell>{booking.stylist}</TableCell>
                                        <TableCell>
                                            <Badge variant={booking.status === 'Confirmed' ? 'default' : booking.status === 'Cancelled' ? 'destructive' : 'secondary'}>
                                                {booking.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
