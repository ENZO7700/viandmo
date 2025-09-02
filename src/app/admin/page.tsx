
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, DollarSign, Calendar, Users, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bookings } from "@/lib/data";

export default function AdminDashboardPage() {
    // --- Dynamic Stats Calculation ---

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // 1. Monthly Revenue
    const monthlyRevenue = bookings
        .filter(b => b.status === 'Completed' && b.start.getMonth() === currentMonth && b.start.getFullYear() === currentYear)
        .reduce((sum, b) => sum + (b.price || 0), 0);

    // 2. Bookings this month
    const monthlyBookingsCount = bookings
        .filter(b => b.start.getMonth() === currentMonth && b.start.getFullYear() === currentYear)
        .length;

    // 3. Recent Jobs (last 4)
    const recentJobs = bookings.sort((a, b) => b.start.getTime() - a.start.getTime()).slice(0, 4);

    const stats = [
        { title: "Mesačné tržby", value: `${monthlyRevenue.toLocaleString('sk-SK')} €`, change: "+0.0%", icon: <DollarSign className="h-4 w-4 text-muted-foreground"/> },
        { title: "Zákazky tento mesiac", value: `${monthlyBookingsCount}`, change: "+0", icon: <Truck className="h-4 w-4 text-muted-foreground"/> },
        { title: "Noví klienti", value: "0", change: "+0", icon: <Users className="h-4 w-4 text-muted-foreground"/> },
    ]


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
                                <span className="text-green-500 mr-1">{stat.change}</span> oproti minulému mesiacu
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Nedávne a aktuálne zákazky</CardTitle>
                        <CardDescription>Prehľad posledných štyroch zákazok.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Klient</TableHead>
                                    <TableHead>Služba</TableHead>
                                    <TableHead>Dátum</TableHead>
                                    <TableHead>Stav</TableHead>
                                    <TableHead className="text-right">Cena</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentJobs.length > 0 ? (
                                    recentJobs.map((job: any) => (
                                     <TableRow key={job.id}>
                                        <TableCell>
                                            <div className="font-medium">{job.clientName}</div>
                                        </TableCell>
                                        <TableCell>{job.title}</TableCell>
                                        <TableCell>{new Date(job.start).toLocaleDateString('sk-SK')}</TableCell>
                                        <TableCell>
                                             <Badge variant={job.status === 'Completed' ? 'default' : job.status === 'Cancelled' ? 'destructive' : 'secondary'}>{job.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{job.price.toLocaleString('sk-SK')} €</TableCell>
                                    </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center py-10">
                                            Žiadne nedávne zákazky.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
