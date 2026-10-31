# 📝 09 - Note App (React JS)

![React](https://img.shields.io/badge/React-JS-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)
![Level](https://img.shields.io/badge/Level-Beginner-success)

## 📌 Introduction

The **Note App** is a simple React JS project that allows users to create, view and delete notes.

Users can enter a note heading and its details. After submitting the form, the note appears in the Recent Notes section as a sticky note card.

This project helps beginners understand React concepts such as State Management, Event Handling, Forms, Array Methods and Conditional UI Rendering.

## 🎯 Learning Objectives

- Understand React Functional Components.
- Learn the useState() Hook.
- Understand Controlled Components.
- Handle Form Submission in React.
- Understand Event Handling.
- Learn Array Destructuring and Spread Operator.
- Work with JavaScript Array Methods.
- Display dynamic data using map().
- Delete items using splice().
- Understand Tailwind CSS utility classes.

## 🚀 Project Features

1. Add a new note heading.
2. Add detailed information to a note.
3. Display notes dynamically.
4. Delete individual notes.
5. Clear input fields after submitting.
6. Display notes as sticky note cards.
7. Responsive layout using Tailwind CSS.

## 📂 Project Structure

```text
09-Note-App/
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
└── README.md
```

## 📚 Concepts Covered

### 1. React Functional Component

A Functional Component is a JavaScript function that returns JSX to describe the user interface.

```jsx
const App = () => {
  return <h1>My Notes App</h1>;
};

export default App;
```

### 2. useState() Hook

`useState()` is a React Hook used to create and manage state inside functional components.

```jsx
const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [task, setTask] = useState([]);
```

**Explanation:**

- `title` stores the note heading.
- `details` stores the note description.
- `task` stores all the notes in an array.
- `setTitle()`, `setDetails()` and `setTask()` update their respective states.

### 3. Controlled Components

A Controlled Component is an input element whose value is controlled by React state.

```jsx
<input
  type="text"
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>
```

**Explanation:**

- `value={title}` connects the input with React state.
- `onChange` handles input changes.
- `e.target.value` gets the current input value.
- `setTitle()` updates the state.

### 4. Event Handling

React uses event handlers to perform actions when users interact with elements.

```jsx
<button onClick={deleteNote}>
  Delete
</button>
```

Common React events:

- `onClick`
- `onChange`
- `onSubmit`
- `onKeyDown`

### 5. Form Handling and preventDefault()

The `onSubmit` event handles form submission.

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  // Add note logic
};
```

`preventDefault()` prevents the browser's default form submission behavior, which normally reloads the page.

### 6. Spread Operator (...)

The Spread Operator copies elements from an existing array or object into a new array or object.

```jsx
const copyTask = [...task];

copyTask.push({ title, details });

setTask(copyTask);
```

**Explanation:**

- `[...task]` creates a shallow copy of the existing array.
- `push()` adds a new note object.
- `setTask()` updates the state with the new array.

### 7. Array push() Method

The `push()` method adds a new element at the end of an array.

```javascript
const fruits = ["Apple", "Mango"];

fruits.push("Orange");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Orange"]
```

### 8. Array map() Method

The `map()` method creates a new array by applying a function to every element.

In React, it is commonly used to render lists dynamically.

```jsx
{task.map((elem, idx) => {
  return (
    <div key={idx}>
      <h3>{elem.title}</h3>
      <p>{elem.details}</p>
    </div>
  );
})}
```

**Explanation:**

- `elem` represents the current note.
- `idx` represents the current index.
- `key={idx}` provides a key for React's list rendering.

### 9. Array splice() Method

The `splice()` method adds, removes or replaces elements in an array.

```javascript
const fruits = ["Apple", "Mango", "Orange"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

```text
["Apple", "Orange"]
```

In this project, `splice()` removes the selected note using its index.

### 10. Array filter() vs splice()

| filter() | splice() |
|---|---|
| Creates a new array | Modifies the original array |
| Does not mutate the original array | Mutates the original array |
| Commonly used for React deletion | Can be used for deletion with a copied array |

## 🔍 Code Explanation

### 1. Managing Input State

```jsx
const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
```

These states store the heading and details entered by the user.

### 2. Managing Notes Array

```jsx
const [task, setTask] = useState([]);
```

The `task` state stores all note objects.

Each note contains:

```javascript
{
  title: "Learning React",
  details: "Complete React Hooks"
}
```

### 3. Submit Handler

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  const copyTask = [...task];

  copyTask.push({ title, details });

  setTask(copyTask);

  setTitle('');
  setDetails('');
};
```

**Step-by-step explanation:**

1. Prevents the default form submission.
2. Creates a copy of the existing task array.
3. Adds the new note object to the array.
4. Updates the task state.
5. Clears both input fields.

### 4. Delete Note Function

```jsx
const deleteNote = (idx) => {
  const copyTask = [...task];

  copyTask.splice(idx, 1);

  setTask(copyTask);
};
```

**Explanation:**

1. Receives the selected note index.
2. Creates a copy of the existing array.
3. Removes one element at the selected index.
4. Updates the task state.

### 5. Display Notes Dynamically

```jsx
{task.map(function (elem, idx) {
  return (
    <div key={idx}>
      <h3>{elem.title}</h3>
      <p>{elem.details}</p>
    </div>
  );
})}
```

This displays all notes dynamically using the `map()` method.

## 🎨 Tailwind CSS Concepts Used

| Class | Purpose |
|---|---|
| `h-screen` | Full screen height |
| `lg:flex` | Flex layout on large screens |
| `bg-black` | Black background |
| `text-white` | White text |
| `p-10` | Padding |
| `gap-4` | Space between elements |
| `w-1/2` | 50% width |
| `rounded-xl` | Rounded corners |
| `font-bold` | Bold text |
| `flex-wrap` | Allows items to wrap |
| `overflow-auto` | Enables scrolling |

## ⚙️ Installation and Setup

**Step 1: Install dependencies**

```bash
npm install
```

**Step 2: Start the development server**

```bash
npm run dev
```

**Step 3: Open in browser**

```text
http://localhost:5173
```

## 🎤 Interview Questions and Answers

**Q1. What is a React Functional Component?**

A Functional Component is a JavaScript function that returns JSX and is used to create reusable UI elements.

**Q2. What is useState() in React?**

`useState()` is a React Hook used to add and manage state in functional components.

**Q3. What is a Controlled Component?**

A Controlled Component is an input element whose value is managed by React state.

**Q4. What is event handling in React?**

Event handling allows React components to respond to user actions such as clicks, typing and form submission.

**Q5. What is preventDefault()?**

It prevents the default browser behavior of an event, such as the automatic page reload during form submission.

**Q6. What is the Spread Operator?**

The Spread Operator (`...`) expands elements of an array or properties of an object into another array or object.

**Q7. What is the difference between push() and pop()?**

`push()` adds an element at the end of an array, while `pop()` removes the last element.

**Q8. What is the map() method?**

The `map()` method creates a new array by applying a function to every element of the original array.

**Q9. What is the splice() method?**

The `splice()` method modifies an array by adding, removing or replacing elements.

**Q10. What is the difference between map() and forEach()?**

`map()` returns a new array, whereas `forEach()` executes a function for every element and returns undefined.

**Q11. Why do we use key in React lists?**

The `key` prop helps React identify list items and efficiently update the UI.

**Q12. What is JSX?**

JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript code.

**Q13. Why do we use onChange in input fields?**

`onChange` detects changes in an input field and allows React state to be updated.

**Q14. What is state management?**

State management is the process of managing and updating data that controls a component's UI.

**Q15. Why do we use an array of objects in this Note App?**

An array of objects allows us to store multiple notes, where each object contains properties such as title and details.



## 🏁 Conclusion

In this module, we learned how to build a simple Notes App using React JS.

We practiced important concepts including useState(), Controlled Components, Form Handling, Event Handling, Spread Operator and JavaScript Array Methods.

**Module 09 – Note App Completed! 🚀**
