import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createStudentHandler = () => {
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
      };
      setStudents([...students, newStudent]);
      setStudentName("");
    } else {
      alert("Enter a valid Name");
    }
  };

  const editStudentHandler = (id) => {
    setEditMode(true);
    const tobeEditedStudent = students.find((item) => item.id === id);
    setStudentName(tobeEditedStudent.name);
    setEditableStudent(tobeEditedStudent);
  };

  const deleteStudentHandler = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  const updateStudentHandler = () => {
    setStudents(
      students.map((student) => {
        if (student.id === editableStudent.id) {
          student.name = studentName;
        }
        return student;
      })
    );
    setEditMode(false);
    setStudentName("");
    setEditableStudent(null);
  };

  const presentHandler = (id) => {};

  const absentHandler = (id) => {};

  const toggleHandler = (id) => {};

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editMode ? updateStudentHandler() : createStudentHandler();
        }}
      >
        <input
          type="text"
          name="text"
          id="txt"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button>{editMode ? "Update Student" : "Add Student"}</button>
      </form>
      <div className="students-section">
        <div className="all-student">
          <ul>
            {students.map((student) => {
              return (
                <li key={student.id}>
                  <span>{student.name} </span>
                  <button onClick={() => editStudentHandler(student.id)}>
                    Edit
                  </button>
                  <button onClick={() => deleteStudentHandler(student.id)}>
                    Delete
                  </button>
                  <button onClick={() => presentHandler(student.id)}>
                    Present
                  </button>
                  <button onClick={() => absentHandler(student.id)}>
                    Absent
                  </button>
                </li>
              );
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
                  <button onClick={() => toggleHandler(student.id)}>
                    Accidentally Added
                  </button>
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
                  <button onClick={() => toggleHandler(student.id)}>
                    Accidentally Added
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
