import React from "react";
import styled from "styled-components";

export const Hero = () => {
    return(
        <Container>
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
    display: flex;
    justify-content: center;
    align-items: center;

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
            font-family: 'Flavors', cursive;
            font-weight: 400;
            font-style: normal;
            text-shadow: 0 4px 4px rgba(255, 255, 255, .25);
        }
    }

    @media only screen and (min-width: 768px){
        background-image: url('/assets/imggas2.png');
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
        
    }
`;