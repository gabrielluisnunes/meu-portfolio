'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Project, projects } from '../../data/projectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarouselContainer = styled.div`
    width: 100%;
    max-widht: 1200px;
    padding-top:50px;
    padding-bottom:50px;



.swiper-slide {
    background-color: #FFFFFF;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: grab;
    transition: transform 0.3s ease;
    }
`;

const ProjectCard = styled.div`
  padding: 20px;
  min-height: 450px; // Altura mínima para padronizar
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #0070f3;
  margin-bottom: 10px;
`;

const TechTag = styled.span`
  display: inline-block;
  background-color: #e0f7fa;
  color: #0070f3;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-right: 8px;
  margin-top: 8px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

// --- COMPONENTE REACT ---

const ProjectCarousel: React.FC = () => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'} 
        coverflowEffect={{
          rotate: 50, 
          stretch: 0,
          depth: 100, 
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }} 
        navigation={true} 
        className="mySwiper"
      >
        {/* 4. Mapeia os dados do array 'projects' para criar os slides */}
        {projects.map((project: Project) => (
          <SwiperSlide key={project.id}>
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              width={500} // Defina as dimensões da imagem
              height={300} 
              sizes="100vw"
              objectFit="cover" // Use a prop correta para objectFit se não usar 'fill'
            />
            <ProjectCard>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <p>{project.description}</p>
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
