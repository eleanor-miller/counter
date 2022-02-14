import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

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
