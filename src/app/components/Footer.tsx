'use client';

import React from 'react';
import styled from 'styled-components';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #000000;
    color: #cccccc;
    /* 🚨 TAMANHO REDUZIDO AQUI */
    padding: 20px 5%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top: 1px solid rgba(255, 215, 0, 0.1); 
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

const SocialLinkIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px; 
    height: 45px;
    color: ${GOLD_COLOR};
    background-color: transparent;
    border: 2px solid ${GOLD_COLOR};
    border-radius: 50%;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        background-color: ${BRIGHT_GOLD};
        border-color: ${BRIGHT_GOLD};
        transform: translateY(-2px);
        box-shadow: 0 0 10px ${BRIGHT_GOLD}; 
    }
`;

const CopyrightText = styled.p`
    font-size: 0.9rem;
    color: #999999;
    margin-top: 10px;
    
    strong {
        color: ${GOLD_COLOR};
        font-weight: 600;
    }
`;

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <FooterContainer>
           
            <CopyrightText>
                &copy; {currentYear} Gabriel Luis. Todos os direitos reservados.
            </CopyrightText>
            <CopyrightText>
                Desenvolvido com <strong>Next.js</strong> e <strong>Styled Components</strong>.
            </CopyrightText>
        </FooterContainer>
    );
};

export default Footer;