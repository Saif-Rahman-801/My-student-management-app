import React, { useContext } from "react";

export const StudentContextProvider = useContext();
const StudentContext = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const value = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  };
  return (
    <StudentContextProvider.Provider value={value}>{children}</StudentContextProvider.Provider>
  );
};
export default StudentContext;
