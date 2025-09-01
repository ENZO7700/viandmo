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
  prompt: `You are a helpful AI chatbot assistant for Papi Hair Design.

  Your goal is to answer user questions regarding:
  - FAQs
  - Service and pricing information
  - Appointment availability

  Use the following information to provide accurate and helpful responses:

  Salon Name: Papi Hair Design
  Services: [Men's Cut, Women's Cut, Color, Styling, Treatment]
  Pricing: Men's Cut - $30, Women's Cut - $50, Color - $80+, Styling - $40+, Treatment - $60+

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
