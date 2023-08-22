import React, { useContext } from "react";
import { StudentContextProvider } from "../Context/StudentContext";

const Form = () => {
  const {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  } = useContext(StudentContextProvider);

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

  return (
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
  );
};

export default Form;
