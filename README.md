# Harsheen Kaur — Interactive Portfolio & Isometric City

A modern, responsive personal portfolio and interactive digital world designed with the **Midnight Editorial City** aesthetic.

- **Primary Persona**: Harsheen Kaur — BCA Graduate (9.48 CGPA), Data Operations Analyst at NielsenIQ (NIQ Thumbs Up Award), Machine Learning & Full-Stack Developer.
- **Two Connected Experiences**:
  1. **HELLO, WORLD!** — An editorial, recruiter-focused professional portfolio readable in under 30 seconds.
  2. **HARSHEEN'S WORLD** — An original 2.5D interactive isometric city with 11 explorable architectural landmarks representing projects, corporate roles, and academic honors.

---

## 1. Quick Start (Run Locally)

### Prerequisites
- Node.js 18+ (tested on Node v24.17.0)
- npm or pnpm or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd d:/portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build
```bash
# Build production bundle (SSG / Static Pre-rendering)
npm run build

# Start production server
npm start
```

---

## 2. Architecture & Folder Structure

```
d:/portfolio/
├── public/
│   ├── resume.pdf                    # Official verified 2-page resume
│   └── images/
│       └── ASSET_INTEGRATION_GUIDE.md # Guide for adding future screenshots & certs
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Validated contact form endpoint
│   │   ├── about/page.tsx            # Editorial minimal profile & philosophy
│   │   ├── achievements/page.tsx     # Hall of fame & 10 accredited certificates
│   │   ├── contact/page.tsx          # Contact portal with email, LinkedIn & GitHub
│   │   ├── education/page.tsx        # VIPS BCA (9.48 CGPA) & CBSE timeline
│   │   ├── experience/page.tsx       # NielsenIQ, Salo Orthotics, IBM SkillsBuild, Samvaad
│   │   ├── projects/
│   │   │   ├── page.tsx              # All 7 confirmed projects with explorer filters
│   │   │   └── [slug]/page.tsx       # Dynamic case study pages (FactShield, StockMinds, etc.)
│   │   ├── resume/page.tsx           # Formatted printable web resume
│   │   ├── world/
│   │   │   ├── page.tsx              # Interactive Isometric City experience
│   │   │   └── projects/[slug]/page.tsx # City landmark deep-link pages
│   │   ├── globals.css               # Midnight tech styling & isometric animations
│   │   ├── layout.tsx                # Metadata, font, global navbar & footer
│   │   ├── page.tsx                  # Professional homepage
│   │   ├── robots.ts                 # SEO search-engine crawler directives
│   │   └── sitemap.ts                # Auto-generated XML sitemap
│   ├── components/
│   │   ├── city/
│   │   │   ├── BuildingDetailModal.tsx   # Overlay modal for landmark inspection
│   │   │   ├── IsometricBuilding.tsx     # Custom SVG 2.5D building architecture
│   │   │   └── IsometricCityCanvas.tsx   # Interactive canvas with roads, parks, cars
│   │   ├── contact/
│   │   │   └── ContactForm.tsx           # Client-validated contact form
│   │   ├── hero/
│   │   │   └── HeroSection.tsx           # Editorial hero with metrics & city portal
│   │   ├── modals/
│   │   │   └── RecruiterModal.tsx        # 30-Second executive brief modal
│   │   ├── navigation/
│   │   │   ├── CommandPalette.tsx        # Cmd+K / Ctrl+K keyboard navigation
│   │   │   ├── Footer.tsx                # Global footer with verified links
│   │   │   ├── ModeSwitch.tsx            # HELLO, WORLD ↔ HARSHEEN'S WORLD
│   │   │   └── Navbar.tsx                # Responsive sticky header
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx           # Consistent project card with placeholders
│   │   │   └── ProjectFilters.tsx        # Search, category, and tech filtering
│   │   └── skills/
│   │       └── SkillProjectExplorer.tsx  # Interactive skill-to-project discovery
│   └── data/
│       ├── certifications.ts         # 10 verified honors & NPTEL rankings
│       ├── city.ts                   # 11 isometric landmarks, coordinates & districts
│       ├── education.ts              # Degree details, dates & percentages
│       ├── experience.ts             # Roles, NIQ Thumbs Up award, responsibilities
│       ├── profile.ts                # Bio, contact, socials, highlights
│       ├── projects.ts               # Central configuration for 7 verified projects
│       └── skills.ts                 # Complete technology taxonomy & cross-links
├── tailwind.config.ts                # Custom Midnight Editorial design tokens
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json
```

---

## 3. Seven Confirmed Projects & City Landmarks

