# Ratinha do Desconto — Landing Page

Landing page estática e mobile-first para levar visitantes ao grupo oficial da Ratinha do Desconto no WhatsApp.

## Arquivos do repositório

```text
ratinha-do-desconto-lp/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── ratinha-do-desconto.png
├── .gitignore
└── README.md
```

O `index.html` deve ficar na raiz do repositório. Os caminhos da imagem, do CSS e do JavaScript já estão configurados para essa estrutura.

## Enviar ao GitHub

1. Crie um repositório vazio no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório, incluindo a pasta `assets`.
3. Confira se `index.html` aparece logo na página inicial do repositório, e não dentro de uma pasta adicional.

Se usar o arquivo ZIP, extraia-o antes de enviar. Não publique o ZIP como único arquivo do repositório.

## Publicar na Vercel

1. Na Vercel, clique em **Add New → Project** e importe o repositório do GitHub.
2. Em **Framework Preset**, escolha **Other**.
3. Deixe **Build Command** vazio. Como os arquivos estão na raiz, não é necessário configurar **Output Directory**.
4. Clique em **Deploy**.

## Alterações rápidas

- Link do grupo: procure por `https://chat.whatsapp.com/` no `index.html`.
- Vagas iniciais: altere `INITIAL_SPOTS` no `script.js`.
- Intervalo entre reduções: altere `UPDATE_SECONDS` no `script.js`.
- Timer de oferta: altere `OFFER_SECONDS` no `script.js` (atualmente 9 minutos).
- Imagem da mascote: substitua `assets/ratinha-do-desconto.png` mantendo o mesmo nome.

Os contadores são ilustrativos e começam em 7 vagas e 9 minutos por sessão do navegador. As vagas diminuem a cada 10 segundos até chegar a 1; o timer de oferta reinicia a cada 9 minutos. Eles não consultam a lotação real nem o horário das mensagens no WhatsApp.

Não há dependências, instalação ou etapa de build.
