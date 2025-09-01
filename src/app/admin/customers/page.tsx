import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { customers } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminCustomersPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>Manage your salon's clients.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-4">
                        <Input placeholder="Search customers..." className="max-w-sm"/>
                        <Button>Add New Customer</Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Bookings</TableHead>
                                <TableHead>Total Spent</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell className="font-medium">{customer.name}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{customer.bookings}</TableCell>
                                    <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/admin/customers/${customer.id}`}>View Profile</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
