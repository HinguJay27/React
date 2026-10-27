
# 🎓 React Module 7: State and Events


  React Student Dashboard — Practical Project
  Learn React Hooks, useState, event handling, and state management through a real-world project.


---

## 📌 About This Module

Module 7 focuses on **State and Events in React**. These concepts help us build interactive applications that respond to user actions.

In this module, we learn how to store data in a component, update that data, handle user interactions, and display updated information without manually manipulating the DOM.

### 🎯 Learning Objectives

- Understand React Hooks and the `useState` Hook.
- Learn how React state works.
- Handle click and input events.
- Update objects and arrays in state.
- Use functional state updates.
- Understand state mutation and immutability.
- Learn the concept of lifting state up.
- Build an interactive Student Dashboard.

---

# 1. 🪝 What Are React Hooks?

**Definition:** React Hooks are special functions that let functional components use React features such as state and other React capabilities.

Before Hooks were introduced, state management in React was commonly associated with class components. Hooks allow functional components to manage state and use other React features.

### Examples of React Hooks

| Hook | Purpose |
|---|---|
| `useState` | Stores and updates component state |
| `useEffect` | Synchronizes a component with external systems |
| `useContext` | Reads values from React Context |
| `useRef` | Stores a reference or mutable value |
| `useMemo` | Caches a calculated value |
| `useCallback` | Caches a function definition |

**In this module, our main focus is `useState`.**

### Rules of Hooks

1. Call Hooks at the top level of a React function component or custom Hook.
2. Do not call Hooks inside loops, conditions, or nested functions.
3. Call Hooks from React function components or custom Hooks, not ordinary JavaScript functions.

---

# 2. 🔄 What Is `useState`?

**Definition:** `useState` is a React Hook that adds a state variable to a functional component and provides a function to update it.

State is data that a component remembers between renders.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Understanding the Syntax

- `state`: The current state value.
- `setState`: The function used to request a state update.
- `useState`: The React Hook.
- `initialValue`: The initial value of the state.

### Example: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

### Expected Output

Initially:

```text
Count: 0
[Increment]
```

After clicking the button twice:

```text
Count: 2
[Increment]
```

### How It Works

1. `useState(0)` initializes the count to `0`.
2. `count` contains the current value.
3. `setCount()` requests an update to the state.
4. React renders the component again when the update is processed.
5. The updated count appears on the screen.

**Important:** Do not change state variables directly. Use the corresponding setter function.

Incorrect:

```jsx
count = count + 1;
```

Correct:

```jsx
setCount((previousCount) => previousCount + 1);
```

---

# 3. 📚 Module 4 Topics

## 3.1 What Is State?

State is information that a React component remembers and that can change over time.

Examples include:
- A counter value.
- A student's name.
- A search query.
- A list of students.
- A student's active or inactive status.

```jsx
const [name, setName] = useState("Jay");
```

Here, `name` is the state variable and `setName` updates it.

## 3.2 State and Re-rendering

When React processes a state update, it can render the component again to reflect the latest data.

```jsx
const [message, setMessage] = useState("Welcome");

<button onClick={() => setMessage("Hello, Student!")}>
  Change Message
</button>

<h2>{message}</h2>
```

Clicking the button changes the displayed message.

## 3.3 Handling Click Events

React allows us to respond to clicks using event handlers.

```jsx
function handleClick() {
  alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
```

Pass the function reference to `onClick`. Do not call it immediately.

Incorrect:

```jsx
<button onClick={handleClick()}>
  Click Me
</button>
```

Correct:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

## 3.4 Handling Input Events

Controlled inputs use React state to manage their values.

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
  placeholder="Enter your name"
/>

<p>Your name: {name}</p>
```

The input value and displayed text update as the user types.

## 3.5 Passing Arguments to Event Handlers

Use an arrow function when an event handler needs an argument.

```jsx
function greetStudent(name) {
  alert(`Hello, ${name}!`);
}

<button onClick={() => greetStudent("Jay")}>
  Greet Student
</button>
```

The arrow function delays the call until the button is clicked.

## 3.6 Updating Objects in State

React state should be updated immutably. For objects, create a new object using the spread operator.

```jsx
const [student, setStudent] = useState({
  name: "Jay",
  course: "React",
});

