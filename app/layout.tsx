import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  // O subset "latin" já cobre os diacríticos do português (ã, ç, õ, ú);
  // incluir "latin-ext" só adicionaria um segundo arquivo sem necessidade.
  subsets: ["latin"],
  display: "swap",
  // Fonte variável: um único arquivo cobre 400–800, em vez de cinco.
  weight: "variable",
  // Ajusta a métrica da fonte de fallback e evita reflow ao trocar.
  adjustFontFallback: true,
});

const title = "eGoverna — Ecossistema inteligente para a gestão pública";
const description =
  "Tecnologia para todas as áreas da administração municipal. A eGoverna conecta tributos, finanças, RH, educação, saúde, dados e serviços ao cidadão em um único ecossistema integrado.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | eGoverna",
  },
  description,
  applicationName: site.name,
  keywords: [
    "gestão pública",
    "software para prefeituras",
    "sistema de gestão municipal",
    "govtech",
    "gestão tributária municipal",
    "nota fiscal eletrônica municipal",
    "administração municipal",
    "eGoverna",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/video/hero-poster.jpg",
        width: 1600,
        height: 918,
        alt: "eGoverna — ecossistema inteligente para a gestão pública",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/video/hero-poster.jpg"],
  },
  // Os ícones vêm de app/icon.png e app/apple-icon.png (convenção do App Router).
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101034" },
  ],
  colorScheme: "light",
};

/** Schema.org — apenas dados verificáveis. Sem reviews, preços ou métricas. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logos/egoverna-preto.png`,
      },
      description: site.description,
      slogan: site.tagline,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${site.whatsapp.e164}`,
          availableLanguage: ["Portuguese"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#software`,
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Ecossistema integrado de gestão pública municipal com módulos para tributos, finanças, recursos humanos, educação, saúde, assistência social, patrimônio, dados e serviços ao cidadão.",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <head>
        {/* O poster do hero é o elemento LCP: pré-carregado com prioridade alta. */}
        <link
          rel="preload"
          as="image"
          href="/video/hero-poster.jpg"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          // Conteúdo estático definido acima — sem entrada de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Ir para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
