import React from "react";
import logo from "../images/yarn-logo.svg";

function Header() {
  return (
    <div>
      <div>
        <img src={logo} height={65} width={65} />
      </div>
      <div>
        <h1>Hi, Eleanor</h1>
      </div>
    </div>
  );
}

export default Header;
