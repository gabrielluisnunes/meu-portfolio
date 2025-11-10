'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; 
import { Project, projects } from '@/data/projectData'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-creative'; 
import 'swiper/css/pagination'; 

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    margin: 0 auto;

    .swiper-slide {
        background-color: #FFFFFF;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        cursor: grab;
        transition: transform 0.3s ease;
        align-items: center; 
        text-align: center; 
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
    
    /* Estilo das Bolinhas de Paginação (Minimalistas) */
    .swiper-pagination-bullet {
        background-color: #bbbbbb; 
        opacity: 0.7; 
        width: 8px; 
        height: 8px; 
        margin: 0 4px; 
        transition: background-color 0.3s, opacity 0.3s;
    }

    .swiper-pagination-bullet-active {
        background-color: #0070f3; 
        opacity: 1; 
    }
`;

const StyledImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #f0f0f0;
    
    img {
        object-fit: cover; 
    }
`;

const ProjectCard = styled.div`
    padding: 25px;
    min-height: 200px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: center; 
`;

const ProjectTitle = styled.h3`
    font-size: 2rem;
    color: #0070f3;
    margin-bottom: 12px;
    font-weight: 700;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    height: 4.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
    color: #444; 
    text-align: center;
`;

const TechTag = styled.span`
    display: inline-block;
    background-color: #e3f2fd; 
    color: #0070f3;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    margin: 8px 4px; 
    font-weight: 500;
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 25px;
    justify-content: center; 
`;

const LinkButton = styled.a`
    display: inline-block;
    padding: 8px 16px; 
    background-color: #0070f3;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    font-size: 0.95rem;

    &:hover {
        background-color: #005bb5;
    }
`;


const ProjectCarousel: React.FC = () => {
    return (
        <CarouselContainer>
            <Swiper
                modules={[EffectCreative, Pagination]} 
                effect={'creative'} 
                creativeEffect={{ 
                    prev: { shadow: true, translate: ['-100%', 0, -500] },
                    next: { translate: ['100%', 0, 0] },
                }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                pagination={{ clickable: true }} 
                className="mySwiper"
            >
                {projects.map((project: Project) => (
                    <SwiperSlide key={project.id}>
                        <StyledImageWrapper>
                            <Image 
                                src={project.imageUrl} 
                                alt={project.title} 
                                fill 
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </StyledImageWrapper>
                        
                        <ProjectCard>
                            <div>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                
                                <div>
                                    {project.techs.map(tech => (
                                        <TechTag key={tech}>{tech}</TechTag>
                                    ))}
                                </div>
                            </div>
                            
                            <ProjectLinks>
                                <LinkButton href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                    Ver Projeto
                                </LinkButton>
                                <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </LinkButton>
                            </ProjectLinks>
                        </ProjectCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselContainer>
    );
};

export default ProjectCarousel;