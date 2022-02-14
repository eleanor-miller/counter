import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Project() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

export default Project;
