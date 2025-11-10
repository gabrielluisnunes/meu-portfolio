'use client';

import styled from 'styled-components';
import React from 'react';

//Definindo componentes estilizados
const HeroSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
text-aligh: center;
background-color: #f4f4f9;
color: #333;
padding: 0 20px;

h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color : #0070f3;
}
    
p {
    font-size: 1.5rem;
    color: #666;
}
`;

const Hero = () => {
    return (
        <HeroSection>
            <h1>Bem-vindo ao Meu Portfólio</h1>
            <p>Colocar algo aqui</p>
        </HeroSection>
    );
}

export default Hero;