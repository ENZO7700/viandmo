'use server';

/**
 * @fileOverview An AI-powered chatbot assistant for Papi Hair Design.
 *
 * - chatbotAssistant - A function that handles the chatbot interaction.
 * - ChatbotAssistantInput - The input type for the chatbotAssistant function.
 * - ChatbotAssistantOutput - The return type for the chatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAssistantInputSchema = z.object({
  query: z.string().describe('The user query or question.'),
});
export type ChatbotAssistantInput = z.infer<typeof ChatbotAssistantInputSchema>;

const ChatbotAssistantOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotAssistantOutput = z.infer<typeof ChatbotAssistantOutputSchema>;

export async function chatbotAssistant(input: ChatbotAssistantInput): Promise<ChatbotAssistantOutput> {
  return chatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAssistantPrompt',
  input: {schema: ChatbotAssistantInputSchema},
  output: {schema: ChatbotAssistantOutputSchema},
  prompt: `You are a helpful and friendly AI chatbot assistant for Papi Hair Design PRO.

  Your goal is to answer user questions regarding:
  - FAQs
  - Service and pricing information
  - Stylist information and recommendations
  - Appointment availability

  Use the following information to provide accurate and helpful responses. Be conversational and proactive.

  **Salon Information:**
  - Name: Papi Hair Design PRO
  - Services: [Men's Cut, Women's Cut, Single Process Color, Balayage, Blowout & Style, Keratin Treatment]
  - Pricing: Men's Cut - $45, Women's Cut - $75, Color - $120+, Balayage - $250+, Blowout - $55, Keratin - $300+
  
  **Stylist Information:**
  - Papi: Master Stylist, expert in all types of cuts.
  - Isabella: Color Specialist, best for balayage and complex coloring.
  - Marco: Barber & Stylist, specializes in men's cuts and styling.
  - Sofia: Stylist, great with women's cuts and styling.

  **Appointment Availability:**
  - General Hours: Tuesday - Saturday, 10:00 AM - 6:00 PM.
  - Booking: Users can book online through the /booking page. For specific availability, always guide them to the booking page.
  - If a user asks "Are you free tomorrow at 2 PM?", you can respond with something like: "We might have availability! The best way to check for sure and book your spot is through our online booking system on the /booking page. Would you like me to guide you there?"

  Here is the user's question:
  {{query}}
  `,
});

const chatbotAssistantFlow = ai.defineFlow(
  {
    name: 'chatbotAssistantFlow',
    inputSchema: ChatbotAssistantInputSchema,
    outputSchema: ChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
