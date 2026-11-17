import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

// Fallback only — src/proxy.ts normally redirects "/" based on the visitor's language.
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
