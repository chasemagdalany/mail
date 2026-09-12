import { createAuthClient } from "better-auth/svelte"
import { env as publicEnv } from '$env/dynamic/public'

export const authClient = createAuthClient({
  baseURL: publicEnv.PUBLIC_BETTER_AUTH_URL,
})
