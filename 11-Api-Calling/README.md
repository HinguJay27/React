# Module 11 – API Calling in React.js

## 1. Introduction to API Calling

### What is an API?

**API (Application Programming Interface)** is a mechanism that allows two software applications to communicate and exchange data with each other.

In React, API Calling is used to fetch data from external servers and display it dynamically in the user interface.

**Example:**
- Fetching country information.
- Displaying weather information.
- Getting user details.
- Showing products from an online store.
- Displaying blog posts.

### How API Calling Works

```text
React Application
       |
       | HTTP Request
       v
    External API
       |
       | Response (JSON)
       v
 React Receives Data
       |
       v
  useState Updates
       |
       v
 UI Re-renders
```

---

## 2. Important API Concepts

### 1. HTTP Request

An HTTP Request is a message sent by a client to a server to request or send information.

Common HTTP methods:

| Method | Description |
|---|---|
| GET | Retrieve data from a server |
| POST | Send new data to a server |
| PUT | Update existing data |
| PATCH | Partially update data |
| DELETE | Delete data |

### 2. JSON

**JSON (JavaScript Object Notation)** is a lightweight data format used to exchange information between applications.

Example:

```json
{
  "name": "India",
  "capital": "New Delhi",
  "population": 1428627663
}
```

### 3. Promise

A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

A Promise has three states:

- Pending – Operation is still running.
- Fulfilled – Operation completed successfully.
- Rejected – Operation failed.

### 4. Async and Await

`async` and `await` are JavaScript keywords used to handle asynchronous operations more easily.

Example:

```javascript
const getData = async () => {
    const response = await fetch("https://example.com/api");
    const data = await response.json();

    console.log(data);
};
```

- `async`: Makes a function return a Promise.
- `await`: Waits for a Promise to settle before continuing.

### 5. useState with API Calling

`useState` is a React Hook used to store and update component data.

Example:

```jsx
const [data, setData] = useState([]);

setData(response.data);
```

When the state changes, React re-renders the component and displays the updated data.

---

## 3. Fetch API in React

### What is Fetch?

Fetch is a built-in JavaScript function used to make HTTP requests and retrieve data from APIs.

No external package installation is required.

### Syntax

```javascript
fetch("API_URL")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

### Fetch with Async/Await

```jsx
import React from 'react';

const App = () => {

    const getData = async () => {

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/5'
        );

        const data = await response.json();

        console.log(data);
    };

    return (
        <div>
            <button onClick={getData}>Get Data</button>
        </div>
    );
};

export default App;
```

### Explanation

1. `fetch()` sends an HTTP request to the API.
2. `await` waits for the server response.
3. `response.json()` converts the response body into JavaScript data.
4. `console.log(data)` displays the received data.
5. `onClick={getData}` calls the function when the button is clicked.

**Important:** Fetch does not automatically reject a Promise for HTTP errors such as 404 or 500. Check `response.ok` before processing the response.

---

## 4. Axios in React

### What is Axios?

Axios is a third-party JavaScript library used to make HTTP requests and communicate with APIs.

It simplifies API calling and automatically transforms JSON response data.

### Installation

```bash
npm install axios
```

### Import Axios

```jsx
import axios from 'axios';
```

### Axios GET Request

```jsx
import React from 'react';
import axios from 'axios';

const App = () => {

    const getData = async () => {

        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        console.log(response.data);
    };

    return (
        <div>
            <button onClick={getData}>Get Data</button>
        </div>
    );
};

export default App;
```

### Important Axios Methods

```javascript
axios.get(url);
axios.post(url, data);
axios.put(url, data);
axios.patch(url, data);
axios.delete(url);
```

### Understanding Axios Response

```javascript
const response = await axios.get(API_URL);

console.log(response);
console.log(response.data);
```

- `response`: Contains the complete Axios response object.
- `response.data`: Contains the actual data returned by the API.
- `response.status`: Contains the HTTP status code.
- `response.headers`: Contains response headers.

---

## 5. Fetch vs Axios

| Fetch API | Axios |
|---|---|
| Built into JavaScript | Third-party library |
| No installation required | Requires installation |
| Uses `response.json()` | Automatically transforms JSON |
| HTTP errors need manual checking | Rejects non-2xx responses by default |
| Supports HTTP requests | Supports HTTP requests |
| Basic request configuration | Convenient request configuration |

**Conclusion:** Both Fetch and Axios can communicate with APIs. Fetch is useful for simple requests, while Axios provides additional conveniences for larger applications.

---

## 6. Display API Data in React

We generally use `useState()` and `.map()` to display API data.

### Example

```jsx
const [data, setData] = useState([]);

