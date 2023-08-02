import React from "react";

const AllStudentList = (props) => {
  const editStudentHandler = (id) => {
    props.setEditMode(true);
    const tobeEditedStudent = props.students.find((item) => item.id === id);
    props.setStudentName(tobeEditedStudent.name);
    props.setEditableStudent(tobeEditedStudent);
  };

  const deleteStudentHandler = (id) => {
    props.setStudents(props.students.filter((item) => item.id !== id));
  };

  const presentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("student already in the present list");
    } else if (student.isPresent === false) {
      alert("student already in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }
          return item;
        })
      );
    }
  };

  const absentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("student already in the present list");
    } else if (student.isPresent === false) {
      alert("student already in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
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
        {props.students.map((student) => {
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
