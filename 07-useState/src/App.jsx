import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Jay", active: true },
    { id: 2, name: "Rahul", active: false },
  ]);

  function addStudent(e) {
    e.preventDefault();

    if (!name.trim()) return;

    setStudents([
      ...students,
      { id: Date.now(), name: name.trim(), active: true },
    ]);

    setName("");
  }

  function toggleStatus(id) {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id
          ? { ...student, active: !student.active }
          : student
      )
    );
  }

  function deleteStudent(id) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="dashboard">
      <h1>🎓 Student Dashboard</h1>
      <p>Total Students: {students.length}</p>

      <form onSubmit={addStudent}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>

      <div className="student-list">
        {students.map((student) => (
          <div className="student" key={student.id}>
            <div>
              <h3>{student.name}</h3>
              <span className={student.active ? "active" : "inactive"}>
                {student.active ? "Active" : "Inactive"}
              </span>
            </div>

            <div className="actions">
              <button onClick={() => toggleStatus(student.id)}>
                Toggle
              </button>
              <button
                className="delete"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;