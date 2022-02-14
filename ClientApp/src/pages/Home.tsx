import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>

      <div>Link to Projects Page</div>
      <div>Link to Counter Page</div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