| # | Project | Category | Verified Stack | City Landmark | Status |
|---|---|---|---|---|---|
| 1 | **FactShield** | AI / ML / NLP | Python, Flask, LSTM, ResNet18, NewsAPI, Google Trends | Media House | Completed (85% Accuracy, 15+ User Tests) |
| 2 | **StockMinds** | Data Analytics / ML | Python, Flask, Random Forest, yFinance, Pandas, Matplotlib | Central Bank & Exchange | Completed (78% Directional, 15+ NIFTY Stocks) |
| 3 | **Crop Failure Risks** | Data Analytics / Agritech | Python, Pandas, NumPy, Matplotlib, Seaborn, Excel | AgriTech Research Centre | Completed (5-Member Academic Study) |
| 4 | **The Eleventh Hour** | Web Development | HTML, CSS, JavaScript, PHP, MySQL, cPanel | Marketplace & Bazaar | Completed (Full-Stack Prototype) |
| 5 | **SeniorSaathi** | AI / Accessibility | Next.js, TypeScript, Google Gemini API, Web Speech API | Community Care Centre | Completed / Active Prototype (`HarsheenKaur11/seniorsaathi`) |
| 6 | **Planora AI** | Generative AI / SaaS | Next.js 14, TypeScript, Google Gemini API, Prisma, Recharts | Events & Convention Centre | Production Live on Vercel (`planora-ai-lyart.vercel.app`) |
| 7 | **Arcanum** | EdTech / Gamification | Next.js, React, TypeScript, Gamification Engine | Arcanum Academy | **IN PROGRESS** (Escape Rooms, Notes, Flashcards) |

### Additional Explorable City Landmarks:
- **NIQ Corporate Tower**: Manifests Harsheen's Data Operations Analyst role at NielsenIQ & the NIQ Thumbs Up Award.
- **University Campus**: Honors the BCA degree at VIPS (9.48 CGPA) and CBSE Non-Medical Science stream.
- **Hall of Fame**: Houses verified certifications from NPTEL (Top 1% HCI, Top 5% Python), Google Cloud, and IBM.
- **City Connect Centre**: Direct communication hub linking email, LinkedIn, and resume download.

---

## 4. Key Interactive Features Implemented

1. **Persistent Experience Switcher (`ModeSwitch.tsx`)**:
   - `HELLO, WORLD ↔ HARSHEEN'S WORLD` toggles between the professional editorial portfolio and the 2.5D isometric city.
2. **Interactive 2.5D Isometric City (`IsometricCityCanvas.tsx`)**:
   - Custom SVG canvas rendered with isometric diamond foundations, connected roads, animated moving vehicles, parks, and 11 architectural landmarks.
   - Distinct roof styles: transmission antennas with blinking beacons, helipads, solar panels, glass domes, and stepped art-deco roofs.
   - District filter tabs, day/night mood toggle, zoom in/out/reset controls, visited destination counter.
   - Mobile responsive toggle between the interactive canvas and an accessible District Guide list.
3. **Recruiter Mode (`RecruiterModal.tsx`)**:
   - Executive 30-second brief accessible via navbar trigger or quick button. Summarizes candidate profile, NIQ current role, top projects, skills, and direct email copy / resume download.
4. **Command Palette (`CommandPalette.tsx`)**:
   - Keyboard shortcut `Cmd+K` or `Ctrl+K`. Quickly search across all routes, projects, actions, and interactive destinations.
5. **Skill-to-Project Explorer (`SkillProjectExplorer.tsx`)**:
   - Select any skill (e.g., Python, SQL, Next.js, Scikit-learn, Advanced Excel) to discover which projects utilize it.
6. **Project Explorer (`ProjectFilters.tsx`)**:
   - Live search bar, category pills (AI & ML, Data Analytics, Generative AI, Web Dev, EdTech), and technology dropdown.
7. **Official Resume Download & Web CV**:
   - Direct download of the authentic, verified 2-page PDF at `/resume.pdf`, plus an accessible, printable web layout at `/resume`.

---

## 5. Deployment Guide (Vercel)

This repository is optimized for zero-configuration deployment on **Vercel**:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Harsheen Kaur Portfolio"
   git branch -M main
   git remote add origin https://github.com/HarsheenKaur11/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New..." → "Project"**.
3. Select your `portfolio` repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Click **"Deploy"**. The site will build and deploy cleanly to a global edge network.

---

## 6. How to Add Media & Screenshots Later

All content is centrally configured in `src/data/`:
- **Projects**: `src/data/projects.ts`
- **Experience**: `src/data/experience.ts`
- **Certificates**: `src/data/certifications.ts`
- **Profile & Socials**: `src/data/profile.ts`
- **City Landmarks**: `src/data/city.ts`

Refer to `public/images/ASSET_INTEGRATION_GUIDE.md` for full step-by-step instructions.

---

## 7. QA & Testing Verification Report

- **Build Test**: Next.js production build (`npm run build`) succeeded with zero errors, generating 30 static pages.
- **Route Status**:
  - `/` — 200 OK
  - `/about` — 200 OK
  - `/experience` — 200 OK
  - `/projects` — 200 OK
  - `/projects/factshield` — 200 OK
  - `/projects/stockminds` — 200 OK
  - `/projects/crop-failure-risk-analysis` — 200 OK
  - `/projects/the-eleventh-hour` — 200 OK
  - `/projects/seniorsaathi` — 200 OK
  - `/projects/planora-ai` — 200 OK
  - `/projects/arcanum` — 200 OK
  - `/skills` — 200 OK
  - `/education` — 200 OK
  - `/achievements` — 200 OK
  - `/contact` — 200 OK
  - `/world` — 200 OK
  - `/world/projects/[slug]` — 200 OK
  - `/resume` — 200 OK
  - `/resume.pdf` — 200 OK (Served binary PDF)
  - `/sitemap.xml` — 200 OK
  - `/robots.txt` — 200 OK
- **API Test**: `POST /api/contact` validated:
  - Empty/invalid payload rejected with `400 Bad Request` and descriptive error message.
  - Valid payload accepted with `200 OK` returning verified mailto fallback.
