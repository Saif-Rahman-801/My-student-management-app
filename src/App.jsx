import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="text"
          id="txt"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button>Add Student</button>
      </form>
      <div className="students-section">
        <div className="all-student">
          <ul>
            {students.map((student) => {
              <li>
                <span>{student.name} </span>
                <button>Edit </button>
                <button>Delete </button>
                <button>Present </button>
                <button>Absent </button>
              </li>;
            })}
          </ul>
        </div>
        <div className="present-student">
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li>
                  <span>{student.name} </span>
                  <button>Accidentally Added</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="absent-student">
          <ul>
            {students
              .filter((item) => item.isPresent === false)
              .map((student) => (
                <li>
                  <span>{student.name} </span>
                  <button>Accidentally Added</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
