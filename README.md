# Heltedysten.dk

Static GitHub Pages website using the Landslejr 2026 design guide colours, Work Sans and provided logo assets.

## Files

- `index.html` — page content
- `styles.css` — responsive styling
- `script.js` — mobile menu and countdown
- `CNAME` — custom domain for GitHub Pages
- `assets/` — logo files used on the site

## Edit before publishing

1. Replace placeholder text in the guide, practical info, FAQ and contact sections.
2. Update the event date in `index.html` by changing `data-event-date`.
3. Keep `CNAME` as `heltedysten.dk` if this is the final custom domain.

## Deploy on GitHub Pages

1. Create a public GitHub repository, for example `heltedysten.dk`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Set source to **Deploy from a branch**.
5. Choose branch `main` and folder `/root`.
6. Set custom domain to `heltedysten.dk`.
7. Configure DNS at your domain provider using GitHub Pages' current DNS instructions.
