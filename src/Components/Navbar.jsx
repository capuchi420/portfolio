import React from "react";
import styled from "styled-components";

export const Navbar = () => {
    return(
        <Container>
            <h1>CONE</h1>
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    background-image: linear-gradient(to bottom, #000, rgba(0,0,0,0));
    padding: .3125rem .625rem;
    position: absolute;

    h1{
        font-size: 1rem;
        padding: .625rem;
    }
`;