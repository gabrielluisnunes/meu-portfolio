'use client';

import React, { useState} from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* Fundo PRETO SÓLIDO */
    background-color: #000000; 
    color: #ffffff;
    z-index: 1000; 
    transition: background-color 0.3s ease;
    padding: 15px 5%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.9); 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${BRIGHT_GOLD};
    text-decoration: none;
    font-family: 'monospace', monospace;
    letter-spacing: 2px;
    text-shadow: 0 0 5px rgba(255, 235, 59, 0.5); 

    &:hover {
        color: ${BRIGHT_GOLD};
    }
`;


const NavLinks = styled.nav<{ $isOpen: boolean}>`
    display: flex;
    gap: 30px;

    a {
        color: #cccccc;
        font-size: 1rem;
        text-decoration: none;
        font-weight: 500;
        padding: 5px 0;
        position: relative;
        transition: color 0.3s ease;

        &:hover {
            color: ${BRIGHT_GOLD}; 
        }
        
        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background-color: ${BRIGHT_GOLD};
            transition: width 0.3s ease, left 0.3s ease;
        }

        &:hover::after {
            width: 100%;
            left: 0;
            box-shadow: 0 0 5px ${BRIGHT_GOLD};
        }
    }

    
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        width: 60vw; 
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95); 
        backdrop-filter: blur(5px);
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        
        
        transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
        transition: transform 0.3s ease-in-out;

        
        a {
            padding: 15px 0;
            font-size: 1.2rem;
        }
    }
`;

const MobileMenuIcon = styled.div` 
    display: none; 
    font-size: 1.8rem;
    color: ${BRIGHT_GOLD};
    cursor: pointer;
    z-index: 1001; 

    &:hover {
        filter: drop-shadow(0 0 5px ${BRIGHT_GOLD});
    }

    @media (max-width: 768px) {
        display: block; /* Visível no mobile */
    }
`;

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const sections = [
        { name: 'Início', id: '#home' },
        { name: 'Sobre Mim', id: '#sobre' },
        { name: 'Habilidades', id: '#habilidades' }, 
        { name: 'Projetos', id: '#projetos' },
    ];
    
    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <HeaderContainer>
            <Logo href="#home">Olá, Mundo!</Logo>
            
            <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />} 
            </MobileMenuIcon>
            
            <NavLinks $isOpen={isOpen}>
                {sections.map((section) => (
                    <a key={section.id} href={section.id} onClick={handleLinkClick}>
                        {section.name}
                    </a>
                ))}
            </NavLinks>
        </HeaderContainer>
    );
}

export default Header;