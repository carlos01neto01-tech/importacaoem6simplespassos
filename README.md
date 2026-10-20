# Importação em 6 Simples Passos

Página estática para GitHub Pages, feita com HTML, CSS e JavaScript sem dependências de build.

## Publicar no GitHub Pages

1. Envie estes arquivos para a raiz do repositório.
2. Em **Settings → Pages**, publique a partir da branch principal e da pasta `/ (root)`.
3. O arquivo `CNAME` já registra o domínio que será usado pela página. Configure os registros DNS do domínio para o GitHub Pages no painel do registrador.

## Ativar os botões de compra

Quando o link do checkout estiver pronto, abra `script.js` e substitua o valor vazio de `CHECKOUT_URL` pelo endereço seguro de pagamento. Os dois botões da página passarão a abrir esse link.

## Arquivos

- `index.html`: conteúdo e estrutura da página.
- `styles.css`: layout responsivo, identidade visual e animações.
- `script.js`: animações de entrada e configuração do checkout.
- `assets/`: imagens do livro e de Cleber Boaventura.
