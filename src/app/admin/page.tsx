
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, DollarSign, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bookings, customers } from "@/lib/data";

const stats = [
    { title: "Dnešné tržby", value: "$2,450", change: "+15.2%", icon: <DollarSign className="h-4 w-4 text-muted-foreground"/> },
    { title: "Dnešné rezervácie", value: "18", change: "+5", icon: <Calendar className="h-4 w-4 text-muted-foreground"/> },
    { title: "Noví zákazníci", value: "4", change: "+1", icon: <Users className="h-4 w-4 text-muted-foreground"/> },
]

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map(stat => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            {stat.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground flex items-center">
                                <ArrowUpRight className="h-3 w-3 mr-1 text-green-500"/>
                                <span className="text-green-500 mr-1">{stat.change}</span> oproti včerajšku
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Nedávne rezervácie</CardTitle>
                        <CardDescription>Zoznam posledných rezervácií.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Zákazník</TableHead>
                                    <TableHead>Služba</TableHead>
                                    <TableHead>Stav</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bookings.slice(0,5).map(booking => (
                                     <TableRow key={booking.id}>
                                        <TableCell>
                                            <div className="font-medium">{booking.customerName}</div>
                                            <div className="text-sm text-muted-foreground">{booking.stylist}</div>
                                        </TableCell>
                                        <TableCell>{booking.service}</TableCell>
                                        <TableCell>
                                             <Badge variant={booking.status === 'Confirmed' ? 'default' : booking.status === 'Cancelled' ? 'destructive' : 'secondary'}>{booking.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Noví zákazníci</CardTitle>
                        <CardDescription>Nedávno zaregistrovaní zákazníci.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {customers.slice(0,5).map(customer => (
                            <div key={customer.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                                <div>
                                    <p className="font-medium">{customer.name}</p>
                                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                                </div>
                                 <p className="text-sm text-muted-foreground">{customer.bookings} rezervácií</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
