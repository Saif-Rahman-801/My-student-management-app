import React, { useContext } from "react";
import { StudentContextProvider } from "../Context/StudentContext";

const PresentStudent = ({ toggleHandler }) => {
  const { students } = useContext(StudentContextProvider);
  return (
    <div className="present-student">
      <h2 style={{ textAlign: "left" }}>Present Students</h2>
      <ul key={students.id}>
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
  );
};

export default PresentStudent;
