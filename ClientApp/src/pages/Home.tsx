import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
