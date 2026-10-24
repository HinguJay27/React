# ⚛️ Module 06: Working with Functions in React JS


## 📌 Module Introduction

Functions are one of the most important concepts in JavaScript and React JS. They allow developers to write reusable code, perform specific tasks, handle user interactions, and manage component behavior.

In React, functions are commonly used to create functional components, handle events, calculate values, pass arguments, and update state.

This module focuses on understanding JavaScript functions and learning how to use them effectively in React applications through practical examples and a mini-project.

### 🎯 Learning Objectives

After completing this module, you will be able to:

- Understand functions and their importance in React.
- Create and call JavaScript functions.
- Work with parameters, arguments, and return values.
- Understand arrow functions and function expressions.
- Handle events using functions.
- Pass arguments to event handlers.
- Understand callback functions.
- Manage component state using `useState`.
- Update state through event handler functions.
- Build an interactive React mini-project.

---

## 📚 Table of Contents

1. [Introduction to Functions](#1-introduction-to-functions)
2. [Function Declaration](#2-function-declaration)
3. [Calling a Function](#3-calling-a-function)
4. [Parameters and Arguments](#4-parameters-and-arguments)
5. [Return Statement](#5-return-statement)
6. [Function Expressions](#6-function-expressions)
7. [Arrow Functions](#7-arrow-functions)
8. [Event Handling in React](#8-event-handling-in-react)
9. [Passing Arguments to Event Handlers](#9-passing-arguments-to-event-handlers)
10. [Callback Functions](#10-callback-functions)
11. [React State with Functions](#11-react-state-with-functions)
12. [Functional State Updates](#12-functional-state-updates)
13. [Event Objects](#13-event-objects)
14. [Functions Inside JSX](#14-functions-inside-jsx)
15. [Mini Project: Student Action Dashboard](#15-mini-project-student-action-dashboard)
16. [Topics Covered](#16-topics-covered)
17. [Interview Questions and Answers](#17-interview-questions-and-answers)
18. [Practice Tasks](#18-practice-tasks)
19. [Key Learnings](#19-key-learnings)

---

## 1. Introduction to Functions

### Definition

A function is a reusable block of JavaScript code designed to perform a specific task.

Functions help organize code, avoid unnecessary repetition, and make applications easier to maintain.

### Example

```javascript
function greet() {
  console.log("Hello, React!");
}

greet();
```

**Output:**

```text
Hello, React!
```

**Explanation:**
- `function` is the keyword used to declare a function.
- `greet` is the function name.
- The code inside `{}` is the function body.
- `greet()` calls and executes the function.

---

## 2. Function Declaration

### Definition

A function declaration defines a named function using the `function` keyword.

### Example

```javascript
function welcome() {
  return "Welcome to React JS!";
}

console.log(welcome());
```

**Output:**

```text
Welcome to React JS!
```

Function declarations are hoisted, which means they can generally be called before their declaration in the same scope.

---

## 3. Calling a Function

### Definition

Calling a function means executing the code inside it by using its name followed by parentheses.

### Example

```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
```

**Output:**

```text
Hello!
Hello!
```

The same function can be called multiple times without rewriting its code.

---

## 4. Parameters and Arguments

### Definition

- **Parameters:** Variables specified in a function definition.
- **Arguments:** Actual values passed to a function when it is called.

### Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(add(5, 15));
```

**Output:**

```text
30
20
```

Here, `a` and `b` are parameters, while `10`, `20`, `5`, and `15` are arguments.

### Benefits

- Reuse the same function with different values.
- Reduce repeated code.
- Make calculations and data processing easier.

---

## 5. Return Statement

### Definition

The `return` statement sends a value back to the code that called the function and ends that function's current execution.

### Example

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 4);

console.log(result);
```

**Output:**

```text
20
```

### Important Difference

```javascript
function first() {
  return 10;
}

function second() {
  console.log(10);
}
```

The first function returns a value. The second prints a value to the console but does not explicitly return it.

A function without an explicit return statement returns `undefined` when it finishes.

---

## 6. Function Expressions

### Definition

A function expression defines a function as part of an expression, commonly by assigning it to a variable.

### Example

```javascript
const greet = function () {
  return "Hello from a Function Expression!";
};

console.log(greet());
```

**Output:**

```text
Hello from a Function Expression!
```

### Key Point

A function expression assigned to a `const` variable cannot be called before the variable has been initialized.

Function expressions are commonly used for callbacks and event handlers.

---

## 7. Arrow Functions

### Definition

An arrow function is a shorter syntax for writing functions introduced in ES6.

### Example 1: Regular Arrow Function

```javascript
const greet = () => {
  return "Hello from an Arrow Function!";
};

console.log(greet());
```

**Output:**

```text
Hello from an Arrow Function!
```

### Example 2: Implicit Return

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

**Output:**

```text
30
```

When an arrow function contains a single expression without braces, the expression's value is returned automatically.

### Example 3: Arrow Function in React

```jsx
function App() {
  const greet = () => "Hello, React!";

  return <h1>{greet()}</h1>;
}

export default App;
```

**Browser Output:**

```text
Hello, React!
```

---

## 8. Event Handling in React

### Definition

Event handling allows a React component to respond to user interactions, such as clicking a button or entering text.

### Example

```jsx
function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;
```

**Output:**

A button labeled `Click Me` appears. Clicking it displays an alert:

```text
Button Clicked!
```

### Important Point

```jsx
<button onClick={handleClick}>Click Me</button>
```

Passes the function to React.

```jsx
<button onClick={handleClick()}>Click Me</button>
```

Calls the function immediately during rendering, which is generally not what you want for a click handler.

---

## 9. Passing Arguments to Event Handlers

### Definition

Arguments can be passed to event handler functions using an arrow function.

### Example

```jsx
function App() {
  function greet(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={() => greet("Jay")}>
      Greet Student
    </button>
  );
}

export default App;
```

**Output after clicking the button:**

```text
Hello, Jay!
```

### Explanation

The arrow function waits for the click event before calling `greet("Jay")`.

---

## 10. Callback Functions

### Definition

A callback function is a function passed to another function so that it can be called by that function or API.

### Example

```javascript
function processUser(callback) {
  callback();
}

function greet() {
  console.log("Hello, Student!");
}

processUser(greet);
```

**Output:**

```text
Hello, Student!
```

Here, `greet` is passed as a callback to `processUser`.

### Callback in React

```jsx
function App() {
  const showMessage = () => {
    alert("Learning React Functions!");
  };

  return (
    <button onClick={showMessage}>
      Show Message
    </button>
  );
}

export default App;
```

React invokes the event handler when the user clicks the button.

---

## 11. React State with Functions

### Definition

State is data managed by a React component. When state is updated, React can render the component again to display the updated value.

The `useState` Hook provides the current state value and a function to update it.

### Example: Counter

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default App;
```

**Initial Output:**

```text
Count: 0
[Increase]
```

**After clicking once:**

```text
Count: 1
```

**After clicking twice:**

```text
Count: 2
```

### Explanation

- `useState(0)` initializes the count to zero.
- `count` contains the current state value.
- `setCount` updates the state.
- `increaseCount` handles the button click.
- React updates the displayed count after the state changes.

---

## 12. Functional State Updates

### Definition

A functional state update uses a function to calculate the next state from the previous state.

This is especially useful when the next state depends on the previous state.

### Example

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default App;
```

**Output after one click:**

```text
Count: 1
```

### Why Use This Approach?

```jsx
setCount((previousCount) => previousCount + 1);
```

React supplies the previous state value to the updater function, which calculates the next value.

This approach is particularly useful when multiple state updates depend on the latest state.

---

## 13. Event Objects

### Definition

React passes an event object to an event handler when an event occurs. It contains information about the event and provides methods for handling it.

### Example

```jsx
function App() {
  function handleClick(event) {
    console.log(event.type);
    console.log(event.currentTarget.textContent);
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;
```

**Console Output after clicking:**

```text
click
Click Me
```

### Explanation

- `event` receives the event object.
- `event.type` returns the event type.
- `event.currentTarget` identifies the element whose handler is currently executing.
- `textContent` reads the element's text.

---

## 14. Functions Inside JSX

### Definition

JSX allows JavaScript expressions inside curly braces `{}`. A function can be called inside JSX when its return value should be displayed.

### Example

```jsx
function App() {
  function getMessage() {
    return "Welcome to My Application!";
  }

  return (
    <div>
      <h1>{getMessage()}</h1>
    </div>
  );
}

export default App;
```

**Browser Output:**

```text
Welcome to My Application!
```

### Important Point

Use curly braces to evaluate JavaScript expressions in JSX.

```jsx
<h1>{getMessage()}</h1>
```

The function's returned value is displayed in the heading.

---

## 15. Mini Project: Student Action Dashboard

### 📌 Project Description

The Student Action Dashboard is a beginner-friendly React project designed to practise functions, event handling, parameters, arrow functions, and state updates in one application.

### ✨ Features

- Student greeting using a function.
- Marks calculator using parameters and return values.
- Interactive counter using `useState`.
- Reset counter using an arrow function.
- Message center using event handlers and arguments.

### 📁 Project Structure

```text
student-action-dashboard/
├── src/
│   ├── App.jsx
│   └── App.css
├── package.json
└── README.md
```

### 💻 App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [studentName] = useState("Jay");
  const [message, setMessage] = useState(
    "Welcome to the Dashboard!"
  );

  // Function with a return value
  function greetStudent() {
    return `Hello, ${studentName}!`;
  }

  // Function with parameters
  function calculateTotal(a, b, c) {
    return a + b + c;
  }

  // Event handler
  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  // Function with an argument
  function changeMessage(newMessage) {
    setMessage(newMessage);
  }

  // Arrow function
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="dashboard">
      <h1>Student Action Dashboard</h1>

      <section className="card">
        <h2>1. Student Greeting</h2>
        <p>{greetStudent()}</p>
      </section>

      <section className="card">
        <h2>2. Marks Calculator</h2>
        <p>Subject 1: 80</p>
        <p>Subject 2: 75</p>
        <p>Subject 3: 90</p>

        <h3>
          Total Marks: {calculateTotal(80, 75, 90)} / 300
        </h3>
      </section>

      <section className="card">
        <h2>3. Click Counter</h2>
        <h3>Count: {count}</h3>

        <button onClick={increaseCount}>Increase</button>
        <button onClick={resetCount}>Reset</button>
      </section>

      <section className="card">
        <h2>4. Message Center</h2>
        <p>{message}</p>

        <button
          onClick={() =>
            changeMessage("Keep Learning React!")
          }
        >
          Show Learning Message
        </button>

        <button
          onClick={() =>
            changeMessage("Practice Makes Perfect!")
          }
        >
          Show Practice Message
        </button>
      </section>
    </div>
  );
}

export default App;
```

### 🎨 App.css

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f1f5f9;
}

.dashboard {
  max-width: 750px;
  margin: 30px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #1e293b;
}

.card {
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.card h2 {
  color: #2563eb;
}

button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 10px 14px;
  margin: 5px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #1d4ed8;
}

p {
  color: #475569;
}
```

### 🖥️ Expected Output

The dashboard contains four sections:

1. **Student Greeting:** Displays `Hello, Jay!`
2. **Marks Calculator:** Displays `Total Marks: 245 / 300`.
3. **Click Counter:** Increases the counter when the Increase button is clicked and resets it when Reset is clicked.
4. **Message Center:** Changes the displayed message when either message button is clicked.

### 🧠 Concepts Practised

| Concept | Implementation |
|---|---|
| Function declaration | `greetStudent()` |
| Function calls | `{greetStudent()}` |
| Parameters and arguments | `calculateTotal(80, 75, 90)` |
| Return statement | `return a + b + c` |
| Arrow function | `resetCount` |
| Event handling | `onClick={increaseCount}` |
| Callback function | `onClick={() => changeMessage(...)}` |
| React state | `useState()` |
| Functional state update | `setCount(previousCount => previousCount + 1)` |
| JSX expressions | `{count}` and `{calculateTotal(...)}` |

---

## 16. Topics Covered

| No. | Topic | Status |
|---:|---|---|
| 1 | Introduction to Functions | ✅ |
| 2 | Function Declaration | ✅ |
| 3 | Calling Functions | ✅ |
| 4 | Parameters and Arguments | ✅ |
| 5 | Return Statement | ✅ |
| 6 | Function Expressions | ✅ |
| 7 | Arrow Functions | ✅ |
| 8 | Event Handling in React | ✅ |
| 9 | Passing Arguments to Event Handlers | ✅ |
| 10 | Callback Functions | ✅ |
| 11 | React State with Functions | ✅ |
| 12 | Functional State Updates | ✅ |
| 13 | Event Objects | ✅ |
| 14 | Functions Inside JSX | ✅ |
| 15 | Practical Mini Project | ✅ |

---

## 17. Interview Questions and Answers

### Q1. What is a function in JavaScript?

**Answer:** A function is a reusable block of code that performs a specific task. It can accept inputs, process them, and return a result.

### Q2. Why are functions important in React?

**Answer:** Functions help create components, handle user events, process data, and update component state. They also improve code reusability.

### Q3. What is the difference between parameters and arguments?

**Answer:** Parameters are variables declared in a function definition, while arguments are actual values passed when calling the function.

### Q4. What is the purpose of the `return` statement?

**Answer:** The `return` statement sends a value back to the caller and ends the function's current execution.

### Q5. What is an arrow function?

**Answer:** An arrow function is a concise way of writing a JavaScript function using the `=>` syntax.

### Q6. What is the difference between a function declaration and a function expression?

**Answer:** A function declaration defines a named function using the `function` keyword. A function expression defines a function within an expression, often assigning it to a variable.

### Q7. What is an event handler in React?

**Answer:** An event handler is a function that responds to events such as clicks, keyboard input, or form submissions.

### Q8. What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?

**Answer:** `onClick={handleClick}` passes the function to React to execute when clicked. `onClick={handleClick()}` invokes the function during rendering.

### Q9. How do you pass arguments to an event handler?

**Answer:** Use an arrow function.

```jsx
<button onClick={() => greet("Jay")}>
  Greet
</button>
```

### Q10. What is a callback function?

**Answer:** A callback is a function passed to another function or API to be called by it.

### Q11. What is `useState` in React?

**Answer:** `useState` is a React Hook that lets a functional component store and update state.

### Q12. What is the purpose of a state setter function?

**Answer:** A state setter requests an update to a state variable. React can then render the component again with the updated value.

### Q13. What is a functional state update?

**Answer:** It is a state update that uses the previous state to calculate the next state.

```jsx
setCount((previousCount) => previousCount + 1);
```

### Q14. What is the event object in React?

**Answer:** The event object contains information about an event and provides methods and properties for responding to it.

### Q15. Can we call a function inside JSX?

**Answer:** Yes. We can call a function inside curly braces if we want to display its returned value.

```jsx
<h1>{getMessage()}</h1>
```

### Q16. What happens if a function does not return a value?

**Answer:** If the function finishes without an explicit return statement, it returns `undefined`. In JSX, `undefined` does not produce visible text.

### Q17. What is the difference between `console.log()` and `return`?

**Answer:** `console.log()` prints information to the console. `return` passes a value back to the caller.

### Q18. What is the difference between an arrow function and a regular function?

**Answer:** Arrow functions use shorter syntax and do not have their own `this` binding. Regular functions have their own `this` depending on how they are called.

### Q19. Why should React state not be changed directly?

**Answer:** Directly modifying state does not correctly notify React that an update is needed. Use the state setter function to request an update.

### Q20. What is the purpose of the Student Action Dashboard project?

**Answer:** The project provides practical experience with function declarations, parameters, return values, arrow functions, event handlers, callbacks, JSX expressions, and React state updates.

---


## 18. Key Learnings

In this module, we learned how to use JavaScript functions effectively in React applications.

The most important concepts are:

- Functions make code reusable and organized.
- Parameters and arguments allow functions to work with different values.
- Return statements provide results from functions.
- Arrow functions offer concise syntax.
- Event handlers respond to user interactions.
- Callback functions allow functions to be passed to other functions or APIs.
- `useState` manages component state.
- Functional state updates calculate new values from previous state.
- JSX expressions allow JavaScript values to be displayed in React components.

### 🏆 Final Conclusion

Working with Functions is an essential foundation for learning React JS. 

**Keep practising, keep building, and keep improving! 🚀**

---



Learn • Practise • Build • Repeat
