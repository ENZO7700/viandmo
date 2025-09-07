
'use server';

import { getBookings, saveBookings, getNextBookingId } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const bookingSchema = z.object({
  clientName: z.string().min(1, "Meno klienta je povinné."),
  title: z.string().min(1, "Názov služby je povinný."),
  start: z.string().min(1, "Dátum je povinný."),
  price: z.coerce.number().min(0, "Cena musí byť kladné číslo."),
  status: z.enum(['Scheduled', 'Completed', 'Cancelled']),
});

export type BookingFormState = {
  message: string;
  issues?: string[];
}

export async function createOrUpdateBooking(
  prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const bookings = getBookings();
  const bookingId = formData.get('id') ? Number(formData.get('id')) : null;
  const data = Object.fromEntries(formData);
  const parsed = bookingSchema.safeParse(data);

  if (!parsed.success) {
    return {
      message: "Formulár obsahuje chyby.",
      issues: parsed.error.issues.map((issue) => `${issue.path.join('.')} : ${issue.message}`),
    };
  }
  
  try {
    const eventDate = new Date(parsed.data.start);
    const eventData = {
        ...parsed.data,
        start: eventDate.toISOString(),
        end: eventDate.toISOString(), // Assuming end time is same as start for simplicity
    }

    if (bookingId) {
      // Update existing booking
      const index = bookings.findIndex(b => b.id === bookingId);
      if (index !== -1) {
        bookings[index] = {
          ...bookings[index],
          ...eventData,
        };
      } else {
         throw new Error(`Booking with ID ${bookingId} not found.`);
      }
    } else {
      // Create new booking
      const newBooking = {
        id: getNextBookingId(),
        ...eventData,
      };
      bookings.push(newBooking);
    }
    
    saveBookings(bookings);
    
    revalidatePath('/admin/bookings');
    revalidatePath('/admin');
    revalidatePath('/admin/contact');

    return { message: `Zákazka bola úspešne ${bookingId ? 'upravená' : 'vytvorená'}.` };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Neznáma chyba.";
    return {
      message: `Ľutujeme, nastala chyba: ${errorMessage}`,
    };
  }
}

export async function deleteBooking(bookingId: number) {
    const bookings = getBookings();
    const index = bookings.findIndex(b => b.id === bookingId);

    if (index !== -1) {
        bookings.splice(index, 1);
        saveBookings(bookings);
        revalidatePath('/admin/bookings');
        revalidatePath('/admin');
        revalidatePath('/admin/contact');
    } else {
        console.error(`Booking with ID ${bookingId} not found.`);
    }
}
