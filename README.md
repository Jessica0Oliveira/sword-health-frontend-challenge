# Frontend Challenge – Sword Health

React + TypeScript project implementing a **Hero Section** with rotating text overlay, following the **Atomic Design** methodology and **CSS Modules**.

---

## 📋 Challenge Overview

This project is divided into two exercises:

### **Exercise 1: Project From Scratch** ✅

- React + TypeScript setup with Vite
- ESLint, Prettier, and Testing configured
- Atomic Design structure with base components
- Main Layout with Header and Footer

**Available in git tag:** `exercise-1`

### **Exercise 2: Hero Section Implementation** ✅

- Hero Section with rotating text overlay
- CSS Modules for component styling
- Accessibility features (WCAG compliant)
- SEO optimization
- Performance optimization (Lighthouse score: 90+)
- Responsive design (mobile-first)

**Available in:** `main` branch

---

## 🎯 What Was Implemented

### **Core Technologies**

✅ **React 19** with TypeScript  
✅ **Vite** – Modern and fast build tool  
✅ **CSS Modules** – Scoped styling with type safety  
✅ **ESLint** – Configured linting rules  
✅ **Prettier** – Automatic code formatting  
✅ **Vitest + Testing Library** – Component testing

### **Architecture & Design**

✅ **Atomic Design** – Well-structured component architecture  
✅ **Responsive Design** – Mobile, tablet, and desktop layouts  
✅ **Accessibility** – ARIA labels, semantic HTML, keyboard navigation  
✅ **SEO** – Meta tags, Open Graph, proper heading hierarchy

### **Components**

✅ **Atoms**: Button (with variants and sizes)  
✅ **Molecules**: RotatingText (animated word cycling)  
✅ **Organisms**: Header, Footer, Hero Section  
✅ **Templates**: MainLayout

### **Pages**

✅ **HomePage**: Main landing page with Hero Section

---

## Hero Section Features

### **Design**

- Two-column layout (text left, image right)
- Rotating text overlay on image with 7 words
- Smooth opacity transitions between active/inactive words
- Responsive breakout layout (image edge-to-edge on mobile)

### **Accessibility**

- Semantic HTML (`<section>`, `<main>`, `<nav>`)
- ARIA labels and live regions
- Proper heading hierarchy
- Descriptive alt text for images
- Keyboard navigation support

### **Performance**

- Image preload with `fetchpriority="high"`
- Optimized for Largest Contentful Paint (LCP)
- Lighthouse Performance Score: **99**
- Lighthouse Accessibility Score: **95**
- Lighthouse Best Practices: **100**
- Lighthouse SEO: **92**

### **Rotating Text**

- All 7 words visible simultaneously
- Active word: `opacity: 1`, `scale(1)`
- Inactive words: `opacity: 0.3`, `scale(0.95)`
- Smooth transitions every 3 seconds
- Distributed evenly from top to bottom of image

---

## Project Structure (Atomic Design)

```
src/
├── components/
│   ├── atoms/                  # Basic building blocks
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── Button.module.css
│   ├── molecules/              # Simple combinations
│   │   └── RotatingText/
│   │       ├── RotatingText.tsx
│   │       └── RotatingText.module.css
│   ├── organisms/              # Complex sections
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Hero/
│   │       ├── Hero.tsx
│   │       └── Hero.module.css
│   └── templates/              # Page-level layouts
│       └── MainLayout/
├── pages/                      # Application pages
│   └── HomePage/
├── styles/                     # Global styles
│   └── global.css              # CSS variables, reset, utilities
├── tests/                      # Component tests
│   ├── Button.test.tsx
│   └── Hero.test.tsx
└── App.tsx
```

### **What is Atomic Design?**

Atomic Design is a methodology for building design systems by breaking UI components into smaller, reusable parts:

- **Atoms**: Basic UI elements (e.g., Button, Input)
- **Molecules**: Simple combinations of atoms (e.g., RotatingText)
- **Organisms**: Complex UI sections (e.g., Header, Footer, Hero)
- **Templates**: Page-level layouts (e.g., MainLayout)
- **Pages**: Fully composed screens (e.g., HomePage)

**Benefits**: Improved reusability, scalability, and maintainability.

---

## CSS Modules

This project uses **CSS Modules** for component styling:

### **Why CSS Modules?**

✅ **Scoped styles** – No global conflicts  
✅ **Type-safe** – Vite generates TypeScript definitions  
✅ **Performance** – Better browser caching than CSS-in-JS  
✅ **Simple** – Just CSS with automatic scoping  
✅ **Co-located** – Styles live next to components

### **Example:**

```tsx
// Button.tsx
import styles from './Button.module.css';

<button className={styles.primary}>Click me</button>;
```

```css
/* Button.module.css */
.primary {
  background: var(--color-primary);
  /* Generates: _primary_abc123 */
}
```

### **Global Styles**

Global variables, resets, and utilities are in `src/styles/global.css`:

