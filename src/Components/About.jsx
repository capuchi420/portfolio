import React from "react";
import styled from "styled-components";

export const About = (props) => {
    return(
        <Container className={(props.show ? "show" : "no")}>
            <h1>About Me</h1>
            <p>I am an ambitious and dedicated 18-year-old high school student with a passion for web programming, design, and digital marketing. Over the past four years, I have honed my skills in programming and acquired a deep understanding of various programming languages and frameworks. Additionally, I have completed a certificate course in digital marketing from Google, which has provided me with a solid foundation in the field. With a keen eye for design and a strong interest in technology, I am constantly seeking opportunities to expand my knowledge and apply my skills in real-world projects.</p>
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

    h1{
        color: #eec900;
        font-size: 2.5rem;
        text-align: center;
        text-shadow: 0 4px 4px rgba(255, 255, 255, .25);
        padding: 1rem;
    }

    p{
        color: #fff;
        text-align: center;
        font-size: 1rem;
        padding: 0 1rem 0 1rem;
    }

    @media only screen and (min-width: 768px){
        max-width: 700px;
        margin: auto;
    }
`;