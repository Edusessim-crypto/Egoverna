import {
  Gauge,
  ChartNoAxesCombined,
  Globe,
  ShieldCheck,
  Landmark,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Symbol } from "@/components/ui/Logo";
import { benefits } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Gauge,
  ChartNoAxesCombined,
  Globe,
  ShieldCheck,
  Landmark,
  HandHeart,
};

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="on-dark relative overflow-hidden bg-brand-950 py-24 md:py-32"
    >
      {/* Gradiente institucional: azul profundo → azul → azul-violeta */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_18%_0%,rgba(59,58,150,0.55)_0%,transparent_58%),radial-gradient(70%_60%_at_92%_100%,rgba(49,47,129,0.5)_0%,transparent_62%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />

      {/* Símbolo da marca ampliado e recortado — linguagem gráfica institucional */}
      <Symbol className="pointer-events-none absolute -right-24 top-1/2 hidden h-auto w-[520px] -translate-y-1/2 opacity-[0.07] lg:block" />

      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-white/65">Por que eGoverna</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(1.875rem,4.2vw,3.25rem)] font-extrabold leading-[1.08] text-white">
              Tecnologia que transforma a gestão pública
              <span className="text-accent-500">.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-[42rem] text-[1.0625rem] leading-relaxed text-white/70 md:text-[1.1875rem]">
              Integramos tecnologia, pessoas e processos para construir
              administrações mais eficientes, transparentes e próximas do
              cidadão.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Reveal as="li" key={benefit.title} delay={i * 70} className="h-full">
                <article className="group h-full bg-brand-950/85 p-8 transition-colors duration-300 hover:bg-brand-900/70 lg:p-9">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-accent-500 transition-colors duration-300 group-hover:border-accent-500/40">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="mt-6 text-[1.0625rem] font-bold leading-snug text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                    {benefit.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
