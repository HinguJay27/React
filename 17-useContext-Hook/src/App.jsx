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
          <p>Manage your developer profile in one place.</p>
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