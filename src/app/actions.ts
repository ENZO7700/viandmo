
'use server';

import { quickAddBooking, QuickAddBookingOutput } from '@/ai/flows/quick-add-booking';
import { chatbotAssistant } from '@/ai/flows/ai-chatbot-assistant';

export async function handleQuickAdd(
  prevState: any,
  formData: FormData
): Promise<{ data: QuickAddBookingOutput | null; error: string | null }> {
  const naturalLanguageRequest = formData.get('request') as string;
  if (!naturalLanguageRequest) {
    return { data: null, error: 'Please enter a booking request.' };
  }

  try {
    const result = await quickAddBooking({ naturalLanguageRequest });
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Could not parse the request. Please try again.' };
  }
}

export async function handleChatbotQuery(
  query: string
): Promise<{ response: string | null; error: string | null }> {
  if (!query) {
    return { response: null, error: 'Please enter a message.' };
  }

  try {
    const result = await chatbotAssistant({ query });
    return { response: result.response, error: null };
  } catch (error) {
    console.error(error);
    return { response: null, error: 'Sorry, I am having trouble connecting. Please try again later.' };
  }
}
