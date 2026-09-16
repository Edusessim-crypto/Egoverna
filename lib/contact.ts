import { ufs } from "@/lib/site";

/**
 * Validação do formulário de contato.
 *
 * Roda no navegador: o site é exportado como HTML estático, sem servidor que
 * pudesse processar uma Server Action. As regras são as mesmas de antes.
 */

export type ContactField =
  | "nome"
  | "email"
  | "telefone"
  | "estado"
  | "cidade"
  | "cargo"
  | "mensagem"
  | "consentimento";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Devolve os valores para reidratar o formulário e montar os links. */
  values?: Partial<Record<ContactField, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
/** Aceita (51) 99549-5740, 51995495740, +55 51 99549-5740 etc. */
const PHONE_DIGITS = /^\d{10,13}$/;

export function validateContact(formData: FormData): ContactState {
  const read = (key: ContactField) => String(formData.get(key) ?? "").trim();

  const values = {
    nome: read("nome"),
    email: read("email"),
    telefone: read("telefone"),
    estado: read("estado"),
    cidade: read("cidade"),
    cargo: read("cargo"),
    mensagem: read("mensagem"),
  };

  // Honeypot: campo invisível que apenas bots preenchem. Responde como sucesso
  // para não sinalizar a proteção — sem valores, nenhum link é montado.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success", message: "Solicitação enviada." };
  }

  const errors: Partial<Record<ContactField, string>> = {};

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

  return {
    status: "success",
    message:
      "Solicitação enviada. Nossa equipe entrará em contato para agendar a demonstração.",
    values,
  };
}
