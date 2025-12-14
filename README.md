# Frontend Challenge – Sword Health

React + TypeScript project created from scratch using Vite, following the **Atomic Design** methodology.

---

## 📋 What Was Implemented

✅ **React 19** with TypeScript  
✅ **Vite** – Modern and fast build tool  
✅ **ESLint** – Configured linting rules  
✅ **Prettier** – Automatic code formatting  
✅ **Vitest** – Testing framework  
✅ **Atomic Design** – Well-structured component architecture  
✅ **Base components**: Header, Footer, Layout, Button

---

## 🧬 Project Structure (Atomic Design)

```
src/
├── components/
│   ├── atoms/              Basic components
│   │   └── Button/         (Reusable button)
│   ├── organisms/          🦠 Complex sections
│   │   ├── Header/         (Application header)
│   │   └── Footer/         (Application footer)
│   └── templates/          📄 Page-level layouts
│       └── MainLayout/     (Main application layout)
├── pages/                  📱 Application pages
│   └── HomePage/
├── styles/                 🎨 Global styles
├── tests/                  🧪 Tests
└── App.tsx
```

### What is Atomic Design?

Atomic Design is a methodology for building design systems by breaking UI components into smaller, reusable parts::

- **Atoms**: Basic UI components (e.g. Button)
- **Organisms**: More complex UI sections (e.g. Header, Footer)
- **Templates**: Page-level layouts (e.g. MainLayout)
- **Pages**: Fully composed screens (e.g. HomePage)

**Benefits**: Improved reusability, scalability, and maintainability.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

---

## 📜 Available scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run lint:fix     # Automatically fix lint issues
npm run format       # Format code with Prettier
npm run test         # Run tests
```

---
