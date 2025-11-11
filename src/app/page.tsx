'use client'; 

import Hero from './components/Hero'; 
import styled from 'styled-components';
import React from 'react';

import ProjectCardGrid from './components/ProjectCarousel'; 
import About from './components/About';
import StarParticlesBackground from './components/StarParticlesBackground'; 
import Header from './components/Header'; 
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';


const GOLD_COLOR = '#FFD700';
const BRIGHT_GOLD = '#FFEB3B';


const MainContainer = styled.main`
    background-color: #000000;
    position: relative;
    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;


const SectionContainer = styled.section<{ $bgColor?: string }>`
    min-height: 100vh;
    padding: 80px 5%; 
    background-color: ${(props) => props.$bgColor || 'transparent'}; 
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; 
    padding-top: 100px; 
`;


const HomeSection = styled.div.attrs({ id: 'home' })`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent; 
`;

export default function Home() {
    return (
        <MainContainer> {}
            
            {/* {} */}
            <StarParticlesBackground /> 

            {/* {} */}
            <Header />
            
            {/* {} */}
            <HomeSection id="home">
                <Hero />
            </HomeSection>

            {/* {} */}
            {/* {} */}
            <SectionContainer id="sobre" $bgColor="rgba(0, 0, 0, 0.8)"> 
                <About />
            </SectionContainer>

            <SectionContainer id="habilidades" $bgColor="rgba(0, 0, 0, 0.9)">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', color: BRIGHT_GOLD, textShadow: `0 0 5px ${BRIGHT_GOLD}` }}>
                    Tech Skills
                </h2>
                <SkillsSection />
            </SectionContainer>
            
            {/* {} */}
            {/* {} */}
            <SectionContainer id="projetos" $bgColor="rgba(0, 0, 0, 0.5)">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '40px', color: BRIGHT_GOLD, textShadow: `0 0 4px ${BRIGHT_GOLD}` }}>
                    Meus Projetos
                </h2>
                <ProjectCardGrid /> 
            </SectionContainer>
            
            {/* {} */}
            
            
        </MainContainer>
    );
}