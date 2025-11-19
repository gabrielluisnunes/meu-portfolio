'use client';

import styled, { keyframes } from 'styled-components';
import React from 'react';

const ACCENT_COLOR = '#00AAAA';
const TEXT_PRIMARY_DARK = '#333333';
const TEXT_SECONDARY_DARK = '#555555';

const TEXT_TO_TYPE = "Bem-vindo ao Meu Portfólio";
const CHAR_COUNT = TEXT_TO_TYPE.length;

const TYPE_TIME = '2.5s'; 
const ERASE_TIME = '1.5s'; 
const PAUSE_TIME = '1s'; 
const TOTAL_DURATION = `${parseFloat(TYPE_TIME) + parseFloat(ERASE_TIME) + parseFloat(PAUSE_TIME) * 2}s`; 

const typingAndDeleting = keyframes`
    0% { width: 0; } 
    41.66% { width: 100%; }
    58.33% { width: 100%; } 
    83.33% { width: 0; } 
    100% { width: 0; } 
`;

const blink = keyframes`
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: ${ACCENT_COLOR};
    }
`;

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: transparent; 
    color: ${TEXT_SECONDARY_DARK};
    padding: 0 5%;
    box-sizing: border-box;
    width: 100vw; 
    overflow-x: hidden; 
`;

const TypingContainer = styled.div`
    display: inline-block;
    overflow: hidden; 
    white-space: nowrap; 
    border-right: 0.15em solid ${ACCENT_COLOR}; 
    max-width: 100%; 
    
    animation: 
        ${typingAndDeleting} ${TOTAL_DURATION} steps(${CHAR_COUNT}) infinite,
        ${blink} 0.75s step-end infinite;
`;

const CodeLineH1 = styled.h2`
    font-family: 'monospace', 'Courier New', Courier, monospace;
    
    
    font-size: clamp(2.5rem, 6vw, 3.5rem); 
    color: ${ACCENT_COLOR};
    margin: 0;
    
    
    @media (max-width: 768px) {
        font-size: clamp(1.3rem, 5vw, 2.3rem); 
    }
    
    max-width: 100%;
`;

const SubtitleP = styled.p`
    font-family: 'monospace', 'Courier New', Courier, monospace;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: ${TEXT_SECONDARY_DARK};
    margin-top: 20px;
    padding: 0 5%; 
`;


const Hero: React.FC = () => {
    return (
        <HeroSection id="home">
            <TypingContainer>
                <CodeLineH1>{TEXT_TO_TYPE}</CodeLineH1>
            </TypingContainer>
        </HeroSection>
    );
}

export default Hero;