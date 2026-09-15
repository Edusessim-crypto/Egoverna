import { ScanLine, Database, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = { ScanLine, Database };

export function ProductShowcase() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Produtos especializados"
          title="Soluções dedicadas dentro do mesmo ecossistema."
          text="Produtos criados para necessidades específicas da administração municipal, mantendo a mesma linguagem, integração e segurança da plataforma eGoverna."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
          {products.map((product, i) => {
            const Icon = iconMap[product.icon];
            return (
              <Reveal key={product.id} delay={i * 110} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-ink-100 bg-paper p-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_26px_54px_-32px_rgba(16,16,52,0.4)] sm:p-10">
                  {/* Malha técnica no canto — linguagem visual do ecossistema */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 size-48 grid-lines-light opacity-80 [mask-image:radial-gradient(closest-side,#000,transparent)]"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
                      <Icon
                        aria-hidden="true"
                        className="size-[22px]"
                        strokeWidth={1.75}
                      />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700"
                    />
                  </div>

                  <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
                    {product.kicker}
                  </p>
                  <h3 className="relative mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink-900">
                    {product.name}
                  </h3>
                  <p className="relative mt-4 max-w-[30rem] text-[1.0625rem] font-semibold leading-snug text-ink-800">
                    {product.headline}
                  </p>
                  <p className="relative mt-3 max-w-[32rem] text-[0.9375rem] leading-relaxed text-ink-500">
                    {product.text}
                  </p>

                  <ul className="relative mt-7 grid gap-2.5 sm:grid-cols-2">
                    {product.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[0.875rem] font-medium text-ink-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] size-1.5 flex-none rounded-full bg-accent-500"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
