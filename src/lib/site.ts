import { isTodo, type Maybe } from "@/content/todo";

/** Canonical origin. TODO: set NEXT_PUBLIC_SITE_URL on Vercel to the final domain. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

/** Returns the value, or undefined when it is still a todo(). */
export const known = <T,>(value: Maybe<T>): T | undefined => (isTodo(value) ? undefined : value);
