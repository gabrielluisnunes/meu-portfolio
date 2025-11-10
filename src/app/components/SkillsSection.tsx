'use client';

import React from 'react';
import styled from 'styled-components';

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



const SkillsGrid = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    margin-top: 40px;
    padding: 0 20px;
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
`;

const SkillIcon = styled.div`
    font-size: 2rem;
    color: ${GOLD_COLOR}; /* Ícone Dourado */
    margin-bottom: 10px;
    transition: color 0.3s ease;

    ${SkillCard}:hover & {
        color: ${BRIGHT_GOLD}; /* Brilho no hover */
        filter: drop-shadow(0 0 5px ${BRIGHT_GOLD});
    }
`;

const SkillName = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    /* Texto Dourado no hover para reforçar o destaque */
    ${SkillCard}:hover & {
        color: ${BRIGHT_GOLD};
    }
`;




const SkillsSection: React.FC = () => {
    return (
        <SkillsGrid>
            {skillsData.map(skill => (
                <SkillCard key={skill.name}>
                    <SkillIcon as={skill.icon} />
                    <SkillName>{skill.name}</SkillName>
                </SkillCard>
            ))}
        </SkillsGrid>
    );
};

export default SkillsSection;