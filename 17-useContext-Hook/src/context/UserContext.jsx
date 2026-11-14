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
      value={{ user, darkMode, toggleTheme }}
    >
      {children}
    </UserContext.Provider>
  );
};