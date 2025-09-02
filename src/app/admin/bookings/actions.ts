'use server';

import { bookings } from "@/lib/data";
import { revalidatePath } from "next/cache";

export async function deleteBooking(bookingId: number) {
    const index = bookings.findIndex(b => b.id === bookingId);

    if (index !== -1) {
        bookings.splice(index, 1);
        console.log(`Booking with ID ${bookingId} deleted.`);
        revalidatePath('/admin/bookings');
        revalidatePath('/admin');
        revalidatePath('/admin/contact');
    } else {
        console.error(`Booking with ID ${bookingId} not found.`);
        // In a real app, you might want to return an error state.
    }
}
