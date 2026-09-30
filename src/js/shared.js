import { site } from '../data/site-config.js';
import { getTodayHours } from './hours.js';

export function bindSharedChrome(active = 'home') {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.nav-panel');

  if (panel) panel.removeAttribute('hidden');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        panel.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll(`[data-nav="${active}"]`).forEach((el) => {
    el.classList.add('is-active');
  });

  document.querySelectorAll('[data-order-online]').forEach((el) => {
    el.classList.remove('hidden');
    el.setAttribute('href', site.orderOnlineUrl || site.orderPageUrl || '/order.html');
  });

  document.querySelectorAll('[data-phone-display]').forEach((el) => {
    el.textContent = site.phone.display;
  });
  document.querySelectorAll('[data-phone-href]').forEach((el) => {
    el.setAttribute('href', `tel:${site.phone.tel}`);
  });
  document.querySelectorAll('[data-directions]').forEach((el) => {
    el.setAttribute('href', site.maps.directions);
  });
  document.querySelectorAll('[data-reviews-url]').forEach((el) => {
    el.setAttribute('href', site.rating.reviewsUrl);
  });
  document.querySelectorAll('[data-facebook]').forEach((el) => {
    el.setAttribute('href', site.social.facebook);
  });

  const today = getTodayHours(site);
  document.querySelectorAll('[data-hours-today]').forEach((el) => {
    el.textContent = today.openNow
      ? `Open today · ${today.display}`
      : `Hours today · ${today.display}`;
    el.classList.toggle('is-closed', !today.openNow);
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  document.body.classList.add('has-mobile-bar');
}
