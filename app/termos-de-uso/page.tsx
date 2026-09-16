import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de utilização do site institucional do eGoverna e do conteúdo nele publicado.",
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: true, follow: true },
};

export default function TermosDeUso() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="setembro de 2026">
      <p>
        Estes termos regulam o acesso e a utilização do site institucional do{" "}
        {site.name}. Ao navegar por este site, você declara estar de acordo com
        as condições descritas abaixo.
      </p>

      <h2>Finalidade do site</h2>
      <p>
        Este site tem caráter informativo e institucional. Seu objetivo é
        apresentar o {site.name} e suas soluções para a gestão pública municipal
        e possibilitar o contato com nossa equipe comercial.
      </p>

      <h2>Conteúdo e propriedade intelectual</h2>
      <p>
        Todo o conteúdo publicado neste site — incluindo textos, imagens, vídeos,
        marcas, logotipos, layout e código — é de titularidade do {site.name} ou
        de seus licenciantes, sendo protegido pela legislação de propriedade
        intelectual. A reprodução, distribuição ou modificação sem autorização
        prévia e por escrito é vedada.
      </p>

      <h2>Uso adequado</h2>
      <p>Ao utilizar este site, você concorda em não:</p>
      <ul>
        <li>
          empregar meios automatizados que comprometam o funcionamento das
          páginas;
        </li>
        <li>tentar obter acesso não autorizado a sistemas ou dados;</li>
        <li>inserir informações falsas nos formulários disponibilizados;</li>
        <li>utilizar o conteúdo para finalidades ilícitas.</li>
      </ul>

      <h2>Informações apresentadas</h2>
      <p>
        As descrições de módulos e funcionalidades têm caráter informativo. O
        escopo efetivamente contratado, prazos e condições comerciais são
        definidos em proposta e instrumento contratual específicos.
      </p>

      <h2>Links para terceiros</h2>
      <p>
        Este site pode conter links para serviços de terceiros. O {site.name}{" "}
        não se responsabiliza pelo conteúdo, pelas políticas ou pelas práticas
        desses serviços.
      </p>

      <h2>Disponibilidade</h2>
      <p>
        Empregamos esforços para manter o site disponível e atualizado, podendo
        realizar manutenções, alterações ou suspensões de conteúdo a qualquer
        momento, sem aviso prévio.
      </p>

      <h2>Proteção de dados</h2>
      <p>
        O tratamento de dados pessoais coletados neste site é descrito na{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2>Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser encaminhadas pelo WhatsApp{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {site.whatsapp.display}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
