import { betterAuth } from "better-auth";
import { gcid, gcs } from "$app/env/private";
import { betterAuthUrl } from "$app/env/public";

export const auth = betterAuth({
  baseURL: betterAuthUrl,
  socialProviders: {
    google: {
      clientId: gcid as string,
      clientSecret: gcs as string,
    },
  }
});