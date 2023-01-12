import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Question } from "./components/Question";
import "./App.css";
import { Solution } from "./components/Solution";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}>
          <h1>Numerical Reasoning Test Questions</h1>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="question" element={<Question />} />
          <Route path="solution" element={<Solution />} />
          <Route path="question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
