import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos: o Next negocia AVIF/WebP conforme o navegador.
    formats: ["image/avif", "image/webp"],
    // Cache longo para os assets da marca, que raramente mudam.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        // O vídeo e o poster do hero são imutáveis: cache agressivo.
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
