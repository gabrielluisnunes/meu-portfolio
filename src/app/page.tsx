'use client'; 

import Hero from './components/Hero'; 
import styled from 'styled-components';
import React from 'react';
import ProjectCarousel from './components/ProjectCarousel';
import About from './components/About';


const SectionContainer = styled.section<{ $bgColor?: string }>`
  min-height: 100vh;
  padding: 80px 5%; 
  /* Usando $bgColor para evitar erros de repasse de props no DOM */
  background-color: ${(props) => props.$bgColor || 'transparent'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HomeSection = styled.div.attrs({ id: 'home' })`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f9; 
`;

export default function Home() {
  return (
    <main>
      
      {}
      <HomeSection id="home">
          <Hero />
      </HomeSection>

      {}
      {}
      <SectionContainer id="sobre" $bgColor="#ffffff"> 
        <About />
      </SectionContainer>
      
      {}
      {}
      <SectionContainer id="projetos" $bgColor="#f9f9f9">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>
          🛠️ Meus Projetos
        </h2>
        <ProjectCarousel />
      </SectionContainer>
      
    </main>
  );
}