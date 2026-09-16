import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Symbol } from "@/components/ui/Logo";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function CTASection() {
  return (
    <section className="relative bg-white pb-8 pt-24 md:pb-12 md:pt-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-brand-700 px-8 py-14 sm:px-12 md:px-16 md:py-20">
            {/* Profundidade e linguagem gráfica da marca */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(75%_100%_at_85%_20%,rgba(107,113,207,0.55)_0%,transparent_62%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 grid-lines opacity-50"
            />
            {/* Composição gráfica da marca: o símbolo fica inteiro e centrado
                dentro de um disco, em vez de cortado na borda do card. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[6%] top-1/2 hidden aspect-square w-[260px] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:flex xl:w-[300px]"
            >
              <span className="absolute inset-[14%] rounded-full border border-white/10" />
              {/* O símbolo é mais largo à esquerda (a seta), então o
                  deslocamento negativo o deixa opticamente centrado no disco. */}
              <Symbol
                sizes="180px"
                className="h-auto w-[46%] -translate-x-[3%] object-contain opacity-90"
              />
            </div>

            <div className="relative max-w-[42rem]">
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.1] text-white">
                Leve uma gestão mais inteligente para o seu município
                <span className="text-accent-500">.</span>
              </h2>
              <p className="mt-6 max-w-[38rem] text-[1.0625rem] leading-relaxed text-white/80 md:text-[1.125rem]">
                Conheça o ecossistema eGoverna e descubra como nossas soluções
                podem apoiar os desafios da sua administração.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#formulario"
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white px-7 text-base font-semibold text-brand-800 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent-500 hover:text-ink-900"
                >
                  Solicitar uma demonstração
                  <ArrowRight
                    aria-hidden="true"
                    className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>

                <WhatsAppLink
                  href={whatsappUrl}
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-[18px]"
                    strokeWidth={1.9}
                  />
                  Falar no WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
