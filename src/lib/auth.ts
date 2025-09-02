import { sessionOptions, type SessionData } from '@/lib/session';
import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getSession(): Promise<IronSession<SessionData>> {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}

export async function login(session: IronSession<SessionData>) {
  session.isLoggedIn = true;
  await session.save();
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect('/');
}
