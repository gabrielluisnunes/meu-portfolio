'use client';

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const ACCENT_COLOR = '#00AAAA'; 
const ACCENT_GLOW = '0 0 8px rgba(0, 170, 170, 0.5)';
const TEXT_PRIMARY_DARK = '#333333';
const BORDER_COLOR_LIGHT = '#D0D0D0';
const CTA_BG_LIGHT = '#F0F0F0'; 

const glassEffect = css`
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px); 
`;

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${glassEffect}
    
    color: ${TEXT_PRIMARY_DARK};
    z-index: 1000; 
    transition: background-color 0.3s ease;
    padding: 18px 5%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${ACCENT_COLOR};
    text-decoration: none;
    font-family: 'monospace', monospace;
    letter-spacing: 2px;
    text-shadow: 0 0 5px rgba(0, 170, 170, 0.3); 
    z-index: 1002; 

    &:hover {
        color: ${ACCENT_COLOR};
        filter: drop-shadow(${ACCENT_GLOW});
    }
`;

const NavWrapper = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw; 
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.98);
        flex-direction: column; 
        justify-content: center;
        gap: 40px; 
        transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
        z-index: 1001;
        padding: 0;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 30px;
    margin-right: 30px; 
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 25px; 
        margin-right: 0;
        margin-bottom: 50px; 
    }

    a {
        color: ${TEXT_PRIMARY_DARK};
        font-size: 1rem;
        text-decoration: none;
        font-weight: 500;
        padding: 5px 0;
        position: relative;
        transition: color 0.3s ease;

        &:hover {
            color: ${ACCENT_COLOR}; 
        }
        
        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px; 
            left: 50%;
            background-color: ${ACCENT_COLOR};
            transition: width 0.3s ease, left 0.3s ease;
        }

        &:hover::after {
            width: 100%;
            left: 0;
            box-shadow: ${ACCENT_GLOW};
        }
        
        @media (max-width: 768px) {
            font-size: 1.8rem; 
            color: ${TEXT_PRIMARY_DARK};
            &:hover {
                 color: ${ACCENT_COLOR};
            }
            &::after {
                display: none;
            }
        }
    }
`;

const CtaButton = styled.a`
    display: inline-block;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: ${CTA_BG_LIGHT};
    color: ${ACCENT_COLOR};
    border: 1px solid ${ACCENT_COLOR};
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        background-color: ${ACCENT_COLOR};
        color: #FFFFFF;
        box-shadow: 0 0 15px ${ACCENT_COLOR};
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 10px 30px;
        font-size: 1rem;
        width: auto;
        max-width: 250px; 
        text-align: center;
        margin-top: 20px;
    }
`;

const MobileMenuIcon = styled.div` 
    display: none; 
    font-size: 1.8rem;
    color: ${ACCENT_COLOR};
    cursor: pointer;
    z-index: 1002; 
    transition: color 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 5px ${ACCENT_COLOR});
    }

    @media (max-width: 768px) {
        display: block; 
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
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <HeaderContainer>
            <Logo href="#home">Gabriel Nunes</Logo> 
            
            <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />} 
            </MobileMenuIcon>
            
            <NavWrapper $isOpen={isOpen}>
                <NavLinks>
                    {sections.map((section) => (
                        <a key={section.id} href={section.id} onClick={handleLinkClick}>
                            {section.name}
                        </a>
                    ))}
                </NavLinks>
                
                <CtaButton href="tel:+5545991339633" onClick={handleLinkClick}>
                    Entre em Contato
                </CtaButton>
            </NavWrapper>
        </HeaderContainer>
    );
}

export default Header;