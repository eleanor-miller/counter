import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>

      <div>Projects Container</div>
      <div>Counter Container</div>
      <div>Inventory Container</div>
      <div>Library Container</div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
