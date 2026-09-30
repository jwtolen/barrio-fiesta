import { menuCategories } from '../data/menu-data.js';
import { bindSharedChrome } from './shared.js';

function formatPrice(price) {
  if (price === '' || price == null) return '';
  const n = Number(price);
  if (Number.isFinite(n)) return `$${n.toFixed(2)}`;
  return String(price);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderMenu() {
  const nav = document.querySelector('[data-menu-nav]');
  const sections = document.querySelector('[data-menu-sections]');
  if (!nav || !sections) return;

  nav.innerHTML = menuCategories
    .map((c) => `<a href="#${c.id}">${escapeHtml(c.name)}</a>`)
    .join('');

  sections.innerHTML = menuCategories
    .map((cat, index) => {
      const items = cat.items
        .map(
          (item) => `
        <div class="menu-item">
          <h3>${escapeHtml(item.name)}</h3>
          <div class="price">${formatPrice(item.price)}</div>
          ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : ''}
        </div>`
        )
        .join('');

      return `
      <section class="menu-section ${index < 2 ? 'is-open' : ''}" id="${cat.id}">
        <button class="menu-section-toggle" type="button" aria-expanded="${index < 2}">
          <h2>${escapeHtml(cat.name)}</h2>
          <span class="chev" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>
        <div class="menu-section-body">
          ${cat.note ? `<p class="menu-note">${escapeHtml(cat.note)}</p>` : ''}
          ${items}
        </div>
      </section>`;
    })
    .join('');

  sections.querySelectorAll('.menu-section-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.menu-section');
      const open = section.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  const links = [...nav.querySelectorAll('a')];
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 }
  );
  menuCategories.forEach((c) => {
    const el = document.getElementById(c.id);
    if (el) obs.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindSharedChrome('menu');
  renderMenu();
});
