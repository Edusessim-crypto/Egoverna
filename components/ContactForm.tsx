"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  Mail,
} from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import {
  ufs,
  site,
  contactWhatsAppUrl,
  contactGmailUrl,
  contactMailtoUrl,
} from "@/lib/site";
import { track } from "@/lib/analytics";

const initialState: ContactState = { status: "idle" };

const fieldBase =
  "h-12 w-full rounded-xl border bg-white px-4 text-[0.9375rem] text-ink-800 outline-none transition-colors duration-200 placeholder:text-ink-300 focus:border-brand-600 focus:ring-4 focus:ring-brand-700/10";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 text-base font-semibold text-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-800 hover:shadow-[0_16px_38px_-16px_rgba(49,47,129,0.8)] disabled:opacity-70 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 aria-hidden="true" className="size-[18px] animate-spin" />
          Enviando…
        </>
      ) : (
        <>
          Solicitar demonstração
          <ArrowRight
            aria-hidden="true"
            className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const [startedAt] = useState(() => Date.now());
  const startedRef = useRef(false);
  const uid = useId();
  const statusRef = useRef<HTMLDivElement>(null);

  // Dispara form_start uma única vez, na primeira interação real.
  function handleFirstInteraction() {
    if (startedRef.current) return;
    startedRef.current = true;
    track("form_start");
  }

  useEffect(() => {
    if (state.status === "success") track("form_submit", { result: "success" });
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state.status]);

  // Ao enviar com sucesso, o WhatsApp abre automaticamente com as respostas.
  // O e-mail fica como segundo botão: navegadores bloqueiam duas abas de uma vez.
  useEffect(() => {
    if (state.status !== "success" || !state.values?.nome) return;
    const url = contactWhatsAppUrl(state.values);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    track("whatsapp_click", { source: "form", blocked: win ? "no" : "yes" });
  }, [state.status, state.values]);

  const err = state.errors ?? {};
  const val = state.values ?? {};

  /** Classe de borda conforme o estado de validação do campo. */
  const border = (field: keyof typeof err) =>
    err[field] ? "border-red-400" : "border-ink-200";

  if (state.status === "success") {
    const values = state.values;
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-[28px] border border-ink-100 bg-white p-10 text-center shadow-[0_24px_60px_-40px_rgba(16,16,52,0.4)]"
      >
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 aria-hidden="true" className="size-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-6 text-xl font-extrabold text-ink-900">
          Solicitação enviada
        </h3>
        <p className="mx-auto mt-3 max-w-[30rem] text-[0.9375rem] leading-relaxed text-ink-500">
          {state.message}
        </p>

        {values?.nome ? (
          <div className="mt-8 border-t border-ink-100 pt-7">
            <p className="mx-auto max-w-[30rem] text-[0.875rem] leading-relaxed text-ink-500">
              Suas respostas já foram organizadas em uma mensagem. Envie também
              por um destes canais para falar com a equipe agora mesmo:
            </p>

            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={contactWhatsAppUrl(values)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("whatsapp_click", { source: "form_success" })
                }
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-brand-700 px-6 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:bg-brand-800"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-[18px]"
                  strokeWidth={1.9}
                />
                Enviar no WhatsApp
              </a>

              <a
                href={contactGmailUrl(values)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("email_click", { source: "form_success" })}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-ink-200 px-6 text-[0.9375rem] font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <Mail aria-hidden="true" className="size-[18px]" strokeWidth={1.9} />
                Enviar por e-mail
              </a>
            </div>

            <p className="mt-4 text-[0.8125rem] text-ink-400">
              Prefere seu aplicativo de e-mail?{" "}
              <a
                href={contactMailtoUrl(values)}
                onClick={() => track("email_click", { source: "form_mailto" })}
                className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
              >
                Abrir com {site.email}
              </a>
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onFocusCapture={handleFirstInteraction}
      noValidate
      className="rounded-[28px] border border-ink-100 bg-white p-7 shadow-[0_24px_60px_-42px_rgba(16,16,52,0.42)] sm:p-9"
    >
      <input type="hidden" name="startedAt" value={startedAt} />

      {/* Honeypot — invisível para pessoas, preenchido por bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0">
        <label htmlFor={`${uid}-website`}>Não preencha este campo</label>
        <input
          id={`${uid}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm font-medium text-red-700"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 size-[18px] flex-none"
          />
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${uid}-nome`}
          name="nome"
          label="Nome completo"
          autoComplete="name"
          placeholder="Como podemos chamar você?"
          error={err.nome}
          defaultValue={val.nome}
          className={`${fieldBase} ${border("nome")}`}
          wrapperClassName="sm:col-span-2"
        />

        <Field
          id={`${uid}-email`}
          name="email"
          type="email"
          label="E-mail"
          autoComplete="email"
          placeholder="nome@municipio.gov.br"
          error={err.email}
          defaultValue={val.email}
          className={`${fieldBase} ${border("email")}`}
        />

        <Field
          id={`${uid}-telefone`}
          name="telefone"
          type="tel"
          label="Telefone"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          error={err.telefone}
          defaultValue={val.telefone}
          className={`${fieldBase} ${border("telefone")}`}
        />

        {/* Estado */}
        <div>
          <label
            htmlFor={`${uid}-estado`}
            className="mb-2 block text-[0.8125rem] font-semibold text-ink-700"
          >
            Estado
          </label>
          <select
            id={`${uid}-estado`}
            name="estado"
            defaultValue={val.estado ?? ""}
            aria-invalid={err.estado ? true : undefined}
            aria-describedby={err.estado ? `${uid}-estado-erro` : undefined}
            className={`${fieldBase} ${border("estado")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%237e8398%22 stroke-width=%222%22 stroke-linecap=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          >
            <option value="">Selecione</option>
            {ufs.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
          <FieldError id={`${uid}-estado-erro`} message={err.estado} />
        </div>

        <Field
          id={`${uid}-cidade`}
          name="cidade"
          label="Cidade"
          autoComplete="address-level2"
          placeholder="Município"
          error={err.cidade}
          defaultValue={val.cidade}
          className={`${fieldBase} ${border("cidade")}`}
        />

        <Field
          id={`${uid}-cargo`}
          name="cargo"
          label="Cargo"
          autoComplete="organization-title"
          placeholder="Sua função na administração"
          error={err.cargo}
          defaultValue={val.cargo}
          className={`${fieldBase} ${border("cargo")}`}
          wrapperClassName="sm:col-span-2"
        />

        {/* Mensagem */}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${uid}-mensagem`}
            className="mb-2 block text-[0.8125rem] font-semibold text-ink-700"
          >
            Mensagem{" "}
            <span className="font-normal text-ink-400">(opcional)</span>
          </label>
          <textarea
            id={`${uid}-mensagem`}
            name="mensagem"
            rows={4}
            defaultValue={val.mensagem}
            placeholder="Conte quais áreas da gestão você quer conhecer."
            className={`${fieldBase} h-auto resize-y border-ink-200 py-3.5 leading-relaxed`}
          />
        </div>
      </div>

      {/* Consentimento LGPD */}
      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consentimento"
            aria-invalid={err.consentimento ? true : undefined}
            aria-describedby={
              err.consentimento ? `${uid}-consentimento-erro` : undefined
            }
            className={`mt-0.5 size-[18px] flex-none cursor-pointer rounded border-2 accent-brand-700 ${
              err.consentimento ? "outline outline-2 outline-red-400" : ""
            }`}
          />
          <span className="text-[0.8125rem] leading-relaxed text-ink-500">
            Ao enviar seus dados, você concorda com o tratamento das informações
            conforme nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
            >
              Política de Privacidade
            </a>
            .
          </span>
        </label>
        <FieldError
          id={`${uid}-consentimento-erro`}
          message={err.consentimento}
        />
      </div>

      <div className="mt-8">
        <SubmitButton />
      </div>
    </form>
  );
}

/* --------------------------------- Campos -------------------------------- */

function Field({
  id,
  name,
  label,
  error,
  className,
  wrapperClassName = "",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  className: string;
  wrapperClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.8125rem] font-semibold text-ink-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-erro` : undefined}
        className={className}
        {...rest}
      />
      <FieldError id={`${id}-erro`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[0.75rem] font-medium text-red-600">
      {message}
    </p>
  );
}
