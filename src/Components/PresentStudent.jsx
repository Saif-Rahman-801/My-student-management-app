import React, { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

const PresentStudent = ({ toggleHandler }) => {
  const { students } = useContext(StudentContext);
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
