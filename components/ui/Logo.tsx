import Image from "next/image";

/**
 * Logo oficial da eGoverna.
 * Os arquivos vêm de /public/logos, originados da pasta /Logos do projeto.
 * A marca nunca é recriada em CSS ou texto — apenas o asset oficial é exibido,
 * sempre com proporção preservada.
 */

type LogoProps = {
  variant: "branco" | "preto";
  className?: string;
  priority?: boolean;
};

/** Proporção original do arquivo oficial (5920×1600 ≈ 3.7:1). */
const RATIO = { width: 1200, height: 324 };

export function Logo({ variant, className, priority = false }: LogoProps) {
  return (
    <Image
      src={`/logos/egoverna-${variant}.png`}
      alt="eGoverna"
      width={RATIO.width}
      height={RATIO.height}
      priority={priority}
      sizes="180px"
      className={className}
    />
  );
}

/**
 * Símbolo isolado da marca (seta amarela + círculo azul).
 * Usado como linguagem gráfica — nunca deformado nem redesenhado.
 */
export function Symbol({
  className,
  /** Largura renderizada, para o Next servir o tamanho certo. */
  sizes = "520px",
}: {
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src="/logos/egoverna-simbolo.png"
      alt=""
      aria-hidden="true"
      width={533}
      height={470}
      sizes={sizes}
      // Sempre decorativo e abaixo da dobra: nunca concorre com o LCP.
      loading="lazy"
      className={className}
    />
  );
}
