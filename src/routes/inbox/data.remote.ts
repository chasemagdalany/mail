import { query, getRequestEvent } from '$app/server';
import { auth } from '$lib/auth';

type message = {
  id: string;
  threadId: string;
}

export const getMessages = query(async (): Promise<message[]> => {
  const { request } = getRequestEvent();

  const accounts = await auth.api.listUserAccounts({
    headers: request.headers,
  });
  const google = accounts.find((a) => a.providerId === "google");
  if (!google) throw new Error("Google account not linked");
  const { accessToken } = await auth.api.getAccessToken({
    headers: request.headers,
    body: { accountId: google.id },
  });
  
  const res = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  })
  if (!res.ok) {
    console.error(`gmail api error: ${res.status}`)
  }
  
  const data = await res.json()
  return data.messages as message[]
});