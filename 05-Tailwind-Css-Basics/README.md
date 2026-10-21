# 🚀 Module 05 — Tailwind CSS Basics with React


A practical learning module demonstrating how to build modern, responsive user interfaces using **React.js and Tailwind CSS**.

This module focuses on utility-first styling, responsive layouts, reusable components, props, JavaScript array rendering, icons, and interactive UI effects.

🔗 **GitHub Repository:** [React Learning & Projects](https://github.com/HinguJay27/React)

📂 **Module 05:** [05-Tailwind-Css-Basics](https://github.com/HinguJay27/React/tree/main/05-Tailwind-Css-Basics)

---

## 📚 Table of Contents

1. Introduction to Tailwind CSS
2. Why Tailwind CSS?
3. Utility-First CSS
4. Colors and Backgrounds
5. Typography
6. Spacing and Sizing
7. Borders, Radius and Shadows
8. Flexbox and Grid
9. Responsive Design
10. Hover Effects and Transitions
11. Gradients and Visual Effects
12. React Components and Props
13. Rendering Lists with `map()`
14. Reusable Components
15. Icons in React
16. Tailwind CSS v4 Setup
17. Project Explanation
18. Important Interview Questions and Answers
19. Practice Tasks
20. Conclusion

---

## 1. 🎯 Introduction to Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework that allows developers to style HTML elements directly using predefined CSS utility classes.

Instead of writing a separate CSS rule for every element, we can combine utility classes in JSX.

### Traditional CSS

```css
.button {
  background-color: #0891b2;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}
```

```jsx
<button className="button">
  Get Started
</button>
```

### Tailwind CSS

```jsx
<button className="rounded-lg bg-cyan-600 px-6 py-3 text-white">
  Get Started
</button>
```

Both approaches style a button, but Tailwind lets us compose many styles directly in the component.

### Why learn Tailwind with React?

- 🎨 Build attractive interfaces quickly.
- 📱 Create responsive layouts.
- 🧩 Style reusable React components.
- ⚡ Reduce the need for separate CSS files.
- 🛠️ Maintain consistent spacing, colors, and typography.

---

## 2. 🧠 Utility-First CSS

Utility-first means using small, single-purpose classes to construct a complete design.

| Utility       | Purpose                        |
| ------------- | ------------------------------ |
| `flex`        | Enables Flexbox                |
| `grid`        | Enables CSS Grid               |
| `hidden`      | Hides an element               |
| `block`       | Displays an element as a block |
| `text-center` | Centers text                   |
| `font-bold`   | Makes text bold                |
| `rounded-lg`  | Adds rounded corners           |
| `shadow-lg`   | Adds a large shadow            |
| `p-4`         | Adds padding                   |
| `mt-4`        | Adds top margin                |

### Example

```jsx
function Welcome() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-slate-900">
        Welcome to React
      </h1>

      <p className="mt-2 text-slate-600">
        Learning Tailwind CSS step by step.
      </p>
    </div>
  );
}

export default Welcome;
```

**Explanation:**

- `rounded-xl` rounds the card corners.
- `bg-white` sets a white background.
- `p-6` adds internal spacing.
- `shadow-lg` creates a shadow.
- `text-2xl` increases the heading size.
- `mt-2` adds spacing above the paragraph.

---

## 3. 🎨 Colors and Backgrounds

Tailwind provides utility classes for text colors, background colors, and other color-related styles.

### Common classes

| Class           | Purpose               |
| --------------- | --------------------- |
| `bg-white`      | White background      |
| `bg-black`      | Black background      |
| `bg-cyan-600`   | Cyan background       |
| `bg-slate-900`  | Dark slate background |
| `text-white`    | White text            |
| `text-gray-500` | Gray text             |
| `text-blue-600` | Blue text             |

### Example

```jsx
<div className="bg-slate-900 p-6 text-white">
  <h2 className="text-cyan-400">Tailwind CSS</h2>
  <p className="text-slate-300">
    Build modern React interfaces.
  </p>
</div>
```

**Key concept:** Color utilities let us change text and backgrounds without writing separate CSS declarations.

---

## 4. ✍️ Typography

Typography utilities control text size, font weight, alignment, and line height.

| Class             | Purpose             |
| ----------------- | ------------------- |
| `text-sm`         | Small text          |
| `text-base`       | Base text size      |
| `text-xl`         | Extra-large text    |
| `text-3xl`        | Larger heading      |
| `font-medium`     | Medium font weight  |
| `font-semibold`   | Semibold text       |
| `font-bold`       | Bold text           |
| `text-center`     | Center-aligned text |
| `uppercase`       | Uppercase text      |
| `leading-relaxed` | Relaxed line height |

### Example

```jsx
<div>
  <h1 className="text-3xl font-bold tracking-tight">
    Our Services
  </h1>

  <p className="mt-3 text-base leading-relaxed text-slate-500">
    Discover useful services designed for your needs.
  </p>
</div>
```

---

## 5. 📏 Spacing and Sizing

Spacing utilities help control padding, margins, width, height, and gaps.

### Padding and margin

| Class     | Purpose                      |
| --------- | ---------------------------- |
| `p-4`     | Padding on all sides         |
| `px-6`    | Horizontal padding           |
| `py-3`    | Vertical padding             |
| `m-4`     | Margin on all sides          |
| `mt-4`    | Top margin                   |
| `mb-4`    | Bottom margin                |
| `mx-auto` | Automatic horizontal margins |
| `gap-4`   | Gap between flex/grid items  |

### Sizing

| Class          | Purpose                        |
| -------------- | ------------------------------ |
| `w-full`       | Full available width           |
| `w-1/2`        | Half width                     |
| `max-w-md`     | Maximum width preset           |
| `min-h-screen` | Minimum height of the viewport |
| `h-16`         | Fixed height utility           |
| `max-w-7xl`    | Large maximum-width preset     |

### Example

```jsx
<div className="mx-auto max-w-5xl px-6 py-10">
  <h2 className="mb-4 text-2xl font-bold">
    Featured Services
  </h2>

  <p className="max-w-2xl text-slate-600">
    Explore the available services.
  </p>
</div>
```

---

## 6. 🟦 Borders, Radius and Shadows

These utilities improve the visual appearance of cards, buttons, inputs, and containers.

| Class              | Purpose                     |
| ------------------ | --------------------------- |
| `border`           | Adds a border               |
| `border-slate-200` | Sets the border color       |
| `rounded-md`       | Medium rounded corners      |
| `rounded-xl`       | Extra-large rounded corners |
| `rounded-full`     | Fully rounded shape         |
| `shadow-sm`        | Small shadow                |
| `shadow-md`        | Medium shadow               |
| `shadow-xl`        | Extra-large shadow          |

### Example

```jsx
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
  <h2 className="text-xl font-semibold">
    Student Profile
  </h2>
  <p className="mt-2 text-slate-500">
    React developer
  </p>
</div>
```

---

## 7. 📐 Flexbox and Grid

Tailwind provides utility classes for CSS Flexbox and Grid layouts.

### Flexbox

```jsx
<div className="flex items-center justify-between gap-4">
  <h2 className="font-bold">StudentHub</h2>
  <button className="rounded-lg bg-cyan-600 px-4 py-2 text-white">
    Sign In
  </button>
</div>
```

- `flex` creates a flex container.
- `items-center` aligns items on the cross axis.
- `justify-between` distributes items along the main axis.
- `gap-4` adds spacing between items.

### Grid

```jsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-xl bg-slate-100 p-5">Card 1</div>
  <div className="rounded-xl bg-slate-100 p-5">Card 2</div>
  <div className="rounded-xl bg-slate-100 p-5">Card 3</div>
</div>
```

This layout displays:

- One column on small screens.
- Two columns at the `md` breakpoint.
- Three columns at the `lg` breakpoint.

---

## 8. 📱 Responsive Design

Tailwind follows a mobile-first responsive approach.

Unprefixed utilities apply by default. Breakpoint-prefixed utilities apply at their corresponding breakpoint and above.

Common breakpoint prefixes include:

| Prefix | Default minimum width |
| ------ | --------------------: |
| `sm:`  |                 640px |
| `md:`  |                 768px |
| `lg:`  |                1024px |
| `xl:`  |                1280px |
| `2xl:` |                1536px |

### Example

```jsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-lg bg-cyan-100 p-5">One</div>
  <div className="rounded-lg bg-cyan-100 p-5">Two</div>
  <div className="rounded-lg bg-cyan-100 p-5">Three</div>
</div>
```

**Important:** Responsive design is not only about changing columns. Navigation, images, spacing, text, and buttons may also need responsive adjustments.

---

## 9. 🖱️ Hover Effects and Transitions

State variants allow us to style elements when users interact with them.

### Common variants

- `hover:` — pointer hover
- `focus:` — keyboard or input focus
- `active:` — active interaction state
- `disabled:` — disabled state

### Example

```jsx
<button className="rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-cyan-700">
  Explore More
</button>
```

- `hover:bg-cyan-700` changes the background on hover.
- `transition-colors` transitions color-related properties.
- `duration-300` sets a 300-millisecond transition duration.

### Card hover effect

```jsx
<div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
  <h3 className="font-bold">Reusable Card</h3>
  <p className="mt-2 text-slate-600">A simple card component.</p>
</div>
```

---

## 10. 🌈 Gradients and Visual Effects

Tailwind supports gradients, opacity, transforms, and other visual effects.

### Gradient example

```jsx
<div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
  <h2 className="text-2xl font-bold">Build Better Interfaces</h2>
  <p className="mt-2">Practice React with Tailwind CSS.</p>
</div>
```

Useful utilities:

| Class              | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `bg-gradient-to-r` | Horizontal gradient direction              |
| `from-cyan-500`    | Starting gradient color                    |
| `to-blue-600`      | Ending gradient color                      |
| `opacity-50`       | 50% opacity                                |
| `scale-105`        | Scales an element                          |
| `translate-y-1`    | Moves an element vertically                |
| `transition-all`   | Transitions multiple animatable properties |

Use effects carefully so that the interface remains readable and accessible.

---

## 11. 🧩 React Components and Props

React components help divide a user interface into reusable pieces.

For example, a service website might contain:

- Navbar
- Hero section
- Service card
- Services grid
- Footer

### What are props?

Props are values passed from a parent component to a child component.

```jsx
function ServiceCard({ title, description }) {
  return (
    <div className="rounded-xl border p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
```

Usage:

```jsx
<ServiceCard
  title="Web Development"
  description="Build modern websites."
/>
```

**Benefits:**

- Reuse the same component.
- Keep code organized.
- Pass different data into the same UI.
- Reduce repetitive JSX.

---

## 12. 🔁 Rendering Lists with `map()`

JavaScript's `map()` method creates a new array by transforming each item in an existing array.

In React, it is commonly used to render repeated components.

### Example

```jsx
const services = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "UI/UX Design" },
  { id: 3, name: "Cloud Solutions" },
];

function Services() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="rounded-xl bg-slate-100 p-5"
        >
          {service.name}
        </div>
      ))}
    </div>
  );
}

export default Services;
```

### Explanation

1. `services` stores the data.
2. `map()` iterates over the array and returns JSX for each item.
3. `service.name` displays the current item's name.
4. `key={service.id}` gives each sibling element a stable identity for React's reconciliation.

**Important:** Prefer stable, unique IDs as keys instead of array indexes when items can be added, removed, or reordered.

---

## 13. 🧱 Reusable Components

A reusable component can display different data without duplicating its structure.

For example, one `ServiceCard` component can represent several services.

```jsx
function ServiceCard({ title, description }) {
  return (
    <article className="rounded-xl border border-slate-200 p-5 transition-shadow hover:shadow-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </article>
  );
}
```

Render multiple cards:

```jsx
{services.map((service) => (
  <ServiceCard
    key={service.id}
    title={service.title}
    description={service.description}
  />
))}
```

This combines **React props + reusable components + `map()` + Tailwind styling**.

---

## 14. ✨ Icons in React

Icons improve the clarity and visual appearance of buttons, navigation bars, and service cards.

This project uses Lucide-style icons in its previously shared component structure.

Example with `lucide-react`:

```bash
npm install lucide-react
```

```jsx
import { Code2, Palette, Cloud } from "lucide-react";

function ServiceIcons() {
  return (
    <div className="flex gap-5">
      <Code2 className="h-6 w-6 text-cyan-600" />
      <Palette className="h-6 w-6 text-purple-600" />
      <Cloud className="h-6 w-6 text-blue-600" />
    </div>
  );
}

export default ServiceIcons;
```

- `h-6 w-6` sets icon dimensions.
- `text-cyan-600` sets the icon color through the CSS `color` property.
- Icons can be placed inside buttons, cards, or navigation items.

---

## 15. ⚙️ Tailwind CSS v4 Setup

A Vite project can use Tailwind CSS v4 through the official Vite integration.

Install the packages:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure the Vite plugin in `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Import Tailwind in `src/index.css`:

```css
@import "tailwindcss";
```

Ensure the stylesheet is imported in `src/main.jsx`:

```jsx
import "./index.css";
```

Start the development server:

```bash
npm run dev
```

**Version note:** This setup is for Tailwind CSS v4. Tailwind CSS v3 commonly uses a different configuration involving `tailwind.config.js` and `@tailwind` directives.

---

# 🛠️ Part 2 — Module 05 Practical Project

## 16. Project Overview

The practical in this module applies Tailwind CSS concepts through React components and section-based layouts.

The previously shared project structure includes two main sections:

### Section 1 — Responsive UI Practice

Topics demonstrated in this section include:

- Responsive layouts
- Reusable UI components
- Props and list rendering
- Image cards
- Status badges
- Horizontal scrolling on mobile
- Gradient backgrounds
- Hover effects
- Lucide icons

### Section 2 — Services UI

Previously shared files:

```text
src/
└── components/
    └── Section2/
        ├── Section2.jsx
        ├── Section2Navbar.jsx
        ├── Section2Content.jsx
        └── ServiceCard.jsx
```

This section focuses on a service-oriented interface using a dark cyan visual theme.

**Section2.jsx**

- Acts as the parent section component.
- Combines the navigation and content components.

**Section2Navbar.jsx**

- Displays the section's navigation or branding.
- Uses Tailwind utility classes for layout, spacing, and colors.

**Section2Content.jsx**

- Organizes the services section.
- Uses service data and maps it into reusable cards.

**ServiceCard.jsx**

- Represents an individual service.
- Receives data through props.
- Uses utility classes for styling, spacing, and hover effects.

The exact current file contents should be checked against the repository before treating this as a line-by-line code walkthrough.

## 17. Concepts Practised in the Project

| Concept             | How it is used                                            |
| ------------------- | --------------------------------------------------------- |
| React components    | Divides the interface into manageable pieces              |
| Props               | Passes service or card data                               |
| `map()`             | Renders multiple items from arrays                        |
| Tailwind utilities  | Styles components without writing a class for each design |
| Flexbox             | Aligns navigation and card content                        |
| CSS Grid            | Creates responsive card layouts                           |
| Responsive prefixes | Adjusts layouts for different screen sizes                |
| Hover states        | Adds interactive visual feedback                          |
| Gradients           | Creates visual backgrounds                                |
| Lucide icons        | Adds visual indicators                                    |
| Component reuse     | Avoids repeating the same card markup                     |

### Project rendering flow

```text
App
 └── Section
      ├── Navbar
      └── Content
           └── Services Array
                └── map()
                     └── ServiceCard
                          ├── Icon
                          ├── Title
                          └── Description
```

This is a conceptual rendering flow; the exact root component and data shape depend on the current implementation.

## 18. ▶️ How to Run the Project

Clone the repository:

```bash
git clone https://github.com/HinguJay27/React.git
```

Move into the project folder:

```bash
cd React/05-Tailwind-Css-Basics
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

If the module is organized as part of a shared Vite project rather than a standalone application, run the commands from the directory containing its `package.json` instead.

---

# 🎤 Part 3 — Important Interview Questions and Answers

## Beginner Questions

### Q1. What is Tailwind CSS?

**Answer:** Tailwind CSS is a utility-first CSS framework that provides predefined classes to style HTML elements directly in JSX or markup.

### Q2. What is utility-first CSS?

**Answer:** Utility-first CSS means composing designs using small classes that each perform a specific styling task, such as adding padding, changing colors, or creating a grid.

### Q3. What is the difference between Tailwind CSS and normal CSS?

**Answer:** Normal CSS usually defines styles in separate rules. Tailwind provides utility classes that can be combined directly on elements. Both ultimately produce CSS styling.

### Q4. What is `bg-cyan-600`?

**Answer:** It is a Tailwind utility class that applies a predefined cyan background color.

### Q5. What does `p-4` mean?

**Answer:** It applies padding using Tailwind's spacing scale. In the default spacing scale, `p-4` corresponds to 1rem, typically 16 pixels.

### Q6. What is the difference between `px-4` and `py-4`?

**Answer:** `px-4` applies horizontal padding, while `py-4` applies vertical padding.

### Q7. What does `rounded-lg` do?

**Answer:** It applies a predefined border radius to round an element's corners.

### Q8. What is the purpose of `shadow-lg`?

**Answer:** It adds a large box shadow to an element.

## Intermediate Questions

### Q9. What does `md:grid-cols-2` mean?

**Answer:** At the medium breakpoint and above, the grid uses two columns. Below that breakpoint, other applicable grid utilities determine the layout.

### Q10. What does `hover:bg-blue-700` do?

**Answer:** It changes an element's background color to the specified blue shade when the hover state applies.

### Q11. What is the difference between Flexbox and Grid?

**Answer:** Flexbox is primarily designed for one-dimensional layouts, arranging items along a row or column. Grid is designed for two-dimensional layouts involving rows and columns.

### Q12. What is mobile-first responsive design?

**Answer:** It means designing the default layout for smaller screens and adding breakpoint-prefixed utilities for larger screens.

### Q13. What are React props?

**Answer:** Props are read-only inputs passed from a parent component to a child component. They allow components to display different data while reusing the same structure.

### Q14. Why do we use `map()` in React?

**Answer:** We use `map()` to transform array data into JSX elements, such as rendering multiple service cards from a data array.

### Q15. Why does React need a `key` prop when rendering lists?

**Answer:** A key helps React identify individual sibling elements between renders, improving reconciliation when the list changes.

### Q16. What is a reusable component?

**Answer:** A reusable component is a component that can be rendered in different places with different props instead of duplicating the same markup.

### Q17. What is the purpose of `transition-colors`?

**Answer:** It enables transitions for color-related properties, making changes such as hover background colors smoother.

### Q18. What is the purpose of `@tailwindcss/vite`?

**Answer:** It is the official Vite integration package for Tailwind CSS v4, allowing Tailwind to work with Vite's development and build process.

## Practical Questions

### Q19. How can you create a responsive three-column card layout?

**Answer:**

```jsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Render cards here */}
</div>
```

This produces one column by default, two columns at medium widths, and three columns at large widths.

### Q20. How do you pass a title into a reusable card?

**Answer:**

```jsx
function Card({ title }) {
  return <h2 className="text-xl font-bold">{title}</h2>;
}
```

Use it like this:

```jsx
<Card title="Web Development" />
```

### Q21. How do you render a list of cards?

**Answer:**

```jsx
{services.map((service) => (
  <ServiceCard key={service.id} service={service} />
))}
```

The `ServiceCard` component receives each service object through props.

### Q22. How can you add a hover animation to a card?

**Answer:**

```jsx
<div className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
  Card content
</div>
```

### Q23. Does Tailwind CSS replace React?

**Answer:** No. React manages the UI structure, components, props, state, and rendering. Tailwind CSS handles styling.

### Q24. Does Tailwind CSS replace JavaScript?

**Answer:** No. JavaScript still handles application logic, event handlers, calculations, data transformations, and interactions.

### Q25. What are the benefits of using Tailwind CSS with React?

**Answer:** It allows rapid UI development, consistent styling, responsive layouts, reusable components, and fewer separate component-specific CSS rules.

---


## 🎯 Final Summary

In Module 05, the key goal is to combine **React component development with Tailwind CSS styling**.

The most important concepts to remember are:

1. Utility-first CSS
2. Tailwind colors, typography, spacing, and sizing
3. Flexbox and Grid
4. Responsive breakpoints
5. Hover states and transitions
6. React props
7. Array rendering with `map()`
8. Reusable components
9. Lucide icons
10. Tailwind CSS v4 setup with Vite

**Learning outcome:** You should be able to create a responsive React interface, style it using Tailwind utility classes, and render repeated UI elements using reusable components and data arrays.

---
💻 Keep Practising • Keep Building • Keep Learning 🚀
