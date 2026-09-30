import { site } from '../data/site-config.js';
import { socialProofQuotes, reviews } from '../data/reviews.js';
import { featuredDishes } from '../data/menu-data.js';
import { starString } from './hours.js';
import { bindSharedChrome } from './shared.js';

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderHomeDynamic() {
  const ratingScore = document.querySelector('[data-rating-score]');
  const ratingCount = document.querySelector('[data-rating-count]');
  if (ratingScore) ratingScore.textContent = site.rating.stars.toFixed(1);
  if (ratingCount) {
    ratingCount.textContent = `${site.rating.count} ${site.rating.source} reviews`;
  }

  const proof = document.querySelector('[data-proof-quotes]');
  if (proof) {
    proof.innerHTML = socialProofQuotes
      .map(
        (q) => `
      <blockquote class="proof-quote">
        <div class="stars" aria-hidden="true">${starString(q.stars)}</div>
        <p>“${escapeHtml(q.text)}”</p>
      </blockquote>`
      )
      .join('');
  }

  const food = document.querySelector('[data-featured-dishes]');
  if (food) {
    food.innerHTML = featuredDishes
      .map(
        (d) => `
      <article class="food-card accent-${d.accent} reveal">
        <div class="food-card-media">
          <img src="${d.image}" alt="${escapeHtml(d.name)}" loading="lazy" width="800" height="600" />
        </div>
        <div class="food-card-body">
          <h3>${escapeHtml(d.name)}</h3>
          <p>${escapeHtml(d.desc)}</p>
        </div>
      </article>`
      )
      .join('');
  }

  const reviewGrid = document.querySelector('[data-review-grid]');
  if (reviewGrid) {
    reviewGrid.innerHTML = reviews
      .map(
        (r, i) => `
      <article class="review-card ${i === 0 || i === 3 ? 'span-2' : ''} reveal">
        <div class="stars" aria-hidden="true">${starString(r.stars)}</div>
        <p>“${escapeHtml(r.text)}”</p>
      </article>`
      )
      .join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeDynamic();
  bindSharedChrome('home');
});
