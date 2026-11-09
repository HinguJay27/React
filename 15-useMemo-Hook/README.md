# Module 15 – useMemo Hook in React

## 📌 Introduction

The `useMemo` Hook is a React Hook used to optimize performance by caching the result of expensive calculations between component re-renders.

It prevents unnecessary recalculations when the dependencies of a calculation have not changed.

### 🎯 Learning Objectives

- Understand the useMemo Hook.
- Learn why useMemo is required.
- Understand its syntax and dependency array.
- Learn how memoization works.
- Prevent unnecessary calculations.
- Implement useMemo in a practical React application.
- Understand the difference between useMemo and useCallback.

---

## 1. What is useMemo?

**Definition:**

`useMemo` is a React Hook that caches the result of a calculation between re-renders until its dependencies change.

It is mainly used for performance optimization.

### Syntax

```jsx
const memoizedValue = useMemo(() => {
    return calculation;
}, [dependencies]);
```

### Parameters

1. Callback Function: Contains the calculation.
2. Dependency Array: Contains values that determine when recalculation is required.

### Return Value

Returns the cached result of the calculation.

---

## 2. Why useMemo?

Without useMemo, React executes calculations again whenever a component re-renders.

This can create performance problems when calculations are expensive.

### Example Without useMemo

```jsx
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const calculate = () => {
        console.log("Calculating...");

        let result = 0;

        for (let i = 0; i < 100000000; i++) {
            result += number;
        }

        return result;
    };

    const result = calculate();

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <h2>Result: {result}</h2>
        </div>
    );
}

export default App;
```

**Problem:** Every time the count changes, the calculation runs again.

---

## 3. Example With useMemo

```jsx
import { useMemo, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const result = useMemo(() => {
        console.log("Calculating...");

        let total = 0;

        for (let i = 0; i < 100000000; i++) {
            total += number;
        }

        return total;
    }, [number]);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <h2>Number: {number}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <h2>Result: {result}</h2>
        </div>
    );
}

export default App;
```

**Explanation:**

- Initial render: Calculation executes.
- Count changes: Cached result is reused.
- Number changes: Calculation executes again.
- Dependencies remain unchanged: Cached result is reused.

---

## 4. How useMemo Works

1. Component renders.
2. React executes the calculation.
3. React stores the result.
4. Component renders again.
5. React compares dependencies using Object.is.
6. If dependencies are unchanged, React reuses the cached value.
7. If dependencies change, React recalculates the value.

---

## 5. Dependency Array

### Empty Dependency Array

```jsx
const value = useMemo(() => {
    return 100 * 100;
}, []);
```

The calculation is cached after the initial render, assuming React retains the cache.

### With Dependencies

```jsx
const result = useMemo(() => {
    return number * 10;
}, [number]);
```

Recalculates when number changes.

### Without Dependency Array

```jsx
const result = useMemo(() => {
    return number * 10;
});
```

Recalculates on every render. This generally provides no memoization benefit.

---

## 6. Mini Practical Project – Product Search Filter

### Project Description

Create a simple product search application using useMemo.

### Features

- Display a list of products.
- Search products by name.
- Filter products dynamically.
- Increase a counter independently.
- Prevent unnecessary filtering when only the counter changes.

### App.jsx

```jsx
import { useMemo, useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Keyboard", price: 1500 },
        { id: 4, name: "Mouse", price: 800 },
        { id: 5, name: "Monitor", price: 12000 }
    ];

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        return products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h1>Product Search App</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2>Product List</h2>

            {filteredProducts.map((product) => (
                <p key={product.id}>
                    {product.name} - ₹{product.price}
                </p>
            ))}

            <hr />

            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Counter
            </button>
        </div>
    );
}

export default App;
```

### Expected Output

```text
Product Search App

[Search products...]

Product List

Laptop - ₹50000
Mobile - ₹20000
Keyboard - ₹1500
Mouse - ₹800
Monitor - ₹12000

Counter: 0

[Increase Counter]
```

