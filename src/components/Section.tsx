import type { ReactNode } from "react";

export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-28 ${className ?? ""}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
