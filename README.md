# Site institucional eGoverna

Site institucional da eGoverna — ecossistema inteligente para a gestão pública.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide

---

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start       # servir o build
npm run lint
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. **Todas são opcionais** — sem elas o
site funciona normalmente e nenhum script de terceiros é carregado.

| Variável | Para que serve |
| --- | --- |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, sitemap, Open Graph) |
| `CONTACT_WEBHOOK_URL` | Destino do formulário (ver abaixo) |

---

## Formulário de contato

O envio é processado por uma Server Action em
[`app/actions/contact.ts`](app/actions/contact.ts), com validação no servidor,
honeypot e verificação de tempo contra automação.

**Sem `CONTACT_WEBHOOK_URL`**, as solicitações são apenas registradas no log do
servidor — úteis para teste, mas **não chegam a ninguém**. Antes de ir ao ar,
defina a variável com um endpoint que receba o JSON:

```json
{
  "nome": "...", "email": "...", "telefone": "...",
  "estado": "RS", "cidade": "...", "cargo": "...", "mensagem": "...",
  "origem": "site-egoverna", "enviadoEm": "2026-09-15T12:00:00.000Z"
}
```

Serve qualquer destino que aceite POST: CRM, Zapier/Make, n8n, ou uma rota
própria que dispare e-mail.

---

## Conteúdo

Textos, módulos, benefícios e valores ficam centralizados em
[`lib/site.ts`](lib/site.ts). Para adicionar ou editar um módulo, basta alterar
o array `modules` — a sidebar, os chips do mobile e o painel de conteúdo são
renderizados a partir dele, sem tocar no JSX.

Todo o conteúdo vem do site oficial (egoverna.com.br) ou do briefing. **Nenhuma
métrica, cliente, certificação ou dado de contato foi inventado.** O único
contato publicado é o WhatsApp que já constava no site atual.

## Assets da marca

| Arquivo | Origem |
| --- | --- |
| `public/logos/egoverna-branco.png` | pasta `/Logos` do projeto |
| `public/logos/egoverna-preto.png` | pasta `/Logos` do projeto |
| `public/logos/egoverna-simbolo.png` | símbolo oficial (site atual) |
| `public/video/hero-cidade.mp4` | vídeo original do hero do site atual |
| `public/video/hero-poster.jpg` | frame extraído do próprio vídeo |
| `public/images/sistema-egoverna.webp` | screenshot **real** do sistema |
| `public/images/equipe-egoverna.webp` | imagem oficial de equipe |

A logo nunca é recriada em CSS ou texto: o componente
[`components/ui/Logo.tsx`](components/ui/Logo.tsx) exibe sempre o arquivo
oficial, com proporção preservada. A troca branca ↔ preta no header é um
crossfade de opacidade entre os dois arquivos.

### Vídeo em WebM (opcional)

O MP4 tem 2,7 MB. Para servir também WebM (~30% menor), gere o arquivo e
adicione o `<source>` conforme o comentário em
[`components/HeroVideo.tsx`](components/HeroVideo.tsx):

```bash
ffmpeg -i public/video/hero-cidade.mp4 -c:v libvpx-vp9 -crf 34 -b:v 0 -an \
  public/video/hero-cidade.webm
```

---

## Analytics

Os eventos estão prontos em [`lib/analytics.ts`](lib/analytics.ts) e são
disparados no `dataLayer` (e no `gtag`, quando houver GA4):

`click_contact` · `click_demo` · `form_start` · `form_submit` ·
`module_view` · `whatsapp_click`

> `phone_click` e `email_click` estão definidos no tipo, mas não são disparados:
> o site não publica telefone fixo nem e-mail, porque esses dados não constam
> nas fontes oficiais. Quando forem fornecidos, basta chamar `track()` nos links.

---

## Acessibilidade e performance

Verificados no build de produção:

- **Lighthouse:** Performance 100 · Acessibilidade 100 · SEO 100
- **Core Web Vitals:** LCP 1,7s · CLS 0,002 · TBT 20ms
- **axe-core:** 0 violações WCAG 2.1 AA (home, páginas legais, formulário com
  erros e menu mobile aberto)
- Sem overflow horizontal em 1920/1440/1280/1024/768/430/390/360px
- Navegação por teclado nos módulos (padrão ARIA tablist) e no menu
- `prefers-reduced-motion` desativa o vídeo e as animações de entrada
- Sem JavaScript, todo o conteúdo continua legível no HTML

Notas de manutenção:

- `--color-ink-400` é o tom mais claro admitido em **texto** (4.96:1). Tons mais
  claros (`ink-300`) servem só para bordas, ícones decorativos e placeholders.
- O amarelo da marca não é usado em texto pequeno sobre fundo claro — não atinge
  4.5:1. Ele aparece como elemento gráfico, ou como texto sobre azul profundo
  (12:1).

---

## Páginas

- `/` — home
- `/politica-de-privacidade` — LGPD
- `/termos-de-uso`
- `/sitemap.xml`, `/robots.txt` — gerados dinamicamente

As páginas legais trazem o texto padrão de LGPD e uso do site. **Revise-as com o
jurídico** e complete os dados societários (razão social, CNPJ, endereço, e-mail
do encarregado de dados) — deixados de fora por não constarem em nenhuma fonte
oficial disponível.
