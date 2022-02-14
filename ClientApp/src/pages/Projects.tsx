import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>

      <div>Render list of all projects.</div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

export default Projects;
