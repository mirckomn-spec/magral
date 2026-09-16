export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${tone === "light" ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-[15px] leading-7 ${tone === "light" ? "text-white/70" : "text-slate"}`}>{text}</p>
      ) : null}
    </div>
  );
}
