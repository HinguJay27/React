# Module 18 – React Router DOM 🚀

## 📌 Introduction

React Router DOM is a popular library used in React applications to implement client-side routing.

It allows users to navigate between multiple pages or components without refreshing the entire browser.

In traditional websites, navigating between pages usually reloads the browser. React Router DOM provides smooth navigation by changing the displayed component according to the current URL.

### Example

Consider a website with the following pages:

- Home
- About
- Contact
- Product

Instead of creating separate HTML pages, React Router DOM allows us to manage these pages using React components and URLs.

---

# 1. What is React Router DOM?

React Router DOM is a routing library that helps developers create navigation systems in React applications.

It manages URLs and displays the appropriate components based on the current route.

### Important Features

1. Client-side navigation.
2. Multiple pages using React components.
3. Dynamic URL parameters.
4. Nested routing.
5. Browser history management.
6. Programmatic navigation.
7. Active navigation styling.
8. 404 Not Found page handling.

### Why Do We Use React Router DOM?

Without React Router DOM:
- Managing multiple pages becomes difficult.
- We need to manually manage which component should be displayed.
- Navigation and browser history management become complicated.

With React Router DOM:
- Easy navigation between pages.
- No full-page browser refresh.
- Clean URL management.
- Reusable components.
- Better application structure.

---

# 2. Installation and Setup

React Router DOM can be installed using npm.

### Installation Command

```bash
npm install react-router-dom
```

### Start React Application

```bash
npm run dev
```

### Importing React Router DOM

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
```

---

# 3. Important React Router DOM Concepts

## 3.1 BrowserRouter

**Definition:**

BrowserRouter is a router component that enables routing using the browser's URL and history API.

It wraps the main application and makes routing functionality available to its child components.

### Syntax

```jsx
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
  <App />
</BrowserRouter>
```

### Example – main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

**Important:** BrowserRouter is generally placed at the root level of the application.

## 3.2 Routes

**Definition:**

Routes is a component that groups multiple Route components.

It checks the current URL and renders the best matching route.

### Syntax

```jsx
import { Routes } from 'react-router-dom'

<Routes>
  {/* Route components */}
</Routes>
```

## 3.3 Route

**Definition:**

Route defines the relationship between a URL path and a React component.

Whenever the URL matches the specified path, the corresponding component is rendered.

### Syntax

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

### Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

**Explanation:**

- `/` displays Home.
- `/about` displays About.
- `/contact` displays Contact.

## 3.4 Link Component

**Definition:**

Link is used to navigate between different routes without reloading the entire browser page.

### Syntax

```jsx
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

### Example

```jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
```

### Why Use Link Instead of Anchor Tag?

HTML anchor tag:

```html
<a href="/about">About</a>
```

React Router Link:

```jsx
<Link to="/about">About</Link>
```

**Difference:**

- Anchor tag can trigger a full-page navigation.
- Link performs client-side navigation through React Router.

## 3.5 NavLink Component

**Definition:**

NavLink is similar to Link, but it provides additional functionality to identify whether the current route is active.

It is especially useful for navigation bars.

### Syntax

```jsx
import { NavLink } from 'react-router-dom'

<NavLink to="/about">
  About
</NavLink>
```

### Active Styling Example

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? 'active' : ''
  }
>
  About
</NavLink>
```

CSS:

```css
.active {
  color: red;
  font-weight: bold;
}
```

### Link vs NavLink

| Link | NavLink |
|---|---|
| Normal navigation | Navigation with active state |
| No built-in active state | Provides isActive |
| Used for general links | Useful for navigation bars |

## 3.6 useNavigate Hook

**Definition:**

useNavigate is a React Router DOM hook that allows us to navigate programmatically from one route to another.

It is useful after form submission, login, logout or button clicks.

### Example

```jsx
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  )
}

export default Login
```

### Important Methods

```jsx
navigate('/about')  // Navigate to About

navigate('/login')  // Navigate to Login

navigate(-1)        // Go to previous page

navigate(1)         // Go to next page
```

## 3.7 useParams Hook

**Definition:**

useParams is used to access dynamic parameters from the current URL.

It is useful when displaying individual user profiles, product details or other dynamic information.

### Example Route

```jsx
<Route
  path="/user/:id"
  element={<User />}
/>
```

### User.jsx

```jsx
import { useParams } from 'react-router-dom'

const User = () => {

  const { id } = useParams()

  return (
    <div>
      <h1>User Details</h1>
      <h2>User ID: {id}</h2>
    </div>
  )
}

export default User
```

### Output

| URL | Output |
|---|---|
| `/user/101` | User ID: 101 |
| `/user/102` | User ID: 102 |
| `/user/103` | User ID: 103 |

The same component handles different user IDs.

## 3.8 Nested Routing

**Definition:**

Nested routing means creating child routes inside a parent route.

It helps organize related pages under a common layout.

### Example Routes

```text
/dashboard
/dashboard/profile
/dashboard/settings
```

### App.jsx

```jsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

## 3.9 Outlet Component

**Definition:**

Outlet is used inside a parent component to render the matching child route.

### Dashboard.jsx

```jsx
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>
      <Link to="settings">Settings</Link>

      <Outlet />
    </div>
  )
}

export default Dashboard
```

**Explanation:**

- Dashboard is the parent component.
- Profile and Settings are child components.
- Outlet displays the selected child component.

## 3.10 404 Not Found Route

**Definition:**

A 404 route handles URLs that do not match any defined route.

