import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  bettterAuthSecret: {},
  betterAuthUrl: { public: true },
  gcid: {},
  gcs: {},
});