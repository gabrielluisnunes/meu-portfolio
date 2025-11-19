'use client';

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const ACCENT_COLOR = '#00AAAA'; 
const ACCENT_GLOW_LIGHT = '0 0 4px rgba(0, 170, 170, 0.3)';
const TEXT_SECONDARY_DARK = '#555555';
const BORDER_COLOR_LIGHT = '#E0E0E0';
const FOOTER_BG_LIGHT = 'rgba(250, 250, 250, 0.9)'; 


const socialLinks = {
    github: 'https://github.com/gabrielluisnunes', 
    linkedin: 'https://www.linkedin.com/in/gabriel-luis-parede-nunes-b62724235/', 
    email: 'mailto:gabrielluisnunes@gmail.com', 
};

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: ${FOOTER_BG_LIGHT};
    border-top: 1px solid ${BORDER_COLOR_LIGHT}; 
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
`;

const LinkIcon = styled.a`
    color: ${ACCENT_COLOR};
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${ACCENT_COLOR};
        transform: translateY(-3px) scale(1.1);
        text-shadow: ${ACCENT_GLOW_LIGHT};
    }
`;

const FooterText = styled.p`
    font-size: 0.85rem;
    color: ${TEXT_SECONDARY_DARK};
    margin-top: 10px;
    letter-spacing: 0.5px;
`;

const StyledSeparator = styled.div`
    width: 80px;
    height: 2px;
    background-color: ${ACCENT_COLOR};
    margin: 15px 0;
    box-shadow: ${ACCENT_GLOW_LIGHT};
`;


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <FooterWrapper>
            
            <SocialLinks>
                <LinkIcon href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                </LinkIcon>
                <LinkIcon href={socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                </LinkIcon>
                <LinkIcon href={socialLinks.email} title="E-mail">
                    <FaEnvelope />
                </LinkIcon>
            </SocialLinks>

            <StyledSeparator />
            
            <FooterText>
                &copy; {currentYear} Todos os direitos reservados.
            </FooterText>
            
        </FooterWrapper>
    );
};

export default Footer;