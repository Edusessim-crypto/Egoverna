import {
  Landmark,
  FileText,
  Calculator,
  Users,
  Boxes,
  GraduationCap,
  HeartPulse,
  HandHeart,
  ChartNoAxesCombined,
  Database,
  MapPin,
  UserRound,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { Symbol } from "@/components/ui/Logo";

/**
 * Representação das áreas municipais conectadas ao núcleo do ecossistema.
 * Composição geométrica sóbria: linhas finas, grid técnico e o símbolo oficial
 * da marca no centro — sem diagramas ilustrativos ou ícones coloridos.
 *
 * São 13 nós (todos os módulos da plataforma), distribuídos em dois anéis:
 * um interno com 6 e um externo com 7, para que os rótulos não se sobreponham.
 */

type Area = { icon: LucideIcon; label: string; ring: "inner" | "outer" };

const areas: Area[] = [
  // Anel interno
  { icon: Landmark, label: "Tributário", ring: "inner" },
  { icon: Calculator, label: "Financeiro", ring: "inner" },
  { icon: Users, label: "RH", ring: "inner" },
  { icon: GraduationCap, label: "Educação", ring: "inner" },
  { icon: HeartPulse, label: "Saúde", ring: "inner" },
  { icon: Boxes, label: "Patrimonial", ring: "inner" },
  // Anel externo
  { icon: BrainCircuit, label: "IA", ring: "outer" },
  { icon: FileText, label: "NF-e", ring: "outer" },
  { icon: HandHeart, label: "Assistência", ring: "outer" },
  { icon: ChartNoAxesCombined, label: "Dados", ring: "outer" },
  { icon: Database, label: "SDI", ring: "outer" },
  { icon: MapPin, label: "Geo", ring: "outer" },
  { icon: UserRound, label: "Cidadão", ring: "outer" },
];

const inner = areas.filter((a) => a.ring === "inner");
const outer = areas.filter((a) => a.ring === "outer");

/** Raios em % da largura do container (cqw) e em unidades do viewBox 400. */
const RING = {
  inner: { cqw: 23, vb: 92, offset: -90 },
  outer: { cqw: 38, vb: 152, offset: -90 + 360 / 7 / 2 },
};

/** Ângulo (graus) do nó `i` dentro do seu anel. */
function angleOf(i: number, count: number, offset: number) {
  return (i / count) * 360 + offset;
}

export function EcosystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-ink-100 bg-[radial-gradient(120%_120%_at_50%_0%,#ffffff_0%,#f7f8fc_58%,#eef0f7_100%)] [container-type:inline-size]">
        {/* Malha técnica de fundo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-lines-light opacity-70"
        />

        {/* Órbitas e linhas de conexão entre o núcleo e as áreas */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="absolute inset-0 size-full"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r={RING.inner.vb}
            stroke="var(--color-ink-200)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <circle
            cx="200"
            cy="200"
            r={RING.outer.vb}
            stroke="var(--color-ink-200)"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.7"
          />

          {/* Raios do núcleo até o anel interno */}
          {inner.map((_, i) => {
            const rad =
              (angleOf(i, inner.length, RING.inner.offset) * Math.PI) / 180;
            return (
              <line
                key={`i${i}`}
                x1={200 + Math.cos(rad) * 52}
                y1={200 + Math.sin(rad) * 52}
                x2={200 + Math.cos(rad) * (RING.inner.vb - 22)}
                y2={200 + Math.sin(rad) * (RING.inner.vb - 22)}
                stroke="var(--color-ink-200)"
                strokeWidth="1"
              />
            );
          })}

          {/* Raios curtos do anel interno até o externo */}
          {outer.map((_, i) => {
            const rad =
              (angleOf(i, outer.length, RING.outer.offset) * Math.PI) / 180;
            return (
              <line
                key={`o${i}`}
                x1={200 + Math.cos(rad) * (RING.inner.vb + 6)}
                y1={200 + Math.sin(rad) * (RING.inner.vb + 6)}
                x2={200 + Math.cos(rad) * (RING.outer.vb - 20)}
                y2={200 + Math.sin(rad) * (RING.outer.vb - 20)}
                stroke="var(--color-ink-200)"
                strokeWidth="1"
                opacity="0.75"
              />
            );
          })}
        </svg>

        {/* Núcleo: símbolo oficial da marca */}
        <div className="absolute left-1/2 top-1/2 flex size-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white shadow-[0_18px_44px_-24px_rgba(16,16,52,0.4)] sm:size-[96px]">
          <Symbol sizes="42px" className="h-auto w-[36px] object-contain sm:w-[42px]" />
        </div>

        {/* Nós das áreas municipais */}
        {(["inner", "outer"] as const).map((ring) => {
          const list = ring === "inner" ? inner : outer;
          const { cqw, offset } = RING[ring];
          return list.map((area, i) => {
            const angle = angleOf(i, list.length, offset);
            const Icon = area.icon;
            return (
              <div
                key={area.label}
                className="absolute left-1/2 top-1/2 size-0"
                // O raio acompanha a largura do container (cqw), mantendo o
                // diagrama proporcional em qualquer breakpoint.
                style={{
                  transform: `rotate(${angle}deg) translate(${cqw}cqw) rotate(${-angle}deg)`,
                }}
              >
                <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
                  <span className="flex size-[34px] items-center justify-center rounded-lg border border-ink-100 bg-white text-brand-700 shadow-[0_8px_20px_-12px_rgba(16,16,52,0.45)] sm:size-10 sm:rounded-xl">
                    <Icon
                      aria-hidden="true"
                      className="size-[15px] sm:size-[17px]"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.07em] text-ink-400 sm:text-[9.5px]">
                    {area.label}
                  </span>
                </div>
              </div>
            );
          });
        })}

        {/* Pontos amarelos de destaque — detalhe da identidade */}
        <span
          aria-hidden="true"
          className="absolute left-[7%] top-[10%] size-2 rounded-full bg-accent-500"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[8%] right-[7%] size-1.5 rounded-full bg-accent-500"
        />
      </div>
    </div>
  );
}
