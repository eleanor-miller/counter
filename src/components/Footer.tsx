import React from "react";
import { useState } from "react";

import copyright from "../images/copyright.svg";

function Footer() {
  return (
    <div className="App-footer">
      <img src={copyright} className="center" />
    </div>
  );
}

export default Footer;
