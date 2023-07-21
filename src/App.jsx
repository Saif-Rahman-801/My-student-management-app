import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createStudenthandler = () => {
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
      };
      setStudents([...students, newStudent]);
      setStudentName("")
    } else {
      alert("Please provide valid info");
    }
  };

  const editStudentHandler = (id) => {};

  const deleteStudentHandler = (id) => {};

  const updateStudentHandler = (id) => {};

  const presentHandler = (id) => {};

  const absentHandler = (id) => {};

  return (
    <>
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter a valid name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button>Add Student</button>
      </form>
      <div className="students-section">
        <div className="all-student">
          <ul>
            {students.map((student) => (
              <li>
                <span>{student.name}</span>
                <button>Edit</button>
                <button>Delete</button>
                <button>Present</button>
                <button>absent</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="present-student">
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button>Accidentally added</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="absent-studen">
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button>Accidentally added</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
