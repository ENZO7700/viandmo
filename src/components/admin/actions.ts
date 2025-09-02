'use server';

import { logout as performLogout } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function logout() {
  await performLogout();
  redirect('/');
}