setStudent((previousStudent) => ({
  ...previousStudent,
  course: "Java Full Stack",
}));
```

The spread operator preserves the existing properties while allowing `course` to be updated.

## 3.7 Updating Arrays in State

Use methods such as `map`, `filter`, and spread syntax to create updated arrays.

### Add an Item

```jsx
setStudents((previousStudents) => [
  ...previousStudents,
  newStudent,
]);
```

### Delete an Item

```jsx
setStudents((previousStudents) =>
  previousStudents.filter(
    (student) => student.id !== studentId
  )
);
```

### Update an Item

```jsx
setStudents((previousStudents) =>
  previousStudents.map((student) =>
    student.id === studentId
      ? { ...student, status: "Inactive" }
      : student
  )
);
```

These approaches avoid directly modifying the original array.

## 3.8 Functional State Updates

A functional state update calculates the next state from the previous state.

```jsx
setCount((previousCount) => previousCount + 1);
```

This is useful when the new value depends on the previous value, especially when multiple updates may be queued.

## 3.9 Lifting State Up

Lifting state up means moving shared state into the closest common parent component of the components that need it.

For example, a Student Dashboard might have:
- An `AddStudentForm` component.
- A `StudentList` component.
- A parent `App` component.

If both child components need access to the student list, the parent can own the state and pass data and event handlers through props.

## 3.10 Avoiding Direct State Mutation

Direct mutation changes existing state data rather than creating an updated value.

Incorrect:

```jsx
students.push(newStudent);
```

Correct:

```jsx
setStudents((previousStudents) => [
  ...previousStudents,
  newStudent,
]);
```

Incorrect:

```jsx
student.status = "Inactive";
```

Correct:

```jsx
setStudent((previousStudent) => ({
  ...previousStudent,
  status: "Inactive",
}));
```

**Remember:** Create updated objects and arrays instead of directly modifying the existing state.

---

# 4. 🛠️ Practical Project: React Student Dashboard

## Project Overview

The Student Dashboard is an interactive React application designed to practice state management and event handling.

It provides a simple interface for managing students and tracking their status.

### ✨ Features

- 📊 Student statistics dashboard.
- 👨‍🎓 Student directory.
- ➕ Add students using a form.
- 🔍 Search by student name, email, or course.
- ✅ Toggle student status.
- 🗑️ Delete students.
- 📈 Automatically calculated student statistics.
- 📱 Responsive desktop and mobile layouts.
- 🎨 Modern user interface using custom CSS.

### 🧰 Technologies Used

- React
- JavaScript
- JSX
- React Hooks
- `useState`
- HTML5
- CSS3
- Vite

### 📂 Project Structure

```text
student-dashboard/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

### 🚀 Installation and Setup

**Step 1: Create a Vite React project**

```bash
npm create vite@latest student-dashboard -- --template react
```

**Step 2: Enter the project directory**

```bash
cd student-dashboard
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Add the project code**

Replace the contents of `src/App.jsx` and `src/index.css` with the project code. Check `src/main.jsx` as well.

**Step 5: Start the development server**

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 🧠 React Concepts Used in This Project

| Concept | Application |
|---|---|
| `useState` | Stores students, form fields, and search text |
| Event handling | Responds to form submissions, typing, and clicks |
| Controlled inputs | Keeps form values synchronized with React state |
| Array `map()` | Renders student cards and updates selected students |
| Array `filter()` | Searches and deletes students |
| Spread operator | Creates updated arrays and objects |
| Functional updates | Calculates new state from previous state |
| Derived values | Calculates active and inactive student counts |
| Conditional rendering | Displays the empty state when no students match |
| Lifting state up | Keeps shared student data in a common parent when the UI is split into components |

### 📌 Important Limitation

This is a frontend learning project. Student data is stored in React state, not in a database.

As a result, the data resets when the page is refreshed.

A future version could use a backend API and a database to store student information persistently.

---


# 5. 🎤 React Module 7 Interview Questions and Answers

## Q1. What is state in React?

**Answer:** State is data that a React component remembers between renders. When state changes, React can render the component again to display the updated data.

## Q2. What is a React Hook?

**Answer:** A Hook is a special React function that allows function components to use React features such as state and context.

## Q3. What is `useState`?

**Answer:** `useState` is a React Hook that adds a state variable to a function component and returns the current state value and a setter function.

## Q4. What does `useState()` return?

**Answer:** It returns an array containing the current state value and a function to update that value.

## Q5. What is the purpose of the initial value in `useState`?

**Answer:** The initial value determines the state value used during the component's initial render.

## Q6. What happens when we update state?

**Answer:** React schedules the state update and can render the component again to reflect the new value.

## Q7. Can we update state directly?

**Answer:** No. We should use the setter function returned by `useState` rather than directly assigning a new value to the state variable.

## Q8. What is an event handler in React?

**Answer:** An event handler is a function that runs in response to an event, such as a click, input change, or form submission.

## Q9. How do we handle a click event in React?

**Answer:** We use the `onClick` prop.

```jsx
<button onClick={handleClick}>Click</button>
```

## Q10. What is a controlled component?

**Answer:** A controlled input is an input whose displayed value is managed by React state.

## Q11. What is the purpose of `onChange`?

**Answer:** The `onChange` event handler responds to changes in an input, select, or other form control.

## Q12. Why do we use arrow functions in event handlers?

**Answer:** Arrow functions let us pass arguments to event handlers and delay the function call until the event occurs.

## Q13. What is a functional state update?

**Answer:** It is a state update that uses a function to calculate the next value from the previous state.

```jsx
setCount((previousCount) => previousCount + 1);
```

## Q14. Why is the spread operator used when updating objects?

**Answer:** It creates a shallow copy of an object so that we can update a property without directly modifying the existing object.

## Q15. How can we add an item to an array in state?

**Answer:** We can use the spread operator to create a new array containing the existing items and the new item.

```jsx
setItems((previousItems) => [
  ...previousItems,
  newItem,
]);
```

## Q16. How can we delete an item from an array in state?

**Answer:** We can use `filter()` to create a new array that excludes the selected item.

## Q17. What is the purpose of `map()` in React?

**Answer:** `map()` transforms each array element into a new value. In React, it is commonly used to render lists of elements or create updated arrays.

## Q18. What does lifting state up mean?

**Answer:** Lifting state up means moving shared state into the closest common parent of the components that need it.

## Q19. Why should we avoid mutating state?

**Answer:** Direct mutation can make state changes difficult for React to detect and can cause unexpected behavior. Creating new objects and arrays makes updates more predictable.

## Q20. What is the difference between props and state?

**Answer:** Props are values passed from a parent component to a child component. State is data managed by a component using React state mechanisms.

## Q21. Can a component have multiple `useState` Hooks?

**Answer:** Yes. A component can have multiple `useState` calls to manage different pieces of state.

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(18);
const [isActive, setIsActive] = useState(true);
```

