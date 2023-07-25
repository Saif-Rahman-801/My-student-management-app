import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const handleInputField = (e) => {
    e.preventDefault();
    setStudentName(e.target.value);
  };

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
    setStudentName(toBeEditedStudents.name);
    setEditableStudent(toBeEditedStudents);
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

  const presentHandler = (id) => {
    const student = students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("Student already Present in the present list");
    } else if (student.isPresent === false) {
      alert("Student already Present in the absent list");
    } else if (student.isPresent === undefined) {
      const presentStudent = students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = true;
        }
        return item;
      });
      setStudents(presentStudent);
    }
  };

  const absentHandler = (id) => {
    const student = students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("Student already Present in the present list");
    } else if (student.isPresent === false) {
      alert("Student already Present in the absent list");
    } else if (student.isPresent === undefined) {
      const absentStudent = students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = false;
        }
        return item;
      });
      setStudents(absentStudent);
    }
  };

  const toggleHandler = (id) => {
    const student = students.find((student) => student.id === id);
    const toggledStudent = students.map((item) => {
      if (item.id === student.id) {
        item.isPresent = !item.isPresent;
      }
      return item;
    });
    setStudents(toggledStudent);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter a valid name"
          value={studentName}
          onChange={handleInputField}
        />
      </form>
      <button
        onClick={() =>
          editMode ? updateStudentHandler() : createStudenthandler()
        }
        style={{ marginTop: "10px" }}
      >
        {editMode ? "Update" : "Add Student"}
      </button>

      <div className="students-section">
        <div className="all-student">
          <ul>
            {students.map((student) => (
              <li>
                <span>{student.name}</span>
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
                  absent
                </button>
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
                  <button onClick={() => toggleHandler(student.id)}>
                    Accidentally added
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="absent-student">
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>
                    Accidentally added
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
