import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Nível do heading — mantém a hierarquia semântica correta. */
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <Reveal>
        <p
          className={`eyebrow ${align === "center" ? "justify-center" : ""} ${
            dark ? "text-white/70" : "text-brand-700"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <Tag
          className={`mt-5 text-[clamp(1.875rem,4vw,3rem)] font-extrabold leading-[1.1] ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </Tag>
      </Reveal>

      {text ? (
        <Reveal delay={150}>
          <div
            className={`mt-5 max-w-[46rem] text-[1.0625rem] leading-relaxed md:text-[1.125rem] ${
              align === "center" ? "mx-auto" : ""
            } ${dark ? "text-white/70" : "text-ink-500"}`}
          >
            {text}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
