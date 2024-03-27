import React from "react";
import styled from "styled-components";

export const Hero = () => {
    return(
        <Container>
            <div>
                <img src="/assets/myphoto.jpg" /> { /* eslint-disable-line */}
            </div>
            <h1>
                Hi, my name is <br /> <span>Nemanja</span>
            </h1>
        </Container>
    );
};

const Container = styled.header`
    width: 100vw;
    height: 100vh;
    max-width: 900px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    gap: 1rem;
    justify-items: center;

    div{
        align-self: end;
        img{
            width: 200px;
            border-radius: 50%;
            box-shadow: 0 0 5px 3px #eec900;
        }
    }

    h1{
        color: #fff;
        font-size: 1.5625rem;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings:
                "slnt" 0;

        span{
            color: #eec900;
            font-size: 3.125rem;
            font-family: "Neuton", serif;
            font-weight: 200;
            font-style: normal;
            text-shadow: 0 4px 4px rgba(255, 255, 255, .25);
        }
    }

    @media only screen and (min-width: 768px){
        grid-template-columns: 60% 40%;
        grid-template-rows: 100%;

        div{
            align-self: center;
            img{
                width: 350px;
            }
        }

        h1{
            justify-self: start;
            align-self: center;
        }
    }
`;