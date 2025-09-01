
import QuickAddBooking from "@/components/admin/QuickAddBooking";
import BookingCalendar from "@/components/admin/BookingCalendar";

export default function AdminBookingsPage() {
    return (
        <div className="space-y-6">
            <QuickAddBooking />
            <BookingCalendar />
        </div>
    )
}
