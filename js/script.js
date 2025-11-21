const doc = document;
const navToggle = doc.querySelector('.nav__toggle');
const navLinks = doc.querySelector('.nav__links');
const themeToggle = doc.querySelector('.theme-toggle');
const scrollTopBtn = doc.querySelector('.scroll-top');
const yearEl = doc.getElementById('year');
const projectsGrid = doc.getElementById('projects-grid');
const chips = doc.querySelectorAll('.chip');
const copyEmailBtn = doc.querySelector('.copy-email');
const contactForm = doc.getElementById('contact-form');
const formStatus = doc.querySelector('.form-status');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function toggleMenu() {
  if (!navToggle || !navLinks) return;
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('is-open');
}

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
}

function initMenu() {
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', toggleMenu);
  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', closeMenu)
  );
}

function applyTheme(mode) {
  if (mode === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  const theme = stored || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(theme === 'light' ? 'light' : 'dark');
  themeToggle?.setAttribute('aria-pressed', theme === 'light');
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  const theme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  themeToggle?.setAttribute('aria-pressed', isLight);
}

function handleScrollTop() {
  if (!scrollTopBtn) return;
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('is-visible');
  } else {
    scrollTopBtn.classList.remove('is-visible');
  }
}

function initScrollTop() {
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('scroll', handleScrollTop);
}

async function fetchProjects() {
  try {
    const res = await fetch('assets/data/projects.json');
    if (!res.ok) throw new Error('Erro ao carregar projetos');
    const data = await res.json();
    renderProjects(data.projects);
  } catch (error) {
    if (projectsGrid) {
      projectsGrid.innerHTML = `<p class="error">${error.message}</p>`;
    }
  }
}

function projectCardTemplate(project) {
  return `
    <article class="project-card" data-category="${project.category || 'frontend'}">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="project-card__body">
        <div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <div class="project-card__tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-card__links">
          <a class="btn btn-secondary" href="${project.link}" target="_blank" rel="noopener">Código</a>
          <a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noopener">Demo</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(projects) {
  if (!projectsGrid) return;
  if (!projects?.length) {
    projectsGrid.innerHTML = '<p>Nenhum projeto encontrado.</p>';
    return;
  }
  projectsGrid.innerHTML = projects.map(projectCardTemplate).join('');
}

function filterProjects(category) {
  if (!projectsGrid) return;
  const cards = projectsGrid.querySelectorAll('.project-card');
  cards.forEach((card) => {
    const cardCategory = card.dataset.category ?? 'frontend';
    const shouldShow = category === 'all' || cardCategory === category;
    card.style.display = shouldShow ? 'flex' : 'none';
  });
}

function initFilters() {
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      filterProjects(chip.dataset.filter);
    });
  });
}

function copyEmail() {
  const email = copyEmailBtn?.dataset.email;
  if (!email) return;
  navigator.clipboard.writeText(email).then(() => {
    copyEmailBtn.textContent = 'Copiado!';
    setTimeout(() => (copyEmailBtn.textContent = 'Copiar e-mail'), 2000);
  });
}

function initCopyBtn() {
  copyEmailBtn?.addEventListener('click', copyEmail);
}

function validateForm(event) {
  if (!contactForm?.checkValidity()) {
    event.preventDefault();
    formStatus.textContent = 'Preencha todos os campos corretamente.';
  } else {
    formStatus.textContent = 'Enviando...';
  }
}

function initForm() {
  contactForm?.addEventListener('submit', validateForm);
}

function initAOS() {
  if (window.AOS) {
    window.AOS.init({
      once: true,
      offset: 120,
      duration: 700,
      easing: 'ease-out-cubic'
    });
  }
}

function initIntersectionAnimations() {
  const els = doc.querySelectorAll('[data-animate]');
  if (!('IntersectionObserver' in window) || !els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  els.forEach((el) => observer.observe(el));
}

function init() {
  setYear();
  initMenu();
  initTheme();
  themeToggle?.addEventListener('click', toggleTheme);
  initScrollTop();
  fetchProjects();
  initFilters();
  initCopyBtn();
  initForm();
  initAOS();
  initIntersectionAnimations();
}

document.addEventListener('DOMContentLoaded', init);
