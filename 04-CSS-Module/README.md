# React CSS Modules - 

A beginner-friendly React mini project demonstrating **CSS Modules**, component-based styling, scoped class names, Flexbox, hover effects, and reusable UI components.

---

## 1. Project Overview

**Project Name:** StudentHub — Student Dashboard

**Technology Used:**
- React.js
- JavaScript (JSX)
- CSS Modules
- HTML5
- CSS3
- Vite

**Project Features:**
- Responsive-style navigation layout
- Student profile card
- Skill badges
- Hover animations
- Component-specific CSS styling
- Locally scoped CSS class names

**Objective:** Learn how to style React components using CSS Modules without causing class-name conflicts between different components.

---

## 2. What Are CSS Modules?

CSS Modules are a CSS styling technique in which class names and animation names are locally scoped to a particular component or stylesheet.

In a normal CSS file, a class such as `.card` may affect multiple elements across the application if the stylesheet is loaded globally.

With CSS Modules, a class such as `.card` is transformed into a unique generated class name during the build process.

For example:

```css
.card {
  background-color: black;
}
```

The generated class name may look similar to:

```text
StudentCard_card__a1b2c
```

The exact generated name depends on the build tool and configuration.

### Simple definition

CSS Modules allow us to write CSS separately for each React component while reducing unwanted styling conflicts.

---

## 3. Why Do We Use CSS Modules?

Consider an application with two components: `Navbar` and `StudentCard`.

Both components might need a class called `.title`.

### Normal CSS

```css
/* Navbar.css */
.title {
  color: blue;
}
```

```css
/* StudentCard.css */
.title {
  color: red;
}
```

If both stylesheets are loaded globally, the rules can conflict. The final result may depend on CSS specificity and stylesheet order.

### CSS Modules

```css
/* Navbar.module.css */
.title {
  color: blue;
}
```

```css
/* StudentCard.module.css */
.title {
  color: red;
}
```

In their respective JSX files:

```jsx
import styles from "./Navbar.module.css";

<h2 className={styles.title}>StudentHub</h2>
```

```jsx
import styles from "./StudentCard.module.css";

<h2 className={styles.title}>Jay Hingu</h2>
```

Both components can use `.title` independently because the build tool scopes their generated class names.

**Remember:** CSS Modules do not create separate CSS files automatically for every component at runtime. They provide locally scoped class names through build-tool support.

---

## 4. CSS Modules File Naming

CSS Modules are commonly identified by the `.module.css` extension.

Examples:

```text
Navbar.module.css
StudentCard.module.css
Profile.module.css
Login.module.css
Dashboard.module.css
```

A normal stylesheet might be named:

```text
Navbar.css
```

A CSS Module is named:

```text
Navbar.module.css
```

In a standard React project created with Vite, CSS Modules are supported out of the box.

---

## 5. How to Import CSS Modules in React

### Step 1: Create a CSS Module

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

### Step 2: Import the stylesheet

```jsx
import styles from "./Button.module.css";
```

The imported `styles` object maps the local class names to their generated class names.

### Step 3: Apply a class

```jsx
function Button() {
  return (
    <button className={styles.button}>
      Click Me
    </button>
  );
}

export default Button;
```

### Expected output

A blue button with white text and padding.

### Important syntax

```jsx
className={styles.button}
```

- `className` is React's JSX attribute for assigning CSS classes.
- `styles` is the imported CSS Module object.
- `button` is the class defined in `Button.module.css`.
- Curly braces allow JavaScript expressions inside JSX.

---

## 6. Accessing CSS Module Class Names

### A. Dot notation

Use dot notation when the class name is a valid JavaScript identifier.

```css
.card {
  padding: 20px;
}
```

```jsx
<div className={styles.card}>Student</div>
```

### B. Bracket notation

Use bracket notation for class names containing hyphens or other characters unsuitable for dot notation.

```css
.profile-card {
  padding: 20px;
}
```

```jsx
<div className={styles["profile-card"]}>
  Student
</div>
```

