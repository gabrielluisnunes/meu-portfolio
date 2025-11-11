'use client';

import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image'; 
import { Project, projects } from '@/data/projectData'; 
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; 

const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 
const CARD_BG = '#101010'; 

const ProjectsSectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectsGrid = styled.div<{ $isMobile: boolean }>`
    width: 100%;
    max-width: 1200px;
    padding: 0 0; 
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 0 5%;

    ${({ $isMobile }) => $isMobile && css`
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        
        scroll-snap-type: x mandatory;
        gap: 30px; 
        flex-wrap: nowrap;
        padding: 0 5%; 
        width: 100%;
        box-sizing: border-box;
        scroll-padding-left: 5%; 
    `}
`;

const ProjectCard = styled.div`
    background-color: ${CARD_BG};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
    transition: all 0.4s ease;
    cursor: pointer;
    border: 1px solid #333; 
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9), 0 0 15px ${BRIGHT_GOLD};
        border-color: ${GOLD_COLOR};
    }

    @media (max-width: 768px) {
        min-width: 80vw;
        max-width: 80vw; /* Garante que o card não tente expandir além do min-width */
        scroll-snap-align: center;
        flex-shrink: 0; 

        &:hover {
             transform: translateY(0); 
        }
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
    justify-content: flex-start;
`;

const LinkButton = styled.a`
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

const IndicatorContainer = styled.div`
    display: none;
    justify-content: center;
    margin-top: 30px;
    gap: 8px;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const IndicatorDot = styled.span<{ $isActive: boolean }>`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ $isActive }) => ($isActive ? BRIGHT_GOLD : '#555')};
    transition: background-color 0.3s, box-shadow 0.3s;
    border: 1px solid ${({ $isActive }) => ($isActive ? BRIGHT_GOLD : '#555')};
    
    ${({ $isActive }) => $isActive && css`
        box-shadow: 0 0 5px ${BRIGHT_GOLD};
    `}
`;


const ProjectsSection: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [activeIndicator, setActiveIndicator] = useState(0);
    const isClient = typeof window !== 'undefined';
    const [isMobile, setIsMobile] = useState(false);
    const INDICATOR_COUNT = 3;

    useEffect(() => {
        if (isClient) {
            const checkMobile = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, [isClient]);

    useEffect(() => {
        if (!gridRef.current || !isMobile) return;

        const container = gridRef.current;
        
        const updateIndicator = () => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth - container.clientWidth;

            if (scrollWidth === 0) return; 

            const scrollProgress = scrollLeft / scrollWidth;
            
            if (scrollProgress < 0.33) {
                setActiveIndicator(0); 
            } else if (scrollProgress < 0.66) {
                setActiveIndicator(1); 
            } else {
                setActiveIndicator(2); 
            }
        };

        container.addEventListener('scroll', updateIndicator);
        updateIndicator(); 

        return () => container.removeEventListener('scroll', updateIndicator);
    }, [isMobile]);

    const handleDotClick = (index: number) => {
        if (gridRef.current) {
            const container = gridRef.current;
            const scrollWidth = container.scrollWidth - container.clientWidth;
            let targetScrollLeft = 0;

            if (index === 0) {
                targetScrollLeft = 0; 
            } else if (index === 1) {
                targetScrollLeft = scrollWidth * 0.5; 
            } else if (index === 2) {
                targetScrollLeft = scrollWidth; 
            }
            
            container.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth',
            });
            setActiveIndicator(index);
        }
    };

    return (
        <ProjectsSectionWrapper>
            <ProjectsGrid ref={gridRef} $isMobile={isMobile}>
                {projects.map((project: Project) => (
                    <ProjectCard key={project.id}>
                        <StyledImageWrapper>
                            <Image 
                                src={project.imageUrl} 
                                alt={project.title} 
                                fill 
                                sizes="(max-width: 768px) 80vw, 300px"
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
                                <LinkButton href={project.projectUrl} target="_blank" rel="noopener noreferrer" title="Ver Projeto Online">
                                    <FaExternalLinkAlt />
                                </LinkButton>
                                
                                <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Ver Código no GitHub">
                                    <FaGithub />
                                </LinkButton>
                            </ProjectLinks>
                        </CardContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            
            {isMobile && (
                <IndicatorContainer>
                    {Array.from({ length: INDICATOR_COUNT }).map((_, index) => (
                        <IndicatorDot 
                            key={index} 
                            $isActive={index === activeIndicator}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </IndicatorContainer>
            )}
        </ProjectsSectionWrapper>
    );
};


export default ProjectsSection;