"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

/**
 * Link de WhatsApp com evento de analytics.
 * Isolado em client component para manter as seções em torno como Server Components.
 */
export function WhatsAppLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click")}
      className={className}
    >
      {children}
    </a>
  );
}
