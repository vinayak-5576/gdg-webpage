# GDG on Campus · RV College of Engineering

Official web portal designed for the **Interface Unlocked - UI Design Challenge** for **Google Developer Groups on Campus · RVCE**.

A content-dense, editorial, and typographic web experience engineered with Next.js App Router, TypeScript, and Tailwind CSS. Built to prioritize student readability, fast navigation, and strict WCAG 2.1 AA/AAA accessibility.

---

## 🚀 Key Features & Architectural Highlights

- **Typographic & Editorial System**:
  - Headings set in **Bricolage Grotesque** with optical adjustments.
  - Body type in **Inter** and technical metadata/logistics set in **JetBrains Mono**.
  - Default warm off-white canvas (`#FAF9F5`) in light mode paired with deep ink (`#111215`) in dark mode.
- **Strict Brand Contrast & Quiet Chrome**:
  - Eliminates generic purple AI gradients and neon glows.
  - Tactile Google primary brand fills (Blue `#4285F4`, Yellow `#FBBC04`, Green `#34A853`, Red `#EA4335`) paired strictly with dark ink text (`#111215` / `#0A0A0A`) passing WCAG 2.1 AA/AAA standards.
  - Single CSS grid-stacked rotating action words (`Build`, `Learn`, `Ship`, `Lead`) with zero layout shift across 375px mobile, laptop, and 1920px desktop viewports.
- **Functional Developer Terminal**:
  - Live chapter snippet executing `gdg next` to query upcoming workshops directly from static typed campus data.
  - Static non-pulsing terminal cursor.
- **Three-Tier Campus Architecture**:
  1. **Home (`/`)**: Hero action stack, Coming Up strip with real event chips, Bento focal workspace, 3-column "How We Work" panel, and community hub.
  2. **Events Calendar (`/events`)**: Client-side filtered search with horizontally scrollable track pills (`Cloud & AI`, `Android`, `Web & Chrome`, `Open Source`) and category top borders.
  3. **Event Detail (`/events/[slug]`)**: Static Site Generated (`generateStaticParams`) deep-dives featuring date stamps, agenda timeline, prerequisites, and conditional registration triggers.
  4. **Team Directory (`/team`)**: Asymmetrical editorial directory with big-type names (~38px), track badges, initials avatars, and accent border transitions.
- **Accessibility & Craft**:
  - Fully navigable keyboard flow with skip-to-content links and custom focus rings (`focus-visible:ring-2 focus-visible:ring-google-blue`).
  - Full respect for `prefers-reduced-motion` media queries.
  - Zero hydration mismatches via invariant DOM structures.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (`next/font`)](https://fonts.google.com/) — Bricolage Grotesque, Inter, JetBrains Mono

---

## 📦 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vinayak-5576/gdg-webpage.git
cd gdg-webpage

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static production bundle
npm run build

# Start production server
npm start
```

### Contrast Verification

To inspect measured WCAG 2.1 contrast ratios for every text/surface pair across both light and dark themes:

```bash
node scripts/measure-contrast.mjs
```

---

## 📜 Disclaimer

GDG on Campus RVCE is an independent developer group. Activities and opinions expressed here should in no way be considered as that of Google, the corporation.

---

## 📄 License & Attribution

- Built for **GDG on Campus · RV College of Engineering**.
- Fonts: Bricolage Grotesque (SIL Open Font License), Inter (SIL Open Font License), JetBrains Mono (Apache 2.0).
- Icons: Lucide (ISC License).