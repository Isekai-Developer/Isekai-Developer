import { inject } from "@vercel/analytics";

const analyticsToken = process.env.VERCEL_ANALYTICS_TOKEN;

inject(analyticsToken);
