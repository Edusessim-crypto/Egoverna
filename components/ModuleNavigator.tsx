"use client";

import { useEffect, useRef, useState } from "react";
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
  Map as MapIcon,
  Globe,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { modules, moduleResult, type ModuleIconName } from "@/lib/site";
import { track } from "@/lib/analytics";

const icons: Record<ModuleIconName, LucideIcon> = {
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
  Map: MapIcon,
  Globe,
};

export function ModuleNavigator() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const current = modules[active];
  const CurrentIcon = icons[current.icon];

  // Evento de analytics ao visualizar cada módulo.
  useEffect(() => {
    track("module_view", { module: current.id, module_name: current.name });
  }, [current.id, current.name]);

  // Mantém o chip ativo visível no trilho horizontal do mobile.
  useEffect(() => {
    chipRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  /** Navegação por teclado no padrão ARIA de tablist. */
  function onKeyDown(event: React.KeyboardEvent, orientation: "v" | "h") {
    const prevKey = orientation === "v" ? "ArrowUp" : "ArrowLeft";
    const nextKey = orientation === "v" ? "ArrowDown" : "ArrowRight";

    let next: number | null = null;
    if (event.key === nextKey) next = (active + 1) % modules.length;
    else if (event.key === prevKey)
      next = (active - 1 + modules.length) % modules.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = modules.length - 1;

    if (next === null) return;
    event.preventDefault();
    setActive(next);
    const list = orientation === "v" ? tabRefs : chipRefs;
    list.current[next]?.focus();
  }

  return (
    <section id="modulos" className="relative bg-white py-24 md:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-700">Soluções eGoverna</p>
          <h2 className="mt-5 text-[clamp(1.875rem,4vw,3rem)] font-extrabold leading-[1.1] text-ink-900">
            Tecnologia para todas as áreas da administração municipal.
          </h2>
          <p className="mt-5 max-w-[46rem] text-[1.0625rem] leading-relaxed text-ink-500 md:text-[1.125rem]">
            Cada módulo é desenvolvido para atender necessidades específicas da
            gestão pública, mantendo integração, segurança e facilidade de uso.
          </p>
        </div>

        <div className="mt-12 md:mt-16 lg:grid lg:grid-cols-[292px_minmax(0,1fr)] lg:gap-10">
          {/* ---------- Sidebar (desktop) ---------- */}
          <div
            role="tablist"
            aria-label="Módulos eGoverna"
            aria-orientation="vertical"
            className="hidden lg:flex lg:flex-col lg:gap-1"
          >
            {modules.map((module, i) => {
              const Icon = icons[module.icon];
              const selected = i === active;
              return (
                <button
                  key={module.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${module.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${module.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, "v")}
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    selected
                      ? "bg-brand-700 text-white shadow-[0_14px_34px_-18px_rgba(49,47,129,0.85)]"
                      : "text-ink-600 hover:bg-ink-50"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className={`size-[18px] flex-none transition-colors duration-300 ${
                      selected
                        ? "text-white"
                        : "text-ink-400 group-hover:text-brand-700"
                    }`}
                  />
                  <span
                    className={`text-[0.9375rem] leading-snug ${
                      selected ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {module.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ---------- Chips (mobile/tablet) ---------- */}
          <div
            role="tablist"
            aria-label="Módulos eGoverna"
            aria-orientation="horizontal"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:-mx-10 md:px-10 lg:hidden"
          >
            {modules.map((module, i) => {
              const Icon = icons[module.icon];
              const selected = i === active;
              return (
                <button
                  key={module.id}
                  ref={(el) => {
                    chipRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`chip-${module.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${module.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, "h")}
                  className={`flex h-11 flex-none items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-300 ${
                    selected
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-ink-200 bg-white text-ink-600"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="size-4 flex-none"
                  />
                  <span className="whitespace-nowrap">{module.name}</span>
                </button>
              );
            })}
          </div>

          {/* ---------- Painel de conteúdo ---------- */}
          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            tabIndex={0}
            /* A key força o replay da animação de entrada a cada troca. */
            key={current.id}
            className="mt-6 animate-[fade-up_0.45s_cubic-bezier(0.22,1,0.36,1)_both] rounded-[28px] border border-ink-100 bg-paper p-7 focus-visible:outline-brand-600 sm:p-9 lg:mt-0 lg:p-11"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <CurrentIcon
                aria-hidden="true"
                className="size-[22px]"
                strokeWidth={1.75}
              />
            </span>

            <h3 className="mt-6 max-w-[34rem] text-[clamp(1.375rem,2.6vw,2rem)] font-extrabold leading-[1.15] text-ink-900">
              {current.headline}
            </h3>

            <p className="mt-4 max-w-[42rem] text-[1.0625rem] leading-relaxed text-ink-500">
              {current.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {current.features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-[0.8125rem] font-semibold text-ink-700 sm:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 flex-none rounded-full bg-accent-500"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Card de resultado */}
            <div className="mt-9 overflow-hidden rounded-3xl bg-brand-950 p-7 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                  <p className="eyebrow text-white/60">
                    Resultados para a administração municipal
                  </p>
                  <p className="mt-4 max-w-[38rem] text-[0.9375rem] leading-relaxed text-white/80 sm:text-base">
                    {moduleResult.text}
                  </p>
                </div>

                {/* Elemento visual de dados — representação abstrata, sem números */}
                <div
                  aria-hidden="true"
                  className="flex items-end gap-1.5 sm:pl-6"
                >
                  {[38, 56, 44, 72, 60, 88].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-2.5 rounded-full ${
                        i === 5 ? "bg-accent-500" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <a
                href="#contato"
                onClick={() =>
                  track("click_demo", { location: "module", module: current.id })
                }
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <Sparkles
                  aria-hidden="true"
                  className="size-4 text-accent-500"
                  strokeWidth={2}
                />
                Ver este módulo em uma demonstração
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
