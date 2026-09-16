import {
  Workflow,
  ShieldCheck,
  ChartNoAxesCombined,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { differentials } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  ShieldCheck,
  ChartNoAxesCombined,
  Headset,
};

export function Ecosystem() {
  return (
    <section id="ecossistema" className="relative bg-white py-24 md:py-32">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Ecossistema eGoverna"
              title="Uma gestão conectada funciona melhor."
              text={
                <>
                  <span className="block font-medium text-ink-700">
                    O eGoverna é um software que conecta diferentes áreas da
                    administração municipal em um único ecossistema digital.
                  </span>
                  <span className="mt-4 block">
                    Finanças, tributos, educação, recursos humanos, saúde,
                    patrimônio, dados e serviços ao cidadão trabalhando de forma
                    integrada para tornar a gestão mais eficiente.
                  </span>
                </>
              }
            />
          </div>

          <Reveal delay={120}>
            <EcosystemDiagram />
          </Reveal>
        </div>

        {/* Cards de diferenciais */}
        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {differentials.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal as="li" key={item.title} delay={i * 90} className="h-full">
                <article className="group h-full rounded-card border border-ink-100 bg-white p-7 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-24px_rgba(16,16,52,0.35)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] font-bold tracking-[-0.01em] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">
                    {item.text}
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
