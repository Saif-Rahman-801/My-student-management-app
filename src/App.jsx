import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import StudentSection from "./Components/StudentSection";

function App() {
  return (
    <div className="App container">
      <Form></Form>
      <StudentSection></StudentSection>
    </div>
  );
}

export default App;
