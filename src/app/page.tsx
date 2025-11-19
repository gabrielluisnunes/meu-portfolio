'use client'; 

import Hero from './components/Hero'; 
import styled from 'styled-components';
import React from 'react';

import ProjectCardGrid from './components/ProjectCarousel'; 
import About from './components/About';
import Header from './components/Header'; 
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

const BG_PRIMARY_LIGHT = '#FFFFFF';
const BG_SECTION_LIGHT = '#F8F8F8';
const HEADER_HEIGHT = '80px'; 


const MainContainer = styled.main`
    background-color: ${BG_PRIMARY_LIGHT};
    position: relative;
    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;


const SectionContainer = styled.section<{ $bgColor?: string }>`
    min-height: 100vh;
    padding: 80px 5%; 
    background-color: ${(props) => props.$bgColor || BG_PRIMARY_LIGHT}; 
    color: #000000; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; 
    padding-top: calc(${HEADER_HEIGHT} + 40px); 
    scroll-margin-top: calc(${HEADER_HEIGHT} + 20px); 
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
        <MainContainer> 
            
            <Header />
            
            <HomeSection id="home">
                <Hero />
            </HomeSection>

            <SectionContainer id="sobre" $bgColor={BG_PRIMARY_LIGHT}> 
                <About />
            </SectionContainer>

            <SectionContainer id="habilidades" $bgColor={BG_SECTION_LIGHT}>
                <SkillsSection />
            </SectionContainer>
            
            <SectionContainer id="projetos" $bgColor={BG_PRIMARY_LIGHT}>
                
                <ProjectCardGrid /> 
            </SectionContainer>
            
            <Footer />
            
        </MainContainer>
    );
}