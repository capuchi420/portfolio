import React from "react";
import styled from "styled-components";

export const Skills = () => {
    return(
        <Container>
            <h2>Skills</h2>

            <div className="gallery">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPR9f0QotpyeMw9nkFDmvb0IJrHG30ope-qR-FSaXEt5SD7xQOFBvE_GlRYNifGclFek" alt="MongoDB" />  {/* eslint-disable-line */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU_u44DpbT-IfWu2brkRSU0D1HIGYYUnFpQoI1gHOUnfPI7aQcBCpXth9_dqPVwv2L4Y" alt="Node" /> {/* eslint-disable-line */}
                <img src="data:image/png;base64,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" alt="React" /> {/* eslint-disable-line */}
            </div>

            <ul>
                <li>Critical thinking</li>
                <li>Handling pressuer</li>
                <li>Adaptability</li>
                <li>Problem solving</li>
                <li>Object-oriented programming</li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    overflow: hidden;

    h2{
        
        margin-top: 4.375rem;
        margin-bottom: 1.625rem;
    }


    ul{
        display: block;
        margin: 2rem auto 0 auto;
        padding: 2rem;
        list-style-type: "📍";
        width: fit-content;

        li{
            color: #fff;
            font-size: 1rem;
            padding: .78125rem;
        }

    }

    .gallery  {
        display: grid;
        margin: auto;
        width: 100px;
    }
    .gallery > img {
        grid-area: 1/1;
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border: 10px solid #f2f2f2;
        box-shadow: 0 0 4px #0007;
        animation: slide 6s infinite;
    }
    .gallery > img:last-child {
        animation-name: slide-last;
    }

    .gallery > img:nth-child(2) { animation-delay: -2s; } 
    .gallery > img:nth-child(3) { animation-delay: -4s; }


    @keyframes slide {
        0%     {transform: translateX(0%)  ;z-index: 2;}
        16.66% {transform: translateX(120%);z-index: 2;}
        16.67% {transform: translateX(120%);z-index: 1;} 
        33.34% {transform: translateX(0%)  ;z-index: 1;}
        66.33% {transform: translateX(0%)  ;z-index: 1;}
        66.34% {transform: translateX(0%)  ;z-index: 2;} 
        100%   {transform: translateX(0%)  ;z-index: 2;}  
    }
    @keyframes slide-last {
        0%     {transform: translateX(0%)  ;z-index: 2;}
        16.66% {transform: translateX(120%);z-index: 2;}
        16.67% {transform: translateX(120%);z-index: 1;} 
        33.34% {transform: translateX(0%)  ;z-index: 1;}
        83.33% {transform: translateX(0%)  ;z-index: 1;}
        83.34% {transform: translateX(0%)  ;z-index: 2;} 
        100%   {transform: translateX(0%)  ;z-index: 2;}  
    }
`;