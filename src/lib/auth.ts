import { betterAuth } from "better-auth";
import { env as privateEnv } from '$env/dynamic/private'
import { env as publicEnv } from "$env/dynamic/public"

export const auth = betterAuth({
  baseURL: publicEnv.PUBLIC_BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: privateEnv.GOOGLE_CLIENT_ID as string,
      clientSecret: privateEnv.GOOGLE_CLIENT_SECRET as string,
      scope: ['https://www.googleapis.com/auth/gmail.readonly'],
    },
  }
});