
'use server';

import { bookings, getNextBookingId } from "@/lib/data";
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
    if (bookingId) {
      // Update existing booking
      const index = bookings.findIndex(b => b.id === bookingId);
      if (index !== -1) {
        bookings[index] = {
          ...bookings[index],
          ...parsed.data,
          start: new Date(parsed.data.start),
          end: new Date(parsed.data.start), // Assuming end time is same as start for simplicity
        };
      } else {
         throw new Error(`Booking with ID ${bookingId} not found.`);
      }
    } else {
      // Create new booking
      const newBooking = {
        id: getNextBookingId(),
        ...parsed.data,
        start: new Date(parsed.data.start),
        end: new Date(parsed.data.start), // Assuming end time is same as start for simplicity
      };
      bookings.push(newBooking);
    }
    
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
    const index = bookings.findIndex(b => b.id === bookingId);

    if (index !== -1) {
        bookings.splice(index, 1);
        revalidatePath('/admin/bookings');
        revalidatePath('/admin');
        revalidatePath('/admin/contact');
    } else {
        console.error(`Booking with ID ${bookingId} not found.`);
    }
}
