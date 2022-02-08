import React from "react";
import logo from "../images/yarn-logo.svg";

function Header() {
  return (
    <div className="App-header">
      <div>
        <img src={logo} height={55} width={55} />
      </div>
      <div>
        <h1>Hi, Eleanor</h1>
      </div>
    </div>
  );
}

export default Header;
