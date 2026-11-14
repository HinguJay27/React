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