# Module 3: React Props – Job Opening Cards

## 📌 About the practical

This practical is part of my React JS learning journey. In this module, I learned how to use **Props in React** to pass data from a parent component to a child component.

I created a Job Opening Cards UI that displays job opportunities from 12 different companies. Each card contains company information, job role, employment type, experience level, shift timing, salary, and location.

The project uses reusable components to display different job details dynamically.

## 🛠️ Technologies Used

- React JS
- JavaScript (ES6)
- HTML / JSX
- CSS
- Lucide React Icons
- Vite

## 📂 Project Structure

```text
3.Props/
├── src/
│   ├── Components/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── README.md
```

## ✨ Features

- Displays 12 job opening cards from different companies.
- Uses an array of objects to store job information.
- Passes job details from `App.jsx` to `Card.jsx` using props.
- Uses the JavaScript `.map()` method to render multiple cards.
- Displays company logos, job titles, salary, and locations.
- Shows job tags such as Full Time and Senior Level.
- Displays Morning and Night shifts with different icons.
- Uses Lucide React icons for the bookmark, shift, location, and apply sections.
- Uses reusable React components to keep the code organized.

## 📋 Sample Job Data

Each job is represented by an object containing properties such as:

```javascript 
{
  id: 1,
  dateOfPublish: "15 Oct, 2026",
  companyName: "Google",
  role: "Senior UI/UX Designer",
  logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  tag1: "Full time",
  tag2: "Senior level",
  shift: "Morning",
  salaryPerHour: "$65/hour",
  location: "California, CA"
}
```

The project contains 12 job objects with different company and job details.

## ⚛️ Important React Concepts Used

### 1. Props

Props are used to pass data from a parent component to a child component.

In this project, `App.jsx` passes job information to `Card.jsx`.

Example:

```jsx
<Card
  companyName={elem.companyName}
  role={elem.role}
  location={elem.location}
/>
```

Inside `Card.jsx`, the data is accessed using:

```jsx
<h4>{props.companyName}</h4>
<h2>{props.role}</h2>
```

### 2. Functional Components

The project uses functional components such as `App` and `Card`.

The `Card` component is reusable and displays job details received through props.

### 3. Array of Objects

Job details are stored in an array of objects. Each object represents one job opening and contains properties such as company name, role, salary, and location.

### 4. The `.map()` Method

The `.map()` method iterates over the jobs array and returns a card for each job.

```jsx
{jobs.map(function (elem, idx) {
  return (
    <div key={idx}>
      <Card
        companyName={elem.companyName}
        role={elem.role}
        location={elem.location}
      />
    </div>
  );
})}
```

This avoids writing separate JSX markup for every job card.

### 5. Conditional Rendering

The project uses a conditional expression to display a different shift icon depending on whether the shift is Morning or Night.

```jsx
{props.shift === "Morning" ? (
  <Sun size={18} />
) : (
  <Moon size={18} />
)}
```

### 6. Dynamic CSS Classes

Template literals and conditional expressions are used to add the `night` CSS class when the shift is Night.

```jsx
<div className={`shift ${props.shift === "Night" ? "night" : ""}`}>
```

### 7. React Keys

The `key` attribute helps React identify elements when rendering lists.

```jsx
<div key={idx}>
```

Using a unique job ID as the key is preferable:

```jsx
<div key={elem.id}>
```

## 🎯 Important Interview Questions

**Q1. What are props in React?**

Props are inputs passed from a parent component to a child component. They allow components to receive and display different data.

**Q2. Why do we use props?**

Props make components reusable by allowing the same component to display different data.

**Q3. What is the difference between props and state?**

Props are passed into a component by its parent, while state is data managed within a component using React state features.

**Q4. What is a reusable component?**

A reusable component is a component that can be used multiple times with different data. In this project, `Card.jsx` displays multiple job cards using props.

**Q5. What is the `.map()` method used for in React?**

The `.map()` method creates a new array from an existing array. In React, it is commonly used to render lists of components from data.

**Q6. Why is the `key` prop important?**

Keys help React identify list items when they are added, removed, or reordered.

**Q7. Can we modify props inside a child component?**

Props are read-only. A child component should not directly modify the props it receives.

**Q8. What is JSX?**

JSX is a JavaScript syntax extension that allows developers to write HTML-like markup inside JavaScript code.

**Q9. What is conditional rendering?**

Conditional rendering displays different content depending on a condition, such as showing a Sun icon for a Morning shift and a Moon icon for a Night shift.

**Q10. What is component composition?**

Component composition means combining smaller components to build a larger user interface.

## 🚀 How to Run the Project

1. Clone the repository or open the project folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Lucide React if it is not already installed:

   ```bash
   npm install lucide-react
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## 📚 Learning Outcomes

After completing this module, I learned how to:

- Pass data between React components using props.
- Create reusable components.
- Store related data in arrays of objects.
- Render multiple components using `.map()`.
- Use conditional rendering and dynamic CSS classes.
- Use keys when rendering lists.
- Organize React projects using separate component files.

## 👨‍💻 Conclusion

This project helped me understand how React props make components reusable and how arrays of objects and `.map()` can be used to display dynamic data. It also provided practice with JSX, conditional rendering, and component composition.

This module is an important step in my React JS learning journey before moving on to topics such as event handling, state management, and hooks.
