'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BG_PRIMARY_LIGHT = '#FFFFFF';
const TEXT_PRIMARY_DARK = '#333333';
const TEXT_SECONDARY_DARK = '#555555'; 
const ACCENT_COLOR = '#00AAAA';
const ACCENT_GLOW_LIGHT = '0 0 8px rgba(0, 170, 170, 0.3)';
const ACCENT_GLOW_STRONG = '0 0 15px rgba(0, 170, 170, 0.5)';
const BORDER_COLOR_LIGHT = '#E0E0E0';



const AboutContainer = styled(motion.div as any)<any>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    max-width: 1200px; 
    width: 100%;
    padding: 80px 5%; 
    color: ${TEXT_PRIMARY_DARK};
    margin: 0 auto;
    background-color: transparent;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 80px; 
        align-items: center; 
    }
`;


const ImageWrapper = styled(motion.div as any)<any>`
    min-width: 300px; 
    width: 300px;
    height: 300px;
    position: relative;
    
    border-radius: 15px; 
    overflow: hidden;
    
    border: 3px solid ${BORDER_COLOR_LIGHT};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1), ${ACCENT_GLOW_LIGHT}; 
    
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    
    &:hover {
        transform: scale(1.03);
        border-color: ${ACCENT_COLOR};
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15), ${ACCENT_GLOW_STRONG};
    }

    img {
        object-fit: cover; 
    }

    @media (max-width: 767px) {
        width: 250px;
        height: 250px;
        min-width: 250px;
    }
`;


const BioContent = styled(motion.div as any)<any>`
    color: ${TEXT_PRIMARY_DARK};
    
    h2 {
        font-size: clamp(2rem, 5vw, 2.8rem); 
        margin-bottom: 25px;
        text-align: center;
        color: ${ACCENT_COLOR};
        text-shadow: ${ACCENT_GLOW_LIGHT};
        line-height: 1.2;
        
        @media (min-width: 768px) {
            text-align: left;
        }
    }
    p {
        font-size: 1.05rem; 
        line-height: 1.7;
        margin-bottom: 20px;
        color: ${TEXT_SECONDARY_DARK}; 
    }
    
    .cta-message {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${ACCENT_COLOR};
        margin-top: 10px;
        text-shadow: 0 0 3px rgba(0, 170, 170, 0.4);
    }
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px; 
    margin-top: 35px;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 15px; 
    align-items: center;
`;

const SocialLinkIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px; 
    height: 45px;
    color: ${ACCENT_COLOR};
    background-color: transparent;
    border: 2px solid ${ACCENT_COLOR};
    border-radius: 50%;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: ${BG_PRIMARY_LIGHT};
        background-color: ${ACCENT_COLOR};
        border-color: ${ACCENT_COLOR};
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 0 15px rgba(0, 170, 170, 0.5); 
    }
`;

const CtaButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    
    color: ${BG_PRIMARY_LIGHT}; 
    background-color: ${ACCENT_COLOR}; 
    border: 2px solid ${ACCENT_COLOR};
    
    padding: 12px 28px; 
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${ACCENT_COLOR};
        background-color: transparent;
        border-color: ${ACCENT_COLOR};
        transform: translateY(-3px);
        box-shadow: 0 0 15px rgba(0, 170, 170, 0.5);
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};


const About: React.FC = () => {
    
    const CV_PATH = '/docs/CV- Gabriel Luis Parede Nunes.pdf'; 

    return (
        <AboutContainer 
            id="sobre"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            
            <ImageWrapper variants={itemVariants}>
                <Image 
                    src="/images/FotoGabriel.jpeg" 
                    alt="Foto de Perfil do Gabriel" 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 250px, 300px"
                />
            </ImageWrapper>
            
            <BioContent variants={itemVariants}>
                <h2>Olá! Eu sou Gabriel Luis Parede Nunes.</h2>
                
                <p>
                    Sou especialista em criação de interfaces e desenvolvimento de soluções digitais que impulsionam negócios por meio de sites estratégicos, e-commerces de alta conversão e sistemas completos.
                    Combinando design, experiência do usuário e tecnologia, já ajudei diversas empresas a transformarem sua presença digital em ativo real de vendas.
                </p>

                <p>
                    Trabalho construindo plataformas profissionais de lojas virtuais a sites institucionais e sistemas web sempre com foco em performance, velocidade, usabilidade e conversão.
                </p>

                <p>
                    Atuo à frente de projetos utilizando WordPress, Elementor, WooCommerce, Figma, React, Next.js e Spring Boot, criando soluções personalizadas, rápidas e funcionais para empresas que buscam crescer com consistência, atrair mais clientes e fortalecer sua marca no digital.
                </p>

                <p>
                    Meu objetivo é claro: transformar ideias em produtos digitais de alto desempenho, que geram valor, credibilidade e resultados reais todos os dias.
                </p>
                
                
                <LinkContainer>
                    <CtaButton href={CV_PATH} download="CV- GABRIEL LUIS PAREDE NUNES.pdf" target="_blank">
                        <FiDownload size={20} />
                        Baixar CV
                    </CtaButton>

                    <SocialLinks>
                        <SocialLinkIcon href="https://www.linkedin.com/in/gabriel-luis-parede-nunes-b62724235/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </SocialLinkIcon>
                        
                        <SocialLinkIcon href="https://github.com/gabrielluisnunes" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SocialLinkIcon>

                        <SocialLinkIcon href="mailto:gabrielluisnunes@gmail.com" aria-label="Email">
                            <FiMail />
                        </SocialLinkIcon>
                    </SocialLinks>
                </LinkContainer>
                
            </BioContent>
            
        </AboutContainer>
    );
};

export default About;