const getData = async () => {
    const response = await axios.get(API_URL);
    setData(response.data);
};
```

### Display Data

```jsx
{data.map((elem, idx) => {
    return (
        <div key={idx}>
            <h2>{elem.name}</h2>
            <p>{elem.email}</p>
        </div>
    );
})}
```

### Important Concepts

**1. map()**

The `map()` method creates a new array by applying a function to every element.

**2. key**

The `key` prop helps React identify list elements when the list changes.

Prefer a unique ID:

```jsx
<div key={elem.id}>
```

**3. slice()**

The `slice()` method returns a selected portion of an array without modifying the original array.

```javascript
data.slice(0, 40)
```

Returns the first 40 elements.

```javascript
data.slice(1, 46)
```

Returns 45 elements, starting from index 1 and ending before index 46.

---

## 7. Project – Asia Countries Explorer

### Project Overview

**Project Name:** Asia Countries Explorer

The project fetches country information from an external API and displays it in a responsive card layout.

### Technologies Used

- React.js
- JavaScript
- Axios
- useState Hook
- HTML
- CSS
- REST API

### API Used

```text
https://countries.dev/region/Asia
```

This API provides information about Asian countries.

### Project Features

- Fetch Asian country data using Axios.
- Display country flags.
- Display country names.
- Display capital cities.
- Display population.
- Display currency name and symbol.
- Show population in compact format (M/B).
- Display countries using CSS Grid.
- Animated gradient border on card hover.
- Responsive card layout.

### Complete App.jsx Code

```jsx
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        const response = await axios.get(
            'https://countries.dev/region/Asia'
        );

        console.log(response.data);

        setData(response.data);
    };

    const formatPopulation = (population) => {

        return new Intl.NumberFormat('en', {
            notation: 'compact',
            maximumFractionDigits: 2
        }).format(population);

    };

    return (
        <div id='main'>

            <div id='header'>
                <h2>Asia Countries Explore</h2>
                <button onClick={getData}>
                    Get Countries
                </button>
            </div>

            <div id='container'>

                {data.slice(1, 46).map(function(elem, idx) {

                    return (

                        <div id='cards' key={idx}>

                            <img
                                src={elem.flags.png}
                                alt="Country Flag"
                            />

                            <h2>{elem.name}</h2>

                            <h3>
                                Capital :
                                <span>{elem.capital}</span>
                            </h3>

                            <p>
                                Population:
                                <span>
                                    {formatPopulation(elem.population)}
                                </span>
                            </p>

                            <p>
                                Currency:
                                <span>
                                    {elem.currencies?.[0]?.name}
                                    -
                                    {elem.currencies?.[0]?.symbol}
                                </span>
                            </p>

                        </div>
                    );

                })}

            </div>

        </div>
    );
};

