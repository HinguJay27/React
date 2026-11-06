# Module 14 – useRef Hook in React JS

## 📌 Introduction

This module covers the **useRef Hook** in React JS, which is used to create references to DOM elements and store mutable values that persist between component renders without triggering a re-render.

The `useRef` Hook is an important React Hook for working with DOM elements, timers, previous values, and other mutable data.

---

## 🎯 Learning Objectives

After completing this module, I learned:

- What is the useRef Hook?
- Why do we use useRef in React?
- Difference between useState and useRef.
- How to access DOM elements using useRef.
- How to focus and clear input fields.
- How to store previous state values.
- How to use useRef with useEffect.
- How to manage setInterval and clearInterval.
- How to build a Stopwatch application using useRef.

---

# 1. What is useRef Hook?

`useRef` is a React Hook that allows us to create a reference to a value that persists between renders.

Unlike useState, updating a ref does not trigger a component re-render.

### Syntax

```jsx
import { useRef } from 'react';

const myRef = useRef(initialValue);
```

### Example

```jsx
import React, { useRef } from 'react';

const App = () => {

    const count = useRef(0);

    function increase() {
        count.current++;
        console.log(count.current);
    }

    return (
        <div>
            <h1>useRef Hook</h1>
            <button onClick={increase}>
                Increase
            </button>
        </div>
    );
};

export default App;
```

### Explanation

- `useRef(0)` creates a reference with an initial value of 0.
- `count.current` accesses the current value.
- `count.current++` increases the value.
- Updating `.current` does not trigger a re-render.
- The value persists between component renders.

### Important Point

A ref returns an object containing a `current` property.

```javascript
{
    current: 0
}
```

---

# 2. Difference Between useState and useRef

| useState | useRef |
|---|---|
| Stores component state | Stores mutable values |
| Updating triggers re-render | Updating does not trigger re-render |
| Used to update UI | Used for references and persistent values |
| Returns an array | Returns an object |
| Uses a setter function | Uses `.current` |

### useState Example

```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

Updating count causes React to re-render the component.

### useRef Example

```jsx
const count = useRef(0);

count.current++;
```

Updating count does not cause a re-render.

---

# 3. Access DOM Elements Using useRef

One of the most common uses of useRef is accessing DOM elements directly.

Instead of using JavaScript methods like `document.getElementById()`, React provides the useRef Hook.

### Example: Focus Input Automatically

```jsx
import React, { useRef } from 'react';

const App = () => {

    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Focus Input</h1>

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
};

export default App;
```

### Explanation

1. `useRef(null)` creates an empty reference.
2. `ref={inputRef}` connects the reference to the input element.
3. `inputRef.current` accesses the actual DOM element.
4. `.focus()` automatically focuses the input field.

---

# 4. Clear Input Using useRef

We can also use useRef to clear an input field.

### Example

```jsx
import React, { useRef } from 'react';

const App = () => {

    const inputRef = useRef(null);

    const clearInput = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Clear Input</h1>

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter something"
            />

            <button onClick={clearInput}>
                Clear
            </button>
        </div>
    );
};

export default App;
```

### Explanation

- `inputRef.current.value` accesses the input value.
- Assigning an empty string clears the input.
- `inputRef.current.focus()` focuses the input again.

**Note:** Direct DOM manipulation is useful for this type of example. For regular React forms, controlled inputs using useState are generally preferred.

---

# 5. Previous Value Using useRef and useEffect

We can combine useRef with useEffect to store the previous value of state.

### Example: Previous Value Tracker

```jsx
import React, {
    useState,
    useEffect,
    useRef
} from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    const previousCount = useRef(0);

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    return (
        <div>
            <h1>Current Count: {count}</h1>

            <h2>
                Previous Count: {previousCount.current}
            </h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
};

