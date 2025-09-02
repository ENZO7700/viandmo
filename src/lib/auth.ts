'use server';

import { getIronSession, type IronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';

export interface LoginCredentials {
    username?: string | null;
    password?: string | null;
}

export async function getSession(): Promise<IronSession<SessionData>> {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}

export async function login(credentials: LoginCredentials) {
    if (!credentials.username || !credentials.password) {
        return { success: false, error: 'Meno a heslo sú povinné.' };
    }

    if (
        process.env.ADMIN_USERNAME === credentials.username &&
        process.env.ADMIN_PASSWORD === credentials.password
    ) {
        const session = await getSession();
        session.isLoggedIn = true;
        await session.save();
        return { success: true, error: undefined };
    }

    return { success: false, error: 'Nesprávne meno alebo heslo.' };
}


export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect('/');
}
