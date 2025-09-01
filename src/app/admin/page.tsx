
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, DollarSign, Calendar, Users, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bookings } from "@/lib/data";


const stats = [
    { title: "Mesačné tržby", value: "4,850 €", change: "+20.1%", icon: <DollarSign className="h-4 w-4 text-muted-foreground"/> },
    { title: "Zákazky tento mesiac", value: "25", change: "+12", icon: <Truck className="h-4 w-4 text-muted-foreground"/> },
    { title: "Noví klienti", value: "6", change: "+2", icon: <Users className="h-4 w-4 text-muted-foreground"/> },
]

export default function AdminDashboardPage() {
    // Show the 4 most recent bookings
    const recentJobs = bookings.sort((a, b) => b.start.getTime() - a.start.getTime()).slice(0, 4);

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
                        <CardDescription>Prehľad posledných zákazok.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Klient</TableHead>
                                    <TableHead>Služba</TableHead>
                                    <TableHead>Stav</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentJobs.map(job => (
                                     <TableRow key={job.id}>
                                        <TableCell>
                                            <div className="font-medium">{job.title.split(' - ')[1].split(',')[0]}</div>
                                        </TableCell>
                                        <TableCell>{job.title.split(' - ')[0]}</TableCell>
                                        <TableCell>
                                             <Badge variant={job.status === 'Completed' ? 'default' : job.status === 'Cancelled' ? 'destructive' : 'secondary'}>{job.status}</Badge>
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
