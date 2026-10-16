# Monsoon & Mug — Premium Café Website

A responsive, static portfolio website concept for a fictional Kolkata café. Built with semantic HTML, CSS and vanilla JavaScript; no build step, backend, keys or paid services are required.

## Preview locally

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. If Python is unavailable, use any static file server or open `index.html` directly (the local server is preferred for consistent image and anchor behavior).

## Publish the portfolio demo

**GitHub Pages** is a simple free option for a personal portfolio demo:

1. Put the project in a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select the branch and `/(root)` folder.
4. Save and open the Pages URL shown there after the first deployment completes.

The pages in this project are static and need no build command. Check GitHub's current terms for your specific use. Keep this version clearly identified as a fictional portfolio demo; before using it as the public website for a real café, confirm that the host's plan permits commercial/business use and use the client's approved hosting and domain. Vercel can also deploy the static files with no build command and `.` as the output directory, but check the current plan terms before commercial use.

## Make it a real client site

1. **Brand:** Replace `Monsoon & Mug`, the tagline and the café copy in `index.html`. Update the page `<title>`, description and footer too.
2. **Menu and prices:** Edit the six menu cards in `index.html`. Update both the visible rupee prices and the short descriptions; the current prices are fictional examples.
3. **Photography:** Replace the files in `images/` or change the matching `src` paths in `index.html`. Keep descriptive alt text, use images the client has permission to use, and update each `data-fallback` path. Images are local so the site does not depend on a photo service at runtime.
4. **Address and directions:** Replace the sample address, map query and the illustrative SVG map in the Visit section. The current pin is explicitly fictional and the illustration is not geographically accurate.
5. **Hours and contact:** Update the Visit section and footer hours together. Replace the sample `tel:` value and WhatsApp placeholder only with contact details the client has approved. Use the client's real country code and digits in the `wa.me` URL.
6. **Demo notice:** Keep the fictional/demo wording until all information is verified and the client approves the finished site. The current address, hours, menu prices and phone number are placeholders.
7. **Visual styling:** Adjust the palette and responsive rules in `style.css`. The palette is defined near the top as CSS custom properties.

No social profiles, reviews, awards or business credentials are invented in this demo.

## Files

- `index.html` — page content, landmarks, navigation and inline illustrative map
- `style.css` — visual design, responsive layouts, interaction states and reduced-motion rules
- `script.js` — mobile navigation, local image fallbacks and gentle scroll reveals
- `images/` — local, compressed photos for a reliable static deploy
- `ASSET-SOURCES.md` — image origin and replacement notes
