# Module 12 – useEffect Hook in React JS

## 1. Introduction to useEffect

`useEffect` is a React Hook that allows us to perform side effects in functional components.

A side effect is an operation that happens outside the normal rendering process.

### Examples of Side Effects
- Fetching data from an API.
- Updating browser document title.
- Setting timers.
- Adding event listeners.
- Working with localStorage.
- Subscribing to external services.

### Syntax

```jsx
import { useEffect } from 'react';

useEffect(() => {
    // Side effect code
}, []);
```

## 2. Why do we use useEffect?

React components re-render whenever their state or props change.

Sometimes we need to perform an operation after rendering, such as fetching API data or updating the browser title.

`useEffect` helps us synchronize our component with external systems.

## 3. Three Types of useEffect

### A. useEffect Without Dependency Array

```jsx
import { useState, useEffect } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rendered");
    });

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
};

export default App;
```

**Explanation:**
- Runs after every committed render.
- Runs after the initial render.
- Runs again whenever the component re-renders.

### B. useEffect With Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Component Mounted");
}, []);
```

**Explanation:**
- Runs after the initial render.
- Does not re-run on ordinary state or prop updates.
- Useful for initial API calls and one-time setup.

### C. useEffect With Dependency Array

```jsx
import { useState, useEffect } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changed:", count);
    }, [count]);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
};

export default App;
```

**Explanation:**
- Runs after the initial render.
- Runs again whenever `count` changes.
- Does not run just because an unrelated state changes.

## 4. Understanding Dependency Array

A dependency array tells React which reactive values should cause an effect to run again.

| Syntax | Execution |
|---|---|
| `useEffect(() => {})` | After every render |
| `useEffect(() => {}, [])` | After initial mount |
| `useEffect(() => {}, [count])` | Initial mount + count changes |
| `useEffect(() => {}, [name, age])` | Initial mount + name or age changes |

## 5. useState vs useEffect

| useState | useEffect |
|---|---|
| Manages component state | Handles side effects |
| Stores data | Synchronizes with external systems |
| Returns state and setter | Runs effect after rendering |
| State updates can cause re-rendering | Runs according to dependencies |

## 6. Updating Browser Document Title

We can use `useEffect` to change the browser tab title dynamically.

```jsx
import { useState, useEffect } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
};

export default App;
```

**Explanation:**
- `document.title` changes the browser tab title.
- Whenever count changes, the effect runs.
- The browser title displays the latest count.

## 7. Cleanup Function in useEffect

A cleanup function is used to clean up side effects before an effect runs again or when the component unmounts.

### Example: setInterval and clearInterval

```jsx
import { useState, useEffect } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <h1>Timer: {count}</h1>
    );
};

export default App;
```

### Explanation

1. `setInterval()` executes repeatedly after every second.
2. `timer` stores the interval ID.
3. `return () => {}` defines the cleanup function.
4. `clearInterval(timer)` stops the timer.

### Uses of Cleanup Function

- Clearing intervals.
- Clearing timeouts.
- Removing event listeners.
- Cancelling or ignoring outdated API requests.
- Unsubscribing from subscriptions.

## 8. API Calling With useEffect

We can use `useEffect` to fetch API data when a component initially loads.

### Example

```jsx
import { useState, useEffect } from 'react';

const App = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getUsers = async () => {

            try {

                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );

                const data = await response.json();

                setUsers(data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

        getUsers();

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>User List</h1>

            {users.map((user) => (
                <h3 key={user.id}>
                    {user.name}
                </h3>
            ))}
        </div>
    );
};