## Q22. Why do we use `preventDefault()` in form submission?

**Answer:** `event.preventDefault()` prevents the browser's default form submission behavior, allowing React to handle the submission without a normal page reload.

## Q23. What is conditional rendering?

**Answer:** Conditional rendering means displaying different UI elements based on a condition.

```jsx
{students.length === 0 ? (
  <p>No students found.</p>
) : (
  <p>Students are available.</p>
)}
```

## Q24. Why do we use a `key` when rendering a list?

**Answer:** A key helps React identify list items between renders so it can update the list efficiently. Keys should be stable and unique among sibling elements.

## Q25. Does `useState` save data permanently?

**Answer:** No. React state exists while the application is running. Data that must survive a page refresh needs persistent storage, such as `localStorage` or a database.

## Q26. What is the difference between `map()` and `filter()`?

**Answer:** `map()` transforms every item and returns a new array. `filter()` returns a new array containing only the items that satisfy a condition.

## Q27. What is the purpose of `StrictMode`?

**Answer:** React Strict Mode helps identify potential problems during development. It can run certain logic more than once in development to expose unsafe side effects and other issues.

## Q28. What is derived state or a derived value?

**Answer:** A derived value is calculated from existing props or state rather than stored separately.

For example:

```jsx
const activeStudents = students.filter(
  (student) => student.status === "Active"
).length;
```

## Q29. Why is the functional updater useful when the next state depends on the previous state?

**Answer:** It lets React calculate the next value from the previous state value, making updates more reliable when updates are queued.

## Q30. Which React concepts are demonstrated by the Student Dashboard?

**Answer:** The project demonstrates `useState`, controlled inputs, event handling, functional state updates, array operations, immutable object updates, conditional rendering, derived values, and responsive styling.

---

# 6. 📖 Module 7 Quick Revision

| Concept | Remember |
|---|---|
| State | Data a component remembers |
| Hook | A special React function |
| `useState` | Manages component state |
| Setter function | Requests a state update |
| `onClick` | Handles click events |
| `onChange` | Handles input changes |
| `onSubmit` | Handles form submission |
| `preventDefault()` | Prevents the default browser action |
| `map()` | Transforms array items |
| `filter()` | Selects array items |
| Spread operator | Creates shallow copies of arrays or objects |
| Functional update | Calculates the next state from the previous state |
| Lifting state up | Moves shared state to a common parent |
| Controlled input | Uses React state to manage an input's value |
| Immutability | Avoids directly modifying existing state objects or arrays |
| Derived value | Calculates information from existing state or props |

---


## 🎉 Module 7 Completed!

practiced the core React concepts required to build interactive applications.

