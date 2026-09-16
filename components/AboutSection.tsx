import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="sobre" className="relative bg-white py-24 md:py-32">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sobre nós"
              title="Mais que um sistema, um parceiro da gestão pública."
              text={
                <>
                  <span className="block font-medium text-ink-700">
                    O eGoverna é um software desenvolvido para as necessidades
                    da administração municipal, aproximando gestão, servidores e
                    cidadãos através de soluções integradas.
                  </span>
                  <span className="mt-4 block">
                    Nossos produtos são desenvolvidos considerando desafios reais
                    das prefeituras e órgãos públicos, transformando necessidades
                    em sistemas inteligentes, seguros e fáceis de utilizar.
                  </span>
                </>
              }
            />
          </div>

          {/* Foto oficial da equipe eGoverna */}
          <Reveal delay={120}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-4 bottom-0 top-10 -z-10 rounded-[32px] bg-[linear-gradient(160deg,var(--color-brand-50),var(--color-ink-50))]"
              />
              <Image
                src="/images/equipe-egoverna.webp"
                alt="Equipe eGoverna uniformizada"
                width={1200}
                height={1147}
                sizes="(max-width: 1024px) 88vw, 520px"
                className="mx-auto h-auto w-full max-w-[540px]"
              />
            </div>
          </Reveal>
        </div>

        {/* O que nos move — composição editorial com hierarquia variada */}
        <div className="mt-24 border-t border-ink-100 pt-16 md:mt-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <div>
                <p className="eyebrow text-brand-700">O que nos move</p>
                <h3 className="mt-5 text-[clamp(1.625rem,3vw,2.25rem)] font-extrabold leading-[1.12] text-ink-900">
                  Princípios que orientam cada entrega.
                </h3>
              </div>
            </Reveal>

            <ol className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {values.map((value, i) => (
                <Reveal as="li" key={value.title} delay={i * 90}>
                  <div className="flex gap-4">
                    {/* Numeral em azul com marcador amarelo: o amarelo fica
                        como elemento gráfico, nunca como cor de texto miúdo. */}
                    <span className="mt-1 flex items-center gap-2 font-mono text-xs font-bold text-brand-700">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-accent-500"
                      />
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-[1.0625rem] font-bold text-ink-900">
                        {value.title}
                      </h4>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
