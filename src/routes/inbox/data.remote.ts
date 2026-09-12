import { query } from '$app/server';
import { auth } from '$lib/auth';
import * as v from 'valibot';

type message = {
  id: string;
  threadId: string;
}

export const getMessages = query(v.string(), async (token): Promise<message[]> => {
  const res = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`Gmail API error: ${res.status}`)
  }
  const data = await res.json()
  return data.messages as message[]
});