import React, { useEffect, useState } from "react";
import "../App.css";
import { getAllProjects } from "../services/ProjectService";
import { Project } from "../Types";

import { SlButton, SlCard, SlIcon } from "@shoelace-style/shoelace/dist/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects!);
    });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        {projects.map((project: Project, index: number) => {
          return (
            <>
              <SlCard className="card-overview">
                <img
                  slot="image"
                  src="https://10rowsaday.com/wp-content/uploads/2019/06/understand-knitting7.jpg"
                  alt="Pull project name."
                />
                <strong>{project?.projectName}</strong>
                <br />
                <br />
                <small>{project?.startDate}</small>
                <div slot="footer">
                  <SlButton className="projects">
                    <SlIcon slot="suffix" name="pencil"></SlIcon>
                    Edit
                  </SlButton>

                  <SlButton className="projects">
                    <SlIcon slot="suffix" name="trash"></SlIcon>
                    Delete
                  </SlButton>
                </div>
              </SlCard>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Home;
