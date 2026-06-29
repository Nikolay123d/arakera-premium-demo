# ARAKERA Firebase Backend Starter

Demo-ready backend scaffold for a later production setup.

This folder is not deployed yet. It prepares the minimum backend that can be connected after the client confirms:

- receiving email address;
- official domain;
- official Facebook / Messenger / phone;
- whether leads should also be stored in a database;
- who can access the admin view.

## What This Backend Can Do

1. Receive website lead forms through a HTTPS Cloud Function.
2. Save each lead into Cloud Firestore.
3. Optionally send email notification through SMTP or an email provider.
4. Keep lead status: `new`, `in_progress`, `closed`.
5. Add Google Cloud budget alerts before production.

## Suggested Setup

```powershell
cd backend-firebase-starter
firebase login
firebase init firestore functions hosting
firebase use <client-project-id>
firebase deploy
```

## Cost Notes For Client

For a small presentation website, static hosting can often stay very cheap.

Firebase has a no-cost Spark plan and a pay-as-you-go Blaze plan. Firestore also has daily/monthly free quota for small usage. For a small business website with a modest number of leads, the backend can often start at 0 Kč/month or very low cost, as long as usage stays inside free quotas.

Important:

- If Cloud Functions, paid Google Cloud services, larger traffic, file uploads, SMS, or advanced automation are needed, the project may need Blaze/pay-as-you-go.
- Before enabling paid services, set Google Cloud budget alerts.
- Final costs depend on actual traffic, stored files, database reads/writes, email provider, and selected services.

Useful official docs:

- Firebase pricing: https://firebase.google.com/pricing
- Firebase pricing plans: https://firebase.google.com/docs/projects/billing/firebase-pricing-plans
- Firestore pricing/free quota: https://firebase.google.com/docs/firestore/pricing

## Setup Price Note

Suggested implementation service:

- backend light setup from 150 EUR once;
- includes lead endpoint, Firestore collection, basic validation, email notification template, and deployment help;
- monthly cloud cost is separate and depends on usage.

## Production Checklist

- [ ] Create Firebase / Google Cloud project.
- [ ] Add verified domain.
- [ ] Configure Firestore.
- [ ] Configure Cloud Function region.
- [ ] Configure email provider credentials.
- [ ] Set budget alerts.
- [ ] Connect frontend form endpoint.
- [ ] Test mobile form submission.
- [ ] Test received email.
- [ ] Add privacy/legal text if collecting personal data.

