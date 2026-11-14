# Module 17 – useContext Hook & Mini Project

## 📌 Overview

The `useContext` Hook is a React Hook that allows components to access shared data without passing props manually through every level of the component tree.

It helps solve a common React problem called **Prop Drilling**.

In this module, I learned how to:
- Understand the useContext Hook.
- Create Context using `createContext()`.
- Share data using Context Provider.
- Consume shared data using `useContext()`.
- Avoid Prop Drilling.
- Share multiple values using Context.
- Combine useContext with useState.
- Implement Light/Dark Theme functionality.
- Build a User Profile Dashboard Mini Project.

---

# 1. What is useContext?

`useContext` is a React Hook used to access values from a Context object.

### Definition

The useContext Hook allows functional components to consume values from React Context without passing props through intermediate components.

### Syntax

```jsx
import { useContext } from "react";

const value = useContext(MyContext);
```

### Why use useContext?

Suppose we have multiple nested components and all components need the same user information.

Without Context, we need to pass data through props.

With useContext, components can access shared data directly.

---

# 2. What is Prop Drilling?

Prop drilling means passing data from a parent component to deeply nested child components through intermediate components that do not need that data.

### Example without useContext

```jsx
function App() {
  const username = "Jay";

  return <Dashboard username={username} />;
}

function Dashboard({ username }) {
  return <Profile username={username} />;
}

function Profile({ username }) {
  return <h2>Hello {username}</h2>;
}
```

Here, `username` passes through Dashboard even though Dashboard does not need it.

### Solution

React Context helps avoid unnecessary prop passing.

---

# 3. How useContext Works

There are three main steps:

1. Create Context using `createContext()`.
2. Provide data using `Context.Provider`.
3. Access data using `useContext()`.

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

### Step 2: Provide Context

```jsx
<UserContext.Provider value={username}>
  <Dashboard />
</UserContext.Provider>
```

### Step 3: Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const username = useContext(UserContext);

  return <h2>Hello {username}</h2>;
}
```

---

# 4. Sharing Multiple Values Using Context

We can share multiple values through an object.

```jsx
import { createContext } from "react";

export const UserContext = createContext();

const user = {
  name: "Jay",
  age: 21,
  course: "Computer Engineering"
};
```

Provide the object:

```jsx
<UserContext.Provider value={user}>
  <Profile />
</UserContext.Provider>
```

Consume the object:

```jsx
const user = useContext(UserContext);

return (
  <>
    <h2>{user.name}</h2>
    <h3>{user.age}</h3>
    <p>{user.course}</p>
  </>
);
```

---

# 5. Mini Project – User Profile Dashboard

## Project Description

I built a simple and modern User Profile Dashboard using React and the useContext Hook.

The project demonstrates how Context API can share user information and theme settings between multiple components without prop drilling.

### Features

- Display user profile information.
- Display username and email.
- Display developer role and location.
- Show technical skills.
- Display project statistics.
- Light/Dark Theme Toggle.
- Responsive UI.
- Shared global state using Context API.

## Technologies Used

- React.js
- JavaScript
- CSS3
- React Hooks
- Context API

## Folder Structure

```text
17-useContext/
│
├── README.md
│
└── src/
    ├── context/
    │   └── UserContext.jsx
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProfileCard.jsx
    │   └── StatsCard.jsx
    │
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

---

# 6. Complete Mini Project Code

## 6.1 UserContext.jsx

Location: `src/context/UserContext.jsx`

```jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "Jay Hingu",
    email: "jay@example.com",
    role: "Frontend Developer",
    location: "Gujarat, India",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, darkMode, toggleTheme }}
    >
      {children}
    </UserContext.Provider>
  );
};
```

### Explanation

- `createContext()` creates a Context object.
- `useState()` manages user information.
- `darkMode` manages the current theme.
- `toggleTheme()` changes the theme.
- `UserProvider` provides shared values to child components.
- `children` represents the components wrapped inside the Provider.

## 6.2 Navbar.jsx

Location: `src/components/Navbar.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {

  const { user, darkMode, toggleTheme } =
    useContext(UserContext);

  return (
    <nav className="navbar">

      <h2>DevProfile.</h2>

      <div className="nav-right">

        <span>Welcome, {user.name}</span>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;
```

### Explanation

- `useContext()` accesses shared Context values.
- Displays the username.
- `toggleTheme` changes the theme when the button is clicked.

## 6.3 ProfileCard.jsx

