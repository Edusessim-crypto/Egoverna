import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta o site como HTML estático em /out — nenhuma hospedagem com Node
  // é necessária. O formulário de contato valida no próprio navegador.
  output: "export",

  images: {
    // Sem servidor não há otimização sob demanda: as imagens saem de /public
    // como estão. Os assets já foram exportados em tamanho e formato adequados.
    unoptimized: true,
  },

  // As URLs ganham barra final (/termos-de-uso/), o que faz cada página virar
  // um index.html em sua própria pasta — o formato que as hospedagens
  // estáticas servem sem configuração extra.
  trailingSlash: true,
};

export default nextConfig;
