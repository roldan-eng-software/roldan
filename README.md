# Portfólio Landing Page

Landing page institucional para destacar projetos, habilidades e contato de um desenvolvedor. Feita 100% em HTML5, CSS3 e JavaScript vanilla, com foco em performance, acessibilidade e fácil customização.

## Tecnologias

- HTML5 semântico + SEO e Open Graph
- CSS3 com Custom Properties, Flexbox e Grid
- JavaScript ES6+ (fetch, IntersectionObserver, localStorage)
- AOS.js para animações on-scroll (CDN)
- FormSubmit.co para envio de formulário sem backend

## Como rodar localmente

```bash
# clonar o repositório
git clone https://github.com/roldan-eng-software/roldan-eng-software.github.io.git
cd roldan-eng-software.github.io

# servir com qualquer servidor estático
npx serve .
# ou
python -m http.server 8080
```

Abra `http://localhost:8080` no navegador para visualizar a landing page.

## Estrutura do projeto

- `index.html` – Estrutura principal com seções de hero, sobre, projetos, skills e contato.
- `css/styles.css` – Tokens de design, reset, componentes e utilitários.
- `css/responsive.css` – Media queries para 320px, 768px e 1024px.
- `js/script.js` – Navegação mobile, dark mode, fetch de projetos, formulário, clipboard.
- `js/smooth-scroll.js` – Scroll suave, destaque de seção ativa e navegação acessível.
- `assets/data/projects.json` – Fonte dos cards de projetos.
- `assets/img/` – Favicons, avatar e placeholders.
- `_config.yml` – Configuração Jekyll/GitHub Pages.
- `.coderabbit.yaml` – Guia de revisão automática em português.

## Customização

1. **Informações pessoais**: Atualize textos em `index.html` (nome, bio, redes, CTA).
2. **Cores/tema**: Ajuste variáveis em `css/styles.css` (`:root`).
3. **Projetos**: Edite `assets/data/projects.json` com suas informações (imagem, links, tags e categoria para filtros).
4. **Fonte/tipografia**: Troque o link do Google Fonts no `<head>`.
5. **Logos/ícones**: Substitua os arquivos em `assets/img/` mantendo os nomes.

## Adicionar novos projetos

- Insira um novo objeto no array `projects` no JSON, seguindo o formato:

```json
{
  "id": 4,
  "title": "Nome",
  "description": "Descrição",
  "image": "assets/img/novo-projeto.png",
  "tags": ["tech1", "tech2"],
  "category": "frontend",
  "link": "https://github.com/usuario/repositorio",
  "demo": "https://demo.com"
}
```

- Categorias aceitas: `frontend`, `backend`, `devops` (ou `all`).

## Deploy no GitHub Pages

1. Instale Git e Node (opcional para servir localmente).
2. `git init && git add . && git commit -m "Initial commit"`.
3. Crie o repositório `seu-usuario.github.io` e conecte o remoto.
4. `git push -u origin main`.
5. Em *Settings → Pages*, selecione branch `main` e pasta `/ (root)`.
6. Aguarde a publicação em `https://seu-usuario.github.io`.

## Screenshots

Inclua capturas em `assets/img/screenshots/` e referencie aqui:

- `![Hero](assets/img/screenshots/hero.png)`
- `![Projetos](assets/img/screenshots/projects.png)`

## Licença / Uso

Livre para uso pessoal e comercial. Contribuições são bem-vindas via pull requests.
