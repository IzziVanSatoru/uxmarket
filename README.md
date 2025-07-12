
# UXMARKET — Archive of Micro UX Brilliance

![UXMARKET](https://img.shields.io/badge/project-open--source-blue.svg)

UXMARKET is a lightweight, modern, and responsive Preact-based web app built to archive and showcase micro UX patterns from digital products. Whether you're a UI/UX designer, developer, or product observer, this tool allows you to collect, organize, and share standout UX experiences.

---

## 🚀 Why I Built This

Modern digital apps are full of micro-interactions and UX brilliance. Sadly, most of them go undocumented and are forgotten. As someone passionate about UI/UX, I wanted a personal, accessible space to:

- Save and categorize impressive UX patterns I encounter
- Share them with friends or design teams
- Easily access them for future design inspiration
- Keep it local, fast, and offline-friendly

This is an **open-source** project. Anyone can use, modify, or extend it freely.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [Preact](https://preactjs.com/) + [Vite](https://vitejs.dev/)
- **State & Hooks**: `useState`, `useEffect` from Preact
- **Data Storage**: `localStorage` (no backend required)
- **Export Tools**: JSON clipboard, CSV, and PDF download (via `jsPDF`)
- **Style Framework**: [Bootstrap 5](https://getbootstrap.com/) CDN only
- **Extra FX**: GSAP (for animated neon dot grid background)

---

## ✨ Features

### 1. View List of UX Patterns
- Card-based layout using Bootstrap grid
- Each card contains:
  - Title
  - Short description
  - UX category (onboarding, error, search, etc.)
  - App name (e.g. Notion, TikTok)
  - Optional: screenshot image (URL or base64)

### 2. Add UX Pattern
- Simple form UI (with neon/Cyberpunk theme)
- Inputs: title, description, category, app, image
- Stored locally with `localStorage`

### 3. Filter by Category or App
- Real-time filtering without refresh
- Reset button with RGB cyber effect

### 4. Export & Share
- Copy full UX archive as JSON (to clipboard)
- Download as CSV or PDF
- Styled RGB export button

### 5. Delete All
- One-click remove all data from localStorage
- Includes a flag to prevent auto re-seed

### 6. Responsive UI
- Mobile-first design
- Lightweight, instant load
- Fully client-side (no backend or auth)

---

## 🎨 Color Palette (Cyberpunk Inspired)

| Color Name | Hex       | Usage                        |
|------------|-----------|------------------------------|
| Neon Cyan  | `#00ffff` | Main text, borders, neon fx  |
| Deep Black | `#0d0d0d` | Backgrounds                  |
| Night Gray | `#1a1a1a` | Card backgrounds             |
| Violet     | `#a64dff` | Secondary badges, shadows    |
| Magenta    | `#ff007f` | Gradient animation           |
| Green RGB  | `#00ff00` | Accent in export/reset       |
| Light Cyan | `#a0f8ff` | Subtext                      |

---

## 🧩 Folder Structure

```
uxmarket/
├── index.html
├── json/
│   └── dummy.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── UxCard.jsx
│   │   ├── UxForm.jsx
│   │   ├── UxFilter.jsx
│   │   ├── UxExport.jsx
│   │   └── EmptyState.jsx
│   ├── utils/
│   │   └── storage.js
│   ├── data/
│   │   └── categories.js
```

---

## 📥 How to Use Locally

```bash
# Clone the repo
git clone https://github.com/IzziVanSatoru/uxmarket.git
cd uxmarket

# Install dependencies
npm install

# Start the development server
npm run dev
```

> No server needed. All data is stored in your browser.

---

## 🔓 License

This project is **open-source** and released under the MIT License. Feel free to use, fork, remix, or rebrand it. Attribution is appreciated but not required.

---

## ❤️ Aesthetic Philosophy

UXMARKET is a celebration of small design details. Built in a Cyberpunk visual theme (neon, glowing borders, glitch effects, etc.), it blends form and function to help you admire and preserve beautiful UX interactions.

---

> Made with iziVanSatoru
