'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaServer, FaJava
} from 'react-icons/fa';
import { 
    SiNextdotjs, SiTypescript, SiStyledcomponents, SiPrisma 
} from 'react-icons/si';


const TEXT_PRIMARY_DARK = '#333333';
const ACCENT_COLOR = '#00AAAA';
const ACCENT_GLOW_LIGHT = '0 0 5px rgba(0, 170, 170, 0.4)';
const CARD_BG_LIGHT = '#FFFFFF'; 
const BORDER_COLOR_LIGHT = '#E0E0E0';


const skillsData = {
    'Front-end': [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: TEXT_PRIMARY_DARK },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    ],
    'Back-end & Databases': [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Prisma ORM', icon: SiPrisma, color: TEXT_PRIMARY_DARK },
        { name: 'APIs RESTful', icon: FaServer, color: ACCENT_COLOR },
        { name: 'SQL/Databases', icon: FaServer, color: '#00758F' },
    ],
    'Ferramentas & Outros': [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Servidores', icon: FaServer, color: TEXT_PRIMARY_DARK },
    ],
};

const SkillsSectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 5%;
    margin: 0 auto;
    background-color: transparent;
    color: ${TEXT_PRIMARY_DARK};
`;

const SectionTitle = styled(motion.h2)` // Adição do motion.h2
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${ACCENT_COLOR};
    text-shadow: ${ACCENT_GLOW_LIGHT};
    margin-bottom: 50px;
    text-align: center;
    border-bottom: 3px solid ${ACCENT_COLOR};
    padding-bottom: 10px;
    width: 100%;
    max-width: 1000px;
`;

const CategoryContainer = styled(motion.div)` // Adição do motion.div
    width: 100%;
    max-width: 1000px;
    margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
    font-size: 1.8rem;
    color: ${TEXT_PRIMARY_DARK};
    margin-bottom: 25px;
    padding-left: 10px;
    border-left: 5px solid ${ACCENT_COLOR};
    text-shadow: 0 0 2px rgba(0, 170, 170, 0.3);
`;

const SkillsBadgeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
    gap: 15px;
    width: 100%;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 20px;
    }
`;

const SkillBadge = styled(motion.div)` // Adição do motion.div
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    gap: 8px;
    background-color: ${CARD_BG_LIGHT};
    color: ${TEXT_PRIMARY_DARK};
    padding: 12px 15px; 
    border-radius: 5px;
    border: 1px solid ${BORDER_COLOR_LIGHT};
    font-size: 1rem;
    font-weight: 500;
    cursor: default;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: ${ACCENT_COLOR};
        color: ${ACCENT_COLOR};
        transform: translateY(-2px); 
        box-shadow: 0 0 10px rgba(0, 170, 170, 0.4), 0 3px 8px rgba(0, 0, 0, 0.1);
        background-color: #F5F5F5;
    }
`;

const Icon = styled.div`
    font-size: 1.2rem;
    line-height: 1;
`;

// Variantes de animação
const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const categoryVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delayChildren: 0.2,
            staggerChildren: 0.05
        } 
    }
};

const badgeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};


const SkillsSection: React.FC = () => {

    return (
        <SkillsSectionWrapper id="habilidades">
            <SectionTitle
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                Minhas Habilidades Técnicas
            </SectionTitle>
            
            {Object.entries(skillsData).map(([category, skills]) => (
                <CategoryContainer 
                    key={category}
                    variants={categoryVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <CategoryTitle>{category}</CategoryTitle>
                    <SkillsBadgeWrapper>
                        {skills.map((skill) => (
                            <SkillBadge key={skill.name} variants={badgeVariant}>
                                <Icon as={skill.icon} style={{ color: skill.color }} />
                                {skill.name}
                            </SkillBadge>
                        ))}
                    </SkillsBadgeWrapper>
                </CategoryContainer>
            ))}
        </SkillsSectionWrapper>
    );
};

export default SkillsSection;