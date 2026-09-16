import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-[0_8px_20px_rgba(21,116,255,0.28)]",
  secondary:
    "border border-white/70 bg-white/10 text-white hover:bg-white hover:text-navy",
  outline:
    "border border-line bg-white text-navy hover:border-accent hover:text-accent",
  ghost: "text-accent hover:underline underline-offset-4",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function Button({ href, variant = "primary", className = "", children, ...props }: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
