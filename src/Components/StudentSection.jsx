import React from "react";
import AllStudentList from "./AllStudentList";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";

const StudentSection = (props) => {
  const toggleHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    props.setStudents(
      props.students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent;
        }
        return item;
      })
    );
  };

  return (
    <div className="students-section">
      <AllStudentList
        students={props.students}
        setStudents={props.setStudents}
        setStudentName={props.setStudentName}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
      />
      <PresentStudent students={props.students} toggleHandler={toggleHandler} />
      <AbsentStudent students={props.students} toggleHandler={toggleHandler} />
    </div>
  );
};

export default StudentSection;
