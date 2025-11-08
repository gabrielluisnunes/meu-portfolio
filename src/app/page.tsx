'use client'; 
// Importamos o Hero que já criamos. Vamos criar os outros componentes na sequência.
import Hero from './components/Hero'; 
import styled from 'styled-components';
import React from 'react';
import ProjectCarousel from './components/ProjectCarousel';

// Componente temporário para as seções (usaremos Styled Components para estilizar melhor depois)
const SectionContainer = styled.section<{ bgColor?: string }>`
  min-height: 100vh; // Garante que a seção ocupe a tela inteira (ajustar depois)
  padding: 80px 5%; 
  background-color: ${(props) => props.bgColor || 'transparent'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Onde o Hero já existe, vamos usá-lo como a seção #home
const HomeSection = styled.div.attrs({ id: 'home' })`
    min-height: 100vh;
`;

export default function Home() {
  return (
    <main>
      {/* 1. SEÇÃO INÍCIO (já com o seu Hero) */}
      <HomeSection>
          <Hero /> {/* Aqui vamos incluir o fundo animado depois */}
      </HomeSection>

      {/* 2. SEÇÃO SOBRE MIM (ID: #sobre) - Para a foto e descrição */}
      <SectionContainer id="sobre" bgColor="#f9f9f9">
        <h2> Sobre Mim</h2>
        <p>Aqui virá sua foto, sua biografia e seus links.</p>
        {/* Você pode colocar os botões (LinkedIn, GitHub) aqui, ou no Footer */}
      </SectionContainer>
      
      {/* 3. SEÇÃO PROJETOS (ID: #projetos) */}
      <SectionContainer id="projetos" bgColor="#ffffff">
        <h2 style={{ marginBottom: '40px' }}> Meus Projetos</h2>
        <ProjectCarousel /> {}
      </SectionContainer>
      
      {/* 4. SEÇÃO CONTATO (ID: #contato) - Para o formulário ou botões */}
      <SectionContainer id="contato" bgColor="#f0f0f0">
        <h2> Contato</h2>
        <p>Vamos trabalhar juntos?</p>
        {/* Botões de LinkedIn, GitHub, e-mail (se não estiverem no footer) */}
      </SectionContainer>
      
    </main>
  );
}