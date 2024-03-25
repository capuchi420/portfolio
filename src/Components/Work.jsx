import React from "react";
import styled from "styled-components";

export const Work = (props) => {
    return(
        <Container className={(props.show ? "show" : "no")}>
            <h1>Work Expirience</h1>
            <div>
                <h2>Personal projects</h2>
                <p>Developed and maintained several personal websites, demonstrating my proficiency in web programming and design. <a href="https://www.github.com/capuchi420" target="_blank">Check out my github</a></p> {/* eslint-disable-line */}
            </div>
            <div>
                <h2>Freelance work</h2>
                <p>Collaborated with local businesses to create and optimize their online presence, including  designing websites and implementing digital marketing strategies.</p>
            </div>
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

    margin-top: 4rem;
    padding: 1rem;

    h1{
        text-shadow: 0 4px 4px rgba(255, 255, 255, .25);
    }

    div{
        margin-top: 1rem;

        p{
            color: #fff;
            text-align: center;

            a{
                color: #eec900;
                text-decoration: none;
            }
        }
    }
`; 