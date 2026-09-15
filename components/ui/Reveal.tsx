"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Reveal on scroll via IntersectionObserver.
 *
 * Escolhido no lugar de uma biblioteca de animação porque o efeito é puramente
 * CSS (opacity + translateY): ~1KB em vez de dezenas. O conteúdo é sempre
 * renderizado no HTML — a animação é apenas progressive enhancement, e
 * `prefers-reduced-motion` neutraliza o efeito pelo CSS global.
 */

type RevealProps = {
  children: ReactNode;
  /** Atraso do stagger, em ms. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  // Sem IntersectionObserver o conteúdo nasce visível: a animação é um extra,
  // nunca um pré-requisito para o texto aparecer.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
