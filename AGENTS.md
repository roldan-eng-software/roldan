# Guia de Padrões (AGENTS)

## HTML
- Usar elementos semânticos (`header`, `main`, `section`, `footer`).
- Sempre declarar `lang="pt-BR"`, meta viewport e descrição.
- Incluir atributos `aria-*` e `alt` descritivos, além de `aria-live` onde houver feedback.
- Evitar divs vazias; usar listas para coleções e headings em ordem hierárquica.

## CSS
- Metodologia híbrida utilitária + BEM (`.section__element`).
- Centralizar tokens em `:root` com `--custom-properties` e manter compatibilidade com dark/light mode.
- Usar unidades fluidas (`clamp`, `%`, `vw`) para tipografia e espaçamentos.
- Media queries móveis em `css/responsive.css`, agrupadas por breakpoint.
- Componentes com `transition` suave e estados `:focus-visible` destacados.

## JavaScript
- Vanilla ES6+, módulos separados (`script.js` para lógica principal, `smooth-scroll.js` para navegação).
- Evitar poluir o escopo global; encapsular em funções/IIFE quando fizer sentido.
- Preferir `const` e `let`, usar `dataset` para configurar componentes.
- Garantir acessibilidade (gerenciar `aria-expanded`, `aria-current`, mensagens em `aria-live`).
- Quando possível, degradar graciosamente com `IntersectionObserver` + fallback.

## Assets
- Imagens otimizadas (SVG para logos, PNG para OG/Apple).
- Armazenar fontes em `assets/fonts/` e carregá-las via `@font-face` caso sejam locais.
- Usar `loading="lazy"` em imagens não críticas.

## Responsividade
- Desktop-first no `styles.css` + ajustes mobile/tablet em `responsive.css`.
- Click targets ≥ 44px, uso de `flex`/`grid` fluidos e `max-width: 100%` em imagens.
- Navegação mobile com `nav__toggle` e `aria-expanded` sincronizado.

## Performance
- Importar bibliotecas via CDN leve (ex: AOS) quando necessário.
- Ativar `prefers-reduced-motion` para reduzir animações.
- Adotar lazy loading, pré-conexões (`<link rel="preconnect">`) e manifesto PWA.
- Reutilizar componentes/utilitários antes de criar novas classes.
