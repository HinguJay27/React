import Navbar from "./components/Navbar/Navbar";
import StudentCard from "./components/StudentCard/StudentCard";

function App() {
  return (
    <div id="home">
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 65px)",
          backgroundColor: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ color: "white" }}>Student Dashboard</h1>
        <StudentCard />
      </main>
    </div>
  );
}

export default App;