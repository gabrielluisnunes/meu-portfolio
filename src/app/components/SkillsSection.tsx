'use client';

import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaGitAlt, 
    FaServer,
    FaJava
} from 'react-icons/fa';
import { 
    SiNextdotjs, 
    SiTypescript, 
    SiStyledcomponents, 
    SiPrisma 
} from 'react-icons/si';


const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 
const CARD_BG = 'rgba(10, 10, 10, 0.8)'; 


const skillsData = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'SQL/Databases', icon: FaServer, color: '#00758F' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'APIs RESTful', icon: FaServer, color: '#FF6F61' },
];


const SkillsSectionWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

const SkillsGrid = styled.div<{ $isMobile: boolean }>`
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    margin-top: 40px;
    padding: 0 20px;

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
        gap: 20px;
        flex-wrap: nowrap;
        padding: 0 5%;
        width: 100%;
        box-sizing: border-box;
        scroll-padding-left: 5%; 
    `}
`;

const SkillCard = styled.div`
    background-color: ${CARD_BG};
    border: 1px solid #333;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    min-height: 150px;

    &:hover {
        transform: translateY(-5px) scale(1.05);
        border-color: ${GOLD_COLOR};
        box-shadow: 0 0 15px ${BRIGHT_GOLD}, 0 10px 20px rgba(0, 0, 0, 0.5);
    }
    
    @media (max-width: 768px) {
        min-width: 200px;
        scroll-snap-align: center;
        flex-shrink: 0; 
        
        &:hover {
             transform: translateY(0);
        }
    }
`;

const SkillIcon = styled.div`
    font-size: 2rem;
    color: ${GOLD_COLOR};
    margin-bottom: 10px;
    transition: color 0.3s ease;

    ${SkillCard}:hover & {
        color: ${BRIGHT_GOLD};
        filter: drop-shadow(0 0 5px ${BRIGHT_GOLD});
    }
`;

const SkillName = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    
    ${SkillCard}:hover & {
        color: ${BRIGHT_GOLD};
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


const SkillsSection: React.FC = () => {
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

            // Calcula a porcentagem de rolagem (0 a 1)
            const scrollProgress = scrollLeft / scrollWidth;
            
            // Lógica dos 3 indicadores
            if (scrollProgress < 0.33) {
                setActiveIndicator(0); // Início
            } else if (scrollProgress < 0.66) {
                setActiveIndicator(1); // Meio
            } else {
                setActiveIndicator(2); // Fim
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
        <SkillsSectionWrapper>
            <SkillsGrid ref={gridRef} $isMobile={isMobile}>
                {skillsData.map((skill) => (
                    <SkillCard key={skill.name}>
                        <SkillIcon as={skill.icon} />
                        <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                ))}
            </SkillsGrid>
            
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
        </SkillsSectionWrapper>
    );
};

export default SkillsSection;