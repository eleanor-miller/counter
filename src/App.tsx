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
import Login from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
