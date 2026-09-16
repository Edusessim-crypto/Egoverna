import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Apresentação da ISA — a inteligência artificial nativa do eGoverna.
 * Mesmo formato do card de CTA: bloco azul arredondado, texto à esquerda e a
 * personagem à direita, encostada na base para parecer apoiada no card.
 */
export function IsaSection() {
  return (
    <section id="isa" className="relative bg-white pt-24 md:pt-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-brand-700 px-8 pb-14 pt-14 sm:px-12 md:px-16 md:pb-0 md:pt-20">
            {/* Profundidade e linguagem gráfica da marca */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(75%_100%_at_85%_20%,rgba(107,113,207,0.55)_0%,transparent_62%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 grid-lines opacity-50"
            />

            <div className="relative grid items-end gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-8">
              <div className="md:pb-20">
                <p className="eyebrow text-white/70">
                  <Sparkles
                    aria-hidden="true"
                    className="size-[15px] text-accent-500"
                    strokeWidth={2}
                  />
                  Conheça a ISA
                </p>

                <h2 className="mt-5 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.1] text-white">
                  A inteligência artificial nativa do eGoverna
                  <span className="text-accent-500">.</span>
                </h2>

                <p className="mt-6 max-w-[38rem] text-[1.0625rem] leading-relaxed text-white/80 md:text-[1.125rem]">
                  A ISA é a inteligência artificial nativa do eGoverna. Ela
                  auxilia os usuários, simplifica rotinas, facilita o acesso às
                  informações e apoia a execução das atividades no sistema. O
                  resultado é mais produtividade e automação, com menos trabalho
                  operacional na gestão pública.
                </p>

                <p className="mt-7 max-w-[38rem] border-l-2 border-accent-500 pl-5 text-[1.0625rem] font-bold leading-relaxed text-white md:text-[1.125rem]">
                  ISA + eGoverna: IA aplicada à gestão pública para gerar
                  eficiência, inovação e melhores resultados.
                </p>
              </div>

              {/* A ISA encosta na base do card, como se estivesse apoiada nele */}
              <div className="relative mx-auto w-fit md:mx-0 md:justify-self-end">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-[999px] bg-[radial-gradient(60%_60%_at_50%_45%,rgba(255,204,8,0.16)_0%,transparent_72%)]"
                />
                <Image
                  src="/images/isa.png"
                  alt="ISA, a assistente de inteligência artificial do eGoverna"
                  width={504}
                  height={760}
                  sizes="(max-width: 768px) 260px, 380px"
                  className="relative block h-[300px] w-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)] sm:h-[340px] md:h-[400px] lg:h-[440px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
