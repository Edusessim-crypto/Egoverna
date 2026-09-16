import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { platformHighlights } from "@/lib/site";

export function PlatformShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink-50/60 pb-24 pt-[3.625rem] md:pb-32 md:pt-[4.8125rem]">
      {/* Malha técnica discreta no fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines-light opacity-60 [mask-image:radial-gradient(75%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Imagem oficial: interface real do sistema eGoverna */}
          <Reveal className="order-last lg:order-first">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_40%_45%,rgba(49,47,129,0.12),transparent_72%)]"
              />
              {/* Imagem oficial da marca: o sistema em notebook e smartphone. */}
              <Image
                src="/images/sistema-egoverna.webp"
                alt="Sistema eGoverna em notebook e smartphone, exibindo o painel de gestão de recursos humanos"
                width={1200}
                height={968}
                sizes="(max-width: 1024px) 94vw, 640px"
                className="h-auto w-full drop-shadow-[0_36px_60px_rgba(16,16,52,0.18)] lg:max-w-none lg:w-[112%] lg:-ml-[6%]"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="A plataforma"
              title="Transforme os desafios administrativos em eficiência real."
              text="O eGoverna é um software desenvolvido para os desafios reais da gestão pública. Mais do que sistemas, oferecemos um ecossistema de soluções, implantação, suporte e evolução contínua."
            />

            <Reveal delay={200}>
              <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {platformHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-[22px] flex-none items-center justify-center rounded-md bg-brand-700/10 text-brand-700">
                      <Check
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={2.75}
                      />
                    </span>
                    <span className="text-[0.9375rem] font-medium leading-snug text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10">
                <ButtonLink href="#contato" event="click_demo">
                  Solicitar demonstração
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
