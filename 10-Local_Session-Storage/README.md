# ⚙️ 10 - Local Storage and Session Storage

![React](https://img.shields.io/badge/React-JS-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Web Storage](https://img.shields.io/badge/Web-Storage-green)
![Level](https://img.shields.io/badge/Level-Beginner-success)

## 📌 Project: User Preferences Manager

A beginner-friendly React JS project that demonstrates how to use Local Storage and Session Storage to save user preferences and temporary session information.

Users can manage their username, theme, language and login status.

## 🎯 Topics Covered

- Introduction to Web Storage
- Local Storage
- Session Storage
- setItem() and getItem()
- removeItem() and clear()
- JSON.stringify() and JSON.parse()
- React useState() Hook
- React useEffect() Hook
- Data Persistence
- Controlled Components

## 🚀 Project Features

1. Enter and save username.
2. Select Light or Dark theme.
3. Select English or Hindi language.
4. Save preferences using Local Storage.
5. Store temporary login status using Session Storage.
6. Display user preferences.
7. Reset all preferences.

## 📂 Folder Structure

```text
10-Local-Storage-and-Session-Storage/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
└── README.md
```

## 📚 Concepts Explanation

### 1. What is Local Storage?

Local Storage is a browser API that stores data persistently until it is manually removed.

```javascript
localStorage.setItem("username", "Jay");

const name = localStorage.getItem("username");

console.log(name);
```

### 2. What is Session Storage?

Session Storage stores data for the current browser tab session.

```javascript
sessionStorage.setItem("loggedIn", "true");

const status = sessionStorage.getItem("loggedIn");

console.log(status);
```

### 3. setItem()

Used to save data in browser storage.

```javascript
localStorage.setItem("theme", "dark");
```

### 4. getItem()

Used to retrieve stored data.

```javascript
const theme = localStorage.getItem("theme");
```

### 5. removeItem()

Removes a specific key from browser storage.

```javascript
localStorage.removeItem("username");
```

### 6. clear()

Removes all stored keys from the selected storage.

```javascript
localStorage.clear();
```

## ⚛️ React Concepts Used

### 1. useState()

Used to manage username, theme, language and login status.

```jsx
const [theme, setTheme] = useState("light");
```

### 2. useEffect()

Used to synchronize React state with browser storage.

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

### 3. Initial State from Local Storage

```jsx
const [username, setUsername] = useState(
  () => localStorage.getItem("username") || ""
);
```

This retrieves the saved username when the component initializes.

### 4. Session Storage in React

```jsx
const [loggedIn, setLoggedIn] = useState(
  () => sessionStorage.getItem("loggedIn") === "true"
);
```

This retrieves the session login status when the application starts.

## ⚖️ Local Storage vs Session Storage

| Local Storage | Session Storage |
|---|---|
| Persistent data | Temporary session data |
| Survives browser restarts | Normally ends with the tab session |
| Shared across same-origin tabs | Separate per tab |
| Manually deleted | Cleared when session ends |

## 💻 Code Explanation

**1. Saving Preferences**

```jsx
useEffect(() => {
  localStorage.setItem("username", username);
  localStorage.setItem("theme", theme);
  localStorage.setItem("language", language);
}, [username, theme, language]);
```

Explanation:
- Runs whenever preferences change.
- Stores username, theme and language.
- Data remains after refreshing the page.

**2. Saving Login Status**

```jsx
useEffect(() => {
  sessionStorage.setItem("loggedIn", String(loggedIn));
}, [loggedIn]);
```

Explanation:
- Saves login status in Session Storage.
- Converts the Boolean value into a string.
- Stores temporary session information.

**3. Reset Preferences**

```jsx
const resetPreferences = () => {
  setUsername("");
  setTheme("light");
  setLanguage("English");
  setLoggedIn(false);

  localStorage.removeItem("username");
  localStorage.removeItem("theme");
  localStorage.removeItem("language");
};
```

Explanation:
- Resets React state.
- Removes saved preferences.
- Updates the application UI.

## ⚙️ Installation

```bash
npm install
npm run dev
```

Open the application at:

http://localhost:5173

## 🎤 Interview Questions and Answers

**Q1. What is Local Storage?**

Local Storage is a browser-based storage mechanism that stores data persistently.

**Q2. What is Session Storage?**

Session Storage stores data for a particular browser tab session.

**Q3. What is the difference between Local Storage and Session Storage?**

Local Storage persists until manually removed, whereas Session Storage is scoped to a tab session.

**Q4. What is setItem()?**

It stores key-value pairs in browser storage.

**Q5. What is getItem()?**

It retrieves a stored value using its key.

**Q6. What is removeItem()?**

It removes a specific key from browser storage.

**Q7. What is clear()?**

It removes all stored data from the selected storage.

**Q8. Why do we use useEffect() with Local Storage?**

To synchronize React state with browser storage when data changes.

**Q9. What is useState()?**

It is a React Hook used to manage component state.

**Q10. What happens when we refresh the page?**

React state is initialized again, but saved storage data can be retrieved.

**Q11. Can Local Storage store objects directly?**

No. It stores strings. JSON.stringify() converts objects into strings.

**Q12. What is JSON.parse()?**

It converts JSON strings back into JavaScript objects or arrays.

**Q13. What is data persistence?**

It means retaining data even after refreshing or restarting an application.

**Q14. Can Session Storage be shared between two tabs?**

No. Each tab has its own separate Session Storage area.

**Q15. Is browser storage suitable for storing passwords?**

No. Sensitive information should not be stored carelessly in browser storage.


## 🏁 Conclusion

In this module, we learned how to manage user preferences using Local Storage and temporary session information using Session Storage.

We also practiced React Hooks, browser storage methods and data persistence.

**Module 10 Completed – Local Storage and Session Storage 🚀**
