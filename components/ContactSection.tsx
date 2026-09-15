import { MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappUrl } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contato" className="relative bg-ink-50/60 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines-light opacity-60 [mask-image:radial-gradient(70%_60%_at_30%_30%,#000,transparent)]"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:pt-4">
            <Reveal>
              <p className="eyebrow text-brand-700">Contato</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(1.75rem,3.6vw,2.75rem)] font-extrabold leading-[1.1] text-ink-900">
                Gestão pública inteligente para um futuro mais eficiente e
                transparente.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-[1.0625rem] font-semibold text-brand-700">
                Agende uma demonstração gratuita.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <ul className="mt-10 space-y-4 border-t border-ink-200/70 pt-8">
                <li className="flex items-start gap-3.5">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-[18px] flex-none text-brand-700"
                    strokeWidth={1.75}
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-600">
                    Seus dados são utilizados apenas para o contato comercial
                    solicitado.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-[18px] flex-none text-brand-700"
                    strokeWidth={1.75}
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-600">
                    Nossa equipe retorna para alinhar a melhor data da
                    apresentação.
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-8 rounded-2xl border border-ink-200/70 bg-white p-5">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-400">
                  Prefere falar agora?
                </p>
                <WhatsAppLink
                  href={whatsappUrl}
                  className="group mt-3 inline-flex items-center gap-2.5 text-[1.0625rem] font-bold text-ink-900 transition-colors duration-200 hover:text-brand-700"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-white">
                    <MessageCircle
                      aria-hidden="true"
                      className="size-[18px]"
                      strokeWidth={1.9}
                    />
                  </span>
                  {site.whatsapp.display}
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="scroll-mt-28">
            <div id="formulario">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
