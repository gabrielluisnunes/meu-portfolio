'use client';

import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem 5%;
  background-color: #1a1a1a; 
  color: #f4f4f9; 
  text-align: center;
  margin-top: auto; 
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #f4f4f9;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3; // Efeito hover
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterText>&copy; {currentYear} Desenvolvedor Gabriel Luis Parede Nunes.</FooterText>
    </StyledFooter>
  );
};

export default Footer;