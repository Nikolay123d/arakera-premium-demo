# ARAKERA GROUP — Premium Corporate Demo

Static premium mini-site for ARAKERA GROUP.

## What Is Included

- fullscreen video hero with poster fallback;
- polished header and fullscreen mobile menu;
- separate overlay screens for system, resources, projects, partners, geography, and contact;
- second cinematic video block;
- project/demo case cards;
- custom Central Europe SVG map;
- smart sticky CTA after scroll;
- quick contact and submit-project modals;
- demo-safe form validation;
- local media assets;
- README and credits.

## Project Structure

```text
index.html
assets/css/style.css
assets/js/app.js
assets/images/
assets/videos/
assets/icons/favicon.svg
docs/source-fex/
CREDITS.md
README.md
```

The original FEX source files are stored in `docs/source-fex/` for reference.

## What Must Be Replaced Before Production

- real company/legal details;
- real contact email, Facebook, Messenger, Telegram links;
- form endpoint: Formspree, Web3Forms, FormSubmit, backend, or CRM;
- real project cases and confirmed numbers;
- client-owned media if required;
- final domain and analytics/cookie policy if tracking is added.

## Form Integration

Current form is demo-safe and does not send external data.

To connect Formspree:

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

To connect Web3Forms:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
<form action="https://api.web3forms.com/submit" method="POST">
```

Then remove or adapt the demo submit handler in `assets/js/app.js`.

## Local Preview

From this folder:

```bash
python -m http.server 8098
```

Open:

```text
http://127.0.0.1:8098/
```

## Demo Limitations

- no backend;
- no authentication;
- no real CRM;
- no real form sending until endpoint is connected;
- all case studies are demo examples;
- contact/social links are placeholders.

## Deployment

Can be deployed as static files to GitHub Pages, Netlify, Cloudflare Pages, or similar static hosting.
