import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "Jay Hingu",
    email: "jay@example.com",
    role: "Java Full-Stack Developer",
    location: "Gujarat, India",
    skills: ["Java","React", "JavaScript", "HTML", "CSS"]
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