export default App;
```

### Explanation

- `useState` stores the current count.
- `useRef` stores the previous count.
- `useEffect` runs after the component renders.
- `previousCount.current = count` updates the stored value.
- On the next render, the previous value is displayed.

---

# 6. useRef with setInterval

useRef is useful for storing timer IDs.

We can store the interval ID inside a ref because changing the ID does not need to update the UI.

### Important Methods

| Method | Purpose |
|---|---|
| `setInterval()` | Executes a function repeatedly |
| `clearInterval()` | Stops the interval |
| `useRef()` | Stores the interval ID |

### Example: Timer

```jsx
import React, { useState, useRef } from 'react';

const App = () => {

    const [seconds, setSeconds] = useState(0);

    const timerRef = useRef(null);

    const startTimer = () => {

        if (timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {

        clearInterval(timerRef.current);

        timerRef.current = null;
    };

    const resetTimer = () => {

        stopTimer();

        setSeconds(0);
    };

    return (
        <div>
            <h1>{seconds} Seconds</h1>

            <button onClick={startTimer}>Start</button>

            <button onClick={stopTimer}>Stop</button>

            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default App;
```

### Explanation

- `useState` updates the seconds displayed on the screen.
- `useRef` stores the interval ID.
- `setInterval()` executes every second.
- `clearInterval()` stops the timer.
- The null check prevents multiple intervals from starting.

---

# 7. Practical Project – Stopwatch Application

## 🚀 Project Overview

**Project Name:** Stopwatch Application

A simple stopwatch application built using React JS and the useRef Hook.

The application allows users to start, stop, and reset a timer.

### Features

- Start the stopwatch.
- Stop the stopwatch.
- Reset the stopwatch.
- Display elapsed time in minutes and seconds.
- Prevent multiple intervals from running simultaneously.
- Modern dark-themed user interface.
- Responsive and clean design.

### Technologies Used

- React JS
- JavaScript (ES6+)
- CSS3
- React Hooks (useState and useRef)

### Project Structure

```text
14-useRef-Hook/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
│
├── index.html
├── package.json
└── README.md
```

### App.jsx

```jsx
import React, { useRef, useState } from 'react'
import './App.css'

const App = () => {

    const [time, setTime] = useState(0)

    const timeRef = useRef(null);

    function setTimer() {

        if (timeRef.current !== null) return;

        timeRef.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
    }

    function stopTimer() {

        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    function resetTimer() {

        stopTimer();
        setTime(0);
    }

    return (
        <div className="container">
            <div className="stopwatch">

                <h1>Stopwatch</h1>

                <div className="timer">
                    {String(Math.floor(time / 60)).padStart(2, '0')}:
                    {String(time % 60).padStart(2, '0')}
                </div>

                <p className="subtitle">
                    Track your time
                </p>

                <div className="buttons">

                    <button
                        className="start"
                        onClick={setTimer}
                    >
                        Start
                    </button>

                    <button
                        className="stop"
                        onClick={stopTimer}
                    >
                        Stop
                    </button>

                    <button
                        className="reset"
                        onClick={resetTimer}
                    >
                        Reset
                    </button>

                </div>

            </div>
        </div>
    )
}

export default App
```

### App.css

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0f172a;
    font-family: Arial, sans-serif;
    color: white;
}

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stopwatch {
    background-color: #1e293b;
    padding: 45px;
    width: 350px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #334155;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
}

.stopwatch h1 {
    font-size: 28px;
    margin-bottom: 30px;
}

.timer {
    font-size: 55px;
    font-weight: bold;
    color: #38bdf8;
    letter-spacing: 3px;
    margin-bottom: 12px;
}

.subtitle {
    color: #94a3b8;
    margin-bottom: 30px;
}

.buttons {
    display: flex;
    gap: 10px;
}

button {
    flex: 1;
    padding: 11px 8px;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.start {
    background-color: #16a34a;
}

.stop {
    background-color: #dc2626;
}

.reset {
    background-color: #475569;
}

button:hover {
    transform: translateY(-3px);
    filter: brightness(1.15);
}
```

### Project Working Explanation

**1. Start Button**

- Calls the `setTimer()` function.
- Starts the interval using setInterval.
- Increases time every second.
- Stores the interval ID inside `timeRef.current`.

**2. Stop Button**

- Calls `stopTimer()`.
- clearInterval stops the running timer.
- Sets the reference back to null.

**3. Reset Button**

- Stops the running interval.
- Resets the timer value to zero.

**4. Time Formatting**

```jsx
{String(Math.floor(time / 60)).padStart(2, '0')}:
{String(time % 60).padStart(2, '0')}
```

- `Math.floor(time / 60)` calculates minutes.
- `time % 60` calculates remaining seconds.
- `padStart(2, '0')` ensures two-digit formatting.

Example:

```text
00:05
00:45
01:10
02:30
```

---

# 8. When Should We Use useRef?

| Situation | Recommended Hook |
|---|---|
| Updating UI values | useState |
| Focusing input fields | useRef |
| Clearing DOM input fields | useRef |
| Storing timer IDs | useRef |
| Storing previous values | useRef + useEffect |
| Accessing video/audio elements | useRef |
| Storing mutable values without re-rendering | useRef |

---

# 9. Interview Questions and Answers (15)

### Q1. What is useRef in React?

**Answer:** useRef is a React Hook used to create mutable references that persist between renders without triggering a re-render.

### Q2. What does useRef return?

**Answer:** It returns a JavaScript object containing a property called `current`.

### Q3. Does updating useRef trigger a re-render?

**Answer:** No. Updating the `.current` property does not trigger a component re-render.

### Q4. What is the difference between useRef and useState?

**Answer:** useState updates the UI by triggering a re-render, whereas useRef stores mutable values without triggering a re-render.

### Q5. Can useRef access DOM elements?

**Answer:** Yes. We can attach a ref to a DOM element and access it using `.current`.

### Q6. What is ref.current?

**Answer:** It is the property that stores the current referenced value or DOM element.

### Q7. Does useRef preserve values between renders?

**Answer:** Yes. The same ref object is preserved between renders of a component.

### Q8. Can we use useRef to store a timer ID?

**Answer:** Yes. useRef is useful for storing setInterval and setTimeout IDs.

### Q9. Can we use useRef instead of useState?

**Answer:** Not generally. If a value needs to update the UI, useState should be used.

### Q10. What happens when a component re-renders?

**Answer:** The ref object remains the same, and its current value is preserved.

### Q11. What is the initial value of useRef?

**Answer:** We can provide any initial value, such as null, 0, an empty string, or an object.

### Q12. Why do we use useRef(null)?

**Answer:** We commonly use null as the initial value when creating a reference to a DOM element that is not yet available.

### Q13. How can we focus an input field using useRef?

**Answer:** We attach the ref to the input element and call `inputRef.current.focus()`.

### Q14. What is the use of clearInterval()?

**Answer:** clearInterval() stops a repeating interval created using setInterval().

### Q15. Can useRef be used with useEffect?

**Answer:** Yes. We can combine useRef and useEffect to store previous values, manage timers, and work with DOM elements.

---


# 10. Key Takeaways

1. useRef stores mutable values.
2. `.current` is used to access or update the stored value.
3. Updating `.current` does not trigger a re-render.
4. useRef can directly access DOM elements.
5. It is useful for managing timers and intervals.
6. It can store previous state values.
7. useRef and useState serve different purposes.

---

# 11. Next Module

**Module 15 – useMemo Hook**

Topics to learn:

- What is useMemo?
- Memoization in React.
- Performance optimization.
- Expensive calculations.
- Dependency array.
- useMemo vs useState.
- useMemo vs useCallback.
- Practical examples.

---

## 👨‍💻 Author

**Jay Hingu**

Learning React JS – Java Full Stack Developer Roadmap.

**Module:** 14 – useRef Hook

**Status:** Completed ✅
