import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { modules, site, whatsappUrl } from "@/lib/site";

const solutionLinks = [
  { label: "Ecossistema eGoverna", href: "#ecossistema" },
  { label: "A plataforma", href: "#modulos" },
  { label: "Produtos especializados", href: "#modulos" },
  { label: "Por que eGoverna", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
  { label: "Help Desk", href: site.helpDesk },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative overflow-hidden bg-brand-950 pt-20">
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />

      <div className="shell relative">
        <div className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:gap-16">
          {/* Marca */}
          <div>
            <Logo
              variant="branco"
              className="h-[30px] w-auto object-contain object-left"
            />
            <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-relaxed text-white/60">
              Ecossistema inteligente para a gestão pública. O eGoverna é um
              software que conecta diferentes áreas da administração municipal
              em uma única plataforma digital.
            </p>

            <WhatsAppLink
              href={whatsappUrl}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-accent-500/60 hover:bg-white/5"
            >
              <MessageCircle
                aria-hidden="true"
                className="size-4 text-accent-500"
                strokeWidth={1.9}
              />
              {site.whatsapp.display}
            </WhatsAppLink>
          </div>

          {/* Colunas de navegação */}
          <div className="grid gap-10 sm:grid-cols-2">
            <FooterColumn title="Soluções" links={solutionLinks} />

            <nav aria-labelledby="footer-modulos">
              <h2
                id="footer-modulos"
                className="text-[0.8125rem] font-bold uppercase tracking-[0.13em] text-white/40"
              >
                Módulos
              </h2>
              <ul className="mt-5 space-y-3">
                {modules.slice(0, 6).map((module) => (
                  <li key={module.id}>
                    <a
                      href="#modulos"
                      className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {module.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#modulos"
                    className="text-[0.9375rem] font-semibold text-accent-500 transition-opacity duration-200 hover:opacity-80"
                  >
                    Ver todos os módulos
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-white/45">
            © {year} {site.name} — Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <li>
              <a
                href="/politica-de-privacidade"
                className="text-[0.8125rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/termos-de-uso"
                className="text-[0.8125rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  const id = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <nav aria-labelledby={id}>
      <h2
        id={id}
        className="text-[0.8125rem] font-bold uppercase tracking-[0.13em] text-white/40"
      >
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
