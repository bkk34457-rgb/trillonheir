# Trillonheir

Multi-page portfolio site for Trillonheir (Abdur-Rahmaan Archer). Plain HTML/CSS/JS, no build step — open `index.html` in a browser.

## Pages

| File | Page | Colours |
| --- | --- | --- |
| `index.html` | Home — picture tiles linking to each brand | Cream / black |
| `real-estate.html` | Listings, portfolio, services, inquiry | Green / red |
| `basketball.html` | Journey, academy, coaching, programs | Black / yellow |
| `cmos.html` | Intro, projects, services, inquiry | Blue / pink |
| `personal-brand.html` | Style, lifestyle, interests, mood board | Sand / black |

## Updating

- **Photos:** put files in an `images/` folder, then replace a `<div class="ph">…</div>` slot with `<img src="images/name.jpg" alt="…">`. Each page has comments showing where.
- **Homepage tile covers:** add `<img src="images/….jpg" alt="">` as the first line inside an `<a class="tile">`.
- **Colours:** edit the `.t-*` blocks at the top of `css/style.css`.
- **Contact:** the email/phone appear in each page's contact section; forms send to the address in the form's `data-to` attribute (they open the visitor's email app).

## Still to fill in

- Real CMOS description, services and projects (current copy is a draft).
- Real property listings (current ones are samples).
- All photos.