### C. Multiple classes

You can combine multiple CSS Module classes using template literals.

```jsx
<div className={`${styles.card} ${styles.active}`}>
  Student
</div>
```

This applies both `card` and `active` styles.

---

## 7. CSS Modules vs Normal CSS

| Feature | Normal CSS | CSS Modules |
|---|---|---|
| File example | `App.css` | `App.module.css` |
| Class scope | Usually global | Locally scoped |
| Class conflicts | More likely | Less likely |
| Import result | Loads stylesheet | Provides class-name mapping |
| Usage | `className="card"` | `className={styles.card}` |
| React-specific | No | Commonly used with React |
| Reusability | Possible | Possible |
| Browser support | Native CSS | Requires build-tool processing |

**Important:** CSS Modules are not a replacement for CSS. You still write ordinary CSS properties, selectors, media queries, and animations.

---

## 8. Advantages of CSS Modules

1. **Local scope:** Styles are scoped to the module by default.
2. **Fewer naming conflicts:** Components can reuse names such as `.card` and `.title`.
3. **Maintainability:** Each component can keep its styling in a dedicated file.
4. **Reusability:** React components can be reused with their associated styling.
5. **Easy debugging:** Component-specific stylesheet organization makes code easier to understand.
6. **Team collaboration:** Developers can style different components with fewer naming collisions.
7. **Regular CSS syntax:** You can use familiar CSS properties, pseudo-classes, and media queries.

---

## 9. Limitations of CSS Modules

1. You must import the stylesheet into the component that uses it.
2. Class names are accessed through the imported module object.
3. Global styles such as CSS resets require a separate approach.
4. Sharing design tokens across components may require CSS variables or other organization.
5. Dynamic styling based on complex runtime conditions may need conditional classes or inline styles.
6. Deeply nested component styling can still require careful CSS design.

CSS Modules reduce naming conflicts, but they do not automatically make a website responsive, accessible, or well-designed.

---

## 10. CSS Modules with Hover Effects

CSS Modules support normal CSS pseudo-classes.

```css
.button {
  background-color: #38bdf8;
  color: #0f172a;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #7dd3fc;
}
```

React component:

```jsx
<button className={styles.button}>
  View Profile
</button>
```

When the user moves the mouse over the button, its background color changes.

### Other supported CSS features

```css
.card:hover { }
.button:focus { }
.input:disabled { }
.item:first-child { }
```

You can also use media queries, CSS Grid, Flexbox, transitions, transforms, and keyframe animations.

---

## 11. CSS Modules with Conditional Classes

You can apply different classes depending on component state.

```jsx
import { useState } from "react";
import styles from "./Status.module.css";

function Status() {
  const [active, setActive] = useState(false);

  return (
    <button
      className={active ? styles.active : styles.inactive}
      onClick={() => setActive(!active)}
    >
      {active ? "Active" : "Inactive"}
    </button>
  );
}

export default Status;
```

```css
.active {
  background-color: green;
  color: white;
}

.inactive {
  background-color: gray;
  color: white;
}
```

The button switches styles when clicked.

This demonstrates that CSS Modules can work with React state and events.

---

## 12. CSS Modules and Global Styles

Sometimes an application needs global styling for the body, fonts, or page reset.

For example, in `index.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

Import it once in `main.jsx`:

```jsx
import "./index.css";
```

Use CSS Modules for component-specific styling:

```jsx
import styles from "./StudentCard.module.css";

<div className={styles.card}>Student</div>
```

**Best practice:** Use global CSS for application-wide defaults and CSS Modules for component-specific styles.

---

# Part 2: StudentHub Practical Explanation

## 13. Project Folder Structure

```text
studenthub/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   └── StudentCard/
│   │       ├── StudentCard.jsx
│   │       └── StudentCard.module.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

Each component has its own JSX file and CSS Module.

### Navbar component

**File:** `Navbar.jsx`

