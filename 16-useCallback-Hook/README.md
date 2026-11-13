# Module 16 – useCallback Hook in React

## 📌 Introduction

The `useCallback` Hook is a React Hook used for performance optimization. It memoizes a function and returns the same function reference between re-renders until its dependencies change.

It is commonly used with `React.memo` to prevent unnecessary child component re-renders when passing functions as props.

## 🎯 Learning Objectives

- Understand the useCallback Hook.
- Learn function memoization.
- Understand why functions are recreated during re-renders.
- Learn dependency arrays.
- Understand the relationship between `useCallback` and `React.memo`.
- Understand the difference between `useCallback` and `useMemo`.
- Implement practical examples.
- Prepare for React interview questions.

## 1. What is useCallback?

`useCallback` is used to cache a function definition between component re-renders.

### Syntax

```jsx
const memoizedFunction = useCallback(() => {
    // Function logic
}, [dependencies])
```

### Example

```jsx
import React, { useCallback } from 'react'

const App = () => {

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}

export default App
```

### Explanation

- `useCallback()` memoizes the function.
- `[]` represents an empty dependency array.
- React reuses the same function reference across renders while dependencies remain unchanged.

## 2. Why do we need useCallback?

When a React component re-renders, functions declared inside that component are recreated.

This can cause unnecessary child component re-renders when functions are passed as props.

### Without useCallback

```jsx
const handleClick = () => {
    console.log("Button Clicked")
}
```

Every parent re-render creates a new function reference.

### With useCallback

```jsx
const handleClick = useCallback(() => {
    console.log("Button Clicked")
}, [])
```

React reuses the previous function reference if dependencies have not changed.

## 3. Understanding React.memo

`React.memo` is a higher-order component used to optimize functional component rendering.

It skips rendering when the component's props remain unchanged according to shallow comparison.

### ChildComponents.jsx

```jsx
import React from 'react'

const ChildComponents = React.memo((props) => {

    console.log("Child Component Re-render")

    return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    )
})

export default ChildComponents
```

## 4. React.memo Without useCallback

### App.jsx

```jsx
import React, { useState } from 'react'
import ChildComponents from './components/ChildComponents'

const App = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("Child Button Clicked")
    }

    return (
        <div>

            <h3>Count: {count}</h3>

            <button onClick={() => {
                setCount(count + 1)
            }}>
                Increment
            </button>

            <br /><br />

            <ChildComponents
                buttonName="ClickMe"
                handleClick={handleClick}
            />

        </div>
    )
}

export default App
```

### Output Explanation

- Initially, the child component renders.
- Clicking Increment updates the parent state.
- The parent re-renders.
- A new `handleClick` function reference is created.
- `React.memo` detects the changed function prop.
- The child component renders again.

## 5. React.memo With useCallback

### App.jsx

```jsx
import React, { useState, useCallback } from 'react'
import ChildComponents from './components/ChildComponents'

const App = () => {

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Child Button Clicked")
    }, [])

    return (
        <div>

            <h3>Count: {count}</h3>

            <button onClick={() => {
                setCount(count + 1)
            }}>
                Increment
            </button>

            <br /><br />

            <ChildComponents
                buttonName="ClickMe"
                handleClick={handleClick}
            />

        </div>
    )
}

export default App
```

### Output Explanation

- Initially, the child component renders.
- Clicking Increment updates the parent state.
- The parent re-renders.
- `useCallback` preserves the function reference.
- `React.memo` detects that the child props are unchanged.
- The child component does not re-render.

**Important:** `useCallback` does not prevent the parent from re-rendering. It preserves function identity so that memoized child components can skip unnecessary rendering.

## 6. Dependency Array

The dependency array determines when React should return a new callback function.

### Empty Dependency Array

```jsx
const handleClick = useCallback(() => {
    console.log("Hello React")
}, [])
```

The function reference remains the same between re-renders.

### Single Dependency

```jsx
const handleClick = useCallback(() => {
    console.log(count)
}, [count])
```

A new function is returned when `count` changes.

### Multiple Dependencies

```jsx
const handleClick = useCallback(() => {

    console.log(name)
    console.log(age)

}, [name, age])
```

A new function is returned when either dependency changes.

**Note:** Always include the reactive values used inside the callback in its dependency array to avoid stale values.

## 7. Practical Example – Counter App

### App.jsx

```jsx
import React, { useState, useCallback } from 'react'
import ChildComponents from './components/ChildComponents'

const App = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        setCount(prevCount => prevCount - 1)
    }, [])

    return (
        <div>

            <h2>Counter App</h2>

            <h3>Count: {count}</h3>

            <ChildComponents
                increment={handleIncrement}
                decrement={handleDecrement}
            />

        </div>
    )
}

export default App
```

### ChildComponents.jsx

```jsx
import React from 'react'

const ChildComponents = React.memo((props) => {

    console.log("Child Component Rendered")

    return (
        <div>

            <button onClick={props.increment}>
                Increment
            </button>

            <button onClick={props.decrement}>
                Decrement
            </button>

        </div>
    )
})

export default ChildComponents
```

### Explanation

1. `useState` manages the counter.
2. `useCallback` memoizes the increment function.
3. `useCallback` memoizes the decrement function.
4. Functional state updates access the latest state.
5. `React.memo` prevents unnecessary child re-renders.

