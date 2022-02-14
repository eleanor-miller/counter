import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
