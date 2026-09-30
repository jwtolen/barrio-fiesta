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

function getStickyOffset() {
  const header = document.querySelector('.site-header');
  const menuNav = document.querySelector('[data-menu-nav]');
  const headerH = header ? header.getBoundingClientRect().height : 84;
  const navH = menuNav ? menuNav.getBoundingClientRect().height : 0;
  // Extra breathing room so the section title isn't flush under the chips
  return headerH + navH + 12;
}

function openSection(section) {
  if (!section) return;
  section.classList.add('is-open');
  const btn = section.querySelector('.menu-section-toggle');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

function scrollToSection(section) {
  if (!section) return;
  openSection(section);

  // Wait a frame so opened content doesn't shift the target mid-scroll
  requestAnimationFrame(() => {
    const top = window.scrollY + section.getBoundingClientRect().top - getStickyOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  });
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

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href')?.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (!section) return;

      event.preventDefault();
      links.forEach((l) => l.classList.toggle('is-active', l === link));
      scrollToSection(section);
      history.replaceState(null, '', `#${id}`);
    });
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
  );
  menuCategories.forEach((c) => {
    const el = document.getElementById(c.id);
    if (el) obs.observe(el);
  });

  // Deep link support: /menu.html#margaritas
  const hash = window.location.hash.slice(1);
  if (hash) {
    const target = document.getElementById(hash);
    if (target) {
      // Instant open, then scroll after layout
      openSection(target);
      setTimeout(() => scrollToSection(target), 50);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  bindSharedChrome('menu');
  renderMenu();
});
