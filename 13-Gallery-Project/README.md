# 📸 Module 13 - Picsum Image Gallery Project

A beginner-friendly React JS project that displays images from the Picsum Photos API. This project was created to practice React Hooks, API Calling, Axios, Props, Conditional Rendering, and Pagination.

---

## 📌 Project Overview

**Project Name:** Picsum Image Gallery

**Module:** 13 - Gallery Project

**Project Type:** React JS Frontend Project

**API:** Picsum Photos API

The application fetches images from an external API and displays them in a gallery. Users can navigate between different pages using Previous and Next buttons.

## ✨ Features

- Fetch images from the Picsum Photos API.
- Display images in a gallery layout.
- Show image author names.
- Navigate between pages using pagination.
- Previous and Next buttons.
- Clear old images when changing pages.
- Open original images in a new browser tab.
- Dynamic image rendering.
- Dark-themed user interface.
- Reusable image card component.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React JS | Frontend development |
| JavaScript | Application logic |
| Tailwind CSS | Styling |
| Axios | API requests |
| Picsum API | Fetching images |
| Vite | Development environment |

## 📂 Folder Structure

```text
module-13-Gallery-Project/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## 🌐 API Integration

**API Name:** Picsum Photos API

API URL:

```text
https://picsum.photos/v2/list?page=1&limit=21
```

### API Parameters

| Parameter | Description |
|---|---|
| page | Specifies the current page number |
| limit | Specifies the number of images to fetch |

Example:

```javascript
const response = await axios.get(
  `https://picsum.photos/v2/list?page=${index}&limit=21`
)
```

The API returns image information such as:

- Image ID
- Author name
- Image URL
- Download URL
- Image dimensions

## ⚛️ React Concepts Covered

### 1. useState Hook

The useState Hook is used to manage component state.

In this project, it manages image data and the current page number.

```javascript
const [userData, setUserData] = useState([])
const [index, setIndex] = useState(1)
```

### 2. useEffect Hook

The useEffect Hook is used to perform side effects in React.

In this project, it fetches images when the component loads and whenever the page number changes.

```javascript
useEffect(() => {
  getData()
}, [index])
```

### 3. API Calling with Axios

Axios is used to send HTTP requests and retrieve data from the Picsum API.

```javascript
const getData = async () => {
  const response = await axios.get(
    `https://picsum.photos/v2/list?page=${index}&limit=21`
  )

  setUserData(response.data)
}
```

### 4. Async and Await

Async and Await are used to handle asynchronous operations.

- `async` makes a function asynchronous.
- `await` waits for a Promise to settle before continuing.

### 5. Conditional Rendering

Conditional rendering displays different UI elements depending on the application state.

Example: Showing a Loading message while image data is unavailable.

### 6. Array map() Method

The map() method is used to render multiple image cards dynamically.

```jsx
userData.map((elem) => {
  return <Card key={elem.id} elem={elem} />
})
```

### 7. Props

Props are used to pass data from a parent component to a child component.

In this project, `App.jsx` passes image information to `Card.jsx`.

```jsx
<Card elem={elem} />
```

### 8. Pagination

Pagination allows users to navigate through multiple pages of images.

```javascript
setIndex(prev => prev + 1)
```

For the Previous button:

```javascript
setIndex(prev => prev - 1)
```

### 9. Reusable Components

The Card component is reused to display every image.

This makes the code cleaner, easier to maintain, and reusable.

### 10. Event Handling

Click events are used to handle Previous and Next button interactions.

```jsx
<button onClick={() => setIndex(prev => prev + 1)}>
  Next
</button>
```

---

## 📦 Installation and Setup

### Step 1: Create React Project

```bash
npm create vite@latest
```

Choose React and JavaScript when prompted.

### Step 2: Navigate to Project

```bash
cd module-13-Gallery-Project
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Install Axios

```bash
npm install axios
```

### Step 5: Start Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

---

## 🎯 Interview Questions and Answers

