import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
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
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
