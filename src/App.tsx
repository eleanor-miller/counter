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
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
