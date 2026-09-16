import Link from "next/link";

export function Breadcrumb({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-6 text-sm ${light ? "text-white/70" : "text-slate"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-navy"}>{item.label}</span>
            )}
            {index < items.length - 1 ? <span className={light ? "text-white/35" : "text-line"}>›</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
