import React from "react";
import App from "../App";
import { User } from "../Types";

export async function attemptLogin(e: String, p: String) {
  const loginUser: User = { userId: -1, username: "", email: e, password: p };
  const response = await fetch("https://localhost:7200/login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(loginUser),
  });
  if (response.ok) {
    const json = (await response.json()) as User;
    return json;
  }
}
