import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "English"
  );

  const [loggedIn, setLoggedIn] = useState(
    () => sessionStorage.getItem("loggedIn") === "true"
  );

  // Save preferences in Local Storage
  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
  }, [username, theme, language]);

  // Save login status in Session Storage
  useEffect(() => {
    sessionStorage.setItem("loggedIn", String(loggedIn));
  }, [loggedIn]);

  // Clear preferences
  const resetPreferences = () => {
    setUsername("");
    setTheme("light");
    setLanguage("English");
    setLoggedIn(false);

    localStorage.removeItem("username");
    localStorage.removeItem("theme");
    localStorage.removeItem("language");
  };

  return (
    <div className={`container ${theme}`}>
      <div className="card">
        <h1>User Preferences</h1>
        <p className="subtitle">
          Manage your personal settings
        </p>

        <div className="section">
          <h2>Profile Settings</h2>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="section">
          <h2>Appearance</h2>

          <label>Select Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>

        <div className="section">
          <h2>Language Settings</h2>

          <label>Select Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div className="section">
          <h2>Session Settings</h2>

          <p>
            Status: {loggedIn ? "Logged In" : "Logged Out"}
          </p>

          <button
            onClick={() => setLoggedIn(!loggedIn)}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>

        <div className="welcome">
          <h3>
            Welcome, {username || "Guest"}!
          </h3>
          <p>Selected Language: {language}</p>
          <p>Current Theme: {theme}</p>
        </div>

        <button className="reset" onClick={resetPreferences}>
          Reset Preferences
        </button>
      </div>
    </div>
  );
}

export default App;