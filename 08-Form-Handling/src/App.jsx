import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!student.name.trim() || !student.email.trim() || !student.course) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmittedData({ ...student });
  }

  return (
    <div className="container">
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={student.name}
          onChange={(event) =>
            setStudent({ ...student, name: event.target.value })
          }
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={student.email}
          onChange={(event) =>
            setStudent({ ...student, email: event.target.value })
          }
        />

        <label htmlFor="course">Select Course</label>
        <select
          id="course"
          value={student.course}
          onChange={(event) =>
            setStudent({ ...student, course: event.target.value })
          }
        >
          <option value="">Choose a course</option>
          <option value="React JS">React JS</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Registration Successful!</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Course: {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;