Location: `src/components/ProfileCard.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProfileCard = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="profile-card">

      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <h2>{user.name}</h2>

      <p className="role">{user.role}</p>

      <div className="user-details">
        <p>📧 {user.email}</p>
        <p>📍 {user.location}</p>
      </div>

      <h3>My Skills</h3>

      <div className="skills">

        {user.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}

      </div>

    </div>
  );
};

export default ProfileCard;
```

### Explanation

- Accesses the user object directly from Context.
- Displays the user's information.
- Uses `map()` to display skills dynamically.
- Uses `charAt(0)` to display the first letter of the username.

## 6.4 StatsCard.jsx

Location: `src/components/StatsCard.jsx`

```jsx
const StatsCard = () => {

  const stats = [
    {
      title: "Projects",
      value: "05",
      icon: "🚀"
    },
    {
      title: "Skills",
      value: "04",
      icon: "💻"
    },
    {
      title: "Experience",
      value: "Fresher",
      icon: "⭐"
    }
  ];

  return (
    <div className="stats-container">

      {stats.map((item, index) => (

        <div className="stats-card" key={index}>

          <span>{item.icon}</span>

          <h2>{item.value}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </div>
  );
};

export default StatsCard;
```

### Explanation

- Stores statistics in an array.
- Uses `map()` to render multiple cards.
- Uses reusable component structure.

## 6.5 App.jsx

Location: `src/App.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import StatsCard from "./components/StatsCard";

import "./App.css";

const App = () => {

  const { darkMode } = useContext(UserContext);

  return (

    <div className={darkMode ? "app dark" : "app"}>

      <Navbar />

      <main className="container">

        <div className="heading">

          <h1>My Dashboard</h1>

          <p>
            Manage your developer profile in one place.
          </p>

        </div>

        <ProfileCard />

        <h2 className="section-title">
          My Overview
        </h2>

        <StatsCard />

      </main>

      <footer>
        Built with React useContext Hook ❤️
      </footer>

    </div>

  );
};

export default App;
```

### Explanation

- Imports all reusable components.
- Reads `darkMode` from Context.
- Applies the appropriate CSS class.
- Displays Navbar, ProfileCard and StatsCard.

## 6.6 App.css

Location: `src/App.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.app {
  min-height: 100vh;
  background: #f4f6fb;
  color: #20243a;
  transition: 0.3s;
}

/* Navbar */

.navbar {
  height: 75px;
  background: white;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar h2 {
  color: #6254d9;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar button {
  background: #6254d9;
  color: white;
  border: none;
  padding: 10px 17px;
  border-radius: 8px;
  cursor: pointer;
}

/* Main Container */

.container {
  max-width: 1000px;
  margin: 45px auto;
  padding: 0 20px;
}

.heading {
  margin-bottom: 30px;
}

.heading h1 {
  font-size: 30px;
  margin-bottom: 8px;
}

.heading p {
  color: #777;
}

/* Profile Card */

.profile-card {
  background: white;
  padding: 35px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
}

.avatar {
  width: 85px;
  height: 85px;
  margin: auto;
  background: #6254d9;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
}

.profile-card h2 {
  margin-top: 15px;
}

.role {
  color: #6254d9;
  margin-top: 6px;
}

.user-details {
  margin: 20px 0;
  color: #666;
  line-height: 2;
}

.profile-card h3 {
  margin-bottom: 15px;
}

/* Skills */

.skills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.skills span {
  background: #eeecff;
  color: #6254d9;
  padding: 9px 16px;
  border-radius: 20px;
  font-size: 14px;
}

/* Statistics */

.section-title {
  margin: 35px 0 20px;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stats-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
}

.stats-card span {
  font-size: 28px;
}

.stats-card h2 {
  margin: 12px 0 5px;
  color: #6254d9;
}

.stats-card p {
  color: #777;
}

/* Footer */

footer {
  text-align: center;
  padding: 25px;
  color: #888;
}

/* Dark Mode */

.app.dark {
  background: #171827;
  color: white;
}

.dark .navbar,
.dark .profile-card,
.dark .stats-card {
  background: #25263a;
  color: white;
}

.dark .heading p,
.dark .user-details,
.dark .stats-card p {
  color: #c2c2d0;
}

.dark .skills span {
  background: #383456;
  color: #d3ceff;
}

/* Responsive */

@media (max-width: 600px) {

  .navbar {
    padding: 0 15px;
  }

  .nav-right {
    gap: 10px;
  }

  .nav-right span {
    display: none;
  }

  .heading h1 {
    font-size: 25px;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }

  .profile-card {
    padding: 25px 15px;
  }

}
```

