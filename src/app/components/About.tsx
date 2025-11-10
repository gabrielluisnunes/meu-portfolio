'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';

const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    max-width: 900px;
    width: 100%;
    padding: 20px 0;
    color: #ffffff;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 60px;
        text-align: left;
        align-items: flex-start;
    }

    h2 {
        color: ${BRIGHT_GOLD}; /* Título principal mais brilhante */
        text-shadow: 0 0 5px rgba(255, 235, 59, 0.5); /* Sombra para simular brilho */
    }
`;

const ProfilePicture = styled.div`
    min-width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    
    &:hover {
        transform: scale(1.05);
        /* Brilho neon na borda no hover */
        box-shadow: 0 0 15px ${BRIGHT_GOLD}, 0 0 5px ${BRIGHT_GOLD};
    }
`;

const BioContent = styled.div`
    color: #cccccc;
    
    @media (min-width: 768px) {
      text-align: left;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        text-align: center;
        
        @media (min-width: 768px) {
            text-align: left;
        }
    }
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 15px;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 35px;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;


const SocialLink = styled.a`
    display: inline-flex; /* Permite alinhar o ícone e o texto */
    align-items: center;
    gap: 8px; /* Espaçamento entre o ícone e o texto */
    
    color: ${GOLD_COLOR};
    background-color: transparent;
    border: 2px solid ${GOLD_COLOR};
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        color: #000; 
        background-color: ${BRIGHT_GOLD};
        border-color: ${BRIGHT_GOLD};
        transform: translateY(-2px);
        box-shadow: 0 0 10px ${BRIGHT_GOLD}; 
    }
`;

const SocialLinkIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; 
    height: 50px;
    color: ${GOLD_COLOR};
    background-color: transparent;
    border: 2px solid ${GOLD_COLOR};
    border-radius: 50%;
    text-decoration: none;
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        background-color: ${BRIGHT_GOLD};
        border-color: ${BRIGHT_GOLD};
        transform: translateY(-2px);
        box-shadow: 0 0 10px ${BRIGHT_GOLD}; 
    }
`;

const About: React.FC = () => {
    
    const CV_PATH = '/docs/CV- GABRIEL LUIS PAREDE NUNES.pdf'; 

    return (
        <AboutContainer>
            
            <ProfilePicture>
                <Image 
                    src="/images/Gabriel.png" 
                    alt="Foto de Perfil do Gabriel" 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 250px"
                />
            </ProfilePicture>
            
            <BioContent>
                <h2>Olá! Eu sou Gabriel Luis Parede Nunes.</h2>
                
                <p>
                  Desenvolvedor Full-Stack focado em construir soluções digitais robustas, elegantes e de alto desempenho.

                  Minha abordagem ao desenvolvimento é profundamente influenciada pelo meu hobby de mais de 10 anos: o Jiu-Jitsu. No tatame, aprendi que a vitória não está na força bruta, mas sim na estratégia, na persistência e na adaptabilidade contínua.

                  Essa mesma mentalidade se traduz diretamente para a programação: busco a técnica mais eficiente para cada desafio, dedicando-me à maestria do código e à solução de problemas com precisão. Seja no Front-end com o dinamismo do React/Next.js ou no Back-end com a fundação sólida de Node.js e arquitetura de dados.

                  Meu foco é simples: Entregar projetos que não apenas atendam às expectativas, mas as superem, aplicando a mesma disciplina e foco que me guiam dentro e fora do código.
                </p>
                
                <p style={{ fontWeight: 600, color: BRIGHT_GOLD }}>
                    Vamos criar algo incrível juntos?
                </p>
                
                <LinkContainer>
                    {}
                    <SocialLinkIcon href="https://www.linkedin.com/in/gabriel-luis-parede-nunes-b62724235/" target="_blank">
                        <FaLinkedinIn />
                    </SocialLinkIcon>
                    
                    {}
                    <SocialLinkIcon href="https://github.com/gabrielluisnunes" target="_blank">
                        <FaGithub />
                    </SocialLinkIcon>

                    {}
                    <SocialLinkIcon href="mailto:gabrielluisnunes@gmail.com" target="_blank">
                        <FiMail />
                    </SocialLinkIcon>

                    {}
                    <SocialLink href={CV_PATH} download="CV- GABRIEL LUIS PAREDE NUNES.pdf" target="_blank">
                        <FiDownload size={20} />
                        Download CV
                    </SocialLink>
                </LinkContainer>
                
            </BioContent>
            
        </AboutContainer>
    );
};

export default About;