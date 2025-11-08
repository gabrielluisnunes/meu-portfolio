'use client';

import React from 'react';
import styled from 'styled-components';

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, 
            behavior: 'smooth'
        });
    }
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 5%; // Padding interno para evitar que o conteúdo toque as bordas
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky; // Mantém o cabeçalho fixo ao rolar a página
  top: 0;
  z-index: 1000; // Garante que fique acima de outros elementos
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center; // Alinha itens no meio
  align-items: center;
  max-width: 1200px; // Limita a largura máxima no centro da tela
  margin: 0 auto;
`;

const NavList = styled.nav`
  display: flex;
  gap: 30px; // Espaço entre os links
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease; // Transição suave para o efeito hover

  &:hover {
    color: #0070f3; // Mudar a cor ao passar o mouse
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <NavContainer>
        <NavList>
        {}
        <NavLink 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
        >
          Início
        </NavLink>
        <NavLink 
          href="#sobre" 
          onClick={(e) => handleScroll(e, 'sobre')}
        >
          Sobre Mim
        </NavLink>
        <NavLink 
          href="#projetos" 
          onClick={(e) => handleScroll(e, 'projetos')}
        >
          Projetos
        </NavLink>
        <NavLink 
          href="#contato" 
          onClick={(e) => handleScroll(e, 'contato')}
        >
          Contato
        </NavLink>
      </NavList>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;