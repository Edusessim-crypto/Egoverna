import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Apresentação da ISA — a inteligência artificial nativa do eGoverna.
 * Fica logo após a dobra da plataforma, em fundo escuro: a personagem é
 * clara e recortada, e o contraste a destaca sem concorrer com as seções
 * claras vizinhas.
 */
export function IsaSection() {
  return (
    <section
      id="isa"
      className="on-dark relative overflow-hidden bg-brand-950 py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_80%_at_75%_30%,rgba(107,113,207,0.35)_0%,transparent_65%)]"
      />

      <div className="shell relative">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-14 lg:gap-20">
          {/* A ISA */}
          <Reveal className="order-last md:order-first">
            <div className="relative mx-auto w-fit">
              {/* Halo que assenta a personagem no fundo escuro */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[6%] top-[8%] rounded-[999px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,204,8,0.18)_0%,transparent_70%)]"
              />
              <Image
                src="/images/isa.png"
                alt="ISA, a assistente de inteligência artificial do eGoverna"
                width={306}
                height={900}
                sizes="180px"
                // Limitada pela altura: a personagem é muito vertical e, dimensionada
                // pela largura, estouraria a seção.
                className="relative h-[340px] w-auto drop-shadow-[0_28px_50px_rgba(0,0,0,0.45)] sm:h-[400px] md:h-[440px] lg:h-[480px]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-white/70">
                <Sparkles
                  aria-hidden="true"
                  className="size-[15px] text-accent-500"
                  strokeWidth={2}
                />
                Conheça a ISA
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(1.875rem,4vw,3rem)] font-extrabold leading-[1.1] text-white">
                A inteligência artificial nativa do eGoverna
                <span className="text-accent-500">.</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-[42rem] text-[1.0625rem] leading-relaxed text-white/75 md:text-[1.125rem]">
                A ISA é a inteligência artificial nativa do eGoverna. Ela auxilia
                os usuários, simplifica rotinas, facilita o acesso às informações
                e apoia a execução das atividades no sistema. O resultado é mais
                produtividade e automação, com menos trabalho operacional na
                gestão pública.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 max-w-[42rem] border-l-2 border-accent-500 pl-5 text-[1.0625rem] font-bold leading-relaxed text-white md:text-[1.125rem]">
                ISA + eGoverna: IA aplicada à gestão pública para gerar
                eficiência, inovação e melhores resultados.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
