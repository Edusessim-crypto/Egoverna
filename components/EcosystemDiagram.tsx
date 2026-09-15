import {
  Landmark,
  Calculator,
  Users,
  GraduationCap,
  HeartPulse,
  Boxes,
  Map as MapIcon,
  Globe,
} from "lucide-react";
import { Symbol } from "@/components/ui/Logo";

/**
 * Representação das áreas municipais conectadas ao núcleo do ecossistema.
 * Composição geométrica sóbria: linhas finas, grid técnico e o símbolo oficial
 * da marca no centro — sem diagramas ilustrativos ou ícones coloridos.
 */

const areas = [
  { icon: Landmark, label: "Tributos" },
  { icon: Calculator, label: "Finanças" },
  { icon: Users, label: "RH" },
  { icon: GraduationCap, label: "Educação" },
  { icon: HeartPulse, label: "Saúde" },
  { icon: Boxes, label: "Patrimônio" },
  { icon: MapIcon, label: "Território" },
  { icon: Globe, label: "Cidadão" },
];

export function EcosystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-ink-100 bg-[radial-gradient(120%_120%_at_50%_0%,#ffffff_0%,#f7f8fc_58%,#eef0f7_100%)] [container-type:inline-size]">
        {/* Malha técnica de fundo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-lines-light opacity-70"
        />

        {/* Linhas de conexão entre o núcleo e as áreas */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="absolute inset-0 size-full"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="132"
            stroke="var(--color-ink-200)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          {areas.map((_, i) => {
            const angle = (i / areas.length) * Math.PI * 2 - Math.PI / 2;
            // A linha para antes do nó, para não passar por baixo do ícone.
            return (
              <line
                key={i}
                x1={200 + Math.cos(angle) * 64}
                y1={200 + Math.sin(angle) * 64}
                x2={200 + Math.cos(angle) * 110}
                y2={200 + Math.sin(angle) * 110}
                stroke="var(--color-ink-200)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Núcleo: símbolo oficial da marca */}
        <div className="absolute left-1/2 top-1/2 flex size-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white shadow-[0_18px_44px_-24px_rgba(16,16,52,0.4)] sm:size-[124px]">
          <Symbol sizes="52px" className="h-auto w-[46px] object-contain sm:w-[52px]" />
        </div>

        {/* Nós das áreas municipais */}
        {areas.map((area, i) => {
          const angle = (i / areas.length) * 360 - 90;
          const Icon = area.icon;
          return (
            <div
              key={area.label}
              className="absolute left-1/2 top-1/2 size-0"
              // O raio acompanha a largura do container (cqw), mantendo o
              // diagrama proporcional em qualquer breakpoint.
              style={{
                transform: `rotate(${angle}deg) translate(33cqw) rotate(${-angle}deg)`,
              }}
            >
              <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <span className="flex size-11 items-center justify-center rounded-xl border border-ink-100 bg-white text-brand-700 shadow-[0_8px_20px_-12px_rgba(16,16,52,0.45)] sm:size-12">
                  <Icon
                    aria-hidden="true"
                    className="size-[19px]"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.09em] text-ink-400 sm:text-[11px]">
                  {area.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Pontos amarelos de destaque — detalhe da identidade */}
        <span
          aria-hidden="true"
          className="absolute left-[14%] top-[18%] size-2 rounded-full bg-accent-500"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[16%] right-[13%] size-1.5 rounded-full bg-accent-500"
        />
      </div>
    </div>
  );
}
