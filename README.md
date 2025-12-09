## Portfolio — Fernando Hiroshi

Personal portfolio of **Fernando Hiroshi Takeda**, a Front-End Engineer specialized in **Next.js, React.js, and TypeScript**, also working as a Full-Stack Developer. This project showcases skills, projects, certifications, and resume through a modern, responsive interface focused on performance, SEO, and accessibility.

![Portfolio Preview](/public/projects/portfolio.webp)

> **Notice**: This project is protected by copyright. Any unauthorized use or reproduction of this code is prohibited.

---

## ✨ Overview

This portfolio is built with the **Next.js App Router** and a modern front-end stack, with a strong focus on:

- **Performance** (hybrid rendering, optimized images, efficient loading).
- **Accessibility** (semantic HTML, keyboard navigation, light/dark mode).
- **SEO** (optimized metadata, OpenGraph and Twitter Cards).
- **User experience** (smooth animations, sticky header, sheet-based navigation).

---

## 🧱 Core Stack

- **Framework**
  - [Next.js 15 (App Router)](https://nextjs.org/) — `src/app` with routes for home, projects, resume, and certifications.
  - [React 18](https://react.dev/)

- **Language & Styling**
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge)

- **UI & Components**
  - [shadcn/ui](https://ui.shadcn.com/) (Button, Card, Sheet, Dropdown, Carousel, Chart, etc.).
  - [react-icons](https://react-icons.github.io/react-icons/) (minimal icon set used in header, skills, social links, etc.).
  - [Embla Carousel](https://www.embla-carousel.com/) + autoplay (highlighted projects in the News section).
  - [Recharts](https://recharts.org/en-US/) (languages chart in the _Languages_ section).
  - [framer-motion](https://www.framer.com/motion/) (header and card entrance animations).

- **Theme & UX**
  - [next-themes](https://github.com/pacocoursey/next-themes) for **dark/light mode** via `ThemeToggle`.
  - Bento-like grid layout using a shared `Box` component.

- **Quality & Security Tooling**
  - ESLint (`eslint`, `@typescript-eslint`, `eslint-config-next`, `eslint-config-prettier`).
  - Prettier + `prettier-plugin-tailwindcss`.
  - Security audit scripts using `yarn audit`.

---

## 🗂 Pages Structure

Main App Router routes:

- `/` — **Home**
  - Sections: Feature, Avatar, Animation, About, Skills, Card3D, Languages (chart), News (projects carousel), BackgroundBeams, and Footer.
  - Sticky header with logo, theme toggle, and sheet-based navigation that links to internal sections and pages.

- `/projects` — **Projects**
  - Projects list with cards, screenshots, and links to repositories and/or live demos.

- `/resume` — **Resume**
  - Web version of the professional resume, including summary, experience, education, and tech stack.

- `/certifications` — **Certifications**
  - Certifications grid powered by `src/lib/certifications-data.ts`.
  - Each item opens a full certificate view in a modal (Dialog) on the same page, without navigating to a separate slug route.

---

## 🧩 Layout Components

- **Header** — `src/components/layout/header/Header.tsx`
  - Logo rendered with `next/image`.
  - `ThemeToggle` for switching between light and dark themes.
  - Main navigation using a `Sheet` (shadcn/ui) with a menu icon (`FiMenu`) and links to About, Projects, Resume, Certifications, and Contact.
  - _Social_ area with minimal icons (GitHub, LinkedIn, Instagram, WhatsApp).

- **Footer** — `src/components/layout/footer/Footer.tsx`
  - Konbini Code branding.
  - Quick links to Instagram and WhatsApp.
  - Floating button to scroll back to the top of the page.

---

## 🚀 Getting Started

Prerequisites:

- Node.js 18+
- Yarn 1.x (used in the project scripts)

### 1. Clone the repository

```bash
git clone https://github.com/fernandohiroshi/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

App will be available at: `http://localhost:3000`

### 4. Production build

```bash
yarn build
yarn start
```

---

## 🧪 Code Quality

### Lint

```bash
yarn lint
```

### Prettier

- Check formatting:

```bash
yarn prettiercheck
```

- Format files:

```bash
yarn prettierformat
```

---

## 🔐 Security Scripts

This portfolio includes basic security checks using `yarn audit`.

- Audit for vulnerabilities (moderate and above):

```bash
yarn security:audit
```

- Attempt to automatically fix vulnerabilities:

```bash
yarn security:fix
```

- Check only for high-severity vulnerabilities:

```bash
yarn security:check
```

> The critical vulnerability **CVE-2025-55182 (React2Shell)** was mitigated by updating the project to **Next.js 15.5.7** and `eslint-config-next 15.5.7`.

---

## 🌐 Deploy

This project is optimized for deployment on platforms like **Vercel**, leveraging:

- Automatic builds via `next build`.
- Image and asset optimization handled by Next.js.

Typical flow:

1. Commit your changes (including `package.json` and `yarn.lock`).
2. Push to the main branch of the GitHub repository.
3. Vercel picks up the push, builds, and deploys automatically.

---

## 📄 License & Usage

This codebase is for the **exclusive** use of Fernando Hiroshi.

> **Notice**: This project is protected by copyright. Any unauthorized use or reproduction of this code is prohibited.

## Development Tools

- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality and formatting
- [Tailwind Sorter](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - Class organization
- [class-variance-authority](https://cva.style/docs) - Component variant management
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind CSS classes without conflicts

## Project Structure

```bash
src
├── app
│   ├── layout.tsx   # Main layout wrapper
│   ├── page.tsx     # Homepage component
│   └── globals.css  # Global styles
├── components
│   ├── theme        # Theme-related components
│   ├── ui           # Reusable UI components
│   ├── view         # Page-specific components
│   │   ├── header   # Navigation components
│   │   ├── feature  # Feature sections
│   │   └── footer   # Footer components
├── lib              # Utility functions and helpers
```

## Features

- **Interactive UI** - Dynamic and engaging user interface
- **Dark/Light Mode** - Seamless theme switching
- **Notifications** - Using [React Hot Toast](https://react-hot-toast.com/)
- **Data Visualization** - Interactive charts with [Recharts](https://recharts.org/)

## Responsive Design

The portfolio is fully optimized for all device sizes:

- **Desktop** - Full-featured experience
- **Tablet** - Adapted layout for medium screens
- **Mobile** - Streamlined interface for small screens

![Portfolio Preview](/public/imgs/mobile.webp)

## Live Demo

Experience the portfolio live at [fernandohiroshi.com](https://fernandohiroshi.com/)
