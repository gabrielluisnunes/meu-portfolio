'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; 
import { Project, projects } from '@/data/projectData'; 
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; 

const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 
const CARD_BG = '#101010'; 

const ProjectsGrid = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 50px 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
`;

const ProjectCard = styled.div`
    background-color: ${CARD_BG};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
    transition: all 0.4s ease;
    cursor: pointer;
    border: 1px solid #333; /* Borda sutil */
    
    &:hover {
        /* Efeito de brilho neon dourado no hover */
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9), 0 0 15px ${BRIGHT_GOLD};
        border-color: ${GOLD_COLOR};
    }
`;

const StyledImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 220px; 
    background-color: #000;
    
    img {
        object-fit: cover; 
    }
`;

const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 180px;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    color: ${BRIGHT_GOLD}; 
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 0 0 3px rgba(255, 235, 59, 0.3);
`;

const ProjectDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.5;
    color: #cccccc;
    margin-bottom: 15px;
    /* Limitando a 3 linhas para manter a uniformidade no grid */
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const TechContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 15px;
`;

const TechTag = styled.span`
    display: inline-block;
    background-color: transparent;
    color: ${GOLD_COLOR};
    border: 1px solid ${GOLD_COLOR};
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    margin: 5px 4px 0 0; 
    font-weight: 500;
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 15px; 
    justify-content: flex-start; /* Alinhamento à esquerda, mais profissional */
`;

const LinkButton = styled.a`
    /* Botões minimalistas: apenas ícone dentro da borda dourada */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; 
    height: 40px;
    color: ${GOLD_COLOR};
    background-color: transparent;
    border: 2px solid ${GOLD_COLOR};
    border-radius: 6px;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        background-color: ${BRIGHT_GOLD};
        border-color: ${BRIGHT_GOLD};
        box-shadow: 0 0 8px ${BRIGHT_GOLD}; 
    }
`;


const ProjectCardGrid: React.FC = () => {
    return (
        <ProjectsGrid>
            {projects.map((project: Project) => (
                <ProjectCard key={project.id}>
                    <StyledImageWrapper>
                        <Image 
                            src={project.imageUrl} 
                            alt={project.title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </StyledImageWrapper>
                    
                    <CardContent>
                        <div>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            
                            <TechContainer>
                                {project.techs.map(tech => (
                                    <TechTag key={tech}>{tech}</TechTag>
                                ))}
                            </TechContainer>
                        </div>
                        
                        <ProjectLinks>
                            {}
                            <LinkButton href={project.projectUrl} target="_blank" rel="noopener noreferrer" title="Ver Projeto Online">
                                <FaExternalLinkAlt />
                            </LinkButton>
                            
                            {}
                            <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Ver Código no GitHub">
                                <FaGithub />
                            </LinkButton>
                        </ProjectLinks>
                    </CardContent>
                </ProjectCard>
            ))}
        </ProjectsGrid>
    );
};

// Mantemos o nome original do export para substituir o arquivo
export default ProjectCardGrid;