## 6.7 main.jsx

Location: `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <UserProvider>
      <App />
    </UserProvider>

  </React.StrictMode>

);
```

---

# 7. How the Project Works

### Component Flow

```text
main.jsx
   |
   v
UserProvider
   |
   v
   App
   |
   |---- Navbar
   |
   |---- ProfileCard
   |
   |---- StatsCard
```

### Context Data Flow

```text
UserContext.jsx
       |
       |--- user
       |--- darkMode
       |--- toggleTheme
       |
       v
     Provider
       |
       |--- App
       |--- Navbar
       |--- ProfileCard
```

All components inside the Provider can consume shared Context values without passing props through intermediate components.

---

# 8. Difference Between Props and useContext

| Props | useContext |
|---|---|
| Pass data between components | Access shared Context data |
| Requires prop passing | Avoids intermediate prop passing |
| Suitable for parent-child communication | Suitable for deeply nested components |
| Can lead to prop drilling | Helps avoid prop drilling |

---

# 9. Advantages of useContext

1. Avoids prop drilling.
2. Makes component communication easier.
3. Shares common data across components.
4. Reduces unnecessary prop passing.
5. Useful for theme management.
6. Useful for authentication.
7. Improves code organization.

# 10. Limitations of useContext

1. Context updates can cause consuming components to re-render.
2. Too many unrelated values in one Context can make code difficult to maintain.
3. Context is not automatically a replacement for Redux.
4. Large applications may benefit from dedicated state-management solutions.

---

# 11. Important Interview Questions and Answers

### Q1. What is useContext?

`useContext` is a React Hook that allows components to access shared data from Context without passing props manually.

### Q2. Why do we use useContext?

To avoid prop drilling and share data across multiple components.

### Q3. Which function creates Context?

`createContext()`.

### Q4. What is Context Provider?

Provider makes a Context value available to components inside its subtree.

### Q5. What is Prop Drilling?

Prop drilling means passing data through multiple intermediate components.

### Q6. What is the syntax of useContext?

```jsx
const value = useContext(MyContext);
```

### Q7. Can we use useContext in functional components?

Yes. It is designed for function components and custom Hooks.

### Q8. Can we share multiple values using Context?

Yes. We can pass an object or array through the Provider value.

### Q9. Can useContext replace Redux?

For simple shared state, Context can be sufficient. Redux offers additional tools for complex state management.

### Q10. Can multiple Contexts be used in one application?

Yes. We can create AuthContext, ThemeContext, CartContext and more.

### Q11. Does useContext require useState?

No. However, combining useState with Context allows shared state to be updated.

### Q12. What happens when Context value changes?

Components consuming that Context are notified and may re-render.

### Q13. What is the default value of createContext?

It is the value passed as an argument to `createContext(defaultValue)`.

### Q14. Can we use useContext outside a Provider?

Yes. It returns the default value passed to `createContext()`, or `undefined` if no default is supplied.

### Q15. What are the real-world use cases of useContext?

Authentication, theme management, language preferences, shopping carts and shared application settings.

---

# 12. Practice Tasks

Try these tasks yourself:

- [ ] Create a ThemeContext.
- [ ] Implement Light/Dark Theme Toggle.
- [ ] Create an AuthContext.
- [ ] Display the logged-in user's name.
- [ ] Share multiple values through Context.
- [ ] Add a button to update the user's name.
- [ ] Use two different Contexts in one application.

---

# 13. Important Revision

| Function / Hook | Purpose |
|---|---|
| `createContext()` | Creates Context |
| `Context.Provider` | Provides shared values |
| `useContext()` | Reads Context values |
| `useState()` | Manages component state |

### Important Points

- `useContext` helps avoid prop drilling.
- Context is created using `createContext()`.
- Data is shared using Provider.
- Components consume data using `useContext()`.
- Context can share objects, arrays and functions.
- Combining Context with useState allows shared state updates.

---

# 14. Project Execution

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open Browser

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

---

# 15. Learning Outcome

After completing this module, I understand how React Context API works, how to create and consume Context, how to avoid prop drilling, and how to manage shared application data using useContext and useState.

I also implemented a User Profile Dashboard with Light/Dark Theme functionality.

**Module:** 17 – useContext Hook & Mini Project

**Technology:** React.js | JavaScript | CSS

**Status:** Completed ✅

---

**Next Learning Goal:** Continue with the remaining React playlist, followed by Advanced React Hooks, Redux Toolkit, practical projects and Backend Development.
