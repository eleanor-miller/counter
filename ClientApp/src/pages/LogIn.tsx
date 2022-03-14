import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  useEffect,
  useState,
} from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "../App.css";

import { User } from "../Types";
import { attemptLogin } from "../services/LoginService";

import {
  SlCard,
  SlButton,
  SlInput,
  SlSelect,
} from "@shoelace-style/shoelace/dist/react";

import Footer from "../components/Footer";
import logo from "../images/yarn-logo.svg";

type LoginProps = {
  user: User | null;
  setUser: (user: User) => void;
};

function Login(props: LoginProps) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleInputChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const { id, value } = target;

    if (id == "username") setCreds({ ...creds, username: value });
    if (id == "password") setCreds({ ...creds, password: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(creds);
    attemptLogin(creds.username, creds.password).then((u) => {
      if (u) {
        props.setUser(u!);
        console.log("user", u);
        navigate("/home");
      }
    });
  }

  return (
    <SlCard className="card-login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <SlInput
          type="email"
          label="Email"
          placeholder="you@example.com"
          size="medium"
          required
        />
        <br />
        <br />
        <SlInput
          type="password"
          label="Password"
          placeholder="Password Toggle"
          size="medium"
          toggle-password
        />
        <br />
        <br />
        <SlButton className="orange" type="submit">
          Submit
        </SlButton>
        <br />
        <br />
      </form>
    </SlCard>
  );
}

export default Login;