### Practical Explanation

- useState manages search and counter.
- useMemo caches the filtered product list.
- filter() searches products.
- map() displays products.
- The dependency array [search] determines when filtering runs.

---

## 7. useMemo vs useCallback

| useMemo | useCallback |
|---|---|
| Caches calculated values | Caches function definitions |
| Returns a calculated result | Returns a function |
| Used for expensive calculations | Used when function identity matters |
| Optimizes value calculations | Optimizes function references |

Example:

```jsx
// useMemo
const result = useMemo(() => {
    return number * 10;
}, [number]);

// useCallback
const handleClick = useCallback(() => {
    console.log("Button clicked");
}, []);
```

---

## 8. Advantages of useMemo

1. Improves performance when expensive calculations are involved.
2. Prevents unnecessary recalculations.
3. Helps maintain stable object and array references.
4. Can reduce unnecessary work in optimized child components.
5. Makes expensive derived data calculations more efficient.

## 9. Disadvantages / Limitations

1. Adds some complexity to the code.
2. Uses memory to maintain cached values.
3. Not required for every calculation.
4. Incorrect dependencies can cause stale results.
5. It should not be used as a replacement for proper application logic.

**Note:** useMemo is a performance optimization, not a guarantee that a value will always remain cached.

---

## 10. Interview Questions and Answers

### Q1. What is useMemo in React?

**Answer:** useMemo is a React Hook that caches the result of a calculation between re-renders to prevent unnecessary recalculations.

### Q2. Why do we use useMemo?

**Answer:** We use useMemo to optimize performance when a component performs expensive calculations.

### Q3. What is the syntax of useMemo?

**Answer:**

```jsx
const value = useMemo(() => {
    return calculation;
}, [dependencies]);
```

### Q4. What does useMemo return?

**Answer:** It returns the calculated value or the cached result.

### Q5. What is memoization?

**Answer:** Memoization is an optimization technique that stores the result of a calculation and reuses it when the same inputs are provided.

### Q6. What happens when dependencies change?

**Answer:** React executes the calculation again and stores the new result.

### Q7. What happens when dependencies do not change?

**Answer:** React reuses the previously cached result, provided the cache is retained.

### Q8. Can we use useMemo without a dependency array?

**Answer:** Yes, but without a dependency array, the calculation runs on every render, so memoization provides no benefit.

### Q9. What is the difference between useMemo and useCallback?

**Answer:** useMemo caches a calculated value, whereas useCallback caches a function definition.

### Q10. Is useMemo a replacement for useEffect?

**Answer:** No. useMemo is used for caching calculation results, while useEffect is used to synchronize with external systems and handle side effects.

### Q11. Can useMemo improve application performance?

**Answer:** Yes. It can reduce unnecessary expensive calculations and improve performance.

### Q12. Should we use useMemo everywhere?

**Answer:** No. We should use it when there is a meaningful performance benefit.

### Q13. Can useMemo return an object or array?

**Answer:** Yes. It can cache primitive values, objects, arrays, and other calculation results.

### Q14. Is useMemo executed during rendering?

**Answer:** Yes. Its calculation function executes during rendering when React needs to calculate or recalculate the value.

### Q15. What is the difference between useMemo and React.memo?

**Answer:**

- useMemo caches a calculated value inside a component.
- React.memo is a higher-order component that can skip re-rendering a component when its props are unchanged.

---

## 11. Important Key Points for Revision

- useMemo is used for performance optimization.
- It caches calculated values.
- It helps avoid unnecessary recalculations.
- Dependencies determine when calculations run again.
- It should be used for expensive calculations when beneficial.
- It is different from useCallback and React.memo.

---

## 12. Conclusion

The useMemo Hook is an important React performance optimization tool.

It helps developers build efficient applications by caching expensive calculation results and avoiding unnecessary recalculations.


---

**Technologies:** React.js | JavaScript | React Hooks

**Repository:** React Learning Series
