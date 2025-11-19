'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image'; 
import { Project, projects } from '@/data/projectData'; 
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const ACCENT_COLOR = '#00AAAA'; 
const ACCENT_GLOW_LIGHT = '0 0 5px rgba(0, 170, 170, 0.4)';
const TEXT_PRIMARY_DARK = '#333333';
const TEXT_SECONDARY_DARK = '#555555';
const CARD_BG_LIGHT = '#FFFFFF'; 
const BORDER_COLOR_LIGHT = '#E0E0E0';

const SectionTitle = styled(motion.h2)` // Adição do motion.h2
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${ACCENT_COLOR};
    text-shadow: ${ACCENT_GLOW_LIGHT};
    margin-bottom: 70px;
    text-align: center;
    border-bottom: 3px solid ${ACCENT_COLOR};
    padding-bottom: 10px;
    width: 100%;
    max-width: 1000px;
    padding: 0 5%;
`;

const ProjectsSectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
`;

const ProjectsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px; 
    
    @media (max-width: 900px) {
        gap: 60px;
    }
`;

const ProjectItem = styled(motion.div)<{ $isEven: boolean }>` // Adição do motion.div
    display: flex;
    align-items: center;
    gap: 40px;
    background-color: ${CARD_BG_LIGHT};
    border-radius: 12px;
    overflow: hidden;
    padding: 30px;
    border: 1px solid ${BORDER_COLOR_LIGHT};
    transition: all 0.4s ease;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    
    flex-direction: ${({ $isEven }) => ($isEven ? 'row' : 'row-reverse')};

    &:hover {
        border-color: ${ACCENT_COLOR};
        box-shadow: 0 0 15px rgba(0, 170, 170, 0.3), 0 10px 30px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
    
    @media (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        transform: translateY(0) !important;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        border-color: ${BORDER_COLOR_LIGHT};
    }
    
    @media (max-width: 600px) {
        padding: 15px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    flex: 1 1 50%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid ${BORDER_COLOR_LIGHT};
    
    img {
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    ${ProjectItem}:hover & {
        border-color: ${ACCENT_COLOR};
    }
    
    ${ProjectItem}:hover & img {
        transform: scale(1.05);
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 200px;
        flex: auto;
    }
`;

const ContentContainer = styled.div`
    flex: 1 1 50%;
    padding: 10px 0;
    
    ${ProjectItem}:nth-child(even) & {
        text-align: right;
    }

    @media (max-width: 900px) {
        text-align: left !important;
        padding: 0;
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.8rem;
    color: ${ACCENT_COLOR}; 
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 0 0 5px rgba(0, 170, 170, 0.3);
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: ${TEXT_SECONDARY_DARK};
    margin-bottom: 20px;
    font-weight: 300;
    
    text-align: left !important;
    
    @media (max-width: 600px) {
        font-size: 0.95rem;
    }
`;

const TechContainer = styled.div<{ $isEven: boolean }>`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    
    ${({ $isEven }) => $isEven && css`
        justify-content: flex-end;
    `}

    @media (max-width: 900px) {
        justify-content: flex-start;
    }
`;

const TechTag = styled.span`
    display: inline-block;
    background-color: rgba(0, 170, 170, 0.1);
    color: ${ACCENT_COLOR};
    border: 1px solid ${ACCENT_COLOR};
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
`;

const ProjectLinks = styled.div<{ $isEven: boolean }>`
    display: flex;
    gap: 20px;
    
    ${({ $isEven }) => $isEven && css`
        justify-content: flex-end;
    `}

    @media (max-width: 900px) {
        justify-content: flex-start;
    }
`;

const LinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px; 
    height: 45px;
    color: ${ACCENT_COLOR};
    background-color: transparent;
    border: 2px solid ${ACCENT_COLOR};
    border-radius: 50%;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
        color: #FFFFFF;
        background-color: ${ACCENT_COLOR};
        border-color: ${ACCENT_COLOR};
        box-shadow: 0 0 12px rgba(0, 170, 170, 0.5); 
        transform: scale(1.1);
    }
`;

// Variantes de animação
const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projectVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1, // Atraso sequencial
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    })
};


const ProjectsSection: React.FC = () => {
    return (
        <ProjectsSectionWrapper id="projetos">
            <SectionTitle
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                Projetos em Destaque
            </SectionTitle>
            <ProjectsList>
                {projects.map((project: Project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <ProjectItem 
                            key={project.id} 
                            $isEven={isEven}
                            variants={projectVariant}
                            custom={isEven ? 0 : 0.5} // Define um pequeno atraso entre as linhas
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <ImageContainer>
                                <Image 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    fill 
                                    sizes="(max-width: 900px) 100vw, 50vw"
                                />
                            </ImageContainer>
                            
                            <ContentContainer>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                
                                <TechContainer $isEven={isEven}>
                                    {project.techs.map(tech => (
                                        <TechTag key={tech}>{tech}</TechTag>
                                    ))}
                                </TechContainer>
                                
                                <ProjectLinks $isEven={isEven}>
                                    {project.projectUrl && (
                                        <LinkButton href={project.projectUrl} target="_blank" rel="noopener noreferrer" title="Ver Projeto Online">
                                            <FaExternalLinkAlt />
                                        </LinkButton>
                                    )}
                                    
                                    {project.githubUrl && (
                                        <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Ver Código no GitHub">
                                            <FaGithub />
                                        </LinkButton>
                                    )}
                                </ProjectLinks>
                            </ContentContainer>
                        </ProjectItem>
                    );
                })}
            </ProjectsList>
        </ProjectsSectionWrapper>
    );
};

export default ProjectsSection;