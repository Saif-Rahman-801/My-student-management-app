import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createStudenthandler = () => {
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
      };
      setStudents([...students, newStudent]);
      setStudentName("");
    } else {
      alert("Please provide valid info");
    }
  };

  const editStudentHandler = (id) => {
    const toBeEditedStudents = students.find((item) => item.id === id);
    setEditMode(true);
    setStudentName(toBeEditedStudents.name)
    setEditableStudent(toBeEditedStudents);
  };

  const deleteStudentHandler = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  const updateStudentHandler = () => {
    setStudents(students.map((student) => {
      if(student.id === editableStudent.id){
        student.name = studentName
      }
      return student
    }))
    setEditMode(false)
    setStudentName("")
    setEditableStudent(null)
  };

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
