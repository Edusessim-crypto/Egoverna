import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Moldura das páginas institucionais de texto.
 * O header aqui já nasce sólido, pois não há vídeo por trás.
 */
export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1 bg-white pb-24 pt-32 md:pt-40">
        <div className="shell">
          <div className="max-w-[46rem]">
            <Link
              href="/"
              className="text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
            >
              ← Voltar para o início
            </Link>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.1] text-ink-900">
              {title}
            </h1>
            <p className="mt-4 text-sm text-ink-400">
              Última atualização: {updatedAt}
            </p>

            <div className="prose-egoverna mt-12">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
