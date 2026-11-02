# Asset & Media Integration Guide for Harsheen Kaur's Portfolio

This guide explains how to add or update project screenshots, certificate images, live demo links, and resume files without altering website code.

---

## 1. Resume Update
- File location: `public/resume.pdf`
- To update: Replace `public/resume.pdf` with your latest PDF file. All download buttons on the site link directly to `/resume.pdf`.

---

## 2. Project Screenshots & Media
All projects have structured image slots in `src/data/projects.ts`.

### Recommended Folder Structure:
- `public/images/projects/factshield/`
  - `dashboard.png` (FactShield analysis interface)
  - `architecture.png` (LSTM & ResNet18 pipeline)
- `public/images/projects/stockminds/`
  - `dashboard.png` (NIFTY market trend charts)
  - `predictions.png` (Random Forest indicators)
- `public/images/projects/seniorsaathi/`
  - `home.png` (High-contrast accessible homepage)
  - `safety.png` (Digital Guardian & scam detection)
- `public/images/projects/planora-ai/`
  - `event-creator.png` (GenAI event wizard)
  - `budget-planner.png` (Recharts budget breakdown)
- `public/images/projects/crop-failure/`
  - `correlations.png` (Seaborn heatmaps)
- `public/images/projects/the-eleventh-hour/`
  - `storefront.png` (E-commerce catalog)
- `public/images/projects/arcanum/`
  - `escape-room.png` (EdTech puzzle chamber)

### How to Link an Image:
In `src/data/projects.ts`, find the corresponding project and set the `localPath` property:
```typescript
images: [
  {
    placeholder: "FactShield Dashboard & Analysis Workspace",
    caption: "Interface illustrating input verification, model confidence meters, and API trends.",
    alt: "FactShield platform interface preview",
    localPath: "/images/projects/factshield/dashboard.png" // <-- Add path here
  }
]
```

---

## 3. Adding Live URLs & GitHub Repositories
To add live links as they become public:
Open `src/data/projects.ts` and update the `githubUrl` or `liveDemoUrl` fields:
```typescript
githubUrl: "https://github.com/HarsheenKaur11/factshield",
liveDemoUrl: "https://factshield.demo.app",
```
If set to `null`, the UI automatically displays an honest, polished "Demo Available on Request / In Progress" label instead of broken buttons.

---

## 4. Certificates & Accreditations
- Image location: `public/images/certificates/`
- Data file: `src/data/certifications.ts`
- To add a certificate scan or credential link:
```typescript
verificationUrl: "https://nptel.ac.in/noc/Ecertificate/?q=...",
certificateImage: "/images/certificates/nptel-hci.png",
```

---

## 5. Contact Email Configuration
- File: `src/data/profile.ts`
- Current email: `harsheen1105@gmail.com`
- When you set up an external transactional email provider (such as Resend, SendGrid, or AWS SES), you can add your API keys to `.env.local` and configure `src/app/api/contact/route.ts`.
