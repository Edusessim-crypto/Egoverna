"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo oficial da cidade se construindo (asset original do site do eGoverna).
 *
 * Performance: o poster é a imagem do LCP e carrega imediatamente; o vídeo só
 * é anexado ao DOM após a montagem, para não competir com o conteúdo crítico.
 * Acessibilidade: com `prefers-reduced-motion: reduce` o vídeo não é carregado
 * e o poster estático permanece.
 */
export function HeroVideo() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    // O vídeo (≈2,7 MB) só começa a baixar quando o navegador está ocioso, para
    // não competir por banda com o LCP — que é o poster, já em cache do HTML.
    const start = () => setEnabled(true);
    const idle = window.requestIdleCallback;

    if (typeof idle === "function") {
      const id = idle.call(window, start, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }

    // Safari antigo não tem requestIdleCallback.
    const id = window.setTimeout(start, 900);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;
    // Alguns navegadores exigem play() explícito mesmo com autoplay+muted.
    void video.play().catch(() => {
      /* autoplay bloqueado — o poster permanece visível */
    });
  }, [enabled]);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden bg-brand-950">
      {/* Poster: pintado imediatamente, evita flash vazio e sustenta o LCP */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/video/hero-poster.jpg"
        alt=""
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />

      {enabled ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          {/*
            Para servir WebM (≈30% menor), gere o arquivo e adicione o <source>
            ACIMA do MP4 — o navegador usa o primeiro formato que suportar:

              ffmpeg -i public/video/hero-cidade.mp4 -c:v libvpx-vp9 \
                -crf 34 -b:v 0 -an public/video/hero-cidade.webm

              <source src="/video/hero-cidade.webm" type="video/webm" />

            Um <source> apontando para arquivo inexistente gera 404 no console,
            por isso ele só entra quando o arquivo existir de fato.
          */}
          <source src="/video/hero-cidade.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
