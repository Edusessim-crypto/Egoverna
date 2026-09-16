/**
 * Camada fina de analytics.
 *
 * Nenhum ID é embutido no código: os provedores só são carregados quando as
 * variáveis de ambiente correspondentes existirem (ver .env.example).
 * Enquanto não houver IDs configurados, `track` apenas alimenta o dataLayer,
 * o que é inofensivo e mantém os eventos prontos para quando o GTM entrar.
 */

export type AnalyticsEvent =
  | "click_contact"
  | "click_demo"
  | "form_start"
  | "form_submit"
  | "module_view"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "app_download";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });

  window.gtag?.("event", event, params);
}
