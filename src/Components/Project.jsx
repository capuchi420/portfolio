import React from "react";
import styled from "styled-components";

export const Project = (props) => {
    const handleClick = () => {
        window.location.href = props.link;
    }
  return (
    <Container>
        <h2>{props.name}</h2>
        <div className="img-holder">
            <img src={props.imgUrl} /> {/* eslint-disable-line */}
        </div>
        <p>{props.desc}</p>
        <button onClick={handleClick}>VISIT</button>
    </Container>
  )
}

const Container = styled.div`
    margin: 1.375rem auto 0 auto;
    width: 340px;
    padding: .625rem;

    div.img-holder{
        margin: .625rem auto 0 auto;
        width: 320px;

        img{
            width: 100%;
        }
    }

    p{
        margin: .625rem auto 0 auto;
        color: #fff;
        text-align: center;
        font-size: 1rem;
    }

    button{
        margin: .625rem auto 0 auto;
        display: block;
        cursor: pointer;
        color: #eec900;
        border: 1px solid #eec900;
        border-radius: .625rem;
        font-size: 1rem;
        padding: .5rem 1rem;
        background: none;
    }
`;
