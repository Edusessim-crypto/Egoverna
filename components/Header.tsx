"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Troca de estado do header: transparente sobre o vídeo → sólido no scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body e permite fechar o menu com Esc.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b border-ink-100/90 bg-white/85 shadow-[0_1px_20px_-12px_rgba(16,16,52,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6 md:h-20">
        {/* Logo oficial — crossfade entre a versão branca e a preta */}
        <a
          href="#topo"
          aria-label="eGoverna — início"
          className="relative block h-[26px] w-[136px] flex-none md:h-[30px] md:w-[152px]"
        >
          <span
            className={`absolute inset-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          >
            <Logo
              variant="branco"
              priority
              className="h-full w-full object-contain object-left"
            />
          </span>
          <span
            className={`absolute inset-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          >
            <Logo
              variant="preto"
              priority
              className="h-full w-full object-contain object-left"
            />
          </span>
        </a>

        {/* Navegação desktop */}
        <nav aria-label="Principal" className="hidden min-[1152px]:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                    solid
                      ? "text-ink-600 hover:text-brand-700"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            onClick={() => track("click_contact", { location: "header" })}
            className={`group hidden h-11 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap md:inline-flex ${
              solid
                ? "bg-brand-700 text-white hover:bg-brand-800 hover:shadow-[0_14px_34px_-16px_rgba(49,47,129,0.8)]"
                : "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20"
            }`}
          >
            Falar com um especialista
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-200 min-[1152px]:hidden ${
              solid
                ? "border-ink-200 text-ink-800 hover:bg-ink-50"
                : "border-white/35 text-white hover:bg-white/15"
            }`}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ink-100 bg-white min-[1152px]:hidden"
      >
        <nav aria-label="Menu mobile" className="shell py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-ink-800 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                  <span className="font-mono text-xs text-ink-400">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            onClick={() => {
              track("click_contact", { location: "mobile_menu" });
              setOpen(false);
            }}
            className="mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-4 text-base font-semibold text-white"
          >
            Falar com um especialista
            <ArrowRight aria-hidden="true" className="size-[18px]" />
          </a>
        </nav>
      </div>
    </header>
  );
}
