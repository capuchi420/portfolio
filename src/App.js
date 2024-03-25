import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import styled from "styled-components";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

export const App = () => {
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [projects, setProjects] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setWork(false);
    setProjects(false);
  }
  const handleWork = () => {
    setWork(true);
    setAbout(false);
    setProjects(false);
  }
  const handleProjects = () => {
    setProjects(true);
    setAbout(false);
    setWork(false);
  }
  return(
    <>
      <Navbar />
      <Content>
        <Hero />
        <div className="options">
          <h1 onClick={handleAbout} className={about ? "selected" : ""} >About Me</h1>
          <h1 onClick={handleWork} className={work ? "selected" : ""} >Work</h1>
          <h1 onClick={handleProjects} className={projects ? "selected" : ""} >Projects</h1>
        </div>
        <About show={about} />
        <Skills show={about} />
        <Work show={work} />
        <Projects show={projects} />
      </Content>
      <Footer />
    </>
  );
};

const Content = styled.main`
  background-color: rgba(0,0,0,.8);
  max-width: 900px;
  margin: auto;

  div.options{
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    & > h1{
      cursor: pointer;
      padding: 2rem;

      &.selected{
        text-decoration: solid underline #eec900 2px;
      }
    }
  }
`;