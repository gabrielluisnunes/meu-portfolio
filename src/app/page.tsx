'use client'; 

import Hero from './components/Hero'; 
import styled from 'styled-components';
import React from 'react';

import ProjectCardGrid from './components/ProjectCarousel'; 
import About from './components/About';
import StarParticlesBackground from './components/StarParticlesBackground'; 
import Header from './components/Header'; 


const GOLD_COLOR = '#FFD700';
const BRIGHT_GOLD = '#FFEB3B';


const SectionContainer = styled.section<{ $bgColor?: string }>`
  min-height: 100vh;
  padding: 80px 5%; 
  /* Fundo preto semi-transparente para ver as estrelas */
  background-color: ${(props) => props.$bgColor || 'transparent'}; 
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Garante que o conteúdo da seção fique acima das estrelas */
  /* Adiciona padding superior para não sobrepor o Header fixo */
  padding-top: 100px; 
`;


const HomeSection = styled.div.attrs({ id: 'home' })`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Fundo totalmente transparente para que o Hero veja o fundo animado */
    background-color: transparent; 
`;

export default function Home() {
    return (
        <main style={{ backgroundColor: '#000000', position: 'relative' }}>
            
            {/* 🌟 1. FUNDO ANIMADO: Fixo e atrás de tudo (z-index: -1) */}
            <StarParticlesBackground /> 

            {/* 🧭 2. HEADER FIXO: Fica no topo e acima de tudo (z-index: 1000) */}
            <Header />
            
            {/* 3. SEÇÃO INÍCIO (HERO) */}
            <HomeSection id="home">
                <Hero />
            </HomeSection>

            {/* 4. SEÇÃO SOBRE MIM & CONTATO */}
            {/* Fundo preto 80% opaco (0.8) para manter o contraste, mas ainda mostrar as estrelas */}
            <SectionContainer id="sobre" $bgColor="rgba(0, 0, 0, 0.8)"> 
                <About />
            </SectionContainer>
            
            {/* 5. SEÇÃO PROJETOS */}
            {/* Fundo totalmente transparente ou um preto bem leve */}
            <SectionContainer id="projetos" $bgColor="rgba(0, 0, 0, 0.5)">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', color: BRIGHT_GOLD, textShadow: `0 0 5px ${BRIGHT_GOLD}` }}>
                    Meus Projetos
                </h2>
                <ProjectCardGrid /> 
            </SectionContainer>
            
            {/* Futuro Footer/Rodapé irá aqui, se necessário */}
            
        </main>
    );
}