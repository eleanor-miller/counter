import React, { useState, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "../Types";
import logo from "../images/yarn-logo.svg";
import { SlButton } from "@shoelace-style/shoelace/dist/react";

function Header() {
  return (
    <>
      <div>
        <img src={logo} height={65} width={65} />
        <h3>Hi, Username!</h3>
      </div>
    </>
  );
}

export default Header;