Responsibilities:
- Display the StudentHub logo.
- Show navigation links.
- Import `Navbar.module.css`.
- Apply scoped classes to the navigation elements.

**File:** `Navbar.module.css`

Responsibilities:
- Align the logo and links using Flexbox.
- Add background and text colors.
- Style navigation links.
- Add a hover color to the links.

### StudentCard component

**File:** `StudentCard.jsx`

Responsibilities:
- Display the student's initials.
- Show the student's name and role.
- Display skill badges.
- Render the View Profile button.

**File:** `StudentCard.module.css`

Responsibilities:
- Style the profile card.
- Create a circular avatar.
- Arrange skill badges using Flexbox.
- Add a shadow, rounded corners, and hover animation.
- Style the profile button.

### App component

**File:** `App.jsx`

Responsibilities:
- Import `Navbar` and `StudentCard`.
- Place the navigation bar at the top.
- Display the dashboard heading.
- Arrange the student card in the main area.

The project uses inline styles for the main layout in `App.jsx`. For a fully consistent CSS Modules approach, those styles could later be moved to an `App.module.css` file.

### main component entry point

**File:** `main.jsx`

Responsibilities:
- Import React's `StrictMode`.
- Import `createRoot` from `react-dom/client`.
- Render the `App` component into the HTML element with the ID `root`.

---

## 14. How the Project Works

The rendering flow is:

```text
main.jsx
   |
   v
 App.jsx
   |
   +------> Navbar.jsx
   |            |
   |            v
   |      Navbar.module.css
   |
   +------> StudentCard.jsx
                |
                v
         StudentCard.module.css
```

1. `main.jsx` renders the main `App` component.
2. `App.jsx` imports and renders the two child components.
3. `Navbar.jsx` imports its own CSS Module.
4. `StudentCard.jsx` imports its own CSS Module.
5. Vite processes the CSS Modules and generates scoped class names.
6. The browser displays the styled dashboard.

---

## 15. CSS Properties Used in the Practical

| Property | Purpose |
|---|---|
| `display: flex` | Creates a flexible layout |
| `justify-content` | Aligns items along the main axis |
| `align-items` | Aligns items along the cross axis |
| `gap` | Adds space between flex items |
| `padding` | Adds space inside an element |
| `margin` | Adds space outside an element |
| `border-radius` | Rounds corners |
| `box-shadow` | Adds a shadow |
| `font-weight` | Controls text thickness |
| `transition` | Makes style changes smoother |
| `transform` | Changes an element's position, size, or orientation |
| `:hover` | Applies styles when the pointer hovers over an element |
| `background-color` | Sets the background color |

---

## 16. How to Run the Project

Create a Vite React project:

```bash
npm create vite@latest studenthub -- --template react
cd studenthub
npm install
npm run dev
```

Create the component folders and files shown in the folder structure, then add the practical code.

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

### Expected result

The page displays:
- A dark navigation bar with the StudentHub logo.
- Home and Profile navigation links.
- A Student Dashboard heading.
- A centered student profile card.
- JavaScript-free hover styling for the navigation links, card, and button.

The View Profile button is currently visual only; it does not open a profile page.

---

# Part 3: Interview Questions and Answers

## Beginner Level

### Q1. What are CSS Modules?

**Answer:** CSS Modules are a CSS technique that scopes class names locally to a stylesheet or component, reducing conflicts with other CSS classes.

### Q2. Why do we use CSS Modules in React?

**Answer:** We use CSS Modules to organize component-specific styles and prevent class-name conflicts across components.

### Q3. What is the file extension of a CSS Module?

**Answer:** The common file extension is `.module.css`, for example `Navbar.module.css`.

### Q4. How do you import a CSS Module?

**Answer:**

```jsx
import styles from "./Navbar.module.css";
```

### Q5. How do you apply a CSS Module class in JSX?

**Answer:**

```jsx
<div className={styles.container}>Hello</div>
```

### Q6. What is `className` in React?

**Answer:** `className` is the JSX attribute used to assign CSS classes to elements. It serves the role of HTML's `class` attribute.