export default App;
```

**Note:** This code assumes the API returns an array of country objects with the properties used above. Always inspect `console.log(response.data)` because different APIs can have different response structures.

---

## 8. Code Explanation

### 1. Import Statements

```jsx
import React, { useState } from 'react';
import axios from 'axios';
```

- React: Used to create React components.
- useState: Stores API data.
- Axios: Makes HTTP requests.

### 2. State Declaration

```jsx
const [data, setData] = useState([]);
```

- `data`: Stores country information.
- `setData`: Updates the state.
- `[]`: Initial state is an empty array.

### 3. API Calling Function

```jsx
const getData = async () => {

    const response = await axios.get(
        'https://countries.dev/region/Asia'
    );

    console.log(response.data);

    setData(response.data);
};
```

Explanation:

1. `getData` is an asynchronous function.
2. `axios.get()` sends a GET request.
3. `await` waits for the API response.
4. `response.data` accesses the actual country data.
5. `setData()` stores the received data in React state.

### 4. Button Click Event

```jsx
<button onClick={getData}>Get Countries</button>
```

When the user clicks the button, the `getData()` function executes and fetches country information.

### 5. Population Formatting

```jsx
const formatPopulation = (population) => {

    return new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 2
    }).format(population);

};
```

This function converts large population numbers into compact readable formats.

Examples:

| Original Number | Formatted Number |
|---:|---:|
| 1,000 | 1K |
| 1,000,000 | 1M |
| 1,240,000 | 1.24M |
| 1,000,000,000 | 1B |
| 1,240,000,000 | 1.24B |

### 6. Displaying Country Data

```jsx
{data.slice(1, 46).map(function(elem, idx) {
    return (
        <div key={idx}>
            <h2>{elem.name}</h2>
        </div>
    );
})}
```

- `slice(1, 46)`: Selects 45 countries from the array.
- `map()`: Iterates over the selected countries.
- `elem`: Represents the current country object.
- `idx`: Represents the current array index.
- `key`: Helps React identify each rendered element.

### 7. Displaying Country Flags

```jsx
<img src={elem.flags.png} alt="Country Flag" />
```

Displays the flag image using the image URL received from the API.

### 8. Displaying Currency

```jsx
{elem.currencies?.[0]?.name}
{elem.currencies?.[0]?.symbol}
```

- `currencies`: Contains currency information.
- `[0]`: Accesses the first currency.
- `?.`: Optional chaining prevents errors if a property is missing or null.

If an API returns multiple currencies, you can use `.map()` to display all of them.

---

## 9. Important JavaScript Concepts Used

| Concept | Purpose |
|---|---|
| async | Declares an asynchronous function |
| await | Waits for a Promise |
| axios.get() | Sends a GET request |
| useState() | Stores API data |
| setData() | Updates state |
| map() | Iterates over arrays |
| slice() | Selects array elements |
| optional chaining (?.) | Safely accesses nested properties |
| Intl.NumberFormat() | Formats numbers |
| onClick | Handles button clicks |

---

## 10. Error Handling in API Calling

API requests can fail because of network issues, invalid URLs, or server errors.

Use `try...catch` to handle errors.

```jsx
const getData = async () => {

    try {

        const response = await axios.get(API_URL);

        setData(response.data);

    } catch (error) {

        console.log("API Error:", error.message);

    }

};
```

### Loading State

You can also use another `useState` to display a loading message.

```jsx
const [loading, setLoading] = useState(false);
```

```jsx
const getData = async () => {

    try {

        setLoading(true);

        const response = await axios.get(API_URL);

        setData(response.data);

    } catch (error) {

        console.log(error.message);

    } finally {

        setLoading(false);

    }

};
```

Display:

```jsx
{loading && <h2>Loading...</h2>}
```

`finally` executes whether the request succeeds or fails.

---

## 11. Interview Questions and Answers

### Basic Questions

**Q1. What is an API?**

An API is a mechanism that allows two applications to communicate and exchange data.

**Q2. What is API Calling in React?**

API Calling is the process of requesting data from an external server and displaying it in a React application.

**Q3. What is REST API?**

REST API is an architectural style for building web services that communicate using HTTP methods.

**Q4. What is JSON?**

JSON stands for JavaScript Object Notation. It is a lightweight format used for exchanging data.

**Q5. What is Axios?**

Axios is a third-party JavaScript library used to make HTTP requests.

**Q6. What is Fetch API?**

Fetch is a built-in JavaScript function used to make HTTP requests.

**Q7. What is the difference between Fetch and Axios?**

Fetch is built into JavaScript, whereas Axios is an external library. Axios automatically transforms JSON response data, while Fetch requires `response.json()`.

**Q8. What is a GET request?**

A GET request is used to retrieve data from a server.

**Q9. What is a POST request?**

A POST request is used to send new data to a server.

**Q10. What is async/await?**

Async/await is a JavaScript feature used to handle asynchronous operations in a readable way.

### Intermediate Questions

**Q11. What is a Promise?**

A Promise represents the eventual success or failure of an asynchronous operation.

**Q12. Why do we use useState in API Calling?**

We use `useState` to store API response data and update the UI when new data arrives.

**Q13. What is response.data in Axios?**

`response.data` contains the actual response body returned by the API.

**Q14. Why do we use map() in React?**

We use `map()` to iterate over arrays and render multiple React elements.

**Q15. Why is the key prop important in React?**

The key prop helps React identify which list items have changed, been added, or removed.

**Q16. What is try...catch?**

It is a JavaScript error-handling mechanism used to catch errors during program execution.

**Q17. What is optional chaining?**

Optional chaining (`?.`) safely accesses nested object properties without throwing an error when an intermediate value is null or undefined.

**Q18. What is the purpose of response.json() in Fetch?**

It parses the response body as JSON and returns a Promise containing the parsed data.

**Q19. What is the difference between PUT and PATCH?**

PUT generally replaces an existing resource, while PATCH updates selected fields of a resource.

**Q20. What is the purpose of the finally block?**

The finally block executes whether an operation succeeds or fails. It is useful for stopping loading indicators.

---

### Practice Requirements

- Fetch data using Axios.
- Store response data using useState.
- Display data using map().
- Add a button to trigger API calls.
- Display images where available.
- Add loading and error handling.
- Make the UI responsive.

---

## 12. Module 11 – Summary

After completing this module, you should understand:

- What APIs are and how they work.
- HTTP methods: GET, POST, PUT, PATCH and DELETE.
- JSON data format.
- Promises and async/await.
- Fetch API.
- Axios library.
- API response handling.
- Using useState with API data.
- Rendering API data with map().
- Error handling using try...catch.
- Creating an API-based React project.

**Module 11 Project:** Asia Countries Explorer


---

**Learning Goal:** Understand how React applications communicate with external APIs, receive dynamic data, and display it using React state.
