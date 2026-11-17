import { fontVariables } from "@/lib/fonts";

export default function GlobalNotFound() {
  return (
    <html lang="tr" className={fontVariables}>
      <body className="grid min-h-svh place-items-center p-6 text-center">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Sayfa bulunamadı · Page not found</h1>
          <p className="mt-6 flex justify-center gap-4 text-accent-text">
            <a href="/tr" className="hover:underline">Ana sayfa</a>
            <a href="/en" className="hover:underline">Home</a>
          </p>
        </div>
      </body>
    </html>
  );
}
