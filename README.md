# 🚀 ISRO SCIENCE — Editorial Portal Redesign

[![Netlify Status](https://api.netlify.com/api/v1/badges/deploy-status)](https://isroremake.netlify.app/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> A modern, avant-garde editorial reimagining of the **Indian Space Research Organisation (ISRO)** official web portal. Inspired by the **Swiss Style (International Typographic Style)** and high-end scientific magazine layouts, this project merges aerospace engineering precision with modernist graphic design, bilingual accessibility, and rich interactive telemetry.

---

## 🌐 Live Deployment

| Platform | Deployment URL | Status |
| :--- | :--- | :--- |
| **Netlify Production** | [**isroremake.netlify.app**](https://isroremake.netlify.app/) | ![Active](https://img.shields.io/badge/Status-Live-success?style=flat-square) |
| **GitHub Repository** | [**github.com/srikar-up/isro-remake**](https://github.com/srikar-up/isro-remake) | ![Open Source](https://img.shields.io/badge/Code-Public-blue?style=flat-square) |

> 💡 *Note: If your custom Netlify subdomain differs, update the link above with your unique Netlify URL.*

---

## 📑 Table of Contents

1. [Design Philosophy: Swiss Magazine Style Inspiration](#-design-philosophy-swiss-magazine-style-inspiration)
   - [Why Swiss Style for Space Exploration?](#why-swiss-style-for-space-exploration)
   - [Core Swiss Design Tenets Applied](#core-swiss-design-tenets-applied)
   - [Typography as Architectural Form](#typography-as-architectural-form)
   - [Mathematical Grid & Wireframe Coordinates](#mathematical-grid--wireframe-coordinates)
   - [Editorial Color Hierarchy](#editorial-color-hierarchy)
   - [Magazine Cover Hero & Overlapping Plates](#magazine-cover-hero--overlapping-plates)
   - [Comparison: Traditional Portal vs. Swiss Editorial](#comparison-traditional-portal-vs-swiss-editorial)
2. [Key Features & Capabilities](#-key-features--capabilities)
   - [Dynamic Bilingual Localization (EN / HI)](#dynamic-bilingual-localization-en--hi)
   - [Comprehensive Universal Accessibility Suite](#comprehensive-universal-accessibility-suite)
   - [Interactive Launch Vehicles Dossier](#interactive-launch-vehicles-dossier)
   - [Key Science Mission Telemetry Modals](#key-science-mission-telemetry-modals)
   - [Editorial Spotlight Poster Gallery](#editorial-spotlight-poster-gallery)
   - [Digital Portals & Centre Registry Taxonomy](#digital-portals--centre-registry-taxonomy)
   - [Global Live Search & Quick Access Hub](#global-live-search--quick-access-hub)
3. [Technology Stack](#-technology-stack)
4. [Project Structure](#-project-structure)
5. [Getting Started Locally](#-getting-started-locally)
6. [Netlify Deployment Configuration](#-netlify-deployment-configuration)
7. [Contributing & Acknowledgements](#-contributing--acknowledgements)

---

## 🎨 Design Philosophy: Swiss Magazine Style Inspiration

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   ISRO SCIENCE                                                         │
│   ════════════════════════════════════════════════════════════════     │
│   [01 / 04] // MISSION SPOTLIGHT : LUNAR EXPLORATION                   │
│                                                                        │
│   ┌───────────────────────────┐  ┌─────────────────────────────────┐   │
│   │ NEXT                      │  │ ▓▓▓ LIVE BROADCAST ▓▓▓          │   │
│   │ FRONTIER                  │  │ [ LVM3-M6 LIFT OFF VIDEO ]      │   │
│   │ INHABITING LUNAR          │  │ TELEMETRY: NOMINAL              │   │
│   │ SOUTH POLE                │  │ SHAR SRIHARIKOTA                │   │
│   └───────────────────────────┘  └─────────────────────────────────┘   │
│   ════════════════════════════════════════════════════════════════     │
│   GRID: 40px COORDINATES  │  TYPE: OUTFIT + INTER  │  ZERO RADIUS      │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

Traditional government space portals often struggle with overwhelming information clutter, redundant banner carousels, and bureaucratic layouts. This redesign completely re-envisions the experience as a **prestige editorial publication**—blending the gravitas of an archival scientific journal with the kinetic typography of mid-century Swiss graphic design.

### Why Swiss Style for Space Exploration?

The **International Typographic Style (Swiss Style)**, pioneered in the 1950s by luminaries like **Josef Müller-Brockmann**, **Armin Hofmann**, and **Emil Ruder**, was founded on the belief that design should be **objective, clear, structurally rigorous, and universally accessible**. 

Space exploration is fundamentally an exercise in precision mathematics, coordinate astronomy, and rational human endeavor. Aligning ISRO's digital identity with Swiss design principles creates a natural synergy:
- **Structure mirrors engineering**: The same grid systems that govern rocketry trajectories govern our layout matrices.
- **Form follows clarity**: Extraneous fluff and skeuomorphic decoration are eliminated in favor of bold typographic hierarchy, stark contrast, and data density.
- **Institutional majesty**: Heavy, monumental typography commands the respect owed to India's premier scientific institution.

---

### Core Swiss Design Tenets Applied

#### 1. Zero-Border-Radius Geometry & Sharp Architectural Lines
- Traditional rounded buttons (`rounded-xl` or `rounded-full`) were deliberately discarded in favor of **sharp, architectural `rounded-none` edges**.
- Every container, button, badge, modal, and card exhibits a strict, chisel-cut rectangular profile, evoking blueprint sheets, technical apparatus, and physical printing plates.

#### 2. The Architectural Wireframe Grid
- A subtle background matrix (`.wireframe-grid`) runs behind key sections, composed of 40px × 40px coordinate lines and radial dot intersections:
  ```css
  .wireframe-grid {
    background-image:
      radial-gradient(circle, #85A2C8 1px, transparent 1px),
      linear-gradient(to right, rgba(133, 162, 200, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(133, 162, 200, 0.1) 1px, transparent 1px);
    background-size: 40px 40px, 40px 40px, 40px 40px;
  }
  ```
- This visualizes the cartographic, orbital grids utilized by satellite ground stations and cartographic missions (Bhuvan/Cartosat).

#### 3. Asymmetric Balance & Tension
- Rather than centering every element passively, the layout employs **asymmetric balance**: heavy display headlines anchor the left margin, while negative space and data matrices counterbalance them on the right.
- High visual tension between large-scale editorial headlines and microscopic monospaced metadata invites the user's eye to travel systematically across each fold.

---

### Typography as Architectural Form

Typography is the supreme design element in the Swiss tradition. Three distinct type families operate in strict hierarchy:

| Role | Font Family | Weights | Characteristic & Usage |
| :--- | :--- | :--- | :--- |
| **Editorial Display** | **Outfit** | 700 Bold, 800 ExtraBold, 900 Black | Monumental uppercase cover titles, section mastheads, poster headlines. |
| **Editorial Body** | **Inter** | 300 Light, 400 Regular, 500 Medium, 600 SemiBold | High-legibility neo-grotesque sans-serif for articles, descriptions, and UI controls. |
| **Telemetry & Indexing** | **JetBrains Mono / System Monospace** | 400 Regular, 700 Bold | Spacecraft telemetry, launch mass, stage specifications, dates, and indices (`// DOS • ISRO`). |

#### The Signature "ISRO SCIENCE" Dual Masthead
At the crown of the hero section, the site features a colossal dual-layer typographic headline:
```
ISRO SCIENCE   ← Solid White (Outfit Black, Uppercase)
ISRO SCIENCE   ← Stroke-Only Outline Overlay (-webkit-text-stroke: 2px)
```
This overlapping stroke effect creates depth without requiring dropshadows, honoring the silkscreen printing techniques celebrated in classic Swiss exhibition posters.

#### High-Contrast Editorial Highlighting
Key slogans utilize high-contrast background ribbons (`.block-text-highlight`):
- Words are encased in solid **ISRO Blue (`#0C439A`)** blocks with inverted white text.
- Text blocks break naturally across lines, resembling hand-set letterpress or Swiss concrete poetry.

---

### Editorial Color Hierarchy

The color palette is strictly disciplined, drawing directly from ISRO's historical emblems and India's sovereign colors:

```
[#0C439A]  ISRO Blue         Primary institutional brand; stability, aerospace depth
[#06265B]  ISRO Navy Dark    Header gradients, deep contrast backdrop
[#F89308]  Solar Orange      Micro-accents, status indicators, solar flare highlight
[#FFFFFF]  Pure Paper White  Crisp, radiant editorial canvas
[#85A2C8]  Steel Blue        Metadata text, subtle rules, technical crosshairs
[#242526]  Charcoal Black    Editorial text, footer foundation, high-contrast base
[#E2E8F0]  Cool Slate        Clean, precise 1px architectural divider borders
```

- **Rule of restraint**: Saffron/Solar Orange (`#F89308`) is never overused. It is reserved strictly for focal accents (active telemetry pings, milestone checkmarks, button hovers).
- **Paper vs. Ink**: Sections alternate rhythmically between Crisp White Paper Canvas (`#FFFFFF`) and Deep Space Blue (`#0C439A`), replicating the pacing of turning spreads in a heavyweight architectural monograph.

---

### Magazine Cover Hero & Overlapping Plates

In physical magazine layout, editorial art directors frequently overlay cutouts or secondary photos across section headers.

In this redesign:
1. **The Floating Live Broadcast Module**: Rather than trapping the launch stream inside a generic video player, the live feed of **LVM3-M6 Lift Off** floats across the boundary between the deep-blue header and the crisp-white body.
2. **Technical Telemetry Stamps**: Every visual block features a category code and stamp (e.g., `// OFFICIAL PRESS DESK`, `01 / 04`, `SDSC SHAR`).
3. **Card Micro-Interactions**: Hovering over any card triggers an upward lift (`translateY(-4px)`) coupled with a blue border shift, reinforcing tactile physicality.

---

### Comparison: Traditional Portal vs. Swiss Editorial

| Dimension | Traditional Government Portals | ISRO Swiss Editorial Redesign |
| :--- | :--- | :--- |
| **Layout Rhythm** | Rigid, repetitive 3-column card dumps | Variable editorial spreads, asymmetric balance, grid matrices |
| **Typography** | Generic system fonts, uniform sizing | Dynamic scale contrast: giant Outfit display + crisp Inter + mono telemetry |
| **Grid System** | Fluid responsive collapse with no guides | Visible 40px coordinate wireframe crosshairs & 1px borders |
| **Aesthetics** | Cluttered icons, multiple competing colors | Curated 3-color palette (Deep Blue, Solar Orange, Clean White) |
| **Telemetry & Data** | Buried deep inside nested PDFs | Front-and-center technical dossiers with stage/mass/orbit specs |
| **Accessibility** | Basic or hidden accessibility links | Integrated top toolbar (Ruler, Contrast, Font Scale, Dyslexia Mode) |
| **Language Toggle** | Page reload with jarring layout shifts | Instant seamless in-memory bilingual translation switch |

---

## ⚡ Key Features & Capabilities

### Dynamic Bilingual Localization (EN / HI)
- **Instant In-Memory Switching**: Toggle seamlessly between **English** and **Hindi (हिंदी)** without page reloading or layout breakage.
- **Authentic Terminology**: All Hindi translations utilize official terminology sanctioned by the Department of Space and Government of India (e.g., *प्रक्षेपण यान* for Launch Vehicles, *चंद्रयान* / *आदित्य* dossiers, and *मुख्यालय संपर्क*).
- Over **1,500 lines of structured bilingual content** housed in [`src/translations.js`](src/translations.js).

### Comprehensive Universal Accessibility Suite
Situated prominently in the top utility bar, the portal provides immediate tools conforming to WCAG 2.1 AA guidelines:
- **Font Resizing Engine**: Instant scaling across three steps (`A-`, `A`, `A+`) dynamically modifying the root REM scale.
- **Reading Ruler Guide**: A horizontal focus guide overlay that tracks the user's mouse cursor to aid readers with ADHD, dyslexia, or visual tracking difficulties.
- **High-Contrast Mode**: Inverts brightness and elevates border delineations for low-vision users.
- **Dyslexia-Friendly Typography**: Dynamically overrides body typography to specialized high-legibility typefaces.

### Interactive Launch Vehicles Dossier
- Explore India's entire rocket fleet: **PSLV**, **GSLV**, **LVM3**, **SSLV**, and **Sounding Rockets**.
- Tabbed interface updates technical specifications on-the-fly:
  - Lift-Off Mass (e.g., *640 Tonnes* for LVM3)
  - Height & Stages Breakdown (e.g., *S200 Solid + L110 Liquid + C25 Cryogenic*)
  - Payload to GTO / LEO
  - Key Operational Milestones and Flight Records

### Key Science Mission Telemetry Modals
- High-priority mission cards covering:
  - **Chandrayaan-3** (Shiv Shakti Point regolith analysis)
  - **Aditya-L1** (Solar L1 Halo Orbit coronagraph)
  - **Gaganyaan** (Orbital module human spaceflight programme)
  - **XPoSat** (X-ray polarimetry space observatory)
  - **NISAR** (NASA-ISRO Dual Synthetic Aperture Radar)
  - **SPADEX** (Space Docking Experiment)
- Clicking any card opens a **Glassmorphic Telemetry Modal** displaying vehicle pairings, target orbits, mission lifespans, and direct spec links.

### Editorial Spotlight Poster Gallery
- An automated and manually controllable **8-second rotating poster gallery**.
- Features 4 distinct editorial narratives with stark typography ribbons:
  1. *Next Frontier // Inhabiting Lunar South Pole*
  2. *Gaganyaan // India's Sovereign Crew Flight*
  3. *Aditya-L1 // Probing the Solar Corona*
  4. *Pushpak RLV-TD // Autonomous Runway Landings*
- Custom dot pagination (`01 / 04`) with tactile arrow buttons.

### Digital Portals & Centre Registry Taxonomy
- **Digital Portals Grid**: Quick access to **Bhuvan** (2D/3D Geospatial), **Bhoonidhi** (Open Earth Observation Data Hub), **MOSDAC** (Meteorological Data), **NDEM** (Disaster Management), **ISRO Science Data**, and **Space-Doc**.
- **Centres Directory with Categorical Filtering**:
  - Filter across **All 20 Facilities**, **14 Major ISRO Centres** (VSSC, URSC, SAC, SDSC SHAR, NRSC, LPSC, IPRC, etc.), **4 Autonomous Bodies** (PRL, NARL, NE-SAC, IIST), and **2 Commercial Enterprises** (IN-SPACe, NSIL).

### Global Live Search & Quick Access Hub
- **Universal Search Modal**: Press the search trigger to filter across missions, launch vehicles, digital portals, career openings, and tenders in real time with auto-suggestions.
- **Floating Bottom Action Hub**: Floating quick-action button in the bottom-right corner offering instant access to Ask-an-Expert, Feedback, National Space Day announcements, and Headquarters contact details.

---

## 🛠 Technology Stack

- **Framework**: [React 18](https://react.dev/) (Functional components, hooks, clean modular state)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/) (Sub-second HMR, optimized production rollup)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom Vanilla CSS Design System ([`src/index.css`](src/index.css))
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Outfit* (Display Headlines) and *Inter* (Body)
- **Icons**: [FontAwesome 6 Free](https://fontawesome.com/) & [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/) (Continuous deployment via GitHub)

---

## 📁 Project Structure

```
isro-remake/
├── image files/               # High-resolution media assets
│   └── earth.png              # Orbital Earth asset
├── public/                    # Static public assets
│   ├── _redirects             # Netlify SPA routing rules
│   └── earth.png
├── src/
│   ├── App.jsx                # Core application & editorial layout
│   ├── index.css              # Wireframe grid, animations & typography rules
│   ├── main.jsx               # React DOM bootstrap
│   └── translations.js        # Complete bilingual English & Hindi dictionary
├── index.html                 # HTML5 template with Tailwind config & fonts
├── netlify.toml               # Netlify build configuration & redirect setup
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite build options and React plugin
└── README.md                  # Comprehensive project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/srikar-up/isro-remake.git
   cd isro-remake
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled, minified bundle will be output to the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## ☁️ Netlify Deployment Configuration

The repository is pre-configured for automated continuous deployment with Netlify using [`netlify.toml`](netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Manual Netlify CLI Deploy (Optional)
If you wish to deploy manually from your command line:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 📜 Design Manifesto

> *"Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials."*  
> — **Dieter Rams**

The ISRO Editorial Redesign is dedicated to the scientists, engineers, and dreamers of the Indian Space Research Organisation who built world-class space technology through discipline, resourcefulness, and precision. This portal reflects those same virtues through layout, typography, and code.

---

## 📄 License & Attribution

- **Source Code**: Released under the [MIT License](LICENSE).
- **Imagery, Logos & Data**: The official emblem, mission designations, mission patches, and technical statistics are the intellectual property of the **Indian Space Research Organisation (ISRO)** and the **Department of Space, Government of India**. This project is a non-commercial educational design remake.

---

<p align="center">
  <b>Designed with precision • Built for exploration • Inspired by Swiss International Style</b>
</p>
