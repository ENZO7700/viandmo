'use server';

import { getSession, login as performLogin } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function login(prevState: { error: string } | undefined, formData: FormData) {
  const session = await getSession();
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (process.env.ADMIN_USERNAME === username && process.env.ADMIN_PASSWORD === password) {
    await performLogin(session);
    // Presmerovanie sa deje na strane klienta po úspešnom stave
    return { success: true, error: undefined };
  }

  return { error: 'Nesprávne meno alebo heslo.', success: false };
}
