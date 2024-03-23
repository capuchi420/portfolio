import React from "react";
import { Navbar } from "./Components/Navbar";
import styled from "styled-components";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

export const App = () => {
  return(
    <>
      <Navbar />
      <Content>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
      </Content>
      <Footer />
    </>
  );
};

const Content = styled.main`
  background-color: rgba(0,0,0,.8);
  max-width: 900px;
  margin: auto;
`;