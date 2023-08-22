import React, { useContext } from "react";
import AllStudentList from "./AllStudentList";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";
import { StudentContextProvider } from "../Context/StudentContext";

const StudentSection = () => {
  const { students, setStudents } = useContext(StudentContextProvider);
  const toggleHandler = (id) => {
    const student = students.find((item) => item.id === id);
    setStudents(
      students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent;
        }
        return item;
      })
    );
  };

  return (
    <div className="students-section">
      <AllStudentList />
      <PresentStudent toggleHandler={toggleHandler} />
      <AbsentStudent toggleHandler={toggleHandler} />
    </div>
  );
};

export default StudentSection;
