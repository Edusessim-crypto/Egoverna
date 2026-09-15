import { ArrowRight, Boxes, Cpu, ShieldCheck, Headset } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";

const indicators = [
  { icon: Boxes, label: "Ecossistema integrado" },
  { icon: Cpu, label: "Tecnologia para gestão pública" },
  { icon: ShieldCheck, label: "Segurança e disponibilidade" },
  { icon: Headset, label: "Suporte especializado" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-brand-950 pb-14 pt-32 md:min-h-[100svh] md:pb-20 md:pt-40"
    >
      {/* Vídeo oficial da cidade se construindo — protagonista visual */}
      <HeroVideo />

      {/* Overlay: garante contraste do texto mantendo a cidade visível.
          Escurece a base e o topo, preservando o centro-direita da cena. */}
      {/* Camada azul que unifica a cena com a identidade institucional */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-brand-950/40 mix-blend-multiply md:bg-brand-950/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(10,10,36,0.92)_0%,rgba(16,16,52,0.62)_38%,rgba(16,16,52,0.3)_68%,rgba(16,16,52,0.55)_100%)] md:bg-[linear-gradient(to_top,rgba(10,10,36,0.95)_0%,rgba(16,16,52,0.76)_30%,rgba(16,16,52,0.34)_56%,rgba(16,16,52,0.6)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(140%_70%_at_0%_88%,rgba(28,27,77,0.85)_0%,rgba(16,16,52,0.25)_52%,transparent_78%)] md:bg-[radial-gradient(125%_90%_at_10%_80%,rgba(28,27,77,0.88)_0%,rgba(16,16,52,0.3)_48%,transparent_74%)]"
      />
      {/* Vinheta suave nas bordas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 shadow-[inset_0_0_180px_60px_rgba(10,10,36,0.55)]"
      />

      <div className="shell on-dark relative w-full">
        <div className="max-w-[54rem]">
          <p className="eyebrow animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] text-white/75">
            Ecossistema inteligente para a gestão pública
          </p>

          <h1 className="mt-6 animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.08s_both] text-[clamp(2rem,6.4vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:leading-[1.04]">
            Gestão pública inteligente,
            <br className="hidden sm:block" />{" "}
            <span className="relative">
              eficiente e conectada
              {/* Ponto final na cor da marca — detalhe da identidade */}
              <span className="text-accent-500">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.16s_both] text-[clamp(1.0625rem,2.1vw,1.3125rem)] leading-relaxed text-white/80">
            Transforme a administração municipal com tecnologia feita para
            simplificar, integrar e potencializar resultados.
          </p>

          <div className="mt-10 flex animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.24s_both] flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white px-7 text-base font-semibold text-brand-900 shadow-[0_18px_44px_-18px_rgba(0,0,0,0.8)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent-500 hover:text-ink-900"
            >
              Falar com um especialista
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#modulos"
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/8 px-7 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/16"
            >
              Conhecer as soluções
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Indicadores qualitativos — nenhuma métrica numérica inventada */}
        <ul className="mt-14 grid animate-[fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.34s_both] grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-7 md:mt-16 md:grid-cols-4 md:gap-8">
          {indicators.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-start gap-3">
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-[18px] flex-none text-accent-500"
                strokeWidth={1.75}
              />
              <span className="text-[0.8125rem] font-medium leading-snug text-white/75 md:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Transição refinada para a seção seguinte */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.06)_55%,#ffffff_100%)]"
      />
    </section>
  );
}