### Q7. Do CSS Modules use normal CSS syntax?

**Answer:** Yes. CSS Modules support regular CSS syntax, including properties, selectors, pseudo-classes, and media queries.

### Q8. Can two CSS Modules have the same class name?

**Answer:** Yes. For example, both `Navbar.module.css` and `StudentCard.module.css` can define `.title` without their local class names normally conflicting.

## Intermediate Level

### Q9. How do CSS Modules prevent class-name conflicts?

**Answer:** The build tool generates unique class names and maps the original local class names to those generated names.

### Q10. What does the `styles` object contain?

**Answer:** It contains mappings between the local CSS class names and the generated class names.

### Q11. What is the difference between `styles.card` and `"card"`?

**Answer:** `styles.card` refers to a CSS Module's generated class name, while `"card"` is a literal class name that normally refers to a global CSS class.

### Q12. Can we apply multiple CSS Module classes to one element?

**Answer:** Yes.

```jsx
<div className={`${styles.card} ${styles.active}`}>
  Active Card
</div>
```

### Q13. Can CSS Modules use hover effects?

**Answer:** Yes. CSS Modules support normal CSS pseudo-classes such as `:hover`, `:focus`, and `:disabled`.

### Q14. Can CSS Modules work with React state?

**Answer:** Yes. React state can determine which CSS Module class is applied to an element.

### Q15. How do you style the entire application globally?

**Answer:** Create a global CSS file, such as `index.css`, and import it in `main.jsx`. Use CSS Modules for component-specific styles.

### Q16. Do CSS Modules eliminate the need for CSS knowledge?

**Answer:** No. They change how class names are scoped and accessed, but developers still need to understand CSS properties, selectors, layout, and responsiveness.

## Practical and Scenario-Based Questions

### Q17. What happens if you forget to import a CSS Module?

**Answer:** The `styles` variable will not be available. If it is referenced without being defined, the component can fail with a JavaScript error.

### Q18. Why might `styles.card` be undefined?

**Answer:** Possible causes include a misspelled class name, an incorrect import path, or a mismatch between the CSS class and JSX reference.

### Q19. Why does StudentHub have separate folders for Navbar and StudentCard?

**Answer:** This organization keeps each component and its styling together, improving readability, maintainability, and reusability.

### Q20. Can a CSS Module style a child component's internal classes automatically?

**Answer:** No. A component's locally scoped classes are intended for that module. Parent components should normally pass props or use documented styling interfaces rather than depending on a child's generated class names.

### Q21. Are CSS Modules a CSS framework?

**Answer:** No. CSS Modules are a styling technique, not a framework like Bootstrap or Tailwind CSS.

### Q22. Are CSS Modules supported by Vite?

**Answer:** Yes. Vite supports CSS Modules through the `.module.css` naming convention without requiring an additional CSS Modules plugin for a standard React project.

### Q23. Can CSS Modules contain media queries?

**Answer:** Yes.

```css
.card {
  width: 300px;
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
```

### Q24. Can we use CSS variables with CSS Modules?

**Answer:** Yes. CSS custom properties can be defined globally or locally and reused in CSS declarations.

### Q25. When should we use CSS Modules?

**Answer:** They are especially useful in component-based applications where we want ordinary CSS with locally scoped class names and organized component-specific styles.

---


## 17. Final Summary

CSS Modules are useful for writing maintainable, component-specific CSS in React applications.

The essential pattern is:

1. Create a `.module.css` file.
2. Import it into the relevant component.
3. Access local classes through the imported object.
4. Apply them using `className`.
5. Keep global styles separate when needed.

**Most important syntax to remember:**

```jsx
import styles from "./Component.module.css";

function Component() {
  return <div className={styles.card}>Hello React</div>;
}

export default Component;
```

Once you understand this pattern, you can use CSS Modules in larger React projects such as dashboards, authentication pages, portfolio websites, and full-stack applications.

Happy Coding! 🚀