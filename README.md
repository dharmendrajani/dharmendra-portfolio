# Portfolio Website

A responsive personal portfolio built with plain HTML, CSS, and a touch of vanilla JavaScript. No build tools, frameworks, or installs required.

## Files

- `index.html` — page structure and content
- `style.css` — all styling, layout, and responsive rules
- `script.js` — mobile nav, scroll reveal, copy-email button, footer year

## Run it

Just open `index.html` in a browser. For live-reload while editing, you can also serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Customize

- **Name & tagline** — edit the hero section in `index.html` (`.hero-title`, `.hero-tagline`).
- **About** — swap the bio paragraphs and the three stat rows.
- **Skills** — edit the list items in `#skills`; the `--level` inline style (e.g. `style="--level:85%"`) controls each skill's progress bar width.
- **Projects** — replace the three `.project-card` blocks with your own title, description, tags, and links.
- **Contact** — update the email, GitHub, and LinkedIn values in `#contact`.
- **Colors / fonts** — all defined as CSS variables at the top of `style.css` under `:root`.

## Notes

- Fully responsive, with a slide-in mobile menu under 720px.
- Respects `prefers-reduced-motion` and includes visible focus states for keyboard navigation.
- The "copy email" button uses the Clipboard API with a graceful fallback if it's unavailable.
