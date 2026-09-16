"use client";

import { track } from "@/lib/analytics";

/**
 * Botões de download nas lojas de aplicativos.
 * Os selos são desenhados em SVG com os glifos oficiais (maçã e triângulo do
 * Google Play), para manter a nitidez em qualquer tela e evitar imagens extras.
 */

type StoreBadgesProps = {
  /** Produto ao qual as lojas pertencem — usado no evento de analytics. */
  product: string;
  apple: string;
  play: string;
  className?: string;
};

export function StoreBadges({
  product,
  apple,
  play,
  className = "",
}: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <StoreLink
        href={apple}
        onClick={() => track("app_download", { product, store: "app_store" })}
        label={`Baixar ${product} na App Store`}
        caption="Baixe na"
        store="App Store"
        icon={<AppleGlyph />}
      />
      <StoreLink
        href={play}
        onClick={() => track("app_download", { product, store: "google_play" })}
        label={`Baixar ${product} no Google Play`}
        caption="Disponível no"
        store="Google Play"
        icon={<PlayGlyph />}
      />
    </div>
  );
}

function StoreLink({
  href,
  onClick,
  label,
  caption,
  store,
  icon,
}: {
  href: string;
  onClick: () => void;
  label: string;
  caption: string;
  store: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={label}
      className="inline-flex items-center gap-2.5 rounded-xl border border-ink-900/10 bg-ink-900 px-3.5 py-2 text-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span aria-hidden="true" className="flex size-[22px] items-center justify-center">
        {icon}
      </span>
      <span className="leading-none">
        <span className="block text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-white/70">
          {caption}
        </span>
        <span className="mt-0.5 block text-[0.8125rem] font-bold tracking-[-0.01em]">
          {store}
        </span>
      </span>
    </a>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[19px]">
      <path d="M17.05 12.72c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.3-3.5zM14.88 5.9c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.55 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.22z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]">
      <path d="M3.6 2.3c-.23.25-.36.63-.36 1.13v17.14c0 .5.13.88.36 1.13l.06.06 9.6-9.6v-.22l-9.6-9.6-.6.06z" fill="#34A0E0" />
      <path d="M16.5 15.45l-3.2-3.2v-.22l3.2-3.2.07.04 3.8 2.16c1.08.61 1.08 1.62 0 2.24l-3.8 2.16-.7.02z" fill="#FFD109" />
      <path d="M16.57 15.43L13.3 12.15 3.6 21.7c.36.38.94.42 1.6.05l11.37-6.32" fill="#EF4136" />
      <path d="M16.57 8.87L5.2 2.55c-.66-.38-1.24-.33-1.6.05l9.7 9.55 3.27-3.28z" fill="#30BC86" />
    </svg>
  );
}
