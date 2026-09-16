import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o eGoverna coleta, utiliza e protege os dados pessoais informados através deste site, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="setembro de 2026">
      <p>
        Esta política descreve como a {site.name} trata os dados pessoais
        informados por meio deste site, em conformidade com a Lei nº 13.709/2018
        (Lei Geral de Proteção de Dados Pessoais — LGPD).
      </p>

      <h2>Quais dados coletamos</h2>
      <p>
        Coletamos apenas os dados que você informa voluntariamente no formulário
        de solicitação de demonstração:
      </p>
      <ul>
        <li>Nome completo</li>
        <li>E-mail</li>
        <li>Telefone</li>
        <li>Estado e cidade</li>
        <li>Cargo</li>
        <li>Mensagem, quando preenchida</li>
      </ul>

      <h2>Para que utilizamos os dados</h2>
      <p>
        Os dados informados são utilizados exclusivamente para retornar o
        contato solicitado, agendar a demonstração e responder às dúvidas
        apresentadas. Não comercializamos, alugamos ou cedemos dados pessoais a
        terceiros para fins publicitários.
      </p>

      <h2>Base legal</h2>
      <p>
        O tratamento é realizado com fundamento no consentimento fornecido no
        momento do envio do formulário e nos procedimentos preliminares
        relacionados a contrato, conforme o art. 7º da LGPD.
      </p>

      <h2>Compartilhamento</h2>
      <p>
        Os dados podem ser processados por prestadores de serviço que dão
        suporte à operação deste site e ao atendimento comercial, sempre
        limitados à finalidade descrita nesta política e submetidos a deveres de
        confidencialidade.
      </p>

      <h2>Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados
        pessoais contra acessos não autorizados e situações de destruição,
        perda ou alteração. Os dados são mantidos pelo tempo necessário ao
        atendimento da finalidade para a qual foram coletados ou pelo prazo
        exigido pela legislação aplicável.
      </p>

      <h2>Cookies e medição de audiência</h2>
      <p>
        Este site pode utilizar cookies e ferramentas de medição de audiência
        para entender como as páginas são navegadas e melhorar a experiência de
        uso. Você pode gerenciar ou bloquear cookies nas configurações do seu
        navegador.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:
      </p>
      <ul>
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>portabilidade;</li>
        <li>informação sobre compartilhamento;</li>
        <li>revogação do consentimento.</li>
      </ul>

      <h2>Como exercer seus direitos</h2>
      <p>
        Para exercer qualquer um dos direitos acima, entre em contato pelo
        WhatsApp{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {site.whatsapp.display}
        </a>
        .
      </p>

      <h2>Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças legais ou
        operacionais. A data da última atualização está indicada no início desta
        página.
      </p>
    </LegalLayout>
  );
}