export default App;
```

### Explanation

- `useState` stores API data.
- `useEffect` executes the API request after initial rendering.
- `async/await` handles asynchronous operations.
- `setUsers(data)` stores the API response.
- `loading` manages the loading state.
- `finally` executes after success or failure.

**Important:** Do not make the effect callback itself async. Define an async function inside it and call that function.

## 9. Component Lifecycle

React component lifecycle consists of three main phases.

### A. Mounting

When a component is created and added to the DOM.

### B. Updating

When a component re-renders because its state or props change.

### C. Unmounting

When a component is removed from the DOM.

| Lifecycle | Meaning |
|---|---|
| Mounting | Component is created |
| Updating | Component is updated |
| Unmounting | Component is removed |

`useEffect` runs after commits, and its cleanup function helps manage resources during updates and unmounting.

## 10. Rules of useEffect

1. Always call Hooks at the top level of components.
2. Do not call Hooks inside loops or conditions.
3. Include all reactive values used by an effect in its dependency array.
4. Do not make the effect callback directly async.
5. Use cleanup functions when necessary.
6. Avoid unnecessary effects for values that can be calculated during rendering.
7. Avoid unnecessary state updates inside effects.

### Important Note: React Strict Mode

In development, React Strict Mode may run an additional setup and cleanup cycle to help identify bugs.

This is normal and does not mean your effect is broken.

## 11. Practical Project – Live Character Counter

### Project Features

- Live character counter.
- Live word counter.
- Maximum 200 characters.
- Remaining character count.
- Clear button.
- Dynamic browser tab title.
- Dark theme UI.

### Concepts Used

- useState
- useEffect
- Dependency array
- Event handling
- Conditional calculations
- JSX
- CSS styling

### App.jsx

```jsx
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

    const [message, setMessage] = useState('');

    const maxLength = 200;

    useEffect(() => {
        document.title = `${message.length} Characters`;
    }, [message]);

    const wordCount = message.trim()
        ? message.trim().split(/\s+/).length
        : 0;

    const clearMessage = () => {
        setMessage('');
    };

    return (
        <div className="container">

            <div className="card">

                <h1>Live Character Counter</h1>

                <p>Type something below</p>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Start typing..."
                    maxLength={maxLength}
                />

                <div className="counter">

                    <p>Characters: {message.length}</p>

                    <p>Words: {wordCount}</p>

                    <p>Remaining: {maxLength - message.length}</p>

                </div>

                <button onClick={clearMessage}>
                    Clear
                </button>

            </div>

        </div>
    );
};

export default App;
```

### App.css

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #111827;
    color: white;
    font-family: Arial, sans-serif;
}

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 450px;
    background: #1f2937;
    padding: 30px;
    border-radius: 12px;
}

h1 {
    text-align: center;
    margin-bottom: 10px;
    color: #38bdf8;
}

.card p {
    margin-bottom: 15px;
    color: #d1d5db;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 12px;
    background: #111827;
    color: white;
    border: 1px solid #374151;
    border-radius: 8px;
    resize: none;
    outline: none;
}

textarea:focus {
    border-color: #38bdf8;
}

.counter {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;
}

.counter p {
    font-size: 13px;
}

button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background: #0284c7;
    color: white;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}

button:hover {
    background: #0369a1;
}
```

## 12. Interview Questions and Answers

**Q1. What is useEffect in React?**

`useEffect` is a React Hook used to synchronize components with external systems.

**Q2. Why do we use useEffect?**

For API calls, timers, event listeners, subscriptions and updating document titles.

**Q3. What happens without a dependency array?**

The effect runs after every committed render.

**Q4. What happens with an empty dependency array?**

The effect runs after the initial mount.

**Q5. What is a dependency array?**

It specifies which reactive values trigger an effect to run again.

**Q6. What is a cleanup function?**

A function that cleans up side effects before the effect runs again or the component unmounts.

**Q7. Can we use async directly in useEffect?**

No. We define an async function inside the effect and call it.

**Q8. Difference between useState and useEffect?**

useState manages component state, while useEffect handles side effects.

**Q9. What is mounting?**

When a component is added to the DOM.

**Q10. What is unmounting?**

When a component is removed from the DOM.

**Q11. What is setInterval?**

It executes a function repeatedly after a specified time interval.

**Q12. What is clearInterval?**

It stops an interval created using setInterval.

**Q13. Why do we use an empty dependency array for initial API calls?**

To avoid re-running the effect on ordinary component updates.

**Q14. What is document.title?**

It is used to change the browser tab title.

**Q15. What is React Strict Mode?**

A development-only tool that helps identify potential problems in React applications.



## 13. Important Revision Table

| Concept | Purpose |
|---|---|
| useEffect | Handles side effects |
| Dependency Array | Controls when effects re-run |
| Empty Array `[]` | Initial effect setup |
| setInterval | Repeated execution |
| clearInterval | Stops interval |
| Cleanup Function | Releases resources |
| async/await | Handles asynchronous operations |
| Mounting | Component creation |
| Updating | Component re-rendering |
| Unmounting | Component removal |

## 14. Learning Outcomes

After completing Module 12, you should understand:

- What useEffect is and why it is used.
- Three dependency array patterns.
- Difference between useState and useEffect.
- Updating browser document title.
- Cleanup functions.
- setInterval and clearInterval.
- API calling using useEffect.
- Component lifecycle.
- React Hooks rules.
- Practical useEffect implementation.

---

**Module 12 – useEffect Hook Completed.**

**Project:** Live Character Counter
