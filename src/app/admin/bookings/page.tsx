
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBookings } from "@/lib/data";
import { PlusCircle } from "lucide-react";
import { BookingManager } from "@/components/admin/BookingManager";

export default function AdminBookingsPage() {
    const bookings = getBookings();
    
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Správa zákazok</CardTitle>
                        <CardDescription>Zoznam všetkých prijatých a naplánovaných zákazok.</CardDescription>
                    </div>
                     {/* The "Add" button is now part of the client component */}
                </CardHeader>
                <CardContent>
                   <BookingManager initialBookings={bookings} />
                </CardContent>
            </Card>
        </div>
    )
}
