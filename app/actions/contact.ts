"use server";

import { ufs } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  /** Devolve os valores para reidratar o formulário em caso de erro. */
  values?: Partial<Record<Field, string>>;
};

type Field =
  | "nome"
  | "email"
  | "telefone"
  | "estado"
  | "cidade"
  | "cargo"
  | "mensagem"
  | "consentimento";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
/** Aceita (51) 99549-5740, 51995495740, +55 51 99549-5740 etc. */
const PHONE_DIGITS = /^\d{10,13}$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (key: Field) => String(formData.get(key) ?? "").trim();

  const values = {
    nome: read("nome"),
    email: read("email"),
    telefone: read("telefone"),
    estado: read("estado"),
    cidade: read("cidade"),
    cargo: read("cargo"),
    mensagem: read("mensagem"),
  };

  // Honeypot: campo invisível que apenas bots preenchem.
  if (String(formData.get("website") ?? "").length > 0) {
    // Responde como sucesso para não sinalizar a proteção ao bot — sem valores,
    // para que nenhum link de WhatsApp ou e-mail seja montado.
    return { status: "success", message: "Solicitação enviada." };
  }

  const errors: Partial<Record<Field, string>> = {};

  if (values.nome.length < 3) errors.nome = "Informe seu nome completo.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Informe um e-mail válido.";
  if (!PHONE_DIGITS.test(values.telefone.replace(/\D/g, "")))
    errors.telefone = "Informe um telefone com DDD.";
  if (!(ufs as readonly string[]).includes(values.estado))
    errors.estado = "Selecione o estado.";
  if (values.cidade.length < 2) errors.cidade = "Informe a cidade.";
  if (values.cargo.length < 2) errors.cargo = "Informe seu cargo.";
  if (formData.get("consentimento") !== "on")
    errors.consentimento = "É necessário aceitar o tratamento dos dados.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos destacados.",
      errors,
      values,
    };
  }

  // Descarta envios instantâneos — típicos de automação. Verificado só depois
  // da validação, para que uma pessoa que erre um campo veja o erro do campo,
  // e não uma mensagem de tempo que não a ajuda a corrigir nada.
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (startedAt > 0 && Date.now() - startedAt < 2000) {
    return {
      status: "error",
      message:
        "Não foi possível validar o envio. Aguarde um instante e tente novamente.",
      values,
    };
  }

  const payload = {
    ...values,
    origem: "site-egoverna",
    enviadoEm: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Webhook respondeu ${response.status}`);
    } catch (error) {
      console.error("[contato] Falha ao encaminhar solicitação:", error);
      return {
        status: "error",
        message:
          "Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.",
        values,
      };
    }
  } else {
    // Sem webhook configurado, a solicitação fica registrada no log do servidor.
    console.info("[contato] Nova solicitação de demonstração:", payload);
  }

  return {
    status: "success",
    message:
      "Solicitação enviada. Nossa equipe entrará em contato para agendar a demonstração.",
    // Os valores voltam para o cliente montar a mensagem do WhatsApp e do e-mail.
    values,
  };
}
