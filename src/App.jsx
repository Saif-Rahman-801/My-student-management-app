import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import StudentSection from "./Components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App container">
      <Form
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        students={students}
        setStudents={setStudents}
        studentName={studentName}
        setStudentName={setStudentName}
      ></Form>
      <StudentSection
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        students={students}
        setStudents={setStudents}
        setStudentName={setStudentName}
      ></StudentSection>
    </div>
  );
}

export default App;
