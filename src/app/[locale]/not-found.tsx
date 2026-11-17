import Link from "next/link";

// Rendered for notFound() inside a locale (e.g. an unknown project slug).
export default function LocaleNotFound() {
  return (
    <div className="container-page grid min-h-[70svh] place-items-center pt-24 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Sayfa bulunamadı · Page not found</h1>
        <p className="mt-6 flex justify-center gap-6 text-accent-text">
          <Link href="/tr" className="hover:underline">Ana sayfa</Link>
          <Link href="/en" className="hover:underline">Home</Link>
        </p>
      </div>
    </div>
  );
}