### Basic React Questions

**Q1. What is React JS?**

React JS is a JavaScript library used to build interactive user interfaces, especially single-page applications.

**Q2. What is a component in React?**

A component is a reusable piece of UI. It helps divide an application into smaller and manageable parts.

**Q3. What is JSX?**

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript.

**Q4. What is useState?**

useState is a React Hook used to add and manage state in functional components.

**Q5. What is useEffect?**

useEffect is a React Hook used to handle side effects such as API calls, timers, and document title updates.

### API and Axios Questions

**Q6. What is an API?**

API stands for Application Programming Interface. It allows different software applications to communicate with each other.

**Q7. What is Axios?**

Axios is a JavaScript library used to make HTTP requests to APIs.

**Q8. What is the difference between fetch() and Axios?**

Both are used to make HTTP requests. Axios automatically parses JSON responses and provides convenient request and error-handling features.

**Q9. What is GET request?**

A GET request is used to retrieve data from a server.

**Q10. What is async and await?**

Async and Await are JavaScript features used to handle asynchronous operations in a cleaner way.

**Q11. What is response.data in Axios?**

It contains the response body returned by the API.

**Q12. What is JSON?**

JSON stands for JavaScript Object Notation. It is a lightweight data format used to exchange information.

### useEffect Questions

**Q13. Why did you use useEffect in this project?**

I used useEffect to fetch images when the component loads and whenever the page number changes.

**Q14. What is a dependency array in useEffect?**

A dependency array tells React when to run the effect again based on changes in its dependencies.

**Q15. What happens when we use an empty dependency array []?**

The effect runs after the initial render. In development Strict Mode, React may run an additional setup and cleanup cycle.

**Q16. What happens when we use [index] in useEffect?**

The effect runs after the initial render and whenever the index value changes.

**Q17. What is a side effect in React?**

A side effect is an operation that interacts with something outside the component's rendering process, such as an API request or updating the document title.

### JavaScript and Project Questions

**Q18. What is the map() method?**

The map() method creates a new array by applying a function to each element of an existing array.

**Q19. What are props in React?**

Props are read-only data passed from a parent component to a child component.

**Q20. What is conditional rendering?**

Conditional rendering means displaying UI elements based on conditions.

**Q21. Why do we use keys in React lists?**

Keys help React identify which list items have changed, been added, or removed.

**Q22. What is pagination?**

Pagination divides a large amount of data into smaller pages so users can navigate through it easily.

**Q23. Why did you use Axios instead of writing everything manually?**

Axios simplifies HTTP requests and response handling, making API integration easier.

**Q24. What is the purpose of setIndex()?**

setIndex updates the current page number and triggers a re-render.

**Q25. What happens when the Next button is clicked?**

The page number increases, the state updates, and useEffect runs again to fetch images for the new page.

**Q26. Why did you create a separate Card component?**

To make the application modular and reusable. Each image can be displayed using the same component.

**Q27. What is the difference between state and props?**

State is managed inside a component, whereas props are passed from a parent component to a child component.

**Q28. What is Vite?**

Vite is a frontend build tool that provides a fast development server and optimized production builds.

**Q29. What is the difference between == and === in JavaScript?**

`==` compares values after type conversion, whereas `===` compares both value and data type.

**Q30. What is the purpose of try...catch?**

It handles errors that may occur during operations such as API requests and prevents unhandled failures.

---



## 📚 Learning Outcomes

After completing this project, I practiced:

- React functional components.
- useState and useEffect Hooks.
- API integration using Axios.
- Async and Await.
- Props and reusable components.
- Conditional rendering.
- Array map() method.
- Event handling.
- Pagination.
- Dynamic data rendering.

## 👨‍💻 Author

**Jay Hingu**

B.E. Computer Engineering Student | Learning React JS | Building Practical Projects

---

⭐ If you like this project, feel free to star the repository!

**Project:** Module 13 - Gallery Project

**Status:** Completed
