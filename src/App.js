import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