## 8. useCallback vs useMemo vs React.memo

| Feature | Purpose |
|---|---|
| useCallback | Memoizes a function |
| useMemo | Memoizes a calculated value |
| React.memo | Skips unnecessary component rendering |

### useCallback

```jsx
const handleClick = useCallback(() => {
    console.log("Hello")
}, [])
```

### useMemo

```jsx
const result = useMemo(() => {
    return a + b
}, [a, b])
```

### React.memo

```jsx
const Child = React.memo((props) => {
    return <h2>{props.name}</h2>
})
```

Remember:

- useCallback → Function
- useMemo → Value
- React.memo → Component

## 9. When to Use useCallback?

- When passing functions as props to memoized child components.
- When a function is used as a dependency in another Hook.
- When maintaining a stable function reference is important.
- When optimizing unnecessary renders in larger applications.

### When Not to Use useCallback?

- For every function in an application.
- For simple functions without performance issues.
- When memoization adds unnecessary complexity.
- When stable function identity provides no meaningful benefit.

## 10. Common Mistakes

### Mistake 1: Forgetting Dependencies

Incorrect:

```jsx
const handleClick = useCallback(() => {
    console.log(count)
}, [])
```

Correct:

```jsx
const handleClick = useCallback(() => {
    console.log(count)
}, [count])
```

### Mistake 2: Forgetting to Import useCallback

```jsx
import React, { useState, useCallback } from 'react'
```

### Mistake 3: Expecting useCallback to Prevent Parent Rendering

`useCallback` only preserves a function reference. It does not prevent the parent component from rendering.

### Mistake 4: Calling a Function During Rendering

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

## 11. Interview Questions and Answers

### Q1. What is useCallback in React?

**Answer:** `useCallback` is a React Hook that memoizes a function definition and returns the same function reference until its dependencies change.

### Q2. Why do we use useCallback?

**Answer:** To maintain stable function references and avoid unnecessary child component re-renders when used with React.memo.

### Q3. What is the syntax of useCallback?

**Answer:**

```jsx
const memoizedFunction = useCallback(() => {
    // Logic
}, [dependencies])
```

### Q4. What is memoization?

**Answer:** Memoization is an optimization technique that stores a previous result or reference and reuses it when relevant dependencies have not changed.

### Q5. Difference between useCallback and useMemo?

**Answer:** useCallback memoizes a function, whereas useMemo memoizes the result of a calculation.

### Q6. What is React.memo?

**Answer:** React.memo is a higher-order component that can skip unnecessary re-renders when props remain unchanged.

### Q7. Can useCallback prevent parent re-rendering?

**Answer:** No. It only preserves the function reference.

### Q8. What happens with an empty dependency array?

**Answer:** React reuses the same function reference across renders while the component remains mounted.

### Q9. What happens when a dependency changes?

**Answer:** React returns a new function reference.

### Q10. Can we use useCallback without React.memo?

**Answer:** Yes. It can be useful for maintaining stable dependencies in other Hooks, although it may not always provide a performance benefit.

### Q11. Is useCallback a replacement for useMemo?

**Answer:** No. They have different purposes. useCallback memoizes functions, while useMemo memoizes values.

### Q12. Does useCallback execute the function immediately?

**Answer:** No. It returns a memoized function that executes when called.

### Q13. Can we use useCallback with useEffect?

**Answer:** Yes. It can maintain a stable function dependency for useEffect.

```jsx
const fetchData = useCallback(() => {
    console.log("Fetching Data")
}, [])

useEffect(() => {
    fetchData()
}, [fetchData])
```

### Q14. Difference between React.memo and useCallback?

**Answer:** React.memo optimizes component rendering, whereas useCallback preserves function references.

### Q15. Should we use useCallback for every function?

**Answer:** No. Use it when stable function references provide a meaningful performance benefit.

## 12. Practical Assignments

### Task 1 – Basic useCallback

- Create a counter.
- Create a handleClick function using useCallback.
- Print a message when clicked.

### Task 2 – React.memo + useCallback

- Create Parent and Child components.
- Pass a function from Parent to Child.
- Prevent unnecessary child re-renders.

### Task 3 – Multiple Functions

- Create Increment and Decrement functions.
- Use useCallback for both.
- Display the counter in Parent.

### Task 4 – Dependency Array

- Create a name state.
- Create a callback that prints the name.
- Add name to the dependency array.

## 13. Quick Revision

| Concept | Description |
|---|---|
| useCallback | Memoizes function |
| React.memo | Memoizes component rendering |
| useMemo | Memoizes calculated value |
| Dependencies | Determine when callback changes |
| Empty array `[]` | Stable callback reference |
| Functional update | Accesses latest state |

## 📌 Final Conclusion

The `useCallback` Hook is an important React performance optimization technique. It helps maintain stable function references between renders and works particularly well with `React.memo`.

Understanding `useCallback`, `useMemo`, and `React.memo` is important for writing optimized React applications.

---

**Module:** 16 – useCallback Hook  
**Technology:** React.js  
**Category:** React Hooks  
**Level:** Beginner to Intermediate  
**Status:** Completed ✅

**Next Module:** useContext Hook – Module 17
