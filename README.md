# ARAKERA GROUP — Screen Flow Presentation

Static 8-screen premium presentation site for ARAKERA GROUP.

## Included

- full-screen cinematic video/wallpaper entry screen;
- 8 screen-flow sections with right-side navigation dots;
- fullscreen menu and modal entry points;
- project entry process screen;
- four-resource system screen;
- project movement map;
- project cases;
- partnerships screen;
- Central Europe geography screen;
- contact form connected through Web3Forms;
- post-submit progress overlay;
- request processing page with Facebook quick-contact CTA.

## Structure

```text
index.html
request-processing.html
assets/css/style.css
assets/js/app.js
assets/images/
assets/videos/
assets/icons/favicon.svg
backend-firebase-starter/
CREDITS.md
README.md
TODO.md
```

## Form

The contact form uses Web3Forms:

```text
https://api.web3forms.com/submit
```

The current access key is stored in `index.html` for the temporary test scenario.

On successful submit:

1. the UI shows `Надсилання запиту в систему`;
2. progress moves to 100% after Web3Forms accepts the request;
3. the visitor is redirected to `request-processing.html?status=received`.

## Local Preview

```bash
python -m http.server 8108
```

Open:

```text
http://127.0.0.1:8108/
```

## Before Production

- confirm final client-owned domain and brand/legal details;
- confirm final recipient email/form provider settings;
- replace temporary test access key if needed;
- confirm real project case details and numbers;
- confirm Facebook/contact links;
- optionally connect backend/CRM from `backend-firebase-starter`.
