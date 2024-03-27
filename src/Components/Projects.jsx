import React from "react";
import styled from "styled-components";
import { Project } from "./Project";

export const Projects = (props) => {
    return(
        <Container className={(props.show ? "show" : "no")}>
            <h1>Projects</h1>
            <Project name="Book finder" imgUrl="/assets/project1.png" link="https://github.com/capuchi420/book-finder" desc="Final school project. A web application made for book lovers. The place where you can make a list of all the books you want to read, or the books you are currently reading, or the books you have read. Find a forum for each book and share your opinion with others!" />
            <Project name="Memories bar (in progress)" imgUrl="" link="#" desc="A website for a local cafe. Still in progress. No link for now" />
        </Container>
    );
};

const Container = styled.div`
    &.show{
        display: block;
    }

    &.no{
        display: none;
    }
    margin-top: 4.125rem;
    padding-bottom: 4rem;
`;