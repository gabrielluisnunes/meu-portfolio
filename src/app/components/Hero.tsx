'use client';

import styled, { keyframes } from 'styled-components';
import React from 'react';

const GOLD_COLOR = '#FFD700';
const TEXT_TO_TYPE = "Bem-vindo ao Meu Portfólio";
const CHAR_COUNT = TEXT_TO_TYPE.length;
const TYPE_DURATION = `${CHAR_COUNT * 0.15}s`; 
const ERASE_DURATION = `${CHAR_COUNT * 0.07}s`; 
const STATIC_DELAY = '1s'; 

// 1. Animação de Digitação e Apagar em Loop
const typingAndDeleting = keyframes`
    0% { width: 0; } 
    25% { width: 100%; } 
    50% { width: 100%; } 
    75% { width: 0; } 
    100% { width: 0; } 
`;


const blink = keyframes`
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: ${GOLD_COLOR};
    }
`;


const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #000000; /* Fundo Preto GARANTIDO AQUI */
    color: #ffffff;
    padding: 0 20px;
    box-sizing: border-box;
`;


const TypingContainer = styled.div`
    display: inline-block;
    overflow: hidden; 
    white-space: nowrap; 
    border-right: 0.15em solid ${GOLD_COLOR}; /* Cursor */
    
    /* Animações */
    animation: 
        ${typingAndDeleting} 8s steps(${CHAR_COUNT}) infinite, /* 8s = 2s type + 2s pause + 2s erase + 2s pause */
        ${blink} 0.75s step-end infinite;
`;


const CodeLineH1 = styled.h2`
    font-family: 'monospace', 'Courier New', Courier, monospace;
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${GOLD_COLOR};
    margin: 0;
`;


const SubtitleP = styled.p`
    font-family: 'monospace', 'Courier New', Courier, monospace;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #cccccc;
    margin-top: 20px;
`;


const Hero: React.FC = () => {
    return (
        <HeroSection>
            <TypingContainer>
                <CodeLineH1>{TEXT_TO_TYPE}</CodeLineH1>
            </TypingContainer>
            <SubtitleP>
                {}
                Desenvolvedor Full-Stack
            </SubtitleP>
        </HeroSection>
    );
}

export default Hero;