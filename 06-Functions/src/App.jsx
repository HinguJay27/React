import { useState } from "react";
import "./App.css";

function App() {
  // State
  const [count, setCount] = useState(0);
  const [studentName, setStudentName] = useState("Jay");
  const [message, setMessage] = useState("Welcome to the Dashboard!");

  // Function with a return value
  function greetStudent() {
    return `Hello, ${studentName}!`;
  }

  // Function with parameters
  function calculateTotal(a, b, c) {
    return a + b + c;
  }

  // Event handler
  function increaseCount() {
    setCount(count + 1);
  }

  // Event handler with an argument
  function changeMessage(newMessage) {
    setMessage(newMessage);
  }

  // Arrow function
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="dashboard">
      <h1>Student Action Dashboard</h1>

      {/* Function call */}
      <section className="card">
        <h2>1. Student Greeting</h2>
        <p>{greetStudent()}</p>
      </section>

      {/* Function with parameters */}
      <section className="card">
        <h2>2. Marks Calculator</h2>
        <p>Subject 1: 80</p>
        <p>Subject 2: 75</p>
        <p>Subject 3: 90</p>

        <h3>Total Marks: {calculateTotal(80, 75, 90)} / 300</h3>
      </section>

      {/* State and event handler */}
      <section className="card">
        <h2>3. Click Counter</h2>
        <h3>Count: {count}</h3>

        <button onClick={increaseCount}>Increase</button>
        <button onClick={resetCount}>Reset</button>
      </section>

      {/* Function with arguments */}
      <section className="card">
        <h2>4. Message Center</h2>
        <p>{message}</p>

        <button
          onClick={() => changeMessage("Keep Learning React!")}
        >
          Show Learning Message
        </button>

        <button
          onClick={() => changeMessage("Practice Makes Perfect!")}
        >
          Show Practice Message
        </button>
      </section>
    </div>
  );
}

export default App;