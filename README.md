# Barrio Fiesta Mexican Grill — Website

Premium marketing site for **Barrio Fiesta Mexican Grill**  
500 14th Street, Tuscaloosa, AL 35404 · (205) 737-7087

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Owner-friendly updates

| What | Where |
|------|--------|
| Phone, address, hours, Google rating, Order Online URL | `src/data/site-config.js` |
| Menu items & prices | `src/data/menu-data.js` |
| Review excerpts | `src/data/reviews.js` |
| Logo | `public/logo.svg`, `public/logo-mark.svg` |
| Photos | `public/images/` |
| Original menu PDF | Add `public/menu.pdf` |

### Order Online

Leave `orderOnlineUrl: ''` in `site-config.js` to hide the button.  
When DoorDash (or similar) is ready, paste the URL there.

### Google rating

Update `rating.stars` and `rating.count` in `site-config.js` to match Google Business.

## Pages

- `/` — Homepage (hero, food, margaritas, lunch, atmosphere, about, reviews, game day, visit, CTA)
- `/menu.html` — Full categorized menu with sticky/accordion navigation

## Notes

- Menu prices are editable placeholders aligned with lunch specials ~$8; confirm against the printed menu.
- Stock photography is used until restaurant photos are available — replace files in `public/images/` keeping the same filenames.
- Replace the SVG logo with the official Barrio Fiesta logo artwork when you have the file.
