import React from "react";

const PresentStudent = ({students, toggleHandler}) => {
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
