import React from "react";
import App from "../App";
import { Project } from "../Types";

export async function getAllProjects() {
  const response = await fetch("https://localhost:7200/projects/all", {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  if (response.ok) {
    const json = (await response.json()) as Project[];
    return json;
  }
}