- CSS custom properties
- Box-sizing reset
- Base typography
- Container utility classes

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **1. Install dependencies**

```bash
npm install
```

### **2. Start development server**

```bash
npm run dev
```

### **3. Open in browser**

Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (outputs to /dist)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run lint:fix     # Automatically fix lint issues
npm run format       # Format code with Prettier
npm run test         # Run tests with Vitest
```

---

## 🧪 Testing

Tests are written with **Vitest** and **React Testing Library**.

### **Run tests**

```bash
npm run test
```

### **Test Coverage**

- ✅ Button component (variants, sizes, interactions)
- ✅ Hero Section (heading, description, image, rotating words)
- ✅ Accessibility attributes

### **Testing Philosophy**

Focus on **behavior over implementation**:

- Test what users see and interact with
- Use semantic queries (`getByRole`, `getByText`)
- Verify accessibility attributes

---

## 📱 Responsive Design

### **Breakpoints**

| Breakpoint  | Width         | Layout                                          |
| ----------- | ------------- | ----------------------------------------------- |
| **Mobile**  | < 640px       | Single column, stacked layout, image full-width |
| **Tablet**  | 640px - 968px | Single column, image above text                 |
| **Desktop** | > 968px       | Two columns, text left, image right             |

### **Key Responsive Features**

- ✅ Image goes edge-to-edge on mobile/tablet
- ✅ Image appears above text on mobile (CSS `order`)
- ✅ Text centered on mobile, left-aligned on desktop
- ✅ Button centered on mobile, left-aligned on desktop
- ✅ Rotating words scale down on smaller screens
- ✅ Flexible typography with `clamp()`

---

## ♿ Accessibility Features

- ✅ Semantic HTML (`<section>`, `<main>`, `<nav>`, `<header>`, `<footer>`)
- ✅ ARIA labels (`aria-label`, `aria-hidden`, `aria-live`)
- ✅ Proper heading hierarchy (`<h1>` in Hero)
- ✅ Descriptive alt text for images
- ✅ Keyboard navigation support
- ✅ Focus indicators on interactive elements
- ✅ Color contrast ratios meet WCAG AA standards

**Lighthouse Accessibility Score: 95**

---

## 🔍 SEO Optimization

### **Meta Tags**

```html
<!-- Basic Meta -->
<title>Sword Move - What Makes You Move?</title>
<meta name="description" content="..." />

<!-- Open Graph (Social Media) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

### **Best Practices**

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Descriptive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Alt text for all images

**Lighthouse SEO Score: 92**

---

## ⚡ Performance Optimization

### **Techniques Applied**

1. **Image Preload**

   ```html
   <link rel="preload" as="image" href="/hero-image.jpg" fetchpriority="high" />
   ```

2. **fetchpriority Attribute**

   ```tsx
   <img src="/hero-image.jpg" fetchPriority="high" />
   ```

3. **CSS Modules** (Better caching than CSS-in-JS)

4. **Vite Build Optimization** (Tree-shaking, code splitting, minification)

### **Lighthouse Scores**

- Performance: **99**
- Accessibility: **95**
- Best Practices: **100**
- SEO: **92**

---

## 🏷️ Git Tags

### **Exercise 1**

```bash
git checkout exercise-1
```

View the initial project setup with base components.

### **Exercise 2** (Latest)

```bash
git checkout main
```

View the complete Hero Section implementation.

---

## 🛠️ Technology Stack

| Category        | Technology                     |
| --------------- | ------------------------------ |
| **Framework**   | React 19                       |
| **Language**    | TypeScript 5                   |
| **Build Tool**  | Vite 7                         |
| **Styling**     | CSS Modules                    |
| **Linting**     | ESLint 9 (Flat Config)         |
| **Formatting**  | Prettier 3                     |
| **Testing**     | Vitest + React Testing Library |
| **Methodology** | Atomic Design                  |

---

## 📚 Design Decisions

### **Why CSS Modules over Styled Components?**

- ✅ Simpler and more performant
- ✅ Better browser caching (static CSS files)
- ✅ Type-safe with Vite auto-generation
- ✅ Natural evolution from regular CSS
- ✅ No runtime overhead

### **Why Vite over Create React App?**

- ✅ Much faster dev server (ESM-native)
- ✅ Instant Hot Module Replacement (HMR)
- ✅ Smaller bundle sizes
- ✅ Modern standard (CRA is deprecated)

### **Why Atomic Design?**

- ✅ Clear component hierarchy
- ✅ High reusability
- ✅ Easy to scale

---

## 📄 License

This project is for evaluation purposes only.

---

## 👤 Author

**Candidate for Frontend Position at Sword Health**

Challenge completed with:

- ✅ React + TypeScript
- ✅ CSS Modules
- ✅ Atomic Design
- ✅ Accessibility (WCAG)
- ✅ Performance optimization
- ✅ Responsive design
- ✅ Testing

---