### Example

```jsx
<Route
  path="*"
  element={<NotFound />}
/>
```

### NotFound.jsx

```jsx
const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found!</h2>
    </div>
  )
}

export default NotFound
```

---

# 4. Practical Implementation – React Router DOM

## 🎯 Project Description

Created a basic multi-page React website using React Router DOM.

The project contains a navigation bar and four different pages:

1. Home
2. About
3. Contact
4. Product

Users can navigate between these pages without refreshing the entire browser.

## 📂 Project Structure

```text
18-React-Router-Dom/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Product.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

## Step 1 – Install React Router DOM

```bash
npm install react-router-dom
```

## Step 2 – Configure BrowserRouter

**main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

## Step 3 – Create Navbar Component

**components/Navbar.jsx**

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h2>ABCD</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </nav>
  )
}

export default Navbar
```

## Step 4 – Create Home Page

**pages/Home.jsx**

```jsx
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
```

## Step 5 – Create About Page

**pages/About.jsx**

```jsx
import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default About
```

## Step 6 – Create Contact Page

**pages/Contact.jsx**

```jsx
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}

export default Contact
```

## Step 7 – Create Product Page

**pages/Product.jsx**

```jsx
import React from 'react'

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  )
}

export default Product
```

## Step 8 – Configure All Routes

**App.jsx**

```jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </div>
  )
}

export default App
```

## Step 9 – Run the Application

```bash
npm run dev
```

Open the local development URL provided by Vite.

## 🌐 Application Routes

| Page | URL |
|---|---|
| Home | http://localhost:5173/ |
| About | http://localhost:5173/about |
| Contact | http://localhost:5173/contact |
| Product | http://localhost:5173/product |

## 📸 Expected Output

The application displays:

- A navigation bar at the top.
- ABCD branding.
- Home, About, Contact and Product links.
- Different page content according to the selected route.
- Navigation without a full-page refresh.

---

# 5. Important Practical Concepts Summary

| Concept | Purpose |
|---|---|
| BrowserRouter | Enables routing |
| Routes | Groups route definitions |
| Route | Defines URL and component |
| Link | Navigates between routes |
| NavLink | Navigation with active state |
| useNavigate | Programmatic navigation |
| useParams | Reads dynamic URL parameters |
| Outlet | Displays nested routes |
| Nested Routing | Creates child routes |
| 404 Route | Handles invalid URLs |

---

# 6. React Router DOM Interview Questions – 15

### Q1. What is React Router DOM?

**Answer:** React Router DOM is a library used to implement routing and navigation in React applications. It allows users to navigate between different pages without reloading the entire browser.

### Q2. Why do we use React Router DOM?

**Answer:** We use React Router DOM to manage multiple routes, navigate between pages, handle dynamic URLs and create single-page applications.

### Q3. What is BrowserRouter?

**Answer:** BrowserRouter is a router component that enables routing using the browser's URL and history API.

### Q4. What is the difference between Routes and Route?

**Answer:**
- Routes is used to group multiple Route components.
- Route defines a particular URL path and its corresponding component.

### Q5. What is the difference between Link and NavLink?

**Answer:**
- Link is used for normal navigation.
- NavLink provides additional functionality to identify the active route and apply active styling.

### Q6. What is client-side routing?

**Answer:** Client-side routing means changing the displayed page or component based on the URL without requesting a completely new HTML page from the server for every navigation.

### Q7. What is useNavigate?

**Answer:** useNavigate is a hook used for programmatic navigation from one route to another.

### Q8. What is useParams?

**Answer:** useParams is a hook used to access dynamic parameters from the current URL.

### Q9. What is nested routing?

**Answer:** Nested routing means defining child routes inside a parent route. It helps organize related pages under a common layout.

### Q10. What is the use of Outlet?

**Answer:** Outlet is used inside a parent route component to display the matching child route component.

### Q11. What is a dynamic route?

**Answer:** A dynamic route is a route that contains variable URL parameters.

Example:

```jsx
<Route path="/user/:id" element={<User />} />
```

### Q12. How can we create a 404 Not Found page?

**Answer:** We can create a catch-all route using the wildcard `*` path.

```jsx
<Route path="*" element={<NotFound />} />
```

### Q13. Does React Router DOM reload the entire page during navigation?

**Answer:** No. Link and NavLink provide client-side navigation without a full-page browser reload.

### Q14. What is the difference between useNavigate and Link?

**Answer:**
- Link is used for navigation through clickable links.
- useNavigate is used for programmatic navigation inside functions and event handlers.

### Q15. Can we use React Router DOM without BrowserRouter?

**Answer:** Components such as Routes, Route, Link and useNavigate require an appropriate router context. BrowserRouter is commonly used to provide that context in browser applications, although other router types are also available.

---


# 7. Key Learnings

After completing this module, I learned:

1. What React Router DOM is and why it is important.
2. How client-side routing works.
3. How to install and configure React Router DOM.
4. How to use BrowserRouter, Routes and Route.
5. How to create multiple pages using React components.
6. How to navigate between pages using Link.
7. How NavLink provides active-route styling.
8. How useNavigate performs programmatic navigation.
9. How useParams handles dynamic URL parameters.
10. How nested routing and Outlet work.
11. How to handle invalid URLs using a 404 page.



# 👨‍💻 Author

**Jay Hingu**

- GitHub: [HinguJay27](https://github.com/HinguJay27)


**Module 18 – React Router DOM**
