
'use server';

import { z } from 'zod';
import { contactSubmissions, type ContactSubmission } from '@/lib/data';

const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Meno je povinné." }),
    phone: z.string().min(1, { message: "Telefón je povinný." }),
    email: z.string().email({ message: "Neplatná emailová adresa." }),
    address: z.string().optional(),
    message: z.string().min(1, { message: "Správa je povinná." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
}

// NOTE: This is a temporary solution for prototyping.
// In a real production environment, you would use a persistent database
// and a secure way to handle data, not an in-memory array.
function saveSubmission(data: z.infer<typeof contactFormSchema>) {
    const newSubmission: ContactSubmission = {
        id: new Date().getTime().toString(),
        date: new Date().toISOString(),
        ...data,
    };
    // Add to the beginning of the array to show newest first
    contactSubmissions.unshift(newSubmission);
    console.log('New submission saved:', newSubmission);
    console.log('Total submissions:', contactSubmissions.length);
}


export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
    const formData = Object.fromEntries(data);
    const parsed = contactFormSchema.safeParse(formData);

    if (!parsed.success) {
        const fields: Record<string, string> = {};
        for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            fields[key] = formData[key].toString();
        }
        }
        return {
            message: "Formulár obsahuje chyby. Skontrolujte zadané údaje.",
            fields,
            issues: parsed.error.issues.map((issue) => `${issue.path.join('.')} a ${issue.message}`),
        };
    }

    try {
        saveSubmission(parsed.data);
        return { message: "Ďakujeme! Vaša správa bola úspešne odoslaná. Ozveme sa vám čo najskôr." };
    } catch (error) {
        console.error('Error saving submission:', error);
        return {
             message: "Ľutujeme, pri odosielaní správy nastala chyba. Skúste to prosím neskôr.",
             fields: parsed.data,
        }
    }
}
