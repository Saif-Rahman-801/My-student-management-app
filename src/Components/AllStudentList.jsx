import React, { useContext } from "react";
import { StudentContextProvider } from "../Context/StudentContext";

const AllStudentList = () => {
  const {
    setStudentName,
    students,
    setStudents,
    setEditMode,
    setEditableStudent,
  } = useContext(StudentContextProvider);
  const editStudentHandler = (id) => {
    setEditMode(true);
    const tobeEditedStudent = students.find((item) => item.id === id);
    setStudentName(tobeEditedStudent.name);
    setEditableStudent(tobeEditedStudent);
  };

  const deleteStudentHandler = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  const presentHandler = (id) => {
    const student = students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("student already in the present list");
    } else if (student.isPresent === false) {
      alert("student already in the absent list");
    } else if (student.isPresent === undefined) {
      setStudents(
        students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }
          return item;
        })
      );
    }
  };

  const absentHandler = (id) => {
    const student = students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("student already in the present list");
    } else if (student.isPresent === false) {
      alert("student already in the absent list");
    } else if (student.isPresent === undefined) {
      setStudents(
        students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = false;
          }
          return item;
        })
      );
    }
  };

  return (
    <div className="all-student">
      <h2 style={{ textAlign: "left" }}>All Students</h2>
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
              <button onClick={() => absentHandler(student.id)}>Absent</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllStudentList;
