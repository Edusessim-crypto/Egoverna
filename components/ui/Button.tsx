"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost-light";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.9375rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 h-12 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-[0_10px_30px_-12px_rgba(49,47,129,0.65)] hover:bg-brand-800 hover:shadow-[0_16px_38px_-14px_rgba(49,47,129,0.75)] hover:-translate-y-0.5",
  secondary:
    "border border-ink-200 bg-white text-ink-800 hover:border-brand-300 hover:bg-brand-50 hover:-translate-y-0.5",
  // Para uso sobre o vídeo/áreas escuras
  "ghost-light":
    "border border-white/35 bg-white/8 text-white backdrop-blur-md hover:bg-white/16 hover:border-white/55 hover:-translate-y-0.5",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
  event?: AnalyticsEvent;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  withArrow = true,
  className = "",
  event,
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={event ? () => track(event, { location: "cta" }) : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-[18px] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
        />
      ) : null}
    </a>
  );
}
