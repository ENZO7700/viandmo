'use server';

/**
 * @fileOverview An AI agent for quickly adding appointments based on natural language input.
 *
 * - quickAddBooking - A function that processes the natural language input and returns pre-filled booking details.
 * - QuickAddBookingInput - The input type for the quickAddBooking function.
 * - QuickAddBookingOutput - The return type for the quickAddBooking function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuickAddBookingInputSchema = z.object({
  naturalLanguageRequest: z
    .string()
    .describe(
      'A natural language request for an appointment (e.g., \'Men\'s cut with Papi tomorrow at 2 PM\').'
    ),
});
export type QuickAddBookingInput = z.infer<typeof QuickAddBookingInputSchema>;

const QuickAddBookingOutputSchema = z.object({
  service: z.string().describe('The requested service.'),
  stylist: z.string().describe('The preferred stylist.'),
  date: z.string().describe('The date of the appointment (YYYY-MM-DD).'),
  time: z.string().describe('The time of the appointment (HH:MM).'),
});
export type QuickAddBookingOutput = z.infer<typeof QuickAddBookingOutputSchema>;

export async function quickAddBooking(input: QuickAddBookingInput): Promise<QuickAddBookingOutput> {
  return quickAddBookingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'quickAddBookingPrompt',
  input: {schema: QuickAddBookingInputSchema},
  output: {schema: QuickAddBookingOutputSchema},
  prompt: `You are a salon assistant tasked with extracting appointment details from natural language requests.

  Analyze the following request and extract the service, stylist, date, and time.

  Request: {{{naturalLanguageRequest}}}

  Provide the output in JSON format.
  `,
});

const quickAddBookingFlow = ai.defineFlow(
  {
    name: 'quickAddBookingFlow',
    inputSchema: QuickAddBookingInputSchema,
    outputSchema: QuickAddBookingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
