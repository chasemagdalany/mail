import { createAuthClient } from "better-auth/svelte"
import { betterAuthUrl } from "$app/env/public"

export const authClient = createAuthClient({
  baseURL: betterAuthUrl,
})