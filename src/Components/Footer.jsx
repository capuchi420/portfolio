import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return(
        <Container>
            <p>Copyright &copy; 2024 <br/><br/> Contact:<br/>+381 64 4111 702<br/>contact.nemanja.stankovic@gmail.com</p>
        </Container>
    );
};

const Container = styled.footer`
    background-color: #222;
    padding: .625rem;

    p{
        color: #fff;
        text-align: center;
        font-size: 1rem;
    